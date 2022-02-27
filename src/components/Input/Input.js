import React from "react";
import styled from 'styled-components'

const Text = styled.p`
    margin-bottom: 5%;
    margin-top: 5%;
`

function handleChange(event) {
    return event.target.value;
}

function blurHandler(event) {
    return event.target.value.trim();
}

export default function Input(props){
    return(
        <label>
            <Text>{props.name}</Text>
            <input type={props.type} id={props.id} onChange={handleChange} onBlur={blurHandler}/>
        </label>
    );
}

