import colors from '../subatomic/colors';
import fonts from '../subatomic/fonts';
import grid from '../subatomic/grid';
import spacing from '../subatomic/spacing';

export default {
    text: {
        letterSpacing:0,
        fontFamily:fonts.body,
        fontWeight:400,
        fontStyle:'normal',
        margin:0
    },
    // Sizes
    hero: {
        fontSize:28,
        lineHeight:'32px',
        fontWeight: 600,
        [`@media screen and (min-width:${grid.sm}px)`]: {
            fontSize:57,
            lineHeight:'72px',
            letterSpacing:-2
        }
    },
    headline: {
        fontSize:28,
        lineHeight:'32px',
        fontWeight: 600,
        [`@media screen and (min-width:${grid.sm}px)`]: {
            fontSize:36,
            lineHeight:'48px',
            letterSpacing:-0.5
        }
    },
    heading: {
        fontSize:22,
        lineHeight:'32px',
        fontWeight:600
    },
    subheading: {
        fontSize:17,
        lineHeight:'24px',
        fontWeight:600
    },
    extraLarge: {
        fontSize:22,
        lineHeight:'32px'
    },
    large: {
        fontSize:17,
        lineHeight:'24px'
    },
    standard: {
        fontSize:15,
        lineHeight:'24px'
    },
    small: {
        fontSize:13,
        lineHeight:'16px'
    },
    micro: {
        fontSize:11,
        lineHeight:'16px'
    },
    // Weight
    strong: {
        fontWeight: 600
    },
    // Colors
    primary: {
        color:colors.prim
    },
    secondary: {
        color:colors.sec
    },
    success: {
        color:colors.successText
    },
    error: {
        color:colors.errorText
    },
    warning: {
        color:colors.warningText
    },
    info: {
        color:colors.infoText
    },
    disabled: {
        color:colors.inkLightest
    },
    white: {
        color:colors.white
    },
    link: {
        color:colors.textLink
    },
    // Emphasis
    highEmphasis: {
        color:colors.ink
    },
    midEmphasis: {
        color:colors.inkLight
    },
    lowEmphasis: {
        color:colors.inkLighter
    },
    // Align
    left: {
        textAlign:'left'
    },
    center: {
        textAlign:'center'
    },
    right: {
        textAlign:'right'
    },
    // Spacing
    topXTiny: {
        marginTop:spacing.xTiny
    },
    topTiny: {
        marginTop:spacing.tiny
    },
    topSmall: {
        marginTop:spacing.small
    },
    topBase: {
        marginTop:spacing.base
    },
    topMedium: {
        marginTop:spacing.medium
    },
    topLarge: {
        marginTop:spacing.large
    },
    topXLarge: {
        marginTop:spacing.xLarge
    },
    bottomXTiny: {
        marginBottom:spacing.xTiny
    },
    bottomTiny: {
        marginBottom:spacing.tiny
    },
    bottomSmall: {
        marginBottom:spacing.small
    },
    bottomBase: {
        marginBottom:spacing.base
    },
    bottomMedium: {
        marginBottom:spacing.medium
    },
    bottomLarge: {
        marginBottom:spacing.large
    },
    bottomXLarge: {
        marginBottom:spacing.xLarge
    }
};
