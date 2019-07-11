import injectSheet from 'react-jss';
import Flexbox from './Flexbox';
import styles from './styles';

const StyledFlexbox = injectSheet(styles)(Flexbox);
// eslint-disable-next-line
const { classes, ...propTypes } = Flexbox.propTypes;
StyledFlexbox.propTypes = {
	...propTypes,
	...StyledFlexbox.propTypes
};

export default StyledFlexbox;
