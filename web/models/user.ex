defmodule Points.UserModel do
  use Amnesia
  use Database

  def create(email, name, picture) do
    Amnesia.transaction do
      user = %User{email: email, name: name, picture: picture} |> User.write
      user
    end
  end

  def find_by_id(id) do
    Amnesia.transaction do
      User.read id
    end
  end

  def find_by_email(user_email) do
    Amnesia.transaction do
      user = User.where email == user_email
      user |> Amnesia.Selection.values
    end
  end
end
