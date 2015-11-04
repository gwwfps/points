import { SELECT_TOURNAMENT, UPDATE_TOURNAMENTS } from '../constants/action-types';

const selectTournament = function(state, payload) {
  return {
    ...state,
    selected: state.instances.find(tournament => tournament.id === payload.id)
  };
};

const updateTournaments = function(state, payload) {
  var selected;

  if (state.selected) {
    selected = payload.find(t => t.id === state.selected.id);
  }

  if (!selected && payload.length) {
    selected = payload[0];
  }

  return {
    instances: payload,
    selected
  }
};

const tournamentReducers = {
  [SELECT_TOURNAMENT]: selectTournament,
  [UPDATE_TOURNAMENTS]: updateTournaments
};

const selectedReducers = {

};

export default function tournaments(state = { selected: void 0, instances: [] }, action) {
  const tournamentReducer = tournamentReducers[action.type];
  if (tournamentReducer) {
    return tournamentReducer(state, action.payload);
  }

  const selectedReducer = selectedReducers[action.type];
  if (selectedReducer) {
    const selectedIndex = state.instances.indexOf(state.selected);
    const selected = selectedReducer(state.selected, action.payload);
    return {
      ...state,
      instance: state.instances.slice(0, selectedIndex)
        .concat(selected)
        .concat(state.instances.slice(selectedIndex + 1)),
      selected
    };
  }

  return state;
}
