import injectSheet from 'react-jss';
import Hidden from './Hidden';
import styles from './styles';

const StyledHidden = injectSheet(styles)(Hidden);

StyledHidden.propTypes = {
	...Hidden.propTypes,
	...StyledHidden.propTypes
};

export default StyledHidden;
