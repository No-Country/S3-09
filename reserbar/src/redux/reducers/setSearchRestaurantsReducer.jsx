import { SET_SEARCH_CATEGORY_RESTAURANTS } from "../types";

const initialState = "";

export const setSearcRestaurantsReducer = (
    state = initialState,
    { type, search }
) => {
    switch (type) {
        case SET_SEARCH_CATEGORY_RESTAURANTS:
            const newState = search;
            return newState;

        default:
            return state;
    }
};
