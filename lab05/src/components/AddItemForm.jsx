import React, { useState } from 'react';
import { useShoppingList } from '../context/ShoppingListContext';

const AddItemForm = () => {
    const [itemName, setItemName] = useState('');
    const { addItem } = useShoppingList();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (itemName) {
            addItem(itemName);
            setItemName('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                placeholder="Enter item"
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddItemForm;
