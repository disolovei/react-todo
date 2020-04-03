import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="site-header">
            <div className="container">
                <nav>
                    <ul>
                        <li>
                            <Link to="">Головна</Link>
                        </li>
                        <li>
                            <Link to="/profile">Профіль</Link>
                        </li>
                        <li>
                            <Link to="/auth/logout">Вийти</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;