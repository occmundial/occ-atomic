import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import Title from '../elements/Title';
import Icon from '../elements/Icon';
import Flexbox from '../elements/layout/Flexbox';
import colors from '../subatomic/colors';
import fonts from '../subatomic/fonts';

const styles = {
    button: {
        cursor:'pointer'
    },
    content: {
        transition:'0.3s all',
    },
    hide: {
        opacity:'0',
        marginTop:'-35px',
        marginBottom:'35px',
        pointerEvents:'none'
    },
    show: {
        opacity:'1',
        marginTop:'0',
        marginBottom:'0'
    }
};

class SlideDown extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            expanded: this.props.expanded,
            toggled: this.props.expanded
        };
        this.toggleContent = this.toggleContent.bind(this);
    }

    toggleContent() {
        if (!this.state.expanded) {
            this.setState({
                expanded: true
            });
            setTimeout(() => {
                this.setState({
                    toggled: true
                });
            }, 0);
        } else {
            this.setState({
                toggled: false
            });
            setTimeout(() => {
                this.setState({
                    expanded: false
                });
            }, 300);
        }
    }

    render() {
        const { expanded, toggled } = this.state;
        const { classes, title, children } = this.props;
        return (
            <div>
                <div className={classes.button} onClick={this.toggleContent}>
                    <Flexbox display="flex" justifyContent="between" alignItems="center">
                        <Title h={4}>{title}</Title>
                        <Icon iconName="arrowDown" colors={[colors.grey6]} style={{transform:toggled ? 'rotate(180deg)' : ''}} />
                    </Flexbox>
                </div>
                {expanded && (
                    <div className={`${classes.content} ${toggled ? classes.show : classes.hide}`}>
                        {children}
                    </div>
                )}
            </div>
            
        );
    }
}

SlideDown.defaultProps = {
    expanded: false
};

SlideDown.propTypes = {
    classes: PropTypes.object,
    title: PropTypes.string,
    expanded: PropTypes.bool
};

export default injectSheet(styles)(SlideDown);