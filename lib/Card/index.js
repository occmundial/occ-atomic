import injectSheet from 'react-jss';
import Card from './Card';
import styles from './styles';

const StyledCard = injectSheet(styles)(Card);

StyledCard.propTypes = {
	...Card.propTypes,
	...StyledCard.propTypes
};

export default StyledCard;
