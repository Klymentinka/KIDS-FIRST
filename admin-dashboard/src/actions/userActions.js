import Axios from 'axios';


export const register = (email, password, is_admin) => async (dispatch) => {
  dispatch({ type:" USER_REGISTER_REQUEST", payload: { email, password, is_admin } });
  try {
    const { data } = await Axios.post('http://localhost:3001/api/users/admin/register', {
      email,
      password,
      is_admin
    });
    dispatch({ type:"USER_REGISTER_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "USER_REGISTER_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const signin = (email, password) => async (dispatch) => {
  dispatch({ type: "USER_SIGNIN_REQUEST", payload: { email, password } });
  try {
    const { data } = await Axios.post('http://localhost:3001/api/users/admin/signin', { email, password });
    dispatch({ type: "USER_SIGNIN_SUCCESS", payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: "USER_SIGNIN_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};