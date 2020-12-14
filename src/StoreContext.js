import React, { useState, createContext } from "react";

export const StoreContext = createContext();

export const StoreProvider = props => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Green tea',
            price: 50
        },
        {
            id: 2,
            name: 'Coffee',
            price: 100
        },
        {
            id: 3,
            name: 'Chips',
            price: 100
        },
        {
            id: 4,
            name: 'Pizza',
            price: 200
        }
    ]);

    return (
        <StoreContext.Provider value={[cartItems, setCartItems]}>
            {props.children}
        </StoreContext.Provider>
    );
}