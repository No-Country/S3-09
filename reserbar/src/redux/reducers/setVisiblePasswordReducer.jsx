import { SET_VISIBLE_PASSWORD } from "../types"

const initialState = false

export const setVisiblePasswordReducer = (state = initialState, { type }) => {
    switch (type) {

    case SET_VISIBLE_PASSWORD:
        return !state

    default:
        return state
    }
}
