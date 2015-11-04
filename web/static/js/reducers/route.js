import history from '../history';
import { TOURNAMENT_CREATED, EDIT_TOURNAMENT } from '../constants/action-types';

const mappings = {
  [TOURNAMENT_CREATED]: '/admin',
  [EDIT_TOURNAMENT]: id => `/admin/tournament/${id}`
};

export default function impureRouting(state = {}, action) {
  var route = mappings[action.type];
  if (route) {
    if (typeof route === 'function') {
      route = route(action.payload);
    }
    history.pushState(null, route);
  }
  return state;
}
