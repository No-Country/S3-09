import { GET_OWN_USER_ERROR, GET_OWN_USER_SUCCESS } from "../types";
import { baseUrl } from "../../api/baseUrl";
import Axios from 'axios'

export const getOwnUserAction = ({id}) => async (dispatch) => {
    try {
        Axios.get(`${baseUrl}api/v1/users/${id}`, {
        }).then((response) => {
            dispatch({
                type: GET_OWN_USER_SUCCESS,
                ownUserData: response.data.user,
            });
        });
    } catch (error) {
        dispatch({
            type: GET_OWN_USER_ERROR,
            error: error,
        });
    }
};
