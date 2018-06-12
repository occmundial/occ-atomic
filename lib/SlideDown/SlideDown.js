import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import Title from '../Title';
import Icon from '../Icon';
import Flexbox from '../Flexbox';

import colors from '../subatomic/colors';

/** Component to create an accordion section. The content will be hidden by default, and shown after click. */
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
        const { classes, title, children, active } = this.props;
        return (
            <div>
                <div className={classes.button} onClick={this.toggleContent}>
                    <Flexbox display="flex" justifyContent="between" alignItems="center">
                        <Title h={4} className={active ? classes.dot : ''}>{title}</Title>
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
    children: PropTypes.node,
    /** Title of the tab. */
    title: PropTypes.string,
    /** Set this as true to show the content by default. */
    expanded: PropTypes.bool,
    /** This property will display a blue mark on the tab, in case you need to specify that something in the content is relevant to check. */
    active: PropTypes.bool
};

export default SlideDown;