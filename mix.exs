defmodule Points.Mixfile do
  use Mix.Project

  def project do
    [app: :points,
     version: "0.0.1",
     elixir: "~> 1.0",
     elixirc_paths: elixirc_paths(Mix.env),
     compilers: [:phoenix] ++ Mix.compilers,
     build_embedded: Mix.env == :prod,
     start_permanent: Mix.env == :prod,
     deps: deps]
  end

  # Configuration for the OTP application
  #
  # Type `mix help compile.app` for more information
  def application do
    [mod: {Points, []},
     applications: [:phoenix, :phoenix_html, :cowboy, :logger, :amnesia, :httpoison, :poison, :guardian]]
  end

  # Specifies which paths to compile per environment
  defp elixirc_paths(:test), do: ["lib", "web", "test/support"]
  defp elixirc_paths(_),     do: ["lib", "web"]

  # Specifies your project dependencies
  #
  # Type `mix help deps` for examples and options
  defp deps do
    [{:phoenix, "~> 0.15"},
     {:phoenix_html, "~> 1.4"},
     {:phoenix_live_reload, "~> 0.5", only: :dev},
     {:cowboy, "~> 1.0"},
     {:amnesia, github: "meh/amnesia", tag: :master},
     {:httpoison, "~> 0.7.2"},
     {:poison, "~> 1.5"},
     {:guardian, "~> 0.5.0"}
    ]
  end
end
