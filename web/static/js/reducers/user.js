import { BOOTSTRAP, USER_LOGIN } from '../constants/action-types';
import { retrieveUser } from '../utils/auth-storage';

const reducers = {
  [BOOTSTRAP](state, payload) {
    return payload.user || state;
  },

  [USER_LOGIN](state, payload) {
    return {...payload, isAuthenticated: true};
  }
};

const storedUser = retrieveUser();
const defaultUser = { ...(storedUser || {}), isAuthenticated: !!storedUser };

export default function user(state = defaultUser, action) {
  const reducer = reducers[action.type];
  if (reducer) {
    return reducer(state, action.payload);
  }
  return state;
}
