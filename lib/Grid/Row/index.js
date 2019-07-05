import injectSheet from 'react-jss';
import Row from './Row';
import styles from './styles';

const StyledRow = injectSheet(styles)(Row);

StyledRow.propTypes = {
	...Row.propTypes,
	...StyledRow.propTypes
};

export default StyledRow;
