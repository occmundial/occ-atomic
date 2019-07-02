import React from 'react';
import PropTypes from 'prop-types';

/** Component to display heading tags with its coresponding style. */
class Title extends React.Component {

    componentDidMount() {
        if (process.env.NODE_ENV === 'development') {
            console.warn('DEPRECATED: The Title component will be removed soon. Use the Text component instead.');
        }
    }

    render() {
        const { classes, children, h, id, className, style } = this.props;
        let Heading;
        if (h && h<=6 && h>=1)
            Heading = `h${h}`;
        else
            Heading = 'h1';
        return (
            <Heading id={id} className={`${classes.title} ${classes[Heading]}${className ? ` ${className}` : ''}`} style={style}>
                {children}
            </Heading>
        );
    }
}

Title.propTypes = {
    classes: PropTypes.object,
    children: PropTypes.node,
    /** A number with the heading level, between 1 and 6. */
    h: PropTypes.number.isRequired,
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default Title;
