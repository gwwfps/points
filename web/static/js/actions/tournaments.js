import { SELECT_TOURNAMENT, UPDATE_TOURNAMENTS } from '../constants/action-types';
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
