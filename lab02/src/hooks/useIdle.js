import { useState, useEffect } from 'react';

export const useIdle = (timeout = 5000) => {
    const [isIdle, setIsIdle] = useState(false);

    useEffect(() => {
        let timer;

        const resetTimer = () => {
            setIsIdle(false);
            clearTimeout(timer);
            timer = setTimeout(() => setIsIdle(true), timeout);
        };


        window.addEventListener('mousemove', resetTimer);
        window.addEventListener('keydown', resetTimer);


        resetTimer();

        return () => {

            window.removeEventListener('mousemove', resetTimer);
            window.removeEventListener('keydown', resetTimer);
            clearTimeout(timer);
        };
    }, [timeout]);

    return isIdle;
};
