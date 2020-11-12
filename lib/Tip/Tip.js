import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import isString from 'lodash/isString';
import flatten from 'lodash/flatten';

import Flexbox from '../Flexbox';
import Text from '../Text';
import Icon from '../Icon';
import colors from '../subatomic/colors';

const boldRegex = /\*(.*?)\*/g;

const icons = {
    info: 'infoSolid',
    warning: 'warning',
    success: 'checkSolid',
    error: 'crossSolid',
    promote: null
};

const PROMOTE = 'promote';

/** Tip component with different themes (info, warning, success & error). You can pass a string or a react element as the children prop, but the bold regex will only work with strings. */
const Tip = ({ id, style, className, classes, icon, theme, noBorderRadius, center, onClose, spacedClose, children, cta }) => {
    const replaceStringToBold = () => {
        if (children === '') return children;
        const result = children.split(boldRegex);
        if (result.length === 1) return children;
        for (let i = 1, length = result.length; i < length; i += 2) {
            result[i] = boldMatch(result[i], i, theme);
        }
        return result;
    };
    
    const getTheme = () => {
        if (theme === PROMOTE) return { white: true };
        return { [theme]: true };
    };

    const boldMatch = (match, i) => {
        return <Text key={i} strong tag="b" {...getTheme()}>{match}</Text>;
    };

    const getIconName = () => icons[theme];

    const renderText = () => {
        let textArray;
        if (!Array.isArray(children)) textArray = [children];

        const text = flatten(textArray.map(x => {
            return isString(x) ? replaceStringToBold(x, theme) : x;
        }));
        
        if (cta) {
            text.push(
                <Fragment>
                    {' '}
                    <a
                        className={classes.cta}
                        href={cta.href}
                        target={cta.target}
                        onClick={cta.onClick}
                    >
                        <Text
                            tag="span"
                            {...getTheme()}
                        >
                            {cta.text}
                        </Text>
                    </a>
                </Fragment>
            );
        }
        return text;
    };

    return (
        <div id={id} className={className} style={style}>
            <Flexbox
                justifyContent="start"
                display="flex"
                className={`${classes.container} ${classes[theme]}${noBorderRadius ? ` ${classes.noBorderRadius}` : ''}`}
            >
                <Flexbox display="flex" flex="1" justifyContent={center ? 'center' : null} alignItems="center">
                    {icon && <Icon iconName={getIconName()} className={classes.icon} colors={[colors[`${theme}Text`]]} />}
                    <div className={icon ? classes.textWithIcon : classes.text}>
                        <Text standard tag="div" {...getTheme()}>
                            {renderText()}
                        </Text>
                    </div>
                </Flexbox>
                {onClose && (
                    <Icon
                        iconName="cross"
                        onClick={onClose}
                        colors={[theme === PROMOTE ? colors.bgWhite : colors[`${theme}Text`]]}
                        className={spacedClose ? classes.spacedClose : null}
                    />
                )}
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
        'info', 'warning', 'success', 'error', 'promote'
    ]),
    /** Text of the tip. If you put text between two * characters that text will be displayed as bold. */
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]).isRequired,
    /** Call to action. Appended after the children's text. */
    cta: PropTypes.shape({
        text: PropTypes.string,
        href: PropTypes.string,
        target: PropTypes.string,
        onClick: PropTypes.func
    }),
    /** Boolean to show an icon. */
    icon: PropTypes.bool,
    /** Cancel the default border radius. */
    noBorderRadius: PropTypes.bool,
    /** Center Tip content. */
    center: PropTypes.bool,
    /** Function to call on click of the x icon. */
    onClose: PropTypes.func,
    /** Extra padding on the right of the x icon. */
    spacedClose: PropTypes.bool,
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
};

export default Tip;
