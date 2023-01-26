import ActionTypes from "../actions";

export const initialState = {
  isAuth: false,
  userData: false,
  posts: false,
};

//-------- user reducer --------//

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_USER_DATA:
      return {
        ...state,
        userData: action.userData,
      };
    case ActionTypes.SET_POSTS:
      return {
        ...state,
        posts: action.posts,
      };
    default:
      return state;
  }
};

export default userReducer;
