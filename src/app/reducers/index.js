import { combineReducers } from "redux";
import userReducer from "./userReducer";
// import reducers file

const reducers = combineReducers({
  user: userReducer,
});

export default reducers;
