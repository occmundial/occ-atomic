import injectSheet from 'react-jss';
import Avatar from './Avatar';
import styles from './styles';

const StyledAvatar = injectSheet(styles)(Avatar);

StyledAvatar.propTypes = {
	...Avatar.propTypes,
	...StyledAvatar.propTypes
};

export default StyledAvatar;
