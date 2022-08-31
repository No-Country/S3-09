import { POST_REGISTER_SUCCES, POST_REGISTER_ERROR } from "../types";
import Axios from "axios";
import { baseUrl } from "../../api/baseUrl";

export const postRegisterAction =
    ({ name, userName, email, password }) =>
    async (dispatch) => {
        try {
            Axios.post(`${baseUrl}api/v1/users`, {
                name: name,
                username: userName,
                email: email,
                password: password,
            }).then((response) => {
                dispatch({
                    type: POST_REGISTER_SUCCES,
                    registerData: response,
                });
            });
        } catch (error) {
            dispatch({
                type: POST_REGISTER_ERROR,
                error: error,
            });
        }
    };
