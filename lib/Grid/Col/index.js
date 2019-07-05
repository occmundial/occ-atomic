import injectSheet from 'react-jss';
import Col from './Col';
import styles from './styles';

const StyledCol = injectSheet(styles)(Col);

StyledCol.propTypes = {
	...Col.propTypes,
	...StyledCol.propTypes
};

export default StyledCol;
