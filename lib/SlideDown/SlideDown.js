import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';
import Icon from '../Icon';
import Tag from '../Tag';
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
        const { onToggle } = this.props;
        if (!this.state.expanded) {
            this.setState({
                expanded: true
            });
            if (onToggle) onToggle(true);
            setTimeout(() => {
                this.setState({
                    toggled: true
                });
            }, 0);
        } else {
            this.setState({
                toggled: false
            });
            if (onToggle) onToggle(false);
            setTimeout(() => {
                this.setState({
                    expanded: false
                });
            }, 300);
        }
    }

    render() {
        const { expanded, toggled } = this.state;
        const { classes, title, children, tag } = this.props;
        return (
            <div className={classes.wrapper}>
                <div className={classes.button} onClick={this.toggleContent}>
                    <Flexbox display="flex" justifyContent="between" alignItems="start">
                        <Flexbox display="flex" alignItems="center">
                            <Flexbox display="flex" alignItems="start" wrap="wrap">
                                <div>
                                    <Text tag="label" strong className={classes.text}>{title}</Text>
                                    {tag && <Tag theme="info" className={classes.tag}>{tag}</Tag>}
                                </div>
                            </Flexbox>
                        </Flexbox>
                        <Flexbox flex="0 0 auto">
                            <Icon iconName="arrowDown" colors={[colors.grey900]} className={classes.icon} style={{transform:toggled ? 'rotate(180deg)' : ''}} />
                        </Flexbox>
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
    /** Text to show as a label right next to the Title */
    tag: PropTypes.string,
    /** Function to call when the SlideDown expands or collapses. It returns true if it is expanded and false if it is collapsed. */
    onToggle: PropTypes.func
};

export default SlideDown;
