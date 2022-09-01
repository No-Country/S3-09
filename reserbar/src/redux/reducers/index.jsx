import { combineReducers } from "redux";
import { getOwnUserReducer } from "./getOwnUserReducer";
import { postRegisterReducer } from "./postRegisterReducer";
import { postSignInReducer } from "./postSignInReducer";
import { setVisiblePasswordReducer } from "./setVisiblePasswordReducer";

// Compile all reducers to pass to the store.
export const rootReducers = combineReducers({
    setVisiblePasswordReducer: setVisiblePasswordReducer, // change password to text or ****
    postRegisterReducer: postRegisterReducer, // POST Register a user.
    postSignInReducer: postSignInReducer, // POST Sign In user.
    getOwnUserReducer: getOwnUserReducer, // GET info about own user.
});
