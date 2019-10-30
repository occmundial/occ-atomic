import React from 'react';
import PropTypes from 'prop-types';
import getComponents from './helper';

/* Flatter translates plain html code to occ-atomic components, also performs the code cleansing & removes unallowed html tags */
const Flatter = ({ id, className, style, htmlText }) => {
    return (
        <div id={id} className={className} style={style}>
            {getComponents(htmlText)}
        </div>
    );
};

Flatter.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    /** Text of the Flatter. Must be a valid HTML Code */
    htmlText: PropTypes.string.isRequired
};

export default Flatter;
