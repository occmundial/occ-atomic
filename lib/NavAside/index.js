import React from 'react';
import ReactDOM from 'react-dom';
import injectSheet from 'react-jss';
import NavAsideComponent from './NavAside';
import styles from './styles';

const NavAside = injectSheet(styles)(NavAsideComponent);

class NavAsidePortal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mount: false
        };
        this.onTransitionEnd = this.onTransitionEnd.bind(this);
    }

    componentWillReceiveProps(props) {
        if (props.show && !this.props.show) {
            this.setState({
                mount: true
            });
        }
    }

    onTransitionEnd() {
        this.setState({
            mount: false
        });
    }

    render() {
        const { mount } = this.state;
        const { container, show } = this.props;
        const NavAsideComponent = <NavAside {...this.props} onTransitionEnd={(!show && mount) ? this.onTransitionEnd : null} />;
        if (container) {
            return (
                mount ? ReactDOM.createPortal(
                    NavAsideComponent,
                    container
                ) : null
            );
        } else {
            return (
                mount ? (
                    NavAsideComponent
                ) : null
            );
        }
    }
}

export default NavAsidePortal;
