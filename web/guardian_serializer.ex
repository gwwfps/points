defmodule Points.GuardianSerializer do
  @behaviour Guardian.Serializer
  alias Points.User
  alias Points.Repo

  def for_token(user = %{id: id}), do: { :ok, "User:#{user.id}" }
  def for_token(_), do: { :error, "Unknown resource type" }

  def from_token("User:" <> id) do
    { :ok, Repo.get!(User, String.to_integer(id)) }
  end

  def from_token(_), do: { :error, "Unknown resource type" }
end
