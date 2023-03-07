export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const Role = 'Role';

export function login() {
  return { type: LOGIN };
}

export function logout() {
  return { type: LOGOUT };
}

export function role() {
  return { type: Role };
}