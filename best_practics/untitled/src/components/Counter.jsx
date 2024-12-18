import React, { useState } from 'react';
import Button from './Button';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="counter">
            <p>Current Count: {count}</p>
            <Button label="Increase" onClick={() => setCount(count + 1)} variant="success" />
            <Button label="Decrease" onClick={() => setCount(count - 1)} variant="danger" />
        </div>
    );
};

export default Counter;
