import React, { useState } from "react";

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
                <input
                    type="text"
                    name="login"
                    placeholder="Логін"
                    value={login}
                    onChange={e => {setLogin(e.target.value)}}
                />
            </label>
            <label>
                <input
                    type="email"
                    name="email"
                    placeholder="Електронна пошта"
                    value={email}
                    onChange={e => {setEmail(e.target.value)}}
                />
            </label>
            <label>
                <input
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={e => {setPassword(e.target.value)}}
                />
            </label>
            <label>
                <input
                    type="password"
                    name="password_repeat"
                    placeholder="Повторіть пароль"
                    value={passwordRepeat}
                    onChange={e => {setPasswordRepeat(e.target.value)}}
                />
            </label>
            <button type="submit">Зареструватися</button>
        </form>
        </React.Fragment>
    );
}

export default Login;