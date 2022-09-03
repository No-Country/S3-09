import { GET_RESTAURANTS_ERROR, GET_RESTAURANTS_SUCCESS } from "../types";

const initialState = [];

export const getAllRestaurantsReducer = (
    state = initialState,
    { type, restaurants, error }
) => {
    switch (type) {
        case GET_RESTAURANTS_SUCCESS:
            const newState = restaurants;
            return newState;

        case GET_RESTAURANTS_ERROR:
            return console.log("GET RESTAURANTS ERROR", error);

        default:
            return state;
    }
};
