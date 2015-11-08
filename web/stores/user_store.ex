defmodule Points.UserStore do
  import Ecto.Query, only: [from: 2]
  alias Points.Repo
  alias Points.User

  def all() do
    query = from p in User,
      select: p
    Repo.all(query)
  end

  def create(entity) do
    cs = User.changeset(%User{}, entity)
    Repo.insert! cs
  end

  def update(id, entity) do
    tournament = Repo.get!(User, id)
    cs = User.changeset(tournament, entity)
    Repo.update! cs
  end
end
