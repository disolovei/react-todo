import React, { useState } from "react";
import { connect } from 'react-redux';
import { userLogin } from '../../../redux/actions/user';

function Login({ auth }) {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    
    const submitForm = (e) => {
        e.preventDefault();

        if ( ! login || ! password ) {
            return false;
        }

        auth(login, password);

        return false;
    };

    return (
        <React.Fragment>
            <h2>Авторизація</h2>
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
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={e => {setPassword(e.target.value)}}
                />
            </label>
            <button type="submit">Увійти</button>
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
