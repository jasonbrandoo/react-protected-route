export const USER_LOADING = 'USER_LOADING';
export const USER_LOADED = 'USER_LOADED';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const AUTH_FAIL = 'AUTH_FAIL';

export const initialState = {
  tes: 1,
  isLoggedIn: null,
  isLoading: false,
  token: localStorage.getItem('token'),
  user: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        user: action.payload,
      };
    default:
      return state;
  }
};
