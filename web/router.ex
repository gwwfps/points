defmodule Points.Router do
  use Points.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
  end

  pipeline :browser_session do
    plug Guardian.Plug.VerifySession
    plug Guardian.Plug.LoadResource
  end

  pipeline :api do
    plug :accepts, ["json"]
    plug Guardian.Plug.VerifyAuthorization
    plug Guardian.Plug.LoadResource
  end

  pipeline :user_api do
    plug :accepts, ["json"]
    plug Guardian.Plug.VerifyAuthorization
    plug Guardian.Plug.LoadResource
    plug Guardian.Plug.EnsureSession, on_failure: { SessionController, :unauthenticated_api }
  end

  scope "/", Points do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
  end

  scope "/api/v1/auth/", Points do
    pipe_through :api

    post "/verify", AuthApiController, :verify
  end

  scope "/api/v1/tournaments/", Points do
    pipe_through :user_api

    get "/", TournamentApiController, :index
  end
end
