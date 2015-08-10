import { SELECT_TOURNAMENT } from '../constants/action-types';

const samples = [
  {
    id: 625325423,
    name: 'Sample tournament',
    notes: 'Signup soon! Tons of prizes.',
    phase: 0,
    participants: [
      { name: 'Some guy' }
    ]
  },
  {
    id: 2312451,
    name: 'In progress tournament',
    notes: 'Signup soon! Tons of prizes.',
    phase: 1,
    participants: [
      { name: 'Some guy' }
    ]
  },
  {
    id: 5215141234,
    name: 'Playoffs tournament',
    notes: 'Signup soon! Tons of prizes.',
    phase: 2,
    participants: [
      { name: 'Some guy' }
    ]
  }
];

export default function tournaments(state = { selected: samples[0], instances: samples }, action) {
  switch (action.type) {
  case SELECT_TOURNAMENT:
    return {
      ...state,
      selected: state.instances.find(tournament => tournament.id === action.id)
    };

  default:
    return state;
  }
}
