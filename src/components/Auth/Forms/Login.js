import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { userLogin } from "../../../redux/actions/user";
import Button from "../../Form/Button/Button";
import Input from "../../Form/Input/Input";

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

function Login({ auth }) {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [loginInvalid, setLoginInvalid] = useState(false);
    const [passInvalid, setPassInvalid] = useState(false);

    const submitForm = (e) => {
        e.preventDefault();

        if (validation()) {
            sendRequest({
                login,
                password,
            })
                .then((response) => {
                    console.log(response);
                    auth();
                })
                .catch((error) => {
                    console.log(error);
                });
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
                            if (passInvalid) {
                                setPassInvalid(false);
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
                <Button type="submit">Увійти</Button>
            </form>
        </React.Fragment>
    );
}

function mapDispathToProps(dispatch) {
    return {
        auth: (login, password) => dispatch(userLogin(login, password)),
    };
}

export default connect(null, mapDispathToProps)(Login);
