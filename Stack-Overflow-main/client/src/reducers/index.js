import { combineReducers } from "redux";
import authReducer from "./auth.js"
import currentUserReducer from "./currentUser.js";
import questionReducer from './questions'
import usersReducer from './users';
 
export default combineReducers({
    authReducer, currentUserReducer,questionReducer, usersReducer
})