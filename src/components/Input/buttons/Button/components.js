import styled from "styled-components";

export const StyledButton = styled.button`
    font-weight: 700;
    font-size: 1em;
    letter-spacing: .1em;
    color: #1e1b1b;
    padding: 1em 3em;
    border: 0;
    border-radius: 5em;
    background-color: #9be895;
    cursor: pointer;
    margin-top: 0.5em;
  :disabled {
    background-color: #acababab;
  }
`
