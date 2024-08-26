import injectSheet from 'react-jss';
import TabContent from './TabContent';
import styles from './styles';

const StyledTabContent = injectSheet(styles)(TabContent);
// eslint-disable-next-line
const { classes, ...propTypes } = TabContent.propTypes;
StyledTabContent.propTypes = {
  ...propTypes,
  ...StyledTabContent.propTypes
};

export default StyledTabContent;
