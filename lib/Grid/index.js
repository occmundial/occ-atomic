import injectSheet from 'react-jss';
import Grid from './Grid';
import styles from './styles';

const StyledGrid = injectSheet(styles)(Grid);

StyledGrid.propTypes = {
	...Grid.propTypes,
	...StyledGrid.propTypes
};

export default StyledGrid;
