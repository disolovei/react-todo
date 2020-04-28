import React, { useState } from "react";
import axios from "axios";
import Button from "../../Form/Button/Button";
import Input from "../../Form/Input/Input";
import { useCookies } from "react-cookie";

const sendRequest = (data) => {
    return axios({
        method: "post",
        url: "http://localhost:4000/api/profile/login",
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
    const [password, setPassword] = useState("");
    const [loginInvalid, setLoginInvalid] = useState(false);
    const [passInvalid, setPassInvalid] = useState(false);
    const [loginError, setLoginError] = useState("");
    const [, setUserId] = useCookies(['auth']);

    const submitForm = (e) => {
        e.preventDefault();
        setLoginError("");

        if (validation()) {
            sendRequest({
                login,
                password,
            })
                .then((response) => {
                    setUserId("auth", response.data.data.id, {path: "/"});
                })
                .catch((error) => {
                    setLoginError(error.message);
                });
        } else {
            setLoginError("Перевірте вказані пароль та логін!");
        }

        return false;
    };

    const validation = () => {
        let isValid = true;
    
        if (!login) {
            isValid = false;
            setLoginInvalid(true);
        }
    
        if (!password) {
            isValid = false;
            setPassInvalid(true);
        }
    
        return isValid;
    };

    return (
        <React.Fragment>
            <h2>Авторизація</h2>
            <form onSubmit={submitForm}>
                <label>
                    <Input
                        type="text"
                        name="login"
                        placeholder="Логін"
                        className={loginInvalid ? "invalid" : null}
                        value={login}
                        onChange={(e) => {
                            if (loginInvalid) {
                                setLoginInvalid(false);
                            }

                            setLogin(e.target.value);
                        }}
                    />
                </label>
                <label>
                    <Input
                        type="password"
                        name="password"
                        placeholder="Пароль"
                        className={passInvalid ? "invalid" : null}
                        value={password}
                        onChange={(e) => {
                            if (passInvalid) {
                                setPassInvalid(false);
                            }

                            setPassword(e.target.value);
                        }}
                    />
                </label>
                {loginError ? (
                    <p
                        className="error"
                        style={{
                            color: "tomato",
                            margin: ".5em 0",
                            fontWeight: 700,
                            transition: `opacity 300ms ease-in-out`
                        }}
                    >{ loginError.toString() }</p>
                ) : null}
                <Button type="submit">Увійти</Button>
            </form>
        </React.Fragment>
    );
}

export default Login;
