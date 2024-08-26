import injectSheet from 'react-jss';
import TabList from './TabList';
import styles from './styles';

const StyledTabList = injectSheet(styles)(TabList);
// eslint-disable-next-line
const { classes, ...propTypes } = TabList.propTypes;
StyledTabList.propTypes = {
  ...propTypes,
  ...StyledTabList.propTypes
};

export default StyledTabList;
