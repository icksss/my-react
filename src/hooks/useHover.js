import { useEffect, useRef, useState } from 'react';

const useHover = (method) => {
    const element = useRef();

    console.log(element.target);
    if (typeof method === 'function') {
        useEffect(() => {
            if (element.current) {
                element.current.addEventListener('mouseenter', method);
            }
            return () => {
                if (element.current) {
                    element.current.removeEventListener('mouseenter', method);
                }
            };
        }, []);
    }

    return element;
};

export default useHover;
