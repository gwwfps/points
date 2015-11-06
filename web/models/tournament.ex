defmodule Points.Tournament do
  use Points.Web, :model
  use Ecto.Model

  @derive {Poison.Encoder, only: [:id, :name, :description, :rules, :start_date, :phase]}

  @primary_key {:id, :binary_id, autogenerate: true}
  schema "tournaments" do
    field :name
    field :description
    field :rules
    field :start_date, :integer
    field :visible, :boolean, default: false
    field :phase, :integer, default: 0
  end

  @required_fields ~w(name start_date)
  @optional_fields ~w(description rules phase visible)

  def changeset(model, params \\ :empty) do
    model
    |> cast(params, @required_fields, @optional_fields)
  end
end