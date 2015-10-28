import { UPDATE_USERS } from '../constants/action-types';
import singleActionsReducer from '../utils/single-actions-reducer';

const reducers = {
  [UPDATE_USERS](state, payload) {
    return payload;
  }
};

const reducer = singleActionsReducer([], reducers);

export default reducer;
