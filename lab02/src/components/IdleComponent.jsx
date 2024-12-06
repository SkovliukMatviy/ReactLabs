import React from 'react';
import { useIdle } from '../hooks/useIdle';

const IdleComponent = () => {
    const isIdle = useIdle(5000);

    return (
        <div>
            <h1>Трекер активності користувача</h1>
            <p>Користувач {isIdle ? 'неактивний' : 'активний'}</p>
        </div>
    );
};

export default IdleComponent;
