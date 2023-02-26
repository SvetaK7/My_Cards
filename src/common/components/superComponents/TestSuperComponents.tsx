import React from 'react';
import SuperInputText from "./superInput/SuperInputText";
import SuperButton from "./superButton/SuperButton";
import SuperCheckbox from "./superCheckbox/SuperCheckbox";

export const TestSuperComponents = () => {
    return (
        <div>
            <SuperInputText/>
            <SuperButton>Send</SuperButton>
            <SuperCheckbox/>
        </div>
    )
}