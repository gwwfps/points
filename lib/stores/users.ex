defmodule Points.Stores.Users do
  use Amnesia
  use Points.Database

  def find_by_id(id) do
    Amnesia.transaction do
      User.read id
    end
  end

  def update_or_create(user_props) do
    Amnesia.transaction do
      user = find_or_create_by_email(user_props["email"])
      update_user = %User{email: user_props["email"], name: user_props["name"], picture: user_props["picture"]}
      user |> Map.merge(update_user) |> User.write
    end
  end

  defp find_or_create_by_email(email) do
    case User.read_at(email, :email) do
      nil ->
        %User{}
      users ->
        hd(users)
    end
  end
end
