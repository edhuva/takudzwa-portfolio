import React, { createContext, useReducer } from "react";

export const CartContext = createContext()

const initialState = {
    items: [],
    total: 0,
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                items: [...state.items, action.payload],
                total: state.total + action.payload.price,
            }
        case 'REMOVE':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id),
                total: state.total - action.payload.price
            }
        default:
            return state
    }
}

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState)

   return (
    <CartContext.Provider value={{ state, dispatch }} >
        {children}
    </CartContext.Provider>
   )
}

export default CartProvider