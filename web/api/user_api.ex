defmodule Points.Api.UserApi do
  use Points.Web, :controller
  alias Points.User

  def index(conn, _params) do
    json conn, User.get_all()
  end
end
