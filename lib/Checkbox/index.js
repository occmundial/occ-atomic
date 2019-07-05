import injectSheet from 'react-jss';
import Checkbox from './Checkbox';
import styles from './styles';

const StyledCheckbox = injectSheet(styles)(Checkbox);

StyledCheckbox.propTypes = {
	...Checkbox.propTypes,
	...StyledCheckbox.propTypes
};

export default StyledCheckbox;
