import { useEffect, useRef, useState } from 'react';

const useClick = (onClick) => {
    const element = useRef();
    console.log('element : ', element);
    if (typeof onClick === 'function') {
        useEffect(() => {
            if (element.current) {
                element.current.addEventListener('click', onClick);
            }
            return () => {
                if (element.current) {
                    console.log('remove click');
                    element.current.removeEventListener('click', onClick);
                }
            };
        }, []);
    }
    return element;
};

export default useClick;
