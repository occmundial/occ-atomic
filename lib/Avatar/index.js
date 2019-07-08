import injectSheet from 'react-jss';
import Avatar from './Avatar';
import styles from './styles';

const StyledAvatar = injectSheet(styles)(Avatar);

const { classes, ...propTypes } = Avatar.propTypes;
StyledAvatar.propTypes = {
	...propTypes,
	...StyledAvatar.propTypes
};

export default StyledAvatar;
