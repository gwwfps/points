defmodule Points.User do
  use Points.Web, :model
  alias Points.Repo
  use Ecto.Model

  @primary_key {:id, :binary_id, autogenerate: true}
  schema "users" do
    field :name, :string
    field :email, :string
    field :bnet, :string
    field :admin, :boolean, default: false
    field :note, :string
    field :picture, :string
    field :rating, :integer, default: 1500
  end

  @required_fields ~w(name email)
  @optional_fields ~w(bnet admin note picture taing)

  def changeset(model, params \\ :empty) do
    model
    |> cast(params, @required_fields, @optional_fields)
  end

  def find_by_email(email) do
    Repo.get_by(Points.User, email: email)
  end

  def update_or_create!(params) do
    user = find_or_create_by_email! params["email"]
    params2 = %{email: params["email"], name: params["name"], picture: params["picture"]}
    IO.inspect user
    cs = changeset(user, params2)
    Repo.update!(user, cs)
  end

  defp find_or_create_by_email!(email) do
    case find_by_email(email) do
      nil -> Repo.insert! %Points.User{email: email}
      user -> user
    end
  end
end
