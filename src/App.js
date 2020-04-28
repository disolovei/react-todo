import React from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import Auth from "./components/Auth/Auth";
import Todo from "./components/Todo/Todo";
import Profile from "./components/Profile/Profile";
import { withCookies } from "react-cookie";
import Logout from "./components/Auth/Logout";

function App({ cookies }) {
    const userId = cookies.get("auth");

    return (
        <BrowserRouter>
            <Helmet>
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            { userId ? <Header /> : null }
            <div className="container">
                <Switch>
                    <Route 
                        path="/auth/logout" 
                        component={Logout} 
                    />
                    <Route
                        path="/auth"
                        render={() =>
                            userId ? (
                                <Redirect
                                    to={{
                                        pathname: '/',
                                    }}
                                />
                            ) : (
                                <Auth cookies={cookies} />
                            )
                        }
                    />
                    <Route
                        path="/profile"
                        render={() =>
                            !userId ? (
                                <Redirect
                                    to={{
                                        pathname: '/auth',
                                    }}
                                />
                            ) : (
                                <Profile />
                            )
                        }
                    />
                    <Route 
                        path="/" 
                        render={() =>
                            !userId ? (
                                <Redirect
                                    to={{
                                        pathname: '/auth',
                                    }}
                                />
                            ) : (
                                <Todo />
                            )
                        }
                    />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

function mapStateToProps(state) {
    return {
        authorized: state.user.authorized,
    };
}

export default withCookies(connect(mapStateToProps)(App));
