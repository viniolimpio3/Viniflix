import React from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';

const ButtonLink = ({ href, children}) =>{
    return(
        <Link to={href}>
            {children}
        </Link>
    );
}

ButtonLink.defaultProps={
    href:'/',
}

ButtonLink.prototype = {
    href:PropTypes.string,
    children:PropTypes.node.isRequired
}

export default ButtonLink;
