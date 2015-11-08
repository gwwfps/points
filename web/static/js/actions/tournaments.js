import { SELECT_TOURNAMENT, UPDATE_TOURNAMENTS, TOURNAMENT_CREATED, TOURNAMENT_SAVED, EDIT_TOURNAMENT } from '../constants/action-types';
import makeResource from './make-resource';

export function selectTournament(id) {
  return {
    type: SELECT_TOURNAMENT,
    payload: { id }
  };
}

const {
  fetch: getTournaments,
  create: createTournament,
  edit: editTournament,
  save: saveTournament
} = makeResource({
  endpoint: 'tournaments',
  actionTypes: {
    UPDATE: UPDATE_TOURNAMENTS,
    CREATED: TOURNAMENT_CREATED,
    SAVED: TOURNAMENT_SAVED,
    EDIT: EDIT_TOURNAMENT
  }
});

export { getTournaments,  createTournament, editTournament, saveTournament };
