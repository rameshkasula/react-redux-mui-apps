import ActionTypes from "../actions";

export const initialState = {
  isAuth: window.localStorage.getItem("user")?.token?.length ?? false,
  userData: window.localStorage.getItem("user") ?? false,
  posts: false,
  postData: false,
  users: false,
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
    case ActionTypes.SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case ActionTypes.SET_POST_DATA:
      return {
        ...state,
        postData: action.postData,
      };
    default:
      return state;
  }
};

export default userReducer;
