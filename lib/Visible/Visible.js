import React from 'react';
import PropTypes from 'prop-types';

import grid from '../subatomic/grid';

/** Shows the content on the specified window size. */
class Visible extends React.Component {
    
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
    
    render() {
        const { width } = this.state;
        const { children, xs, sm, md, lg} = this.props;
        if (
            ((width >= grid.xs && width < grid.sm) && xs) ||
            ((width >= grid.sm && width < grid.md) && sm) ||
            ((width >= grid.md && width < grid.lg) && md) ||
            ((width >= grid.lg) && lg)
        ) {
            return <span>{children}</span>;
        } else {
            return <span />;
        }
    }
}

Visible.propTypes = {
    children: PropTypes.node,
    /** Apply in extra small window size. */
    xs: PropTypes.bool,
    /** Apply in small window size. */
    sm: PropTypes.bool,
    /** Apply in medium window size. */
    md: PropTypes.bool,
    /** Apply in large window size. */
    lg: PropTypes.bool
};

export default Visible;