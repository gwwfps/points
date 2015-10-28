import { BOOTSTRAP, USER_LOGIN } from '../constants/action-types';
import { retrieveUser } from '../utils/auth-storage';
import singleActionsReducer from '../utils/single-actions-reducer';

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

const reducer = singleActionsReducer(defaultUser, reducers);

export default reducer;
