defmodule Points.Api.TournamentApi do
  use Points.Web, :controller
  alias Points.TournamentStore

  def index(conn, _params) do
    json conn, TournamentStore.all()
  end

  def create(conn, entity) do
    json conn, TournamentStore.create(entity)
  end

  def update(conn, entity = %{"id" => id}) do
    json conn, TournamentStore.update(id, entity)
  end

  def delete(conn, %{"id" => id}) do
    json conn, TournamentStore.delete(id)
  end
end
