import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import $ from 'jquery';

/** This component displays a tooltip in a defined direction and alignment relative to a specified element. To make it work both, the target and the TourTip component, must be wrapped inside a 'relative' container. */
class TourTip extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            position: {}
        };
        this.attachToTarget = this.attachToTarget.bind(this);
    }
    
    componentDidMount() {
        const setPosition = () => {
            this.setState({
                position: this.attachToTarget()
            });
        };
        $(document).ready(setPosition);
        window.addEventListener("resize", setPosition);
    }
    
    attachToTarget() {
        const { target, direction, align } = this.props;
        const item = document.getElementById(target);
        const itemRect = item.getBoundingClientRect();
        const offsetLeft = item.offsetLeft;
        const offsetTop = item.offsetTop;
        const tip = ReactDOM.findDOMNode(this);
        const tipRect = tip.getBoundingClientRect();
        let position = {};
        if (direction == "left") {
            position.left = offsetLeft - tipRect.width - 5;
            if (align == "top")
                position.top = offsetTop;
            else if (align == "bottom")
                position.top = offsetTop + itemRect.height - tipRect.height;
            else
                position.top = offsetTop + (itemRect.height/2) - (tipRect.height/2);
        } else if (direction == "right") {
            position.left = offsetLeft + itemRect.width + 5;
            if (align == "top")
                position.top = offsetTop;
            else if (align == "bottom")
                position.top = offsetTop + itemRect.height - tipRect.height;
            else
                position.top = offsetTop + (itemRect.height/2) - (tipRect.height/2);
        } else if (direction == "up") {
            if (align == "left")
                position.left = offsetLeft;
            else if (align == "right")
                position.left = offsetLeft + itemRect.width -tipRect.width;
            else
                position.left = offsetLeft + (itemRect.width/2) - (tipRect.width/2);
            position.top = offsetTop - tipRect.height - 5;
        } else if (direction == "down") {
            if (align == "left")
                position.left = offsetLeft;
            else if (align == "right")
                position.left = offsetLeft + itemRect.width -tipRect.width;
            else
                position.left = offsetLeft + (itemRect.width/2) - (tipRect.width/2);
            position.top = offsetTop + itemRect.height + 5;
        }
        return position;
    }
    
    render() {
        const { position } = this.state;
        const { classes, children, direction, id, className } = this.props;
        return (
            <div ref={ref => { this.self = ref; }} className={`${classes.tip} ${classes[direction]}${className ? ` ${className}` : ''}`} id={id} style={position}>
                {children}
            </div>
        );
    }
}
TourTip.defaultProps = {
    direction: "left",
    align: "center"
};

TourTip.propTypes = {
    classes: PropTypes.object,
    children: PropTypes.node,
    /** Side of the target where the TourTip will be displayed. */
    direction: PropTypes.string.isRequired,
    /** Alignment of the TourTip in the specified direction. */
    align: PropTypes.string.isRequired,
    /** The id of the target item. The target item must be inside a container with the display property as 'relative'. */
    target: PropTypes.string.isRequired,
    id: PropTypes.string,
    className: PropTypes.string
};

export default TourTip;