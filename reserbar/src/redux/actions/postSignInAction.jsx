import { POST_SINGIN_SUCCES, POST_SINGIN_ERROR } from "../types"
import Axios from 'axios';
import { baseUrl } from "../../api/baseUrl";

export const postSignInAction = ({ email, password}) => async (dispatch) => {

    try {
        Axios.post(`${baseUrl}api/v1/auth/login` , {
            email: email,
            password: password
        }).then((response => {
            dispatch({
                type: POST_SINGIN_SUCCES,
                userData: response.data
            })
        }))
    } catch (error) {
        dispatch({
            type: POST_SINGIN_ERROR,
            error: error
        })
    }   
}