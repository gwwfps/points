defmodule Points.Database do
  # use RethinkDB.Connection
end

# defdatabase Points.Database do
#   deftable User, [{ :id, autoincrement }, :name, :email, :bnet, :note, :picture, :admin, :rating], type: :ordered_set, index: [:email] do
#     @type t :: %User{
#       id: non_neg_integer,
#       email: String.t,
#       name: String.t,
#       bnet: String.t,
#       note: String.t,
#       picture: Stirng.t,
#       admin: boolean,
#       rating: non_neg_integer
#     }
#   end

#   deftable Tournament, [{ :id, autoincrement }, :name, :stage, :featured, :created_by], type: :ordered_set, index: [:featured] do
#     @type t :: %Tournament{
#       id: non_neg_integer,
#       name: String.t,
#       stage: atom,
#       featured: boolean,
#       created_by: non_neg_integer
#     }
#   end

#   deftable Participation, [{ :id, autoincrement }, :user_id, :tournament_id ], type: :ordered_set, index: [:user_id, :tournament_id] do
#     @type t :: %Participation{
#       id: non_neg_integer,
#       user_id: non_neg_integer,
#       tournament_id: non_neg_integer
#     }
#   end

#   deftable Match, [{ :id, autoincrement }, :home_id, :away_id, :home_score, :away_score, :start, :deadline], type: :ordered_set, index: [:home_id, :away_id, :start, :deadline] do
#     @type t :: %Match{
#       id: non_neg_integer,
#       home_id: non_neg_integer,
#       away_id: non_neg_integer,
#       home_score: non_neg_integer,
#       away_score: non_neg_integer,
#       start: non_neg_integer,
#       deadline: non_neg_integer
#     }
#   end
# end
