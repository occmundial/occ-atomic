import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Text extends Component {

    filter(array) {
        return array.filter((item) => {
            const key = Object.keys(item)[0];
            if (item[key]) return key;
        });
    }

    getSize() {
        const { classes, hero, headline, heading, subheading, extraLarge, large, standard, small, micro } = this.props;
        const sizes = [{hero}, {headline}, {heading}, {subheading}, {extraLarge}, {large}, {standard}, {small}, {micro}];
        const filtered = this.filter(sizes);
        if (filtered.length == 0) {
            return classes.standard;
        } else {
            return classes[Object.keys(filtered[0])[0]];
        }
    }

    getEmphasis() {
        const { classes, mid, low } = this.props;
        if (low) return classes.lowEmphasis;
        else if (mid) return classes.midEmphasis;
        else return classes.highEmphasis;
    }

    getColor() {
        const { classes, primary, secondary, success, error, warning, info, disabled, white, link } = this.props;
        const colors = [{primary}, {secondary}, {success}, {error}, {warning}, {info}, {disabled}, {white}, {link}];
        const filtered = this.filter(colors);
        if (filtered.length == 0) {
            return false;
        } else {
            return classes[Object.keys(filtered[0])[0]];
        }
    }

    getAlign() {
        const { classes, left, center, right } = this.props;
        if (left) return classes.left;
        else if (center) return classes.center;
        else if (right) return classes.right;
    }

    getTopSpacing() {
        const { classes, topXTiny, topTiny, topSmall, topBase, topMedium, topLarge, topXLarge } = this.props;
        const spacing = [{topXTiny}, {topTiny}, {topSmall}, {topBase}, {topMedium}, {topLarge}, {topXLarge}];
        const filtered = this.filter(spacing);
        if (filtered.length == 0) {
            return '';
        } else {
            return ` ${classes[Object.keys(filtered[0])[0]]}`;
        }
    }

    getBottomSpacing() {
        const { classes, bottomXTiny, bottomTiny, bottomSmall, bottomBase, bottomMedium, bottomLarge, bottomXLarge } = this.props;
        const spacing = [{bottomXTiny}, {bottomTiny}, {bottomSmall}, {bottomBase}, {bottomMedium}, {bottomLarge}, {bottomXLarge}];
        const filtered = this.filter(spacing);
        if (filtered.length == 0) {
            return '';
        } else {
            return ` ${classes[Object.keys(filtered[0])[0]]}`;
        }
    }

    getWeight() {
        const { classes, hero, headline, heading, subheading, large, standard, small, micro, strong } = this.props;
        const sizes = [{hero}, {headline}, {heading}, {subheading}, {large}, {standard}, {small}, {micro}];
        const filtered = this.filter(sizes);
        if ((filtered.length == 0 || large || standard || small || micro) && strong) {
            return ` ${classes.strong}`;
        } else {
            return false;
        }
    }

    render() {
        const { classes, children, tag, className, style, id, testId } = this.props;
        const TextType = tag;
        const size = this.getSize();
        const color = this.getColor();
        const emphasis = this.getEmphasis();
        const align = this.getAlign();
        const topSpacing = this.getTopSpacing();
        const bottomSpacing = this.getBottomSpacing();
        const strong = this.getWeight();
        return (
            <TextType
                className={`${classes.text} ${size} ${color ? color : emphasis}${topSpacing}${bottomSpacing}${align ? ` ${align}` : ''}${strong ? ` ${strong}` : ''}${className ? ` ${className}` : ''}`}
                style={style}
                id={id}
                data-testid={testId}
            >
                    {children}
            </TextType>
        );
    }
}

Text.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
    /** Hero size style. */
    hero: PropTypes.bool,
    /** Headline size style. */
    headline: PropTypes.bool,
    /** Headline size style. */
    heading: PropTypes.bool,
    /** Subheading size style. */
    subheading: PropTypes.bool,
    /** Extra-large size style. */
    extraLarge: PropTypes.bool,
    /** Large size style. */
    large: PropTypes.bool,
    /** Standard size style. */
    standard: PropTypes.bool,
    /** Small size style. */
    small: PropTypes.bool,
    /** Micro size style. */
    micro: PropTypes.bool,
    /** Strong style. Only applies in large, standard or small sizes. */
    strong: PropTypes.bool,
    /** Medium emphasis color style. */
    mid: PropTypes.bool,
    /** Low emphasis color style. */
    low: PropTypes.bool,
    /** Primary color style. */
    primary: PropTypes.bool,
    /** Secondary color style. */
    secondary: PropTypes.bool,
    /** Success color style. */
    success: PropTypes.bool,
    /** Error color style. */
    error: PropTypes.bool,
    /** Warning color style. */
    warning: PropTypes.bool,
    /** Info color style. */
    info: PropTypes.bool,
    /** Disabled color style. */
    disabled: PropTypes.bool,
    /** White color style. */
    white: PropTypes.bool,
    /** Link color style. */
    link: PropTypes.bool,
    /** Left align style. */
    left: PropTypes.bool,
    /** Center align style. */
    center: PropTypes.bool,
    /** Right align style. */
    right: PropTypes.bool,
    /** X-Tiny top spacing style. */
    topXTiny: PropTypes.bool,
    /** Tiny top spacing style. */
    topTiny: PropTypes.bool,
    /** Small top spacing style. */
    topSmall: PropTypes.bool,
    /** Base top spacing style. */
    topBase: PropTypes.bool,
    /** Medium top spacing style. */
    topMedium: PropTypes.bool,
    /** Large top spacing style. */
    topLarge: PropTypes.bool,
    /** X-Large top spacing style. */
    topXLarge: PropTypes.bool,
    /** X-Tiny bottom spacing style. */
    bottomXTiny: PropTypes.bool,
    /** Tiny bottom spacing style. */
    bottomTiny: PropTypes.bool,
    /** Small bottom spacing style. */
    bottomSmall: PropTypes.bool,
    /** Base bottom spacing style. */
    bottomBase: PropTypes.bool,
    /** Medium bottom spacing style. */
    bottomMedium: PropTypes.bool,
    /** Large bottom spacing style. */
    bottomLarge: PropTypes.bool,
    /** X-Large bottom spacing style. */
    bottomXLarge: PropTypes.bool,
    /** Html tag. */
    tag: PropTypes.string.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
    id: PropTypes.string,
    testId: PropTypes.string
};

Text.defaultProps = {
    tag: 'p'
};

export default Text;
