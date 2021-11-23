import { combineReducers } from "redux";
import { addTodoReducer } from "./todoReducers";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

import authReducer from "./authReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  addTodoReducer,
});
export default rootReducer;
