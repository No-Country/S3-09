import { combineReducers } from "redux";

import { getCurrentLocationReducer } from "./getCurrentLocationReducer";
import { getLocationForFormReducer } from "./getLocationForFormReducer";
import { setDataFormReducer } from "./setDataFormReducer";
import { showMapModalReducer } from "./showMapModalReducer";

// Compile all reducers to pass to the store.
export const rootReducers = combineReducers({
    // Reducers here.
});
