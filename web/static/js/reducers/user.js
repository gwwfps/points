import { BOOTSTRAP, USER_LOGIN } from '../constants/action-types';

const reducers = {
  [BOOTSTRAP](state, payload) {
    return payload.user || state;
  },

  [USER_LOGIN](state, payload) {
    return {...payload, isAuthenticated: true};
  }
}

export default function user(state = { isAuthenticated: false }, action) {
  const reducer = reducers[action.type];
  if (reducer) {
    return reducer(state, action.payload);
  }
  return state;
}
