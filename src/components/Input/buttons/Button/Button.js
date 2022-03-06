import React from 'react';
import {StyledButton} from "./components";

export default function Button ({type, onClick, children, disabled}){
    return(
        <StyledButton type={type} disabled={disabled} onClick={onClick}>{children}</StyledButton>
    )
}
