import { useRef, useState } from 'react';
import useHover from '../hooks/useHover';

function ReactUseHover() {
    const chagneColor = (event) => {
        console.log(event.target.style);
        if (event.target.style.backgroundColor === 'red') {
            event.target.style.backgroundColor = 'blue';
        } else {
            event.target.style.backgroundColor = 'red';
        }
    };
    const hover = useHover(chagneColor);

    return (
        <div>
            ReactUseHover
            <h1 ref={hover} style={{ backgroundColor: 'red' }}>
                userHover here!
            </h1>
        </div>
    );
}

export default ReactUseHover;
