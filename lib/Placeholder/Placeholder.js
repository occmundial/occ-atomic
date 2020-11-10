import React from 'react';
import PropTypes from 'prop-types';
import Flexbox from '../Flexbox';

/** Use this component to simulate the layout of a content that is still loading. You can easily match the real layout using multiple placeholders that match the text and grid. */
const Placeholder = ({ classes, textSize, round, top, bottom }) => (
    <Flexbox display="flex" alignItems="center" className={`${textSize ? classes[textSize] : ''}${top ? ` ${classes[`top${top}`]}` : ''}${bottom ? ` ${classes[`bottom${bottom}`]}` : ''}`}>
        <div className={`${classes.placeholder}${round ? ` ${classes.round}` : ''}`} />
    </Flexbox>
);

Placeholder.propTypes = {
    classes: PropTypes.object.isRequired,
    /** Simulates a row of text. It has the same size and line-height as the Text component. */
    textSize: PropTypes.oneOf([
        'hero', 'headline', 'heading', 'subheading', 'large', 'standard', 'small', 'micro'
    ]),
    /** Spacing in the top of the placeholder. */
    top: PropTypes.oneOf([
        'xTiny', 'tiny', 'small', 'base', 'medium', 'large', 'xLarge'
    ]),
    /** Spacing in the bottom of the placeholder. */
    bottom: PropTypes.oneOf([
        'xTiny', 'tiny', 'small', 'base', 'medium', 'large', 'xLarge'
    ]),
    /** Width of the placeholder. You can use numbers or a string with a percentage. */
    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    /** Height of the placeholder. You can use numbers or a string with a percentage. */
    height: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    /** It applies a border radius of 50%. Use it with width and height to create a circle to simulate an avatar or profile picture. */
    round: PropTypes.bool,
    /** It applies gradient left background */
    start: PropTypes.bool
};

export default Placeholder;
