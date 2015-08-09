defmodule Mix.Tasks.Points.Install do
  use Mix.Task
  use Database

  def run(_) do
    Amnesia.Schema.create
    Amnesia.start

    Database.create(disk: [node])
    Database.wait

    Amnesia.transaction do
      # ... initial data creation
    end

    Amnesia.stop
  end
end

defmodule Mix.Tasks.Points.Uninstall do
  use Mix.Task
  use Database

  def run(_) do
    Amnesia.start
    Database.destroy
    Amnesia.stop
    Amnesia.Schema.destroy
  end
end
