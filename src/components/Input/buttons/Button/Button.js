import React from 'react';
import {StyledButton} from "./components";

export default function Button ({type, children}){
    return(
        <StyledButton type={type}>{children}</StyledButton>
    )
}
