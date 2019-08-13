import React from 'react';
import PropTypes from 'prop-types';
import isString from 'lodash/isString';
import flatten from 'lodash/flatten';

import Flexbox from '../Flexbox';
import Text from '../Text';
import Icon from '../Icon';
import colors from '../subatomic/colors';

const boldRegex = /\*(.*?)\*/g;

/** Tip component with different themes (info, warning, success & error). */
const Tip = ({ id, style, className, classes, icon, theme, text }) => {
    const replaceStringToBold = () => {
        if (text === '') return text;
        const result = text.split(boldRegex);
        if (result.length === 1) return text;
        for (let i = 1, length = result.length; i < length; i += 2) {
            result[i] = boldMatch(result[i], i, theme);
        }
        return result;
    };

    const boldMatch = (match, i) => {
        return <Text key={i} strong tag="b" {...themeObj}>{match}</Text>;
    };

    const renderText = () => {
        let textArray;
        if (!Array.isArray(text)) textArray = [text];

        return flatten(textArray.map(x => {
            return isString(x) ? replaceStringToBold(x, theme) : x;
        }));
    };

    const getTheme = () => {
        return { [theme]: true };
    };

    const getIconColor = () => {
        return [colors[`${theme}Text`]];
    };

    const themeObj = getTheme(theme);

    return (
        <div id={id} className={className} style={style}>
            <Flexbox display="flex" justifyContent="start" className={`${classes.container} ${classes[theme]}`}>
                {icon && <Icon iconName={icon} className={classes.icon} colors={getIconColor(theme)} />}
                <Flexbox flex="1">
                    <Text standard {...themeObj}>
                        {renderText()}
                    </Text>
                </Flexbox>
            </Flexbox>
        </div>
    );
};

Tip.defaultProps = {
    theme: 'info'
};

Tip.propTypes = {
    classes: PropTypes.object.isRequired,
    /** Theme of the Tip. */
    theme: PropTypes.oneOf([
        'info', 'warning', 'success', 'error'
    ]),
    /** Text of the tip. If you put text between two * characters that text will be displayed as bold. */
    text: PropTypes.string.isRequired,
    /** Icon name to show on the left. */
    icon: PropTypes.string,
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
};

export default Tip;
