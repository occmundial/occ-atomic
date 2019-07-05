import injectSheet from 'react-jss';
import Flexbox from './Flexbox';
import styles from './styles';

const StyledFlexbox = injectSheet(styles)(Flexbox);

StyledFlexbox.propTypes = {
	...Flexbox.propTypes,
	...StyledFlexbox.propTypes
};

export default StyledFlexbox;
