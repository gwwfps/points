import api from '../utils/api';

export default function makeResource({ endpoint, actionTypes: { UPDATE, CREATED, SAVED, EDIT } }) {
  return {
    fetch() {
      return dispatch => {
        api.get(endpoint)
          .then(entities => {
            dispatch({
              type: UPDATE,
              payload: entities
            });
          });
      };
    },

    create(entity) {
      return dispatch => {
        api.post(endpoint, entity)
          .then(() => {
            dispatch({
              type: CREATED
            });
          });
      };
    },

    edit(entity) {
      return {
        type: EDIT,
        payload: entity
      };
    },

    save(entity) {
      return dispatch => {
        api.put(`${endpoint}/${entity.id}`, entity)
          .then(() => {
            dispatch({
              type: SAVED
            });
          });
      };
    }
  }
}
