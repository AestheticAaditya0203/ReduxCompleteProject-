import { combineReducers } from "redux";
import userReducers from "./userReducers";
import changeTheNumber from "./upDown";

const rootReducers = combineReducers({
    users: userReducers,
    incDec: changeTheNumber
});

export default rootReducers;