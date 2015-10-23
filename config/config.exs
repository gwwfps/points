# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

config :points, Points.Repo,
  adapter: Mongo.Ecto,
  database: System.get_env("POINTS_DB_NAME"),
  hostname: System.get_env("POINTS_DB_HOSTNAME")

# Configures the endpoint
config :points, Points.Endpoint,
  url: [host: "localhost"],
  root: Path.dirname(__DIR__),
  secret_key_base: System.get_env("POINTS_SECRET_KEY"),
  google_client_id: System.get_env("POINTS_GOOGLE_CLIENT_ID"),
  authorized_domain: System.get_env("POINTS_DOMAIN"),
  first_admin: System.get_env("POINTS_FIRST_ADMIN"),
  render_errors: [accepts: ["html"]],
  pubsub: [name: Points.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

config :joken, config_module: Guardian.JWT

config :guardian, Guardian,
  issuer: "Points",
  ttl: { 30, :days },
  verify_issuer: true,
  secret_key: System.get_env("POINTS_JWT_SECRET"),
  serializer: Points.GuardianSerializer

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
