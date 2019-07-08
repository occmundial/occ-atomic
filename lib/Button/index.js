import injectSheet from 'react-jss';
import Button from './Button';
import styles from './styles';

const StyledButton = injectSheet(styles)(Button);

const { classes, ...propTypes } = Button.propTypes;
StyledButton.propTypes = {
	...propTypes,
	...StyledButton.propTypes
};

export default StyledButton;
