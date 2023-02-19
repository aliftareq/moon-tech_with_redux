import { actionTypes } from "../actionTypes/actionTypes";

export const initialstate = {
    cart: [],
    loading: false
}

export const productReducer = (state = initialstate, action) => {
    const selecedProduct = state.cart.find((product) => product._id === action.payload._id)
    // console.log(selecedProduct);
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            if (selecedProduct) {
                const newCart = state.cart.filter(product => product._id !== selecedProduct._id)
                selecedProduct.quantity = selecedProduct.quantity + 1;
                return {
                    ...state,
                    cart: [...newCart, selecedProduct]
                }
            }
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, quantity: 1 }]
            }
        case actionTypes.REMOVE_FROM_CART:
            if (selecedProduct.quantity > 1) {
                const newCart = state.cart.filter(product => product._id !== selecedProduct._id)
                selecedProduct.quantity = selecedProduct.quantity - 1;
                return {
                    ...state,
                    cart: [...newCart, selecedProduct]
                }
            }
            return {
                ...state,
                cart: state.cart.filter(product => product._id !== action.payload._id)
            }
        default:
            return state;
    }
}