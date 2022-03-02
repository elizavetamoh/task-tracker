import React from 'react';

import styled from 'styled-components'

const StyledHeader = styled.header`
        display: flex;
        justify-content: center;
        width: 100%;
        background: #b07694;
        height: 70px;
        position: fixed;
`

const Title = styled.h1`
        font-size: 200%;
        margin: 1%;
        color: aliceblue;
`


export default function Header (props){
        return(
            <StyledHeader>
                <Title>{props.title}</Title>
            </StyledHeader>
        )
}