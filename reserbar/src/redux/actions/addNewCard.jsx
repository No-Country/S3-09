import { NEW_CARD_SUCCES, NEW_CARD_ERROR } from "../types";
import Axios from "axios";
import { baseUrl } from "../../api/baseUrl";

export const newCardAction =
    ({ card_number, card_name, card_expires, card_cvv }) =>
    async (dispatch) => {
        try {
            Axios.post(`${baseUrl}api/v1/cards`, {
              
                
                card_number: card_number,
                full_name: card_name,
                expires: card_expires,
                CVV: card_cvv,
            },{     
              headers: {
                'x-token': localStorage.getItem("token"),
              },
            }).then((response) => {
                dispatch({
                    type: NEW_CARD_SUCCES,
                    cardData: response.data,
                });
            });
        } catch (error) {
            dispatch({
                type: NEW_CARD_ERROR,
                error: error,
            });
        }
    };