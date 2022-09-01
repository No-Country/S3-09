import { POST_SINGIN_SUCCES, POST_SINGIN_ERROR } from "../types";

const initialState = {};

export const postSignInReducer = (
    state = initialState,
    { type, userData, error }
) => {
    switch (type) {
        case POST_SINGIN_SUCCES:
            localStorage.setItem("token", JSON.stringify(userData.token));
            localStorage.setItem("userId", JSON.stringify(userData.user.id));
            window.location.href = "/"
            const newState = userData
            return newState

        case POST_SINGIN_ERROR:
            return console.log("SIGN IN POST ERROR", error);

        default:
            return state;
    }
};
