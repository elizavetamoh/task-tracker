import React from "react";
import {StyledVisibilityButton, Img} from "./components";

const EYE = "https://w7.pngwing.com/pngs/483/973/png-transparent-computer-icons-icon-design-eye-visualization-eyeball-logo-media-black.png";
const EYE_OFF = "https://pic.onlinewebfonts.com/svg/img_296463.png"

function show_hide_password(){
    let input = document.getElementById('passwordInput');
    let icon = document.getElementById("visibilityButton");
    if (input.getAttribute('type') === 'password') {
        input.setAttribute('type', 'text');
        icon.setAttribute('src', EYE_OFF);
    } else {
        input.setAttribute('type', 'password');
        icon.setAttribute('src', EYE);

    }
    return false;
}

export default function VisibilityButton() {
    return (
        <StyledVisibilityButton type="button" onClick={show_hide_password}>
            <Img id="visibilityButton" src ="https://w7.pngwing.com/pngs/483/973/png-transparent-computer-icons-icon-design-eye-visualization-eyeball-logo-media-black.png"/>
        </StyledVisibilityButton>
    );
}
