defmodule Points.Api.ParticipationApi do
  use Points.Web, :controller

  def join(conn, %{"user" => %{ "id" => user_id }, "tournament" => %{ "id" => tournament_id } }) do
    user = Guardian.Plug.current_resource(conn)
    if !user.admin && user.id != user_id do
      put_status conn, 403
    else
      json conn, %{id: 'id'}
    end
  end

  def leave(conn, %{"id" => id}) do
  end
end
