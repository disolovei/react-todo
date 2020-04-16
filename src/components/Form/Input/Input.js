import React from 'react';
import PropTypes from 'prop-types';

function Input({ ...attributes }) {
    return <input { ...attributes } />
}

Input.propTypes = {
    type: PropTypes.oneOf(['text', 'email', 'password', 'number']),
    name: PropTypes.string.isRequired,
};

Input.defaultProps = {
    type: 'text',
};

export default Input;