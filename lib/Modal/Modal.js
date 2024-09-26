import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';
import Flexbox from '../Flexbox';
import Button from '../Button';

/**
 * The Modal component is rendered in any given container, avoiding z-index an position conflicts. Your application must have the logic to show or hide the Modal component.
 */
class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerBorder: false,
      footerBorder: false
    };
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  onScroll(e) {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    if (scrollHeight > clientHeight) {
      if (scrollTop > 0) {
        this.setState({ headerBorder: true });
      } else {
        this.setState({ headerBorder: false });
      }
      if (scrollTop + clientHeight + 1 < scrollHeight) {
        this.setState({ footerBorder: true });
      } else {
        this.setState({ footerBorder: false });
      }
    } else {
      this.setState({ headerBorder: false, footerBorder: false });
    }
  }

  onKeyDown({ which }) {
    const { onClose } = this.props;
    if (onClose && which === 27) onClose();
  }

  avoidClose(e) {
    e.stopPropagation();
  }

  render() {
    const {
      classes,
      children,
      onClose,
      title,
      mainBtn,
      show,
      secBtn,
      size = 'md',
      imgTop = {},
      imgLeft = {},
      onTransitionEnd,
      fullSize,
      testId
    } = this.props;
    const { headerBorder, footerBorder } = this.state;

    const closeButton = (
      <Button
        theme="ghostGrey"
        onClick={onClose}
        icon="x"
        size="md"
        {...(testId && {
          testId: `${testId}__close-icon`
        })}
      />
    );

    return (
      <div
        data-testid={testId}
        className={`${classes.overlay} ${show ? classes.show : classes.hide}${
          !onClose ? ` ${classes.noClose}` : ''
        }`}
        onClick={onClose}
        onTransitionEnd={onTransitionEnd}
      >
        <div className={classes.cardWrapper}>
          <div className={classes.cardBlock} onClick={this.avoidClose}>
            <div
              className={`${classes.card}${size ? ` ${classes[size]}` : ''}${
                fullSize ? ` ${classes.fullSize}` : ''
              }`}
            >
              <div className={classes.split}>
                {imgLeft.img && (
                  <div
                    style={{
                      backgroundColor: imgLeft.color || 'transparent',
                      backgroundImage: `url(${imgLeft.img})`,
                      backgroundSize: imgLeft.size || 'cover',
                      backgroundPosition: imgLeft.position || 'center'
                    }}
                    className={classes.imgLeft}
                  />
                )}
                <Flexbox
                  display="flex"
                  direction="col"
                  className={classes.contentWrapper}
                >
                  {title || onClose ? (
                    <Flexbox
                      display="flex"
                      justifyContent="end"
                      alignItems="start"
                      className={`${classes.header}${
                        headerBorder ? ` ${classes.headerBorder}` : ''
                      }${imgTop.img ? ` ${classes.stickyHeader}` : ''}${
                        imgTop.img && headerBorder
                          ? ` ${classes.solidHeader}`
                          : ''
                      }`}
                    >
                      {title && (
                        <Flexbox flex="1">
                          <h4 className={classes.title}>{title}</h4>
                        </Flexbox>
                      )}
                      {onClose && closeButton}
                    </Flexbox>
                  ) : null}
                  <div onScroll={this.onScroll} className={classes.content}>
                    {imgTop.img && (
                      <div
                        style={{
                          backgroundColor: imgTop.color || 'transparent',
                          backgroundImage: `url(${imgTop.img})`,
                          backgroundSize: imgTop.size || 'cover',
                          backgroundPosition: imgTop.position || 'center'
                        }}
                        className={classes.imgTop}
                      />
                    )}
                    <Text
                      tag="div"
                      className={`${classes.contentChild}${
                        !title && !onClose ? ` ${classes.noHeader}` : ''
                      }${!mainBtn ? ` ${classes.noFooter}` : ''}${
                        imgTop && imgTop.img ? ` ${classes.imgTopPadding}` : ''
                      }`}
                    >
                      {children}
                    </Text>
                  </div>
                  {mainBtn && (
                    <div
                      className={`${classes.footer}${
                        footerBorder ? ` ${classes.footerBorder}` : ''
                      }`}
                    >
                      {secBtn && (
                        <Button
                          type={secBtn.type}
                          size="lg"
                          theme="ghostGrey"
                          onClick={secBtn.onClick}
                          href={secBtn.href}
                          target={secBtn.target}
                          loading={secBtn.loading}
                          disabled={secBtn.disabled}
                          id={secBtn.id}
                          {...(testId && {
                            testId: `${testId}__button-secondary`
                          })}
                        >
                          {secBtn.text}
                        </Button>
                      )}
                      <Button
                        type={mainBtn.type}
                        size="lg"
                        onClick={mainBtn.onClick}
                        href={mainBtn.href}
                        target={mainBtn.target}
                        loading={mainBtn.loading}
                        disabled={mainBtn.disabled}
                        id={mainBtn.id}
                        {...(testId && {
                          testId: `${testId}__button-main`
                        })}
                      >
                        {mainBtn.text}
                      </Button>
                    </div>
                  )}
                </Flexbox>
              </div>
            </div>
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
    position: PropTypes.oneOf(['left', 'center', 'right']),
    size: PropTypes.oneOf(['contain', 'cover', PropTypes.string]),
    height: PropTypes.number
  }),
  /** Image url to render it on the left of the modal dialog. */
  imgLeft: PropTypes.shape({
    img: PropTypes.string,
    color: PropTypes.string,
    position: PropTypes.oneOf(['top', 'center', 'bottom']),
    size: PropTypes.oneOf(['contain', 'cover'])
  }),
  /** This function is used by an internal wrapper component to manage the hiding animation and unmounting properly. */
  onTransitionEnd: PropTypes.func,
  /** Boolean value to make full size the Modal component in mobile size. */
  fullSize: PropTypes.bool,
  /** The testId property adds the data attribute data-testid to the main element and should be used for testing only. */
  testId: PropTypes.string
};

export default Modal;
