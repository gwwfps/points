import { UPDATE_USERS } from '../constants/action-types';
import api from '../utils/api';


export function getUsers() {
  return dispatch => {
    api.get('users/')
      .then(users => {
        dispatch({
          type: UPDATE_USERS,
          payload: users
        });
      });
  };
}
