import { USER_LOGIN } from '../constants/action-types';
import api from '../utils/api';


export function verifyLogin(token) {
  return dispatch => {
    api.post('auth/verify', { token })
      .then(response => response.json())
      .then(info => {
        api.setToken(info.token);
        return info;
      })
      .then((info) => {
        dispatch({
          type: USER_LOGIN,
          payload: info.user
        });
      });
  };
}
