import { USER_LOGIN } from '../constants/action-types';
import api from '../utils/api';
import { saveInfo } from '../utils/auth-storage';


export function verifyLogin(token) {
  return dispatch => {
    api.post('auth/verify', { token })
      .then(info => {
        api.setToken(info.token);
        saveInfo(info);
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
