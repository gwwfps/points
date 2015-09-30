defmodule Points.Stores.Users do
  alias RethinkDB.Query
  alias RethinkDB.Record

  defmacro table_run(query) do
    quote do
      Query.table('users')
        |> unquote(query)
        |> Points.Database.run
    end
  end

  def find_by_email(email) do
    expr = quote do: table_run(Query.get(email))
    res = Macro.expand_once(expr, __ENV__)
    IO.puts Macro.to_string(res)
    case table_run(Query.get(email)) do
      %Record{data: data} ->
        data
      a ->
        IO.inspect a
        nil
    end
  end

  def update_or_create(user_props) do
    user = find_or_create_by_email(user_props["email"])
    update_user = %{id: user_props["email"], name: user_props["name"], picture: user_props["picture"]}
    user |> Map.merge(update_user) |> Query.update |> table_run
  end

  defp find_or_create_by_email(email) do
    case find_by_email(email) do
      nil ->
        user = %{id: email}
        table_run(Query.insert(user))
        user
      user ->
        user
    end
  end
end
