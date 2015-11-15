import {
  SELECT_TOURNAMENT,
  SELECT_TOURNAMENT_TAB,
  UPDATE_TOURNAMENTS,
  TOURNAMENT_CREATED,
  TOURNAMENT_SAVED,
  TOURNAMENT_DELETED,
  EDIT_TOURNAMENT
} from '../constants/action-types';
import makeResource from './make-resource';

export function selectTournament(tournament) {
  return {
    type: SELECT_TOURNAMENT,
    payload: tournament
  };
}

export function selectTournamentTab(tournament, tab) {
  return {
    type: SELECT_TOURNAMENT_TAB,
    payload: { tournament, tab }
  };
}

const {
  fetch: getTournaments,
  create: createTournament,
  edit: editTournament,
  save: saveTournament,
  delete: deleteTournament
} = makeResource({
  endpoint: 'tournaments',
  actionTypes: {
    UPDATE: UPDATE_TOURNAMENTS,
    CREATED: TOURNAMENT_CREATED,
    SAVED: TOURNAMENT_SAVED,
    DELETED: TOURNAMENT_DELETED,
    EDIT: EDIT_TOURNAMENT
  }
});

export { getTournaments,  createTournament, editTournament, saveTournament, deleteTournament };
