defmodule Points.Router do
  use Points.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", Points do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
  end

  scope "/api/tournaments/", Points do
    pipe_through :api

    get "/", TournamentApiController, :index
  end
end
