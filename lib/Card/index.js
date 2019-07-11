import injectSheet from 'react-jss';
import Card from './Card';
import styles from './styles';

const StyledCard = injectSheet(styles)(Card);
// eslint-disable-next-line
const { classes, ...propTypes } = Card.propTypes;
StyledCard.propTypes = {
	...propTypes,
	...StyledCard.propTypes
};

export default StyledCard;
