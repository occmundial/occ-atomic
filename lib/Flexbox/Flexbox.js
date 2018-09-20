import React from 'react';
import PropTypes from 'prop-types';

/** The Flexbox component uses the grid system of flexbox. */
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
    /** Use the value 'flex' or 'inline-flex' to give your container the flex properties. If you're using the Flexbox component just as a child of another Flexbox, then don't specify any value here. */
    display: PropTypes.string,
    /** The direction property specifies in which direction the items will be aligned. The options are 'col' (column), 'row', 'colR' (column reverse) and 'rowR' (row reverse). */
    direction: PropTypes.string,
    /** The wrap property specifies if the content will cut to a new line or not. The options are 'wrap', 'noWrap' and 'wrapR' (wrap reverse). */
    wrap: PropTypes.string,
    /** justifyContent is the way the items are going to be aligned in the column or row (according to the value given in 'direction'). The options are 'start' (flex-start), 'end' (flex-end), 'center', 'between' (space-between), 'around' (space-around) and 'evenly' (space-evenly). */
    justifyContent: PropTypes.string,
    /** alignItems determines how the items will be aligned in the specified direction axis. The options are 'start' (flex-start), 'end' (flex-end), 'center', 'baseline' and 'stretch'. */
    alignItems: PropTypes.string,
    /** This property has effect when there's more than one line of items. It determines how this items are going to be aligned. */
    alignContent: PropTypes.string,
    /** Use this property if your Flexbox is a child of another Flexbox and you want to specify its flex properties (flex-grow, flex-shrink and flex-basis). */
    flex: PropTypes.string,
    /** Use the order property for a Flexbox inside of another Flexbox to specify its order. */
    order: PropTypes.number,
    /** Use it in the same case as flex and order. The alignSelf property allows you to override the value of alignItems. */
    alignSelf: PropTypes.string,
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
};

export default Flexbox;