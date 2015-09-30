defmodule Mix.Tasks.Points.Install do
  use Mix.Task

  def run(_) do
    q = RethinkDB.Query.table_create('users')
    %RethinkDB.Record{data: %{"tables_created" => 1}} = Points.Database.run q
  end
end

defmodule Mix.Tasks.Points.Uninstall do
  use Mix.Task

  def run(_) do

  end
end
