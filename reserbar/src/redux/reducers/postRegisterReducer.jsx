import { POST_REGISTER_SUCCES, POST_REGISTER_ERROR } from "../types";

const initialState = {};

export const postRegisterReducer = (
    state = initialState,
    { type, registerData, error }
) => {
    switch (type) {
        case POST_REGISTER_SUCCES:
            return {
                state: registerData,
            };

        case POST_REGISTER_ERROR:
            return console.log("REGISTER POST ERROR", error);

        default:
            return state;
    }
};
