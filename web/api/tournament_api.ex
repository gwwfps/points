defmodule Points.Api.TournamentApi do
  use Points.Web, :controller

  def index(conn, _params) do
    json conn, %{id: 'id'}
  end
end