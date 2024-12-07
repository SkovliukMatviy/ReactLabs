import React from 'react';
import AddItemForm from './components/AddItemForm';
import ShoppingList from './components/ShoppingList';
import { ShoppingListProvider } from './context/ShoppingListContext';

function App() {
    return (
        <ShoppingListProvider>
            <div className="App">
                <h1>Shopping List</h1>
                <AddItemForm />
                <ShoppingList />
            </div>
        </ShoppingListProvider>
    );
}

export default App;
