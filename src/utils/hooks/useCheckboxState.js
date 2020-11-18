import { useState } from 'react';

const UseCheckboxState = () => {
    const [checked, setChecked] = useState(false);

    return {
        checked,

        onChange: (event) => {
            console.log('target-check', event.target);
            if (event.target.checked) {
                setChecked(true);
            } else {
                setChecked(false);
            }
        },
        reset: () => setChecked(false)
    };
};

export default UseCheckboxState;
