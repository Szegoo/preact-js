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
        </div>
    )
}