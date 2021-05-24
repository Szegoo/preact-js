import { useState } from 'react';

export default () => {
    const login = () => {
        console.log(email);
        console.log(password);
    }
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="login-form">
            <label>Email</label>
            <input onChange={(e) => { setEmail(e.target.value); }} />
            <label>Password</label>
            <input onChange={(e) => { setPassword(e.target.value) }} type="password" />
            <button onClick={login}>Login</button>
            <style>{`
                .login-form {
                    box-shadow: 1px 1px 10px;
                    width: fit-content;
                    padding: 1em; }
                    .login-form > input {
                        display: block;
                        margin-bottom: 1em; }
                    .login-form > label {
                        font-size: .9em; }
                    .login-form > button {
                        padding: .3em 1em;
                        border: none;
                        background-color: #166aca;
                        color: white;
                        display: block;
                        margin: 0 auto;
                        transition: all .2s linear; }
                        .login-form > button:hover {
                        background-color: #0c3a6e;
                        transform: scale(1.1, 1.1); }
            `}</style>
        </div>
    )
}