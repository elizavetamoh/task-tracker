import React from 'react';
import {StyledHeader, Title}  from "./components";

export default function Header ({title}){
        return(
            <StyledHeader>
                <Title>{title}</Title>
            </StyledHeader>
        )
}