import React from "react";
import {Text, StyledInput} from "./components";

// function handleChange(event) {
//     return event.target.value;
// }

function blurHandler(event) {
    return event.target.value.trim();
}

export default function Input({label, name, type, id, value, onChange, required}){
    return(
        <label>
            <Text>{label}</Text>
            <StyledInput name={name} type={type} id={id} value={value} onChange={onChange} onBlur={blurHandler} required={required} />
        </label>
    );
}
