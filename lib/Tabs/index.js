import injectSheet from 'react-jss';
import Tabs from './Tabs';
import styles from './styles';

const StyledTabs = injectSheet(styles)(Tabs);
// eslint-disable-next-line
const { classes, ...propTypes } = Tabs.propTypes;
StyledTabs.propTypes = {
  ...propTypes,
  ...StyledTabs.propTypes
};

export default StyledTabs;
