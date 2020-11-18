import { Auth } from 'aws-amplify';
import { API } from 'aws-amplify';
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

export const register = ({ email, password }) => async (dispatch) => {
  try {
    await Auth.signUp(email, password);

    dispatch({ type: REGISTER_SUCCESS });
  } catch (err) {
    console.log(err.message);
    dispatch({ type: AUTH_ERROR });
  }
};

export const registerConfirm = ({
  email,
  name,
  confirmPassword,
  confirmCode,
}) => async (dispatch) => {
  try {
    await Auth.confirmSignUp(email, confirmCode);
    const newUser = await Auth.signIn(email, confirmPassword);

    // Create API endpoint for user registry
    await API.post('notes', '/createUser', {
      body: {
        name,
      },
    });

    dispatch({ type: REGISTER_CONFIRM, payload: newUser });
  } catch (err) {
    console.log(err.message);
    dispatch({ type: AUTH_ERROR });
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    // This is where Auth would be called
    const user = await Auth.signIn(email, password);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: user,
    });
  } catch (err) {
    console.log(err.message);
    console.log('Failed');

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};
