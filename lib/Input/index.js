import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Input from './Input';
import styles from './styles';
import stylesFlat from './stylesFlat';

const InputDefault = injectSheet(styles)(Input);
const InputFlat = injectSheet(stylesFlat)(Input);

class StyledInput extends React.Component {
    
    render() {
        const { theme } = this.props;
        if (theme != 'flat') {
            return (<InputDefault {...this.props} />);
        } else {
            return (<InputFlat {...this.props} />);
        }
    }
}

StyledInput.propTypes = {
    theme: PropTypes.string
};

export default StyledInput;