use Amnesia

defdatabase Database do
  deftable User, [{ :id, autoincrement }, :name, :email, :bnet, :note, :picture, :admin], type: :ordered_set, index: [:email] do
    @type t :: %User{id: non_neg_integer, email: String.t, name: String.t, bnet: String.t, note: String.t, picture: Stirng.t, admin: boolean}
  end

  deftable League, [{ :id, autoincrement }, :name, :stage, :featured], type: :ordered_set, index: [:featured] do
    @type t :: %League{id: non_neg_integer, name: String.t, stage: atom, featured: boolean}
  end

  deftable Match, [{ :id, autoincrement }, :home_id, :away_id, :home_score, :away_score, :deadline, :confirmed], type: :ordered_set, index: [:home_id, :away_id, :deadline, :confirmed] do
    @type t :: %Match{id: non_neg_integer, home_id: non_neg_integer, away_id: non_neg_integer, home_score: non_neg_integer, away_score: non_neg_integer, deadline: non_neg_integer, confirmed: boolean}
  end

  deftable Game, [{ :id, autoincrement }, :match_id, :home_won, :home_class, :away_class], type: :ordered_set, index: [:match_id] do
    @type t :: %Game{id: non_neg_integer, match_id: non_neg_integer, home_won: boolean, home_class: atom, away_class: atom}
  end

  deftable SeasonMatch, [{ :id, autoincrement }, :match_id, :league_id, :iteration], type: :ordered_set, index: [:match_id, :league_id, :iteration] do
    @type t :: %SeasonMatch{id: non_neg_integer, match_id: non_neg_integer, league_id: non_neg_integer, iteration: non_neg_integer}
  end

  deftable PlayoffSeries, [{ :id, autoincrement }, :match_id, :league_id, :stage], type: :ordered_set, index: [:match_id, :league_id] do
    @type t :: %PlayoffSeries{id: non_neg_integer, match_id: non_neg_integer, league_id: non_neg_integer, stage: non_neg_integer}
  end
end
