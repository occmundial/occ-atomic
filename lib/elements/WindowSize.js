import React, { Component } from 'react';

import grid from '../subatomic/grid';

export default function (ComposedComponent) {
    class WindowSize extends Component {
        constructor(props) {
            super(props);
            this.state = { size:'sm' };
            this.getDimensions = this.getDimensions.bind(this);
        }

        componentDidMount(){
            window.addEventListener("resize", this.getDimensions);
            this.getDimensions();
        }
        
        getDimensions() {
            const winWidth = window.innerWidth;
            this.setState({
                size: winWidth < grid.sm ? 'xs' : winWidth < grid.md ? 'sm' : winWidth < grid.lg ? 'md' : 'lg'
            });
        }

        render() {
            const { size } = this.state;
            return <ComposedComponent {...this.props} size={size} />;
        }
    }
    return WindowSize;
}
