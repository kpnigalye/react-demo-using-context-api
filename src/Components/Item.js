import React from 'react';

const Item = props => {
    return (
        <div>
            <h3>{props.index + 1}. {props.cartItem.name}</h3>
            <p>Price: {props.cartItem.price}</p>
        </div>
    );
}

export default Item;