import React from 'react';
import { connect } from 'react-redux';
import { userLogout } from '../../redux/actions/user';
import { Redirect } from 'react-router-dom';

function Logout({ logout }) {
    logout();
    return <Redirect to='/'/>;
}

function mapDispatchToProps(dispatch) {
    return {
        logout: () => dispatch(userLogout()),
    };
}

export default connect(null, mapDispatchToProps)(Logout);