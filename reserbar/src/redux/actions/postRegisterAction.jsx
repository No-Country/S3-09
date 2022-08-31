import { POST_REGISTER } from "../types"

export const postRegisterAction = ({name, userName, email, password}) => ({
    type: POST_REGISTER,
    name: name,
    userName: userName,
    email: email,
    password: password
})
