import injectSheet from 'react-jss';
import Card from './Card';
import styles from './styles';

const StyledCard = injectSheet(styles)(Card);

const { classes, ...propTypes } = Card.propTypes;
StyledCard.propTypes = {
	...propTypes,
	...StyledCard.propTypes
};

export default StyledCard;
