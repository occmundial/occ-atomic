import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import Icon from '../Icon';
import Text from '../Text';
import Flexbox from '../Flexbox';
import Button from '../Button';
import colors from '../subatomic/colors';
import grid from '../subatomic/grid';

/**
* The Modal component is rendered in any given container, avoiding z-index an position conflicts. Your application must have the logic to show or hide the Modal component.
*/
class Modal extends React.Component {

    constructor(props) {
        super(props);
        this.state = { mobile: false };
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    componentDidMount() {
        window.addEventListener('keydown', this.onKeyDown);
        window.addEventListener('resize', this.resize);
        this.resize();
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.onKeyDown);
        window.removeEventListener('resize', this.resize);
    }

    resize = () => {
        this.setState({ mobile: window.innerWidth < grid.xs });
    }

    onKeyDown({ which }) {
        const { onClose } = this.props;
        if(onClose && which == 27) onClose();
    }

    avoidClose(e) {
        e.stopPropagation();
    }

    render() {
        const { mobile } = this.state;
        const { classes, children, onClose, title, mainBtn, show, secBtn, size, imgTop, imgLeft, onTransitionEnd, fullSize } = this.props;

        const closeButton = (
            <div className={classes.closeIcon}>
                <Icon iconName="close" width={24} height={24} colors={[colors.grey900]} onClick={onClose} />
            </div>
        );

        return (
            <div className={`${classes.overlay} ${show ? classes.overlayShow : classes.overlayHide}${!onClose ? ` ${classes.noClose}` : ''}`} onClick={onClose} onTransitionEnd={onTransitionEnd}>
                <div className={classes.cardWrapper}>
                    <div className={classes.cardBlock} onClick={this.avoidClose}>
                        <Card shadow={5} className={`${classes.card}${size ? ` ${classes[size]}` : ''}${show ? ` ${classes.cardShow}` : ` ${classes.cardHide}`}`}>
                            <Flexbox display="flex" direction={imgLeft.img ? 'row' : 'col'}>
                                {(imgLeft.img || imgTop.img) && (
                                    <div className={imgLeft.img ? classes.imgLeft : classes.imgTop}>
                                        {(imgTop.img && onClose) && (
                                            <div className={classes.closePosition}>
                                                {closeButton}
                                            </div>
                                        )}
                                    </div>
                                )}
                                <Flexbox flex={imgLeft.img ? '1' : null}>
                                    {(fullSize && mobile) ? (
                                        <div className={classes.top}>
                                            <Flexbox alignItems="end" className={classes.top}>
                                                {(!imgTop.img && onClose) && closeButton}
                                            </Flexbox>
                                            {title && (
                                                <Text heading className={classes.title}>{title}</Text>
                                            )}
                                        </div>
                                    ) : (
                                        <Flexbox display="flex" justifyContent="end" alignItems="start" className={classes.top}>
                                            {title && (
                                                <Flexbox flex="1">
                                                    <Text heading className={classes.title}>{title}</Text>
                                                </Flexbox>
                                            )}
                                            {(!imgTop.img && onClose) && closeButton}
                                        </Flexbox>
                                    )}
                                    <div className={classes.content}>
                                        {children}
                                    </div>
                                    {mainBtn && (
                                        <div className={classes.bottom}>
                                            {secBtn && (
                                                <Button
                                                    theme="ghostGrey"
                                                    className={classes.secBtn}
                                                    onClick={secBtn.onClick}
                                                    href={secBtn.href}
                                                    target={secBtn.target}
                                                    loading={secBtn.loading}
                                                    disabled={secBtn.disabled}
                                                    id={secBtn.id}
                                                >
                                                    {secBtn.text}
                                                </Button>)
                                            }
                                            <Button
                                                className={classes.mainBtn}
                                                onClick={mainBtn.onClick}
                                                href={mainBtn.href}
                                                target={mainBtn.target}
                                                loading={mainBtn.loading}
                                                disabled={mainBtn.disabled}
                                                id={mainBtn.id}
                                            >
                                                {mainBtn.text}
                                            </Button>
                                        </div>
                                    )}
                                </Flexbox>
                            </Flexbox>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

Modal.defaultProps = {
    size: 'md',
    imgLeft: {},
    imgTop: {}
};

Modal.propTypes = {
    /** prop */
    classes: PropTypes.object.isRequired,
    children: PropTypes.node,
    /** Boolean value to show or hide the Modal component. */
    show: PropTypes.bool,
    /** DOM Element to append the Modal component into it. If you don't specify a container the Modal will be rendered in the exact same DOM position you used it. This can in some cases generate problems with z-index or position. */
    container: PropTypes.object,
    /** Function to call when the overlay or close icon are clicked or when you press the Esc key. */
    onClose: PropTypes.func,
    /** Size of the Modal. Select any of these: sm, md, lg, xl. */
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
    /** Title to display at the top of the Modal. */
    title: PropTypes.string,
    /** Object with props for the main button. It will render a Button with the main theme. */
    mainBtn: PropTypes.shape({
        text: PropTypes.string,
        onClick: PropTypes.func,
        href: PropTypes.string,
        target: PropTypes.string,
        disabled: PropTypes.bool,
        loading: PropTypes.bool
    }),
    /** Object with props for the secondary button. It will render a Button with the ghostGrey theme. (NOTE: If you don't send a mainBtn object the secBtn will not work) */
    secBtn: PropTypes.shape({
        text: PropTypes.string,
        onClick: PropTypes.func,
        href: PropTypes.string,
        target: PropTypes.string,
        disabled: PropTypes.bool,
        loading: PropTypes.bool
    }),
    /** Image url to render it on the top of the modal dialog. */
    imgTop: PropTypes.shape({
        img: PropTypes.string,
        color: PropTypes.string,
        position: PropTypes.oneOf([
            'left', 'center', 'right'
        ]),
        size: PropTypes.oneOf([
            'contain', 'cover'
        ]),
        height: PropTypes.number,
        personalize: PropTypes.bool,
    }),
    /** Image url to render it on the left of the modal dialog. */
    imgLeft: PropTypes.shape({
        img: PropTypes.string,
        color: PropTypes.string,
        position: PropTypes.oneOf([
            'top', 'center', 'bottom'
        ]),
        size: PropTypes.oneOf([
            'contain', 'cover'
        ])
    }),
    /** This function is used by an internal wrapper component to manage the hiding animation and unmounting properly. */
    onTransitionEnd: PropTypes.func,
    /** Boolean value to make full size the Modal component in mobile size. */
    fullSize: PropTypes.bool
};

export default Modal;
