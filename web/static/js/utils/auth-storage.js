const TOKEN_KEY = 'TOKEN';
const USER_KEY = 'USER';

export const saveInfo = function(info) {
  localStorage.setItem(TOKEN_KEY, info.token);
  localStorage.setItem(USER_KEY, JSON.stringify(info.user));
};

export function retrieveUser() {
  const serializedUser = localStorage.getItem(USER_KEY);
  return serializedUser && JSON.parse(serializedUser);
}

export function retrieveToken() {
  return localStorage.getItem(TOKEN_KEY);
}
