import injectSheet from 'react-jss';
import Icon from './Icon';
import styles from './styles';

const StyledIcon = injectSheet(styles)(Icon);

StyledIcon.propTypes = {
	...Icon.propTypes,
	...StyledIcon.propTypes
};

export default StyledIcon;
