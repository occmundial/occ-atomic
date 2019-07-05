import injectSheet from 'react-jss';
import Button from './Button';
import styles from './styles';

const StyledButton = injectSheet(styles)(Button);

StyledButton.propTypes = {
	...Button.propTypes,
	...StyledButton.propTypes
};

export default StyledButton;
