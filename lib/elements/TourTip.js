import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import colors from '../subatomic/colors';
import fonts from '../subatomic/fonts';
import shadows from '../subatomic/shadows';

const styles = {
    tip: {
        boxSizing:'border-box',
        background:colors.blue,
        color:colors.white,
        fontFamily:fonts.title,
        fontSize:'12px',
        padding:'0 15px',
        height:'40px',
        borderRadius:'3px',
        position:'absolute',
        zIndex:'10',
        display:'flex',
        alignItems:'center',
        whiteSpace:'nowrap',
        boxShadow:shadows.lvl4,
        top:'0',
        left:'0',
        transition:'0.3s all',
        '&:after': {
            content:'""',
            display:'block',
            position:'absolute'
        }
    },
    right: {
        '&:after': {
            borderRight:`5px solid ${colors.blue}`,
            borderTop:'5px solid transparent',
            borderBottom:'5px solid transparent',
            right:'100%',
            top:'50%',
            transform:'translateY(-50%)'
        }
    },
    left: {
        '&:after': {
            borderLeft:`5px solid ${colors.blue}`,
            borderTop:'5px solid transparent',
            borderBottom:'5px solid transparent',
            left:'100%',
            top:'50%',
            transform:'translateY(-50%)'
        }
    },
    down: {
        '&:after': {
            borderBottom:`5px solid ${colors.blue}`,
            borderLeft:'5px solid transparent',
            borderRight:'5px solid transparent',
            bottom:'100%',
            left:'50%',
            transform:'translateX(-50%)'
        }
    },
    up: {
        '&:after': {
            borderTop:`5px solid ${colors.blue}`,
            borderLeft:'5px solid transparent',
            borderRight:'5px solid transparent',
            top:'100%',
            left:'50%',
            transform:'translateX(-50%)'
        }
    },
};

class TourTip extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            position: {}
        };
        this.attachToTarget = this.attachToTarget.bind(this);
    }
    
    componentDidMount() {
        $(document).ready(() => {
            this.setState({
                position: this.attachToTarget()
            });
        });
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
        const { classes, children, direction, align } = this.props;
        return (
            <div ref={ref => { this.self = ref; }} className={`${classes.tip} ${classes[direction]}`} style={position}>
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
    direction: PropTypes.string,
    align: PropTypes.string,
    target: PropTypes.string
};

export default injectSheet(styles)(TourTip);