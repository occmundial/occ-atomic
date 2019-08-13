import React from 'react';
import PropTypes from 'prop-types';
import isString from 'lodash/isString';
import flatten from 'lodash/flatten';

import Flexbox from '../Flexbox';
import Text from '../Text';
import Icon from '../Icon';
import colors from '../subatomic/colors';

const boldRegex = /\*(.*?)\*/g;

/** Tip component */
class Tip extends React.Component {

    constructor(props) {
        super(props);
        this.renderText = this.renderText.bind(this);
    }

    replaceStringToBold(text, theme) {

        if (text === '') {
            return text;
        }

        const result = text.split(boldRegex);
        if (result.length === 1) {
            return text;
        }

        for (let i = 1, length = result.length; i < length; i += 2) {
            result[i] = this.boldMatch(result[i], i, theme);
        }

        return result;
    }

    boldMatch(match, i, theme) {
        const themeObj = this.getTheme(theme);
        return <Text key={i} strong tag="b" {...themeObj}>{match}</Text>;
    }

    renderText() {
        let { text, theme } = this.props;
        if (!Array.isArray(text)) text = [text];

        return flatten(text.map(x => {
            return isString(x) ? this.replaceStringToBold(x, theme) : x;
        }));
    };

    getTheme(theme) {
        return {
            [theme]: true
        };
    }

    getIconColor(theme) {
        return [colors[`${theme}Text`]];
    }

    render() {
        const { id, style, className, classes, icon, theme } = this.props;
        const themeObj = this.getTheme(theme);
        return (
            <div id={id} className={className} style={style}>
                <Flexbox display="flex" justifyContent="start" className={`${classes.container} ${classes[theme]}`}>
                    {icon && <Icon iconName={icon} className={classes.icon} colors={this.getIconColor(theme)} />}
                    <Flexbox flex="1">
                        <Text standard {...themeObj}>
                            {this.renderText()}
                        </Text>
                    </Flexbox>
                </Flexbox>
            </div>
        );
    }
}

Tip.defaultProps = {
    theme: 'info'
};

Tip.propTypes = {
    classes: PropTypes.object.isRequired,
    /** Theme of the Tip. */
    theme: PropTypes.oneOf([
        'info', 'warning', 'success', 'error'
    ]),
    /** Text string. */
    text: PropTypes.string.isRequired,
    /** Icon name to show on the left. */
    icon: PropTypes.string,
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
};

export default Tip;
