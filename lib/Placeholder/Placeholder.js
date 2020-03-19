import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Flexbox from '../Flexbox';

import useStyles from './styles';

/** Use this component to simulate the layout of a content that is still loading. You can easily match the real layout using multiple placeholders that match the text and grid. */
const Placeholder = props => {
    const { textSize, round, top, bottom } = props;
    const classes = useStyles(props);
    return (
        <Flexbox
            display="flex"
            alignItems="center"
            className={classnames(
                { [classes[textSize]]: textSize },
                { [classes[`top${top}`]]: top },
                { [classes[`bottom${bottom}`]]: bottom }
            )}
        >
            <div className={classnames(
                classes.placeholder,
                { [classes.round]: round }
            )} />
        </Flexbox>
    );
};

Placeholder.propTypes = {
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
    round: PropTypes.bool
};

export default Placeholder;
