import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

class Flexbox extends React.Component {
    
    render() {
        const { classes, children, display, direction, wrap, justifyContent, alignItems, alignContent, order, flex, alignSelf, id, className } = this.props;
        let { style } = this.props;
        let displayClass = display ? display == 'inline-flex' ? classes.iFlex : classes.flex : '';
        if (!style)
            style = {};
        if (order)
            style.order = order;
        if (flex)
            style.flex = flex;
        return (
            <div
                className={`${displayClass}${(display && direction) ? ` ${classes[direction]}` : ''}${(display && wrap) ? ` ${classes[wrap]}` : ''}${(display && justifyContent) ? ` ${classes[`j${justifyContent}`]}` : ''}${(display && alignItems) ? ` ${classes[`a${alignItems}`]}` : ''}${(display && alignContent) ? ` ${classes[`c${alignContent}`]}` : ''}${(alignSelf) ? ` ${classes[`s${alignSelf}`]}` : ''}${className ? ` ${className}` : ''}`}
                id={id}
                style={style}>
                {children}
            </div>
        );
    }
}

Flexbox.propTypes = {
    classes: PropTypes.object,
    children: PropTypes.node,
    display: PropTypes.string,
    direction: PropTypes.string,
    wrap: PropTypes.string,
    justifyContent: PropTypes.string,
    alignItems: PropTypes.string,
    alignContent: PropTypes.string,
    order: PropTypes.number,
    flex: PropTypes.string,
    alignSelf: PropTypes.string,
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
};

export default Flexbox;