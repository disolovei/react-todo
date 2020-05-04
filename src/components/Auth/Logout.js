import React from 'react';
import { Redirect } from 'react-router-dom';
import { useCookies } from "react-cookie";

function Logout() {
    const [,, removeAppCookie] = useCookies(["auth"]);
    removeAppCookie("auth", {path: "/"});
    return <Redirect to='/'/>;
}

export default Logout