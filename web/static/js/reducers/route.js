import history from '../history';
import routes from '../constants/routes';
import {
  EDIT_TOURNAMENT, TOURNAMENT_CREATED, TOURNAMENT_SAVED,
  EDIT_USER, USER_CREATED, USER_SAVED,
  CANCEL_EDIT
} from '../constants/action-types';

const mappings = {
  [EDIT_TOURNAMENT]: tournament => `${routes.admin}/tournament/${tournament.id}`,
  [TOURNAMENT_CREATED]: `${routes.admin}`,
  [TOURNAMENT_SAVED]: `${routes.admin}`,

  [EDIT_USER]: user => `${routes.admin}/user/${user.id}`,
  [USER_CREATED]: `${routes.admin}`,
  [USER_SAVED]: `${routes.admin}`,

  [CANCEL_EDIT]: `${routes.admin}`
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
