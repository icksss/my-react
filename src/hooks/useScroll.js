import { useEffect, useState } from 'react';

const useScroll = (cb) => {
    const [state, setState] = useState({
        x: 0,
        y: 0
    });
    const mouseHandler = () => {
        console.log(window.scrollX, window.scrollY);
        cb();
        setState({ x: window.scrollX, y: window.scrollY });
    };
    useEffect(() => {
        window.addEventListener('scroll', mouseHandler);
        () => window.removeEventListener('scroll', mouseHandler);
    }, []);

    return state;
};

export default useScroll;
