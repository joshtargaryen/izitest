import React from 'react';
// proptypes package
import PropTypes from 'prop-types';
//button styler (would style according to web designer specifications, just using this for speed & prettiness)
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-blue.css' ;


const Button = ({ className, type, cb, ...props }) => {
    return (
        <AwesomeButton
        type={type}
        size="medium"
        action={cb}
        >
          Share
        </AwesomeButton>
      );
    
};

Button.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    cb: PropTypes.func
};

Button.defaultProps = {
    className: null,
    type: null,
    action: null
};

export default Button;
