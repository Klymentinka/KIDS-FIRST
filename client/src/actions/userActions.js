import Axios from 'axios';



export const register = (email, password,is_parent) => async (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST", payload: email, password,is_parent });
  try {
    const { data } = await Axios.post('http://localhost:3001/api/users/parent/register', {email, password,is_parent});
    dispatch({ type: "USER_REGISTER_SUCCESS", payload: data });
    //dispatch({ type: "USER_SIGNIN_SUCCESS", payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
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


export const updateUserInfo = (user) => async (dispatch) => {
  dispatch({ type: "USER_UPDATE_PROFILE_REQUEST", payload: user });

  try {
    const { data } = await Axios.put(`http://localhost:3001/api/users/${user.id}`, user);
    dispatch({ type: "USER_UPDATE_SUCCESS", payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: "USER_UPDATE_FAIL", payload: message });
  }
};


