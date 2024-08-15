import React from 'react';
import PropTypes from 'prop-types';
import { oldToNewClassMapper } from '../Text/Text';

/** Use this component to simulate the layout of a content that is still loading. You can easily match the real layout using multiple placeholders that match the text and grid. */
const Placeholder = ({ classes, textSize, round, top, bottom, className, style, theme = 'light' }) => {
    const textSizeClass = textSize ? classes[oldToNewClassMapper[textSize] || textSize] : '';
    const marginTopClass = top ? ` ${classes[`top${top}`]}` : '';
    const marginBottomClass = bottom ? ` ${classes[`bottom${bottom}`]}` : '';
    const roundClass = round ? ` ${classes.round}` : '';
    const classNameClass = className ? className: '';

    const containerBaseClasses = `${classes.placeholder} ${classes[theme]}`;
    const containerClasses = `${roundClass} ${textSizeClass} ${marginTopClass} ${marginBottomClass} ${classNameClass}`.replace(/\s{2,}/, ' ');

    return (
        <div 
            className={`${containerBaseClasses} ${containerClasses}`}
            style={style}
        />
    );
};


Placeholder.propTypes = {
    classes: PropTypes.object.isRequired,
    /** Adds placeholder container classes.  */
    className: PropTypes.string,
    /** Adds placeholder container syles.  */
    style: PropTypes.object,
    /** Theme of the placeholder, whether light or dark.  */
    theme: PropTypes.oneOf(['light', 'dark']),
    /** Simulates a row of text. It has the same size and line-height as the Text component. */
    textSize: PropTypes.oneOf([
        'display', 'h1', 'h2', 'h3', 'h4', 'h5', 'tag', 'bodyXLarge', 'bodyLargeStrong', 'bodyLarge', 'bodyRegularStrong', 'bodyRegular', 'bodySmallStrong', 'bodySmall', 'bodyXSmall',
        'hero', 'headline', 'heading', 'subheading', 'large', 'standard', 'small', 'micro'
    ]),
    /** Spacing in the top of the placeholder. (deprecated) */
    top: PropTypes.oneOf([
        'xTiny', 'tiny', 'small', 'base', 'medium', 'large', 'xLarge'
    ]),
    /** Spacing in the bottom of the placeholder. (deprecated) */
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
    round: PropTypes.bool
};

export default Placeholder;
