import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, onClick, variant = 'primary' }) => (
    <button className={`btn btn-${variant}`} onClick={onClick}>
        {label}
    </button>
);

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    variant: PropTypes.oneOf(['primary', 'success', 'danger']),
};

export default Button;
