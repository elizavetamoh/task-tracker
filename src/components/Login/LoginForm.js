import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import Input from "../Input";

const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
`

const ButtonImg = styled.button`
    border: none;
    background-color: #fff0;
    text-decoration: none;
    outline: none;
    cursor: pointer;
    position: relative;
    bottom: 19px;
    left: 90px;
`

const Img = styled.img`
    width: 15px;
`

function show_hide_password(target){
    let input = document.getElementById('passwordInput');
    if (input.getAttribute('type') === 'password') {
        input.setAttribute('type', 'text');
    } else {
        input.setAttribute('type', 'password');
    }
    return false;
}



export default function LoginForm(){

    const [profile, setProfile] = useState({
        username: "",
        password: "",
    });

    const onNameChange = (e) => {
        setProfile({ ...profile, username: e.target.value });
    };

    const onPasswordChange = (e) => {
        setProfile({ ...profile, password: e.target.value });
    };

    useEffect(() => {
        console.log("change!!!");
    });


    const showNameAndPass = () => {
        console.log(profile)

    }
        return(
            <Form>
                <Input name={"Username"} type={"text"} id={""} onChange={onNameChange}/>
                <Input name={"Password"} type={"password"} id="passwordInput" onChange={onPasswordChange}/>
                <ButtonImg type="button" onClick={show_hide_password}>
                    <Img src="https://designlooter.com/images/eye-svg-19.png"/>
                </ButtonImg>
                <button type="button" onClick={showNameAndPass}>Submit</button>

            </Form>
    )
}