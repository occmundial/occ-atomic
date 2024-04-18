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
        const {
            classes, hero, headline, heading, subheading, extraLarge, large, standard, small, micro, display,
            h1, h2, h3, h4, h5, tagText, bodyXLarge, bodyLargeStrong, bodyLarge, bodyRegularStrong, bodyRegular,
            bodySmallStrong, bodySmall, bodyXSmall
        } = this.props;
        const sizeActive = getActiveKey([
            { display }, { h1 }, { h2 }, { h3 }, { h4 }, { h5 }, { tag: tagText }, { bodyXLarge },
            { bodyLargeStrong }, { bodyLarge }, { bodyRegularStrong }, { bodyRegular }, { bodySmallStrong },
            { bodySmall }, { bodyXSmall }, { hero }, { headline }, { heading }, { subheading }, { extraLarge },
            { large }, { standard }, { small }, { micro }
        ]);
        if (!sizeActive) return classes.bodyRegular;
        const activeSizeParsed = oldToNewClassMapper[sizeActive];
        return classes[activeSizeParsed || sizeActive];
    }

    getEmphasis() {
        const { classes, mid, low } = this.props;
        if (low) return classes.corpDisabled;
        else if (mid) return classes.corpSecondary;
        else return classes.corpPrimary;
    }

    getColor() {
        const {
            classes, primary, secondary, success, error, warning, info, disabled, white, link,
            indigoPrimary, indigoSecondary, pinkPrimary, whiteSecondary, whitePrimary
        } = this.props;
        const colorActive = getActiveKey([
            { primary }, { secondary }, { success }, { error }, { warning }, { info }, { disabled }, { white }, { link },
            { indigoPrimary }, { indigoSecondary }, { pinkPrimary }, { whiteSecondary }, { whitePrimary },
        ]);
        if (!colorActive) return false;
        const colorActiveParsed = oldToNewClassMapper[colorActive];
        return classes[colorActiveParsed || colorActive];
    }

    getAlign() {
        const { classes, left, center, right } = this.props;
        if (left) return classes.left;
        else if (center) return classes.center;
        else if (right) return classes.right;
    }

    getTopSpacing() {
        const {
            classes, topXTiny, topTiny, topSmall, topBase, topMedium, topLarge, topXLarge,
            top0, top1, top2, top3, top4, top5, top6, top7, top8, top9, top10, top11, top12
        } = this.props;
        const spacing = [
            { topXTiny }, { topTiny }, { topSmall }, { topBase }, { topMedium }, { topLarge }, { topXLarge },
            { top0 }, { top1 }, { top2 }, { top3 }, { top4 }, { top5 }, { top6 }, { top7 }, { top8 },
            { top9 }, { top10 }, { top11 }, { top12 }
        ];
        const topSpacingActive = getActiveKey(spacing);
        if (!topSpacingActive) return '';
        const topSpacingActiveParsed = oldToNewClassMapper[topSpacingActive];
        return ` ${classes[topSpacingActiveParsed || topSpacingActive]}`;
    }

    getBottomSpacing() {
        const { classes, bottomXTiny, bottomTiny, bottomSmall, bottomBase, bottomMedium, bottomLarge, bottomXLarge,
            bottom0, bottom1, bottom2, bottom3, bottom4, bottom5, bottom6, bottom7, bottom8, bottom9, bottom10, bottom11, bottom12,
         } = this.props;
        const spacing = [{ bottomXTiny }, { bottomTiny }, { bottomSmall }, { bottomBase }, { bottomMedium }, { bottomLarge }, { bottomXLarge },
            { bottom0 }, { bottom1 }, { bottom2 }, { bottom3 }, { bottom4 }, { bottom5 }, { bottom6 }, { bottom7 }, { bottom8 }, { bottom9 }, 
            { bottom10 }, { bottom11 }, { bottom12 }
        ];
        const bottomSpacingActive = getActiveKey(spacing);
        if (!bottomSpacingActive) return '';
        const bottomSpacingActiveParsed = oldToNewClassMapper[bottomSpacingActive];
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
    /** display typography style. */
    display: PropTypes.bool,
    /** h1 typography style. */
    h1: PropTypes.bool,
    /** h2 typography style. */
    h2: PropTypes.bool,
    /** h3 typography style. */
    h3: PropTypes.bool,
    /** h4 typography style. */
    h4: PropTypes.bool,
    /** h5 typography style. */
    h5: PropTypes.bool,
    /** tagText typography style. */
    tagText: PropTypes.bool,
    /** bodyXLarge typography style. */
    bodyXLarge: PropTypes.bool,
    /** bodyLargeStrong typography style. */
    bodyLargeStrong: PropTypes.bool,
    /** bodyLarge typography style. */
    bodyLarge: PropTypes.bool,
    /** bodyRegularStrong typography style. */
    bodyRegularStrong: PropTypes.bool,
    /** bodyRegular typography style. */
    bodyRegular: PropTypes.bool,
    /** bodySmallStrong typography style. */
    bodySmallStrong: PropTypes.bool,
    /** bodySmall typography style. */
    bodySmall: PropTypes.bool,
    /** bodyXSmall typography style. */
    bodyXSmall: PropTypes.bool,
    /** Indigo primary emphasis color style. */
    indigoPrimary: PropTypes.bool,
    /** Indigo secondary emphasis color style. */
    indigoSecondary: PropTypes.bool,
    /** Pink primary emphasis color style. */
    pinkPrimary: PropTypes.bool,
    /** White secondary  emphasis color style. */
    whiteSecondary: PropTypes.bool,
    /** White  emphasis color style. */
    whitePrimary: PropTypes.bool,
    /** Corp secondary emphasis color style. */
    corpSecondary: PropTypes.bool,
    /** Corp disabled emphasis color style. */
    corpDisabled: PropTypes.bool,
    /** Top0 spacing style (2px). */
    top0: PropTypes.bool,
    /** Top1 spacing style (4px). */
    top1: PropTypes.bool,
    /** Top2 spacing style (8px). */
    top2: PropTypes.bool,
    /** Top3 spacing style (12px). */
    top3: PropTypes.bool,
    /** Top4 spacing style (16px). */
    top4: PropTypes.bool,
    /** Top5 spacing style (24px). */
    top5: PropTypes.bool,
    /** Top6 spacing style (32px). */
    top6: PropTypes.bool,
    /** Top7 spacing style (40px). */
    top7: PropTypes.bool,
    /** Top8 spacing style (48px). */
    top8: PropTypes.bool,
    /** Top9 spacing style (64px). */
    top9: PropTypes.bool,
    /** Top10 spacing style (80px). */
    top10: PropTypes.bool,
    /** Top11 spacing style (120px). */
    top11: PropTypes.bool,
    /** Top12 spacing style (160px). */
    top12: PropTypes.bool,
    /** Bottom0 spacing style (2px). */
    bottom0: PropTypes.bool,
    /** Bottom1 spacing style (4px). */
    bottom1: PropTypes.bool,
    /** Bottom2 spacing style (8px). */
    bottom2: PropTypes.bool,
    /** Bottom3 spacing style (12px). */
    bottom3: PropTypes.bool,
    /** Bottom4 spacing style (16px). */
    bottom4: PropTypes.bool,
    /** Bottom5 spacing style (24px). */
    bottom5: PropTypes.bool,
    /** Bottom6 spacing style (32px). */
    bottom6: PropTypes.bool,
    /** Bottom7 spacing style (40px). */
    bottom7: PropTypes.bool,
    /** Bottom8 spacing style (48px). */
    bottom8: PropTypes.bool,
    /** Bottom9 spacing style (64px). */
    bottom9: PropTypes.bool,
    /** Bottom10 spacing style (80px). */
    bottom10: PropTypes.bool,
    /** Bottom11 spacing style (120px). */
    bottom11: PropTypes.bool,
    /** Bottom12 spacing style (160px). */
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
    /** The className of the text container. */
    className: PropTypes.string,
    /** The style of the text container. */
    style: PropTypes.object,
    id: PropTypes.string,
    testId: PropTypes.string,

    /** [Legacy prop] h1 typography style.*/
    hero: PropTypes.bool,
    /** [Legacy prop] h2 typography style.*/
    headline: PropTypes.bool,
    /** [Legacy prop] h4 typography style.*/
    heading: PropTypes.bool,
    /** [Legacy prop] h5 typography style.*/
    subheading: PropTypes.bool,
    /** [Legacy prop] bodyXLarge typography style.*/
    extraLarge: PropTypes.bool,
    /** [Legacy prop] bodyLarge typography style.*/
    large: PropTypes.bool,
    /** [Legacy prop] bodyRegular typography style.*/
    standard: PropTypes.bool,
    /** [Legacy prop] bodySmall typography style.*/
    small: PropTypes.bool,
    /** [Legacy prop] bodyXSmall typography style.*/
    micro: PropTypes.bool,
    /** [Legacy prop] Corp secondary emphasis color style.*/
    mid: PropTypes.bool,
    /** [Legacy prop] Corp disabled emphasis color style.*/
    low: PropTypes.bool,
    /** [Legacy prop] Indigo primary emphasis color style.*/
    primary: PropTypes.bool,
    /** [Legacy prop] Pink primary emphasis color style.*/
    secondary: PropTypes.bool,
    /** [Legacy prop] Info color style.*/
    info: PropTypes.bool,
    /** [Legacy prop] Disabled emphasis color style.*/
    disabled: PropTypes.bool,
    /** [Legacy prop] White  emphasis color style.*/
    white: PropTypes.bool,
    /** [Legacy prop] Link emphasis color style.*/
    link: PropTypes.bool,
    /** [Legacy prop] Top1 spacing style (4px).*/
    topXTiny: PropTypes.bool,
    /** [Legacy prop] Top2 spacing style (8px).*/
    topTiny: PropTypes.bool,
    /** [Legacy prop] Top4 spacing style (16px).*/
    topSmall: PropTypes.bool,
    /** [Legacy prop] Top5 spacing style (24px).*/
    topBase: PropTypes.bool,
    /** [Legacy prop] Top6 spacing style (32px).*/
    topMedium: PropTypes.bool,
    /** [Legacy prop] Top8 spacing style (48px).*/
    topLarge: PropTypes.bool,
    /** [Legacy prop] Top9 spacing style (64px).*/
    topXLarge: PropTypes.bool,
    /** [Legacy prop] Bottom1 spacing style (4px).*/
    bottomXTiny: PropTypes.bool,
    /** [Legacy prop] Bottom2 spacing style (8px).*/
    bottomTiny: PropTypes.bool,
    /** [Legacy prop] Bottom4 spacing style (16px).*/
    bottomSmall: PropTypes.bool,
    /** [Legacy prop] Bottom5 spacing style (24px).*/
    bottomBase: PropTypes.bool,
    /** [Legacy prop] Bottom6 spacing style (32px).*/
    bottomMedium: PropTypes.bool,
    /** [Legacy prop] Bottom8 spacing style (48px).*/
    bottomLarge: PropTypes.bool,
    /** [Legacy prop] Bottom9 spacing style (64px).*/
    bottomXLarge: PropTypes.bool
};

Text.defaultProps = {
    tag: 'p'
};

export default Text;
