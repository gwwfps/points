import { SELECT_TOURNAMENT } from '../constants/action-types';

export function selectTournament(id) {
  return {
    type: SELECT_TOURNAMENT,
    payload: { id }
  };
}
