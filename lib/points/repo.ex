defmodule Points.Repo do
  use Ecto.Repo, otp_app: :points, adapter: Mongo.Ecto
end
