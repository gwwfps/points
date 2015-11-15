import singleActionsReducer from '../utils/single-actions-reducer';
import { UPDATE_TOURNAMENTS } from '../constants/action-types';

const reducers = {
  [UPDATE_TOURNAMENTS](state, payload) {
    return payload;
  }
};

const reducer = singleActionsReducer([], reducers);

export default reducer;
