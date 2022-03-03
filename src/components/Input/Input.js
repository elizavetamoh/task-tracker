import React from "react";
import {Text, StyledInput} from "./components";

function handleChange(event) {
    return event.target.value;
}

function blurHandler(event) {
    return event.target.value.trim();
}

export default function Input({name, type, id, onChange}){
    return(
        <label>
            <Text>{name}</Text>
            <StyledInput type={type} id={id} onChange={onChange} onBlur={blurHandler}/>
        </label>
    );
}
