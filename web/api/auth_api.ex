defmodule Points.Api.AuthApi do
  use Points.Web, :controller
  alias Points.User

  def verify(conn, %{"token" => token}) do
    url = "https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=" <> token
    client_id = Points.Endpoint.config(:google_client_id)
    case HTTPoison.get url do
      {:ok, %HTTPoison.Response{status_code: 200, body: body}} ->
        profile = Poison.Parser.parse! body
        if profile["aud"] == client_id do
          user = User.update_or_create!(profile)
          { :ok, jwt, full_claims } = Guardian.mint(user, :api)
          json conn, %{token: jwt, user: user }
        else
          IO.inspect profile
        end
      {:error, %HTTPoison.Error{reason: reason}} ->
        IO.inspect reason
    end
  end

  def forbidden(conn, _params) do
    conn
    |> put_status(403)
    |> json %{message: "Forbidden"}
  end
end
