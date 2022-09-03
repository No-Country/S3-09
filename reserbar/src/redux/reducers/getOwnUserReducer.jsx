import { GET_OWN_USER_ERROR, GET_OWN_USER_SUCCESS } from "../types";

const initialState = {};

export const getOwnUserReducer = (
    state = initialState,
    { type, ownUserData, error }
) => {
    switch (type) {
        case GET_OWN_USER_SUCCESS:
            const newState = ownUserData;
            return newState;

        case GET_OWN_USER_ERROR:
            return console.log("SIGN IN POST ERROR", error);

        default:
            return state;
    }
};
