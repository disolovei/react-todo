import React, { useState } from "react";
import Login from './Forms/Login';
import Register from './Forms/Register';

function Auth() {
    const [presentation, setPresentation] = useState('login');

    return (
        <div className="forms">
            <header>
                <button type="button" className={'login' === presentation ? ' active' : null} onClick={() => {setPresentation('login')}}>Увійти</button>
                <button type="button" className={'register' === presentation ? ' active' : null} onClick={() => {setPresentation('register')}}>Зареєструватися</button>
            </header>
            {'login' === presentation ? <Login /> : <Register />}
        </div>
    );
}

export default Auth;
