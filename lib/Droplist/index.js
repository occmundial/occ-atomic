import injectSheet from 'react-jss';
import Droplist from './Droplist';
import styles from './styles';

const StyledDroplist = injectSheet(styles)(Droplist);

StyledDroplist.propTypes = {
	...Droplist.propTypes,
	...StyledDroplist.propTypes
};

export default StyledDroplist;
