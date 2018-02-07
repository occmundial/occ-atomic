import React from 'react';
import PropTypes from 'prop-types';
import v from './globals';

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
            ((width >= v.breakpoints.xs && width < v.breakpoints.sm) && xs) ||
            ((width >= v.breakpoints.sm && width < v.breakpoints.md) && sm) ||
            ((width >= v.breakpoints.md && width < v.breakpoints.lg) && md) ||
            ((width >= v.breakpoints.lg) && lg)
        ) {
            return (
                children
            );
        } else {
            return (null)
        }
    }
}

Visible.propTypes = {
    children: PropTypes.object,
    xs: PropTypes.bool,
    sm: PropTypes.bool,
    md: PropTypes.bool,
    lg: PropTypes.bool
}

export default Visible;