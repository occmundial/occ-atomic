import React from 'react';
import PropTypes from 'prop-types';

import grid from '../subatomic/grid';

/** Hides the content on the specified window size. */
class Hidden extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            width: 0
        };
        this.getDimensions = this.getDimensions.bind(this);
    }
    
    componentDidMount() {
        this.getDimensions();
        window.addEventListener("resize", this.getDimensions);
    }
    
    componentWillUnmount() {
        this.getDimensions();
        window.removeEventListener("resize", this.getDimensions);
    }
    
    getDimensions() {
        const width = window.innerWidth;
        this.setState({
            width
        });
    }
    
    getClassNames() {
        const { classes, xs, sm, md, lg } = this.props;
        let className = '';
        if (xs) className += classes.xs + ' ';
        if (sm) className += classes.sm + ' ';
        if (md) className += classes.md + ' ';
        if (lg) className += classes.lg + ' ';
        return className;
    }
    
    render() {
        const { width } = this.state;
        const { children, xs, sm, md, lg, mediaQuery} = this.props;
        let className;
        if (mediaQuery) {
            className = this.getClassNames();
            return <span className={className}>{children}</span>;
        } else {
            if (
                ((width >= grid.xs && width < grid.sm) && xs) ||
                ((width >= grid.sm && width < grid.md) && sm) ||
                ((width >= grid.md && width < grid.lg) && md) ||
                ((width >= grid.lg) && lg)
            ) {
                return <span />;
            } else {
                return <span>{children}</span>;
            }
        }
    }
}

Hidden.propTypes = {
    classes: PropTypes.object,
    children: PropTypes.node,
    /** Apply in extra small window size. */
    xs: PropTypes.bool,
    /** Apply in small window size. */
    sm: PropTypes.bool,
    /** Apply in medium window size. */
    md: PropTypes.bool,
    /** Apply in large window size. */
    lg: PropTypes.bool,
    /** The boolean prop mediaQuery allows you to hide the elements using CSS instead of JS. */
    mediaQuery: PropTypes.bool
};

export default Hidden;