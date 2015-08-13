import { SELECT_TOURNAMENT } from '../constants/action-types';

const samples = [
  {
    id: 625325423,
    name: 'Sample tournament',
    notes: 'Signup soon! Tons of prizes.',
    start: 1439442451786,
    phase: 0,
    participants: [
      { name: 'Some guy' }
    ]
  },
  {
    id: 2312451,
    name: 'In progress tournament',
    notes: 'League going on',
    start: 1325635200000,
    phase: 1,
    participants: [
      { name: 'Some guy' }
    ]
  },
  {
    id: 5215141234,
    name: 'Playoffs tournament',
    notes: 'EDIT: Playoffs happening!',
    start: 1325635200000,
    phase: 2,
    participants: [
      { name: 'Some guy' }
    ]
  },
  {
    id: 521514123432,
    name: 'Playoffs tournament 2',
    notes: 'Oldest tournament',
    start: 1325635200000,
    end: 1439442451786,
    phase: 3,
    participants: [
      { name: 'Some guy' }
    ]
  }
];

const selectTournament = function(state, action) {
  return {
    ...state,
    selected: state.instances.find(tournament => tournament.id === action.id)
  };
};

const tournamentReducers = {
  SELECT_TOURNAMENT: selectTournament
};

const selectedReducers = {

};

export default function tournaments(state = { selected: samples[0], instances: samples }, action) {
  const tournamentReducer = tournamentReducers[action.type];
  if (tournamentReducer) {
    return tournamentReducer(state, action);
  }

  const selectedReducer = selectedReducers[action.type];
  if (selectedReducer) {
    const selectedIndex = state.instances.indexOf(state.selected);
    const selected = selectedReducer(state.selected, action);
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
