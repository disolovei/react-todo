import React from "react";
import PropTypes from "prop-types";

function Button({ children, ...attributes }) {
    return (
        <button
            { ...attributes }
        >
            {children}
        </button>
    );
}

Button.propTypes = {
    type: PropTypes.oneOf(["button", "submit"]),
};

Button.defaultProps = {
    type: "button",
};

export default Button;
