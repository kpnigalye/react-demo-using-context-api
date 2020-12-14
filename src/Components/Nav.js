import React, { useContext } from 'react';
import { StoreContext } from '../StoreContext';

export const Nav = () => {
    const [cartItems, setCartItems] = useContext(StoreContext);

    const total = cartItems.map(item => item.price).reduce((a, b) => a + b);

    return (
        <div>
            <h2>Total Amount: {total}</h2>
            <h2>Total ITems: {cartItems.length}</h2>
            <hr />
        </div>
    );
}