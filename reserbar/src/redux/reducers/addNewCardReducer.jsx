import { NEW_CARD_SUCCES, NEW_CARD_ERROR } from "../types";

const initialState = {};

export const addNewCardReducer = (
    state = initialState,
    { type, cardData, error }
) => {
    switch (type) {
        case NEW_CARD_SUCCES:
          window.location.href = "/";
            return console.log(NEW_CARD_SUCCES, cardData);

        case NEW_CARD_ERROR:
            return console.log("SIGN IN POST ERROR", error);

        default:
            return state;
    }
};
