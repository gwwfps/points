defmodule Points.Api.UserApi do
  use Points.Web, :controller
  alias Points.UserStore

  def index(conn, _params) do
    json conn, UserStore.all()
  end

  def create(conn, entity) do
    json conn, UserStore.create(entity)
  end

  def update(conn, entity = %{"id" => id}) do
    json conn, UserStore.update(id, entity)
  end
end
