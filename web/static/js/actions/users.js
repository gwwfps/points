import { UPDATE_USERS, USER_CREATED, USER_SAVED, EDIT_USER } from '../constants/action-types';
import makeResource from './make-resource';

const {
  fetch: getUsers,
  create: createUser,
  edit: editUser,
  save: saveUser
} = makeResource({
  endpoint: 'users',
  actionTypes: {
    UPDATE: UPDATE_USERS,
    CREATED: USER_CREATED,
    SAVED: USER_SAVED,
    EDIT: EDIT_USER
  }
});

export { getUsers,  createUser, editUser, saveUser };
