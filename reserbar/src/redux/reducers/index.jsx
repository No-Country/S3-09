import { combineReducers } from "redux";
import { postRegisterReducer } from "./postRegisterReducer";
import { setVisiblePasswordReducer } from "./setVisiblePasswordReducer";

// Compile all reducers to pass to the store.
export const rootReducers = combineReducers({
    setVisiblePasswordReducer: setVisiblePasswordReducer, // change password to text or ****
    postRegisterReducer: postRegisterReducer, // POST Register a user.
});
