import injectSheet from 'react-jss';
import Hidden from './Hidden';
import styles from './styles';

const StyledHidden = injectSheet(styles)(Hidden);
// eslint-disable-next-line
const { classes, ...propTypes } = Hidden.propTypes;
StyledHidden.propTypes = {
	...propTypes,
	...StyledHidden.propTypes
};

export default StyledHidden;
