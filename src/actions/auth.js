import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  USER_LOADED,
  AUTH_ERROR,
  REGISTER_SUCCESS,
  REGISTER_CONFIRM,
  BEGIN_USER_LOAD,
} from './types';

export const login = (email, password) => async (dispatch) => {
  try {
    // This is where Auth would be called
    const user = { email, password };
    console.log(user);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: user,
    });
  } catch (err) {
    console.log(err.message);

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};
