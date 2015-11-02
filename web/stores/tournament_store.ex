defmodule Points.TournamentStore do
  import Ecto.Query, only: [from: 2]
  alias Points.Repo
  alias Points.Tournament

  def all() do
    query = from p in Tournament,
      select: p
    Repo.all(query)
  end
end
