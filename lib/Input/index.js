import React from 'react';
import injectSheet from 'react-jss';
import Input from './Input';
import styles from './styles';
import stylesFlat from './stylesFlat';

const StyledInput = (props) => {
    if (props.theme != 'flat') {
        const InputDefault = injectSheet(styles)(Input);
        return (<InputDefault {...props} />);
    } else {
        const InputFlat = injectSheet(stylesFlat)(Input);
        return (<InputFlat {...props} />);
    }
};

export default StyledInput;