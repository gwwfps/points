defmodule Points.AuthApiController do
  use Points.Web, :controller

  def verify(conn, %{"token" => token}) do
    url = "https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=" <> token
    client_id = Points.Endpoint.config(:google_client_id)
    case HTTPoison.get url do
      {:ok, %HTTPoison.Response{status_code: 200, body: body}} ->
        profile = Poison.Parser.parse! body
        if profile["aud"] == client_id do
          email = profile["email"]
          users = Points.UserModel.find_by_email(email)
          user = nil
          if length(users) > 0 do
            user = hd(users)
          else
            user = Points.UserModel.create(email, profile["name"], profile["picture"])
          end
          { :ok, jwt, full_claims } = Guardian.mint(user, :api)
          json conn, %{token: jwt, user: user }
        else
          IO.inspect profile
        end
      {:error, %HTTPoison.Error{reason: reason}} ->
        IO.inspect reason
    end
  end
end
