import { GET_RESTAURANTS_ERROR, GET_RESTAURANTS_SUCCESS } from "../types";
import Axios from "axios";
import { baseUrl } from "../../api/baseUrl";

export const getAllRestaurantsAction = () => async (dispatch) => {
    try {
        Axios.get(`${baseUrl}api/v1/restaurants`, {}).then((response) => {
            dispatch({
                type: GET_RESTAURANTS_SUCCESS,
                restaurants: response.data.restaurants,
            });
        });
    } catch (error) {
        dispatch({
            type: GET_RESTAURANTS_ERROR,
            error: error,
        });
    }
};
