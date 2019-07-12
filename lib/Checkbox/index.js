import injectSheet from 'react-jss';
import Checkbox from './Checkbox';
import styles from './styles';

const StyledCheckbox = injectSheet(styles)(Checkbox);
// eslint-disable-next-line
const { classes, ...propTypes } = Checkbox.propTypes;
StyledCheckbox.propTypes = {
	...propTypes,
	...StyledCheckbox.propTypes
};

export default StyledCheckbox;
