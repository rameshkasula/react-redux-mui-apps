import ActionTypes from "../actions";
import { arrayItems } from "src/utils/AIoptions";

export const initialState = {
  isAuth: false,
  userData: false,
  aioptions: arrayItems,
  selectedOption: false,
};

//-------- user reducer --------//

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_USER_DATA:
      return {
        ...state,
        userData: action.userData,
      };
    case ActionTypes.SET_OPTION:
      return {
        ...state,
        selectedOption: action.selectedOption,
      };
    default:
      return state;
  }
};

export default userReducer;
