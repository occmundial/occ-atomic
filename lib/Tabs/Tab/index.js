import injectSheet from 'react-jss';
import Tab from './Tab';
import styles from './styles';

const StyledTab = injectSheet(styles)(Tab);
// eslint-disable-next-line
const { classes, ...propTypes } = Tab.propTypes;
StyledTab.propTypes = {
  ...propTypes,
  ...StyledTab.propTypes
};

export default StyledTab;
