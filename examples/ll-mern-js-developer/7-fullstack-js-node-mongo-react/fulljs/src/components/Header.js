import React from 'react';
import PropTypes from 'prop-types';

const random = Math.random();
const color = random > 0.5 ? 'green' : 'red';
//you can use props or use destructuring and use message directly
const Header = ({message}) => {
    return (
        <h2 style={{color: color}} className="Header text-center">
           {message}
        </h2>
    )
}

Header.propTypes = {
    message: PropTypes.string.isRequired
}

Header.defaultProps = {
    message: "Default Header"
}

export default Header;