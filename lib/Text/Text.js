import React, { Component } from 'react';
import PropTypes from 'prop-types';

const oldToNewClassMapper = {
    // Text
    hero: 'h1',
    headline: 'h2',
    heading: 'h4',
    subheading: 'h5',
    extraLarge: 'bodyXLarge',
    large: 'bodyLarge',
    standard: 'bodyRegular',
    small: 'bodySmall',
    micro: 'bodyXSmall',
    // Color
    primary: 'indigoPrimary',
    secondary: 'pinkPrimary',
    white: 'whitePrimary',
    highEmphasis: 'corpPrimary',
    midEmphasis: 'corpSecondary',
    lowEmphasis: 'corpDisabled',
    // Spacing
    topXTiny: 'top1',
    topTiny: 'top2',
    topSmall: 'top4',
    topBase: 'top5',
    topMedium: 'top6',
    topLarge: 'top8',
    topXLarge: 'top9',
    bottomXTiny: 'bottom1',
    bottomTiny: 'bottom2',
    bottomSmall: 'bottom4',
    bottomBase: 'bottom5',
    bottomMedium: 'bottom6',
    bottomLarge: 'bottom8',
    bottomXLarge: 'bottom9'
};  

const getActiveKey = (array) => {
    for (const item of array) {
      const key = Object.keys(item)[0];
      if (item[key]) return key;
    }
  };

class Text extends Component {
    getSize() {
        const { classes, hero, headline, heading, subheading, extraLarge, large, standard, small, micro } = this.props;
        const sizes = [{ hero }, { headline }, { heading }, { subheading }, { extraLarge }, { large }, { standard }, { small }, { micro }];
        const sizeActive = getActiveKey(sizes);
        if (!sizeActive) return classes.bodyRegular;
        const activeSizeParsed = oldToNewClassMapper[sizeActive]
        return classes[activeSizeParsed || sizeActive];
    }

    getEmphasis() {
        const { classes, mid, low } = this.props;
        if (low) return classes.corpDisabled;
        else if (mid) return classes.corpSecondary;
        else return classes.corpPrimary;
    }

    getColor() {
        const { classes, primary, secondary, success, error, warning, info, disabled, white, link } = this.props;
        const colors = [{ primary }, { secondary }, { success }, { error }, { warning }, { info }, { disabled }, { white }, { link }];
        const colorActive = getActiveKey(colors);
        if (!colorActive) return false;
        const colorActiveParsed = oldToNewClassMapper[colorActive]
        return classes[colorActiveParsed || colorActive]
    }

    getAlign() {
        const { classes, left, center, right } = this.props;
        if (left) return classes.left;
        else if (center) return classes.center;
        else if (right) return classes.right;
    }

    getTopSpacing() {
        const { classes, topXTiny, topTiny, topSmall, topBase, topMedium, topLarge, topXLarge } = this.props;
        const spacing = [{ topXTiny }, { topTiny }, { topSmall }, { topBase }, { topMedium }, { topLarge }, { topXLarge }];
        const topSpacingActive = getActiveKey(spacing);
        if (!topSpacingActive) return '';
        const topSpacingActiveParsed = oldToNewClassMapper[topSpacingActive]
        return ` ${classes[topSpacingActiveParsed || topSpacingActive]}`;
    }

    getBottomSpacing() {
        const { classes, bottomXTiny, bottomTiny, bottomSmall, bottomBase, bottomMedium, bottomLarge, bottomXLarge } = this.props;
        const spacing = [{ bottomXTiny }, { bottomTiny }, { bottomSmall }, { bottomBase }, { bottomMedium }, { bottomLarge }, { bottomXLarge }];
        const bottomSpacingActive = getActiveKey(spacing);
        if (!bottomSpacingActive)  return '';
        const bottomSpacingActiveParsed = oldToNewClassMapper[bottomSpacingActive]
        return ` ${classes[bottomSpacingActiveParsed || bottomSpacingActive]}`;
    }

    getWeight() {
        const { classes, hero, headline, heading, subheading, large, standard, small, micro, strong } = this.props;
        const sizes = [{ hero }, { headline }, { heading }, { subheading }, { large }, { standard }, { small }, { micro }];
        const weightActive = getActiveKey(sizes);
        if ((!weightActive || large || standard || small || micro) && strong) 
            return ` ${classes.strong}`;
        return false;
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
    /** Medium emphasis color style. */
    mid: PropTypes.bool,
    /** Low emphasis color style. */
    low: PropTypes.bool,
    /** Primary color style. */
    primary: PropTypes.bool,
    /** Secondary color style. */
    secondary: PropTypes.bool,
    /** Info color style. */
    info: PropTypes.bool,
    /** Disabled color style. */
    disabled: PropTypes.bool,
    /** White color style. */
    white: PropTypes.bool,
    /** Link color style. */
    link: PropTypes.bool,
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
    /** X-Large bottom spacing style. */
    display: PropTypes.bool,
    /** X-Large bottom spacing style. */
    h1: PropTypes.bool,
    /** X-Large bottom spacing style. */
    h2: PropTypes.bool,
    /** X-Large bottom spacing style. */
    h3: PropTypes.bool,
    /** X-Large bottom spacing style. */
    h4: PropTypes.bool,
    /** X-Large bottom spacing style. */
    h5: PropTypes.bool,
    /** X-Large bottom spacing style. */
    tagText: PropTypes.bool,
    /** X-Large bottom spacing style. */
    bodyXLarge: PropTypes.bool,
    /** X-Large bottom spacing style. */
    bodyLargeStrong: PropTypes.bool,
    /** X-Large bottom spacing style. */
    bodyLarge: PropTypes.bool,
    /** X-Large bottom spacing style. */
    bodyRegularStrong: PropTypes.bool,
    /** X-Large bottom spacing style. */
    bodyRegular: PropTypes.bool,
    /** X-Large bottom spacing style. */
    bodySmallStrong: PropTypes.bool,
    /** X-Large bottom spacing style. */
    bodySmall: PropTypes.bool,
    /** X-Large bottom spacing style. */
    bodyXSmall: PropTypes.bool,
    /** X-Large bottom spacing style. */
    indigoPrimary: PropTypes.bool,
    /** X-Large bottom spacing style. */
    indigoSecondary: PropTypes.bool,
    /** X-Large bottom spacing style. */
    pinkPrimary: PropTypes.bool,
    /** X-Large bottom spacing style. */
    whiteSecondary: PropTypes.bool,
    /** X-Large bottom spacing style. */
    whitePrimary: PropTypes.bool,
    /** X-Large bottom spacing style. */
    corpPrimary: PropTypes.bool,
    /** X-Large bottom spacing style. */
    corpSecondary: PropTypes.bool,
    /** X-Large bottom spacing style. */
    corpDisabled: PropTypes.bool,
    /** X-Large bottom spacing style. */
    top0: PropTypes.bool,
    /** X-Large bottom spacing style. */
    top1: PropTypes.bool,
    /** X-Large bottom spacing style. */
    top2: PropTypes.bool,
    /** X-Large bottom spacing style. */
    top3: PropTypes.bool,
    /** X-Large bottom spacing style. */
    top4: PropTypes.bool,
    /** X-Large bottom spacing style. */
    top5: PropTypes.bool,
    /** X-Large bottom spacing style. */
    top6: PropTypes.bool,
    /** X-Large bottom spacing style. */
    top7: PropTypes.bool,
    /** X-Large bottom spacing style. */
    top8: PropTypes.bool,
    /** X-Large bottom spacing style. */
    top9: PropTypes.bool,
    /** X-Large bottom spacing style. */
    top10: PropTypes.bool,
    /** X-Large bottom spacing style. */
    top11: PropTypes.bool,
    /** X-Large bottom spacing style. */
    top12: PropTypes.bool,
    /** X-Large bottom spacing style. */
    bottom0: PropTypes.bool,
    /** X-Large bottom spacing style. */
    bottom1: PropTypes.bool,
    /** X-Large bottom spacing style. */
    bottom2: PropTypes.bool,
    /** X-Large bottom spacing style. */
    bottom3: PropTypes.bool,
    /** X-Large bottom spacing style. */
    bottom4: PropTypes.bool,
    /** X-Large bottom spacing style. */
    bottom5: PropTypes.bool,
    /** X-Large bottom spacing style. */
    bottom6: PropTypes.bool,
    /** X-Large bottom spacing style. */
    bottom7: PropTypes.bool,
    /** X-Large bottom spacing style. */
    bottom8: PropTypes.bool,
    /** X-Large bottom spacing style. */
    bottom9: PropTypes.bool,
    /** X-Large bottom spacing style. */
    bottom10: PropTypes.bool,
    /** X-Large bottom spacing style. */
    bottom11: PropTypes.bool,
    /** X-Large bottom spacing style. */
    bottom12: PropTypes.bool,

    classes: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
    /** Strong style. Only applies in large, standard or small sizes. */
    strong: PropTypes.bool,
    /** Success color style. */
    success: PropTypes.bool,
    /** Error color style. */
    error: PropTypes.bool,
    /** Warning color style. */
    warning: PropTypes.bool,
    /** Left align style. */
    left: PropTypes.bool,
    /** Center align style. */
    center: PropTypes.bool,
    /** Right align style. */
    right: PropTypes.bool,
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
