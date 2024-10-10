import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import injectSheet from 'react-jss';
import DrawerComponent from './Drawer';
import styles from './styles';

const Drawer = injectSheet(styles)(DrawerComponent);

class DrawerPortal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mount: false
        };
        this.onAnimationEnd = this.onAnimationEnd.bind(this);
    }

    componentWillReceiveProps(props) {
        if (props.show && !this.props.show) {
            this.setState({
                mount: true
            });
        }
    }

    onAnimationEnd() {
        this.setState({
            mount: false
        });
    }

    render() {
        const { mount } = this.state;
        const { container, show } = this.props;
        const DrawerComponent = <Drawer {...this.props} onAnimationEnd={(!show && mount) ? this.onAnimationEnd : null} />;
        if (container) {
            return (
                mount ? ReactDOM.createPortal(
                    DrawerComponent,
                    container
                ) : null
            );
        } else {
            return (
                mount ? (
                    DrawerComponent
                ) : null
            );
        }
    }
}

DrawerPortal.propTypes = {
    show: PropTypes.bool,
    container: PropTypes.object
};

export default DrawerPortal;
