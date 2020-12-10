export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export function getLoginToken(username, password) {
  return {
    type: LOGIN,
    payload: {
      username: username,
      password: password
    }
  }
}
