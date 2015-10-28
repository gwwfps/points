import { retrieveToken } from './auth-storage';


var token = retrieveToken();

const apiFetch = function(method, path, body) {
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };

  if (token) {
    headers['Authorization'] = token;
  }

  return fetch('/api/v1/' + path, {
    method,
    headers: headers,
    body: method === 'get' ? null : JSON.stringify(body || {})
  }).then(response => response.json());
};

const exports = {
  setToken(t) {
    token = t;
  }
};

['get', 'post', 'put', 'delete', 'head'].forEach(method => {
  exports[method] = apiFetch.bind(null, method);
});

export default exports;
