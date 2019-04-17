export const USER_LOADING = 'USER_LOADING';
export const USER_LOADED = 'USER_LOADED';
export const CHECK_PASSWORD = 'CHECK_PASSWORD';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const AUTH_FAIL = 'AUTH_FAIL';

export const initialState = {
  isLoggedIn: null,
  isLoading: false,
  token: localStorage.getItem('token'),
  user: localStorage.getItem('user'),
  error: null,
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
      };
    case REGISTER_SUCCESS:
      {
        const user = {
          fullname: action.payload.user.fullname,
          username: action.payload.user.username,
          password: action.payload.user.username,
        };
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', action.payload.token);
      }
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
      };
    case CHECK_PASSWORD:
      {
        const local = localStorage.getItem('user');
        const { password } = JSON.parse(local);
        if (password !== action.payload) {
          return {
            ...state,
            error: 'Password not match',
          };
        }
      }
      return state;
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
      };
    case AUTH_FAIL:
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
        token: null,
        user: null,
      };
    default:
      return state;
  }
};
