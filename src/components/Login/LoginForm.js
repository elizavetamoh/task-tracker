import React from 'react';
import './LoginForm.css';

function handleChange(event) {
    console.log(event.target.value);
}

function blurHandler(event) {
    console.log(event.target.value.trim());
}


function show_hide_password(target){
    let input = document.getElementById('passwordInput');
    if (input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
    } else {
        input.setAttribute('type', 'password');
    }
    return false;
}

export default function LoginForm() {
    return(
        <div className="loginForm">
            <form>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={handleChange} onBlur={blurHandler}/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" id="passwordInput" onChange={handleChange} onBlur={blurHandler}/>
                    <a href="#" className="password-control" onClick={show_hide_password}><img src="https://designlooter.com/images/eye-svg-19.png"/></a>
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}
