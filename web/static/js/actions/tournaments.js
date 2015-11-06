import { SELECT_TOURNAMENT, UPDATE_TOURNAMENTS, TOURNAMENT_CREATED, TOURNAMENT_SAVED, EDIT_TOURNAMENT } from '../constants/action-types';
import api from '../utils/api';

export function selectTournament(id) {
  return {
    type: SELECT_TOURNAMENT,
    payload: { id }
  };
}

export function getTournaments() {
  return dispatch => {
    api.get('tournaments')
      .then(tournaments => {
        dispatch({
          type: UPDATE_TOURNAMENTS,
          payload: tournaments
        });
      });
  };
};

export function createTournament(tournament) {
  return dispatch => {
    api.post('tournaments', tournament)
      .then(() => {
        dispatch({
          type: TOURNAMENT_CREATED
        });
      });
  };
}

export function editTournament(id) {
  return {
    type: EDIT_TOURNAMENT,
    payload: id
  };
}

export function saveTournament(tournament) {
  return dispatch => {
    api.put(`tournaments/${tournament.id}`, tournament)
      .then(() => {
        dispatch({
          type: TOURNAMENT_SAVED
        });
      });
  };
}
