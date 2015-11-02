defmodule Points.Api.TournamentApi do
  use Points.Web, :controller
  alias Points.TournamentStore

  def index(conn, _params) do
    json conn, TournamentStore.all()
  end
end
