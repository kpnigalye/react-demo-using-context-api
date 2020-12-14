import React, { useState, useContext } from 'react';
import Item from './Item';
import { StoreContext } from "../StoreContext";

const Recipe = () => {
    const [cartItems, setCartItems] = useContext(StoreContext);

    return (
        <div>
            {cartItems.map((item, index) => (
                <Item 
                    key={item.id} 
                    index = {index} 
                    cartItem={item} />
            ))}
        </div>
    );
}

export default Recipe;