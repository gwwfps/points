defmodule Points.User do
  use Points.Web, :model
  alias Points.Repo
  use Ecto.Model

  @derive {Poison.Encoder, only: [:name, :email, :bnet, :admin, :note, :picture, :rating]}

  @primary_key {:id, :binary_id, autogenerate: true}
  schema "users" do
    field :name
    field :email
    field :bnet
    field :admin, :boolean, default: false
    field :note
    field :picture
    field :rating, :integer, default: 1500
  end

  @required_fields ~w(name email)
  @optional_fields ~w(bnet admin note picture rating)

  def changeset(model, params \\ :empty) do
    model
    |> cast(params, @required_fields, @optional_fields)
  end

  def find_by_email(email) do
    Repo.get_by(__MODULE__, email: email)
  end

  def update_or_create!(params) do
    picked = %{
      email: params["email"],
      name: params["name"],
      picture: params["picture"]
    }
    user = find_or_create_by_email! params["email"]
    cs = changeset(user, picked)
    Repo.update!(cs)
  end

  defp find_or_create_by_email!(email) do
    case find_by_email(email) do
      nil -> Repo.insert! %Points.User{email: email}
      user -> user
    end
  end
end
