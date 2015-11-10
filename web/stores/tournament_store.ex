defmodule Points.TournamentStore do
  import Ecto.Query, only: [from: 2]
  alias Points.Repo
  alias Points.Tournament

  def all() do
    query = from p in Tournament,
      select: p
    Repo.all(query)
  end

  def create(entity) do
    cs = Tournament.changeset(%Tournament{}, entity)
    Repo.insert! cs
  end

  def update(id, entity) do
    tournament = Repo.get!(Tournament, id)
    cs = Tournament.changeset(tournament, entity)
    Repo.update! cs
  end

  def delete(id) do
    Repo.delete! %Tournament{id: id}
  end
end
