import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import Flexbox from '../Flexbox';
import Icon from '../Icon';
import colors from '../subatomic/colors';

class NavAside extends React.Component {

    constructor(props) {
        super(props);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    componentDidMount() {
        window.addEventListener('keydown', this.onKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.onKeyDown);
    }

    onKeyDown({ which }) {
        if(which == 27) {
            this.props.onClose();
        }
    }

    avoidClose(e) {
        e.stopPropagation();
    }

    render() {
        const { classes, top, children, onClose, show, width, onTransitionEnd, right } = this.props;
        return (
            <div className={`${show ? ` ${classes.overlay} ${classes.overlayShow}` : ` ${classes.overlay}`}`} onClick={onClose} onTransitionEnd={onTransitionEnd}>
                <div className={`${show ? right ? `${classes.ShowElement} ${classes.OpenElementRight}` :`${classes.ShowElement} ${classes.OpenElement}` : `${classes.ShowElement}`}${width && right ? ` ${classes.customeWidthRight}` : ` ${classes.customeWidth}`}${right ? ` ${classes.showRight}` : ''}`} onClick={this.avoidClose}>
                    <Card shadow={5} className={`${classes.card}`}>
                        <Flexbox display="flex" justifyContent="end" alignItems="start" className={classes.top}>
                            {top && (
                                <Flexbox flex="1" className={classes.topContent}>
                                    {top}
                                </Flexbox>
                            )}
                            <div className={classes.closeIcon}>
                                <Icon iconName="close" width={24} height={24} colors={[colors.grey900]} onClick={onClose} />
                            </div>
                        </Flexbox>
                        <div className={classes.content}>
                            {children}
                        </div>
                    </Card>
                </div>
            </div>
        );
    }
}

NavAside.propTypes = {
    classes: PropTypes.object.isRequired,
    /** Will display any element in the top position */
    top: PropTypes.node,
    /** Will display any element in the bottom position */
    children: PropTypes.node,
    /** Custome width for aside */
    width: PropTypes.number,
     /** Custome function for closing aside */
    onClose: PropTypes.func,
    /** Boolean value to show or hide the Aside component. */
    show: PropTypes.bool,
     /** This function is used by an internal wrapper component to manage the hiding animation and unmounting properly. */
     onTransitionEnd: PropTypes.func,
    /** Boolean value to show the Aside component in the right side */
    right: PropTypes.bool
};

export default NavAside;
