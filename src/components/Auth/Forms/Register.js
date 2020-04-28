import React, { useState } from 'react';
import { useCookies } from "react-cookie";
import axios from "axios";
import Button from '../../Form/Button/Button';
import Input from '../../Form/Input/Input';

const sendRequest = (data) => {
    return axios({
        method: "post",
        url: "http://localhost:4000/api/profile/register",
        data: Object.keys(data)
            .map(function (key) {
                return (
                    encodeURIComponent(key) +
                    "=" +
                    encodeURIComponent(data[key])
                );
            })
            .join("&"),
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Cache-Control": "no-cache",
        },
    });
};

function Login() {
    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const [loginError, setLoginError] = useState("");
    const [, setCookies] = useCookies(["auth"]);

    const submitForm = (e) => {
        e.preventDefault();
        setLoginError("");

        if ( validation() ) {
            sendRequest({
                login,
                email,
                password
            })
                .then((res) => {
                    console.dir(res);
                    setCookies("auth", res.data.data_id, {path: "/"});
                })
                .catch((error) => {
                    console.error(error.message);
                    setLoginError(error.message);
                });
        } else {
            setLoginError("Перевірте вказані пароль та логін!");
        }
        
        return false;
    };

    const validation = () => login && email && password && password === passwordRepeat;

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
            {loginError ? (
                    <p
                        className="error"
                        style={{
                            color: "tomato",
                            margin: ".5em 0",
                            fontWeight: 700,
                        }}
                    >{ loginError.toString() }</p>
                ) : null}
            <Button type="submit">Зареструватися</Button>
        </form>
        </React.Fragment>
    );
}

export default Login;