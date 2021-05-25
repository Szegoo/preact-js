import { useState } from 'react';

export default () => {
    const login = () => {
        console.log(email);
        console.log(password);
    }
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div >
            <form className="login-form">
                <img src="./images/avatar.png" />
                <label>Email</label>
                <input onChange={(e) => { setEmail(e.target.value); }} />
                <label>Password</label>
                <input onChange={(e) => { setPassword(e.target.value) }} type="password" />
                <button onClick={login}>Login</button>
            </form>
            <style>{`
                .login-form > img {
                    width: 3em;
                    margin: 0 auto;
                    display: block;
                    margin-top: 0;
                    margin-bottom: .5em;
                }
                .login-form {
                    box-shadow: 1px 1px 10px;
                    width: fit-content;
                    padding: 1.5em 1.5em; }
                .login-form > input {
                        display: block;
                        padding: .5em 2em;
                        border: 1px solid #3d7cc4;
                        border-radius: 1em;
                        margin-bottom: 1em; }
                .login-form > label {
                        font-size: .9em; }
                .login-form > button {
                        padding: .5em 1em;
                        border: none;
                        background-color: #166aca;
                        color: white;
                        display: block;
                        margin: 0 auto;
                        width: 100%;
                        cursor: pointer;
                        transition: all .2s linear; }
                .login-form > button:hover {
                        background-color: #0c3a6e;
                        transform: scale(1.05, 1.05); }
            `}</style>
        </div>
    )
}