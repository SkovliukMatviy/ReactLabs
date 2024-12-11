import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useBeforeUnload = (shouldBlock, onBlock) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!shouldBlock) return;

        const handleBeforeUnload = (event) => {
            event.preventDefault();
            event.returnValue = '';
            if (onBlock) onBlock();
        };

        const handleNavigate = (event) => {
            event.preventDefault();
            if (onBlock) onBlock();
        };

        window.addEventListener('beforeunload', handleBeforeUnload);
        navigate((location, action) => {
            if (action !== 'POP') {
                handleNavigate();
                return false;
            }
            return true;
        });

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [shouldBlock, onBlock, navigate]);
};
