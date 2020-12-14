import React, { useContext, useState } from 'react';
import { StoreContext } from '../StoreContext';

export const AddItem = () => {
    const [cartItems, setCartItems] = useContext(StoreContext);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);

    const onSubmitHandler = (event) => {
        event.preventDefault();
        setCartItems(prevItems => [...prevItems, { id: prevItems.length + 1, name: title, price: Number(price) }]);
        setTitle('');
        setPrice(0);
    }

    return (
        <form onSubmit={onSubmitHandler}>
            Title :<input type="text" name="title" value={title} onChange={(ev) => setTitle(ev.target.value)} />
            <br />
            Amount: <input type="text" name="price" value={price} onChange={(ev) => setPrice(ev.target.value)} />
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}