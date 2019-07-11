import injectSheet from 'react-jss';
import Grid from './Grid';
import styles from './styles';

const StyledGrid = injectSheet(styles)(Grid);
// eslint-disable-next-line
const { classes, ...propTypes } = Grid.propTypes;
StyledGrid.propTypes = {
	...propTypes,
	...StyledGrid.propTypes
};

export default StyledGrid;
