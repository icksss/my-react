import useNetwork from '../hooks/useNetwork';

function ReactUseNetwork() {
    const callback = (arg) => {
        networkChange(arg);
    };
    const networkChange = (param) => {
        console.log('!!! param : ', param);
        param ? console.log('onLine') : console.log('offLine');
    };
    const onLine = useNetwork(callback);
    return <div>network status : {onLine ? 'onLine' : 'offLine'}</div>;
}

export default ReactUseNetwork;
