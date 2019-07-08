import injectSheet from 'react-jss';
import Col from './Col';
import styles from './styles';

const StyledCol = injectSheet(styles)(Col);

const { classes, ...propTypes } = Col.propTypes;
StyledCol.propTypes = {
	...propTypes,
	...StyledCol.propTypes
};

export default StyledCol;
