import { useEffect, useState } from 'react';

const useNetwork = (cb) => {
    const [status, setStatus] = useState(navigator.onLine);
    // console.log('status : ', status);
    if (typeof cb !== 'function') {
        return;
    }
    const changeHandler = () => {
        cb(navigator.onLine);
        setStatus(navigator.onLine);
    };
    useEffect(() => {
        window.addEventListener('online', changeHandler);
        window.addEventListener('offline', changeHandler);
        () => {
            window.removeEventListener('online', changeHandler);
            window.removeEventListener('offline', changeHandler);
        };
    }, []);
    return status;
};

export default useNetwork;
