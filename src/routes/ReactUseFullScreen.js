import { useState } from 'react';
import useFullScreen from '../hooks/useFullScreen';

function ReactUseFullScreen() {
    const [onFull, setOnFull] = useState(false);
    const cb = (status) => {
        console.log(status);
        setOnFull(status);
    };
    const { element, triggerFull, exitFull, isFull } = useFullScreen(cb);

    return (
        <>
            <div ref={element}>
                <button disabled={onFull ? false : true} onClick={exitFull}>
                    exit
                </button>
                <img src="https://i.ibb.co/R6RwNxx/grape.jpg" />
            </div>
            <button onClick={triggerFull}>fullscreen</button>
        </>
    );
}

export default ReactUseFullScreen;
