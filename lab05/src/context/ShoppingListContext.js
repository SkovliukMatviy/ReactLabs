import React, { createContext, useContext, useState } from 'react';

// Створення контексту
const ShoppingListContext = createContext();

// Компонент, який надає доступ до стану списку покупок
export const ShoppingListProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    const addItem = (item) => {
        setItems([...items, item]);
    };

    const removeItem = (index) => {
        setItems(items.filter((_, i) => i !== index));
    };

    return (
        <ShoppingListContext.Provider value={{ items, addItem, removeItem }}>
            {children}
        </ShoppingListContext.Provider>
    );
};

// Хук для доступу до контексту
export const useShoppingList = () => {
    return useContext(ShoppingListContext);
};
