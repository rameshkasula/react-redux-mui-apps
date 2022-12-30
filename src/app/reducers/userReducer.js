import { getLocalData, token } from "src/utils/Storage";
import ActionTypes from "../actions";

export const initialState = {
  userData: getLocalData("userData"),
  isAuth: token,
};

//-------- user reducer --------//

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_USER_DATA:
      return {
        ...state,
        userData: action.userData,
        isAuth: action.userData?.token,
      };
    default:
      return state;
  }
};

export default userReducer;
