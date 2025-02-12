import { useEffect } from 'react';

const usePageLeave = (hander) => {
    if (hander && typeof hander === 'function') {
        useEffect(() => {
            console.log('Mount useEffect!');
            document.addEventListener('mouseleave', hander);
            return () => {
                console.log('unMount useEffect!');
                document.removeEventListener('mouseleave', hander);
            };
        }, []);
    }
};

export default usePageLeave;
