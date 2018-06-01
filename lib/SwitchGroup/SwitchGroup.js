import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import Flexbox from '../Flexbox';

class SwitchGroup extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            selected: props.selected ? props.selected : 0
        };
        this.onClick = this.onClick.bind(this);
    }
    
    onClick(button, index) {
        const { onClick } = this.props;
        this.setState({
            selected: index
        });
        if (onClick)
            onClick(button, index);
    }
    
    render() {
        const { selected } = this.state;
        const { classes, buttons } = this.props;
        return (
            <Flexbox display="flex">
                {buttons.map((button, index) => {
                    return (
                        <button
                            key={button.text}
                            className={`${classes.button}${selected == index ? ` ${classes.active}` : ''}`}
                            onClick={() => {this.onClick(button, index);}}>
                            {button.text}{button.sec ? <span className={classes.sec}>{button.sec}</span> : ''}
                        </button>
                    );
                })}
            </Flexbox>
        );
    }
}

SwitchGroup.propTypes = {
    classes: PropTypes.object,
    buttons: PropTypes.array,
    onClick: PropTypes.func,
    selected: PropTypes.number
};

export default SwitchGroup;