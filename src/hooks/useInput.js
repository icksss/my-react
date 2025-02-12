import { useState } from 'react';

const useInput = (initValue, validator, message) => {
    const [value, setValue] = useState(initValue);
    const onChange = (event) => {
        let willUpdate = true;
        console.log(
            'useInput value : ',
            value,
            ', event.target.value : ',
            event.target.value
        );
        if (typeof validator === 'function') {
            willUpdate = validator(event.target.value);
            // willUpdate = validator(value);
        }
        if (willUpdate) {
            setValue(event.target.value);
        } else {
            console.log('validator is fail message : ', message);
        }
    };
    return { value, onChange };
};

export default useInput;
