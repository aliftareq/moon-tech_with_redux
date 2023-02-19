import { actionTypes } from "../actionTypes/actionTypes"

export const addToCart = (data) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: data
    };
}

export const removeFromCart = (data) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: data
    }
}