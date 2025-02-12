import { useState } from 'react';
import useInput from '../hooks/useInput';

function ReactHook() {
    // const useInput = (initValue, validator, message) => {
    //     const [value, setValue] = useState(initValue);
    //     const onChange = event => {
    //         let willupdate = true;
    //         if (typeof validator === 'function') {
    //             willupdate = validator(event.target.value);
    //         }
    //         if (willupdate) {
    //             setValue(event.target.value);
    //         } else {
    //             console.log(message);
    //         }
    //     };
    //     return { value, onChange };
    // };
    const maxLen = (value) => value.length < 10;
    const emailChack = (value) => value.includes('@');
    const name = useInput('Mr.s', maxLen, 'input fail message');
    const email = useInput('test@naver.com', emailChack, 'input fail message');
    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <input placeholder="Name" {...name} />
            <input placeholder="Email" {...email} />
        </div>
    );
}
export default ReactHook;
