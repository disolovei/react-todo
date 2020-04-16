import React, { useState } from 'react';
import Button from '../../Form/Button/Button';
import Input from '../../Form/Input/Input';

function Login() {
    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const submitForm = (e) => {
        e.preventDefault();
        return false;
    };

    return (
        <React.Fragment>
            <h2>Реєстрація</h2>
            <form onSubmit={submitForm}>
            <label>
                <Input 
                    type="text"
                    name="login"
                    placeholder="Логін"
                    value={login}
                    onChange={e => {setLogin(e.target.value)}}
                />
            </label>
            <label>
                <Input
                    type="email"
                    name="email"
                    placeholder="Електронна пошта"
                    value={email}
                    onChange={e => {setEmail(e.target.value)}}
                />
            </label>
            <label>
                <Input
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={e => {setPassword(e.target.value)}}
                />
            </label>
            <label>
                <Input
                    type="password"
                    name="password_repeat"
                    placeholder="Повторіть пароль"
                    value={passwordRepeat}
                    onChange={e => {setPasswordRepeat(e.target.value)}}
                />
            </label>
            <Button type="submit">Зареструватися</Button>
        </form>
        </React.Fragment>
    );
}

export default Login;