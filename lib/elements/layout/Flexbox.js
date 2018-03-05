import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
    flex: {
        display:'flex'
    },
    iFlex: {
        display:'inline-flex'
    },
    row: {
        flexDirection:'row'
    },
    rowR: {
        flexDirection:'row-reverse'
    },
    col: {
        flexDirection:'column'
    },
    colR: {
        flexDirection:'column-reverse'
    },
    noWrap: {
        flexWrap:'nowrap'
    },
    wrap: {
        flexWrap:'wrap'
    },
    wrapR: {
        flexWrap:'wrap-reverse'
    },
    jstart: {
        justifyContent:'flex-start'
    },
    jend: {
        justifyContent:'flex-end'
    },
    jcenter: {
        justifyContent:'center'
    },
    jbetween: {
        justifyContent:'space-between'
    },
    jaround: {
        justifyContent:'space-around'
    },
    jevenly: {
        justifyContent:'space-evenly'
    },
    astart: {
        alignItems:'flex-start'
    },
    aend: {
        alignItems:'flex-end'
    },
    acenter: {
        alignItems:'center'
    },
    abase: {
        alignItems:'baseline'
    },
    astretch: {
        alignItems:'stretch'
    },
    cstart: {
        alignContent:'flex-start'
    },
    cend: {
        alignContent:'flex-end'
    },
    ccenter: {
        alignContent:'center'
    },
    cbetween: {
        alignContent:'space-between'
    },
    caround: {
        alignContent:'space-around'
    },
    cstretch: {
        alignContent:'stretch'
    },
    sauto: {
        alignSelf:'auto'
    },
    sstart: {
        alignSelf:'flex-start'
    },
    send: {
        alignSelf:'flex-end'
    },
    scenter: {
        alignSelf:'center'
    },
    sbase: {
        alignSelf:'baseline'
    },
    sstretch: {
        alignSelf:'stretch'
    }
};

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

export default injectSheet(styles)(Flexbox);