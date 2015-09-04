defmodule Mix.Tasks.Points.Install do
  use Mix.Task
  use Points.Database

  def run(_) do
    Amnesia.Schema.create
    Amnesia.start

    Points.Database.create(disk: [node])
    Points.Database.wait

    Amnesia.transaction do
      # ... initial data creation
    end

    Amnesia.stop
  end
end

defmodule Mix.Tasks.Points.Uninstall do
  use Mix.Task
  use Points.Database

  def run(_) do
    Amnesia.start
    Points.Database.destroy
    Amnesia.stop
    Amnesia.Schema.destroy
  end
end
