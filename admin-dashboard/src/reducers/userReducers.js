export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
      case "USER_REGISTER_SUCCESS":
        return (state = {
          ...state,
          userInfo: action.payload
        })
      case "USER_REGISTER_FAIL":
        return (state = {
          ...state,
          error: action.payload
        });
      default:
        return state;
    }
  };
  
  
  
  
  
export const userSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_SIGNIN_SUCCESS":
      return (state = {
        ...state,
        userInfo: action.payload
      })
    case "USER_SIGNIN_FAIL":
      return (state = {
        ...state,
        error: action.payload
      });
   
    default:
      return state;
  }
};

  
  
  
  