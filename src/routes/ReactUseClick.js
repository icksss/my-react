import { useState } from 'react';
import useClick from '../hooks/useClick';

function ReactUseClick() {
    const [show, setShow] = useState(true);
    const sayHello = (event) => {
        console.log('sayHello clicked');
    };
    const playUnMount = (event) => {
        setShow(!show);
    };
    const title = useClick(sayHello);
    const unMountTest = useClick(playUnMount);
    return (
        <div>
            ReactUseClick
            {show ? <h1 ref={title}>show</h1> : <h1>hide</h1>}
            <span ref={unMountTest}>unMount</span>
        </div>
    );
}

export default ReactUseClick;
