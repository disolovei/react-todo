import React, { useState } from "react";
import Login from "./Forms/Login";
import Register from "./Forms/Register";
import Button from "../Form/Button/Button";

function Auth({cookies}) {
    const [presentation, setPresentation] = useState("login");

    return (
        <div className="forms">
            <header>
                <Button
                    type="button"
                    className={"login" === presentation ? "active" : null}
                    onClick={() => {
                        setPresentation("login");
                    }}
                >
                    Увійти
                </Button>
                <Button
                    type="button"
                    className={"register" === presentation ? "active" : null}
                    onClick={() => {
                        setPresentation("register");
                    }}
                >
                    Зареєструватися
                </Button>
            </header>
            {"login" === presentation ? <Login /> : <Register />}
        </div>
    );
}

export default Auth;
