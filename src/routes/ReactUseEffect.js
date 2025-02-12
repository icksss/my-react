import { useEffect, useState } from 'react';

function ReactUseEffect() {
    const sayHello = () => {
        console.log('say hello!');
    };

    const [number, setNumber] = useState(0);
    const [aNumber, setAnumber] = useState(0);
    useEffect(() => {
        sayHello();
    }, [number]);
    return (
        <div>
            <h1>hello</h1>
            <button onClick={() => setNumber(number + 1)}>{number}</button>
            <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
        </div>
    );
}

export default ReactUseEffect;
