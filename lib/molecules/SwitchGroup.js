import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import Flexbox from '../elements/layout/Flexbox';

import colors from '../subatomic/colors';
import fonts from '../subatomic/fonts';

const styles = {
    button: {
        boxSizing:'border-box',
        flex: '1',
        position:'relative',
        background:'transparent',
        fontFamily:fonts.body,
        fontSize:'13px',
        color:colors.black,
        border:`1px solid ${colors.grey1}`,
        height:'30px',
        zIndex:'0',
        padding:'0 10px',
        transition:'0.3s all',
        outline:'0',
        overflow:'hidden',
        textOverflow:'ellipsis',
        whiteSpace:'nowrap',
        '&:not(:first-child)': {
            marginLeft:'-1px'
        },
        '&:first-child': {
            borderRadius:'15px 0 0 15px'
        },
        '&:last-child': {
            borderRadius:'0 15px 15px 0'
        },
        '&:hover': {
            borderColor:colors.blue,
            zIndex:'1'
        }
    },
    active: {
        borderColor:colors.blue,
        zIndex:'1',
        background:colors.blue,
        color:colors.white
    },
    sec: {
        color:colors.grey1,
        marginLeft:'3px'
    }
};

class SwitchGroup extends React.Component {
    
    render() {
        const { classes, buttons, onClick, selected } = this.props;
        return (
            <Flexbox display="flex">
                {buttons.map((button, index) => {
                    return (
                        <button
                            key={button.text}
                            className={`${classes.button}${selected == index ? ` ${classes.active}` : ''}`}
                            onClick={() => {onClick(button, index);}}>
                            {button.text}{button.sec ? <span className={classes.sec}>{button.sec}</span> : ''}
                        </button>
                    );
                })}
            </Flexbox>
        );
    }
}

export default injectSheet(styles)(SwitchGroup);