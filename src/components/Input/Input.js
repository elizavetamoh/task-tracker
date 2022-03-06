import React from "react";
import {Text, StyledInput} from "./components";

function blurHandler(event) {
    return event.target.value.trim();
}

export default function Input({label, name, type, id, value, onChange, accept, multiple, required}){
    return(
        <label>
            <Text>{label}</Text>
            <StyledInput
                name={name}
                type={type}
                id={id}
                value={value}
                onChange={onChange}
                onBlur={blurHandler}
                accept={accept}
                multiple={multiple}
                required={required} />
        </label>
    );
}
