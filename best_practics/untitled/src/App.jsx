import React from 'react';
import Header from './components/Header';
import Counter from './components/Counter';
import './styles/styles.css';

const App = () => (
    <div className="app-container">
        <Header title="Best Practices in React" />
        <main>
            <Counter />
        </main>
    </div>
);

export default App;
