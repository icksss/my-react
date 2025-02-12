import defaultAxios from 'axios';
import { useEffect, useState } from 'react';

const useAxios = (opts, axiosInstance = defaultAxios) => {
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null
    });
    const [trigger, setTrigger] = useState(0);
    if (!opts.url) {
        return;
    }
    useEffect(() => {
        axiosInstance(opts)
            .then((data) => {
                setState({
                    ...state,
                    loading: false,
                    data: data
                });
            })
            .catch((error) => {
                setState({
                    ...state,
                    loading: false,
                    error: error
                });
            });
    }, [trigger]);

    const refetch = () => {
        setState({
            ...state,
            loading: true
        });
        setTrigger(trigger + 1);
    };
    return { ...state, refetch };
};

export default useAxios;
