import { POST_REGISTER } from "../types"
import Axios from "axios"
import { baseUrl } from "../../api/baseUrl"

const initialState = {
    loading: false,
    response: []
}

export const postRegisterReducer = (state = initialState, { type, name, userName, email, password }) => {

    switch (type) {

        case POST_REGISTER:
            return (
                console.log("sadasd", state),
                Axios.post(`${baseUrl}api/v1/users` , {
                    name: name,
                    username: userName,
                    email: email,
                    password: password
                }).then((response) => {
                    console.log("POST REGISTER SUCCES", response)
                }).catch((err) => {
                    console.log("POST REGISTER ERROR", err)
                })
            )

    default:
        return state
    }
}
