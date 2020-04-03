import React from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import Auth from "./components/Auth/Auth";
import Todo from "./components/Todo/Todo";
import Profile from "./components/Profile/Profile";
import { userLogout } from './redux/actions/user';

function App({ authorized, dispatch }) {
    return (
        <BrowserRouter>
            <Helmet>
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            { authorized ?   <Header /> : null }
            <div className="container">
                <Switch>
                    <Route 
                        path="/auth/logout" 
                        render={() => {
                            dispatch(userLogout());
                            return <Redirect 
                                to={{
                                    pathname: '/auth',
                                }}
                            />
                        }} 
                    />
                    <Route
                        path="/auth"
                        render={() =>
                            authorized ? (
                                <Redirect
                                    to={{
                                        pathname: '/',
                                    }}
                                />
                            ) : (
                                <Auth />
                            )
                        }
                    />
                    <Route
                        path="/profile"
                        render={() =>
                            !authorized ? (
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
                            !authorized ? (
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

export default connect(mapStateToProps)(App);
