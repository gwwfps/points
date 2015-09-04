defmodule Points.GuardianSerializer do
  @behaviour Guardian.Serializer

  def for_token(user = %Points.Database.User{}), do: { :ok, "User:#{user.id}" }
  def for_token(_), do: { :error, "Unknown resource type" }

  def from_token("User:" <> id) do
    { :ok, Points.Stores.Users.find_by_id(String.to_integer(id)) }
  end

  def from_token(_), do: { :error, "Unknown resource type" }
end
