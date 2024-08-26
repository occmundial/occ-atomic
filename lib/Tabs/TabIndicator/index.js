import injectSheet from 'react-jss';
import TabIndicator from './TabIndicator';
import styles from './styles';

const StyledTabIndicator = injectSheet(styles)(TabIndicator);
// eslint-disable-next-line
const { classes, ...propTypes } = TabIndicator.propTypes;
StyledTabIndicator.propTypes = {
  ...propTypes,
  ...StyledTabIndicator.propTypes
};

export default StyledTabIndicator;
