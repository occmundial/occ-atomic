import injectSheet from 'react-jss';
import Menu from './Menu';
import styles from './styles';

const StyledMenu = injectSheet(styles)(Menu);
// eslint-disable-next-line
const { classes, ...propTypes } = Menu.propTypes;
StyledMenu.propTypes = {
  ...propTypes,
  ...StyledMenu.propTypes
};

export default StyledMenu;
