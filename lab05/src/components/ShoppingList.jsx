import React from 'react';
import { useShoppingList } from '../context/ShoppingListContext';

const ShoppingList = () => {
    const { items, removeItem } = useShoppingList();

    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    {item}
                    <button onClick={() => removeItem(index)}>Remove</button>
                </li>
            ))}
        </ul>
    );
};

export default ShoppingList;
