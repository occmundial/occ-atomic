import spacing from '../subatomic/spacing';
import icons from '../subatomic/icons';
import colors from '../subatomic/colors';

export default {
    cont: {
        width: props => props.width ? props.width : null,
        display: 'inline-block',
        height: spacing.xLarge,
        cursor: 'pointer',
        position: 'relative',
        '&:hover $icon': {
            background: props => icons.base(icons[props.iconName].icon([props.white ? colors.bgWhite : colors.grey900])),
            opacity: props => props.white ? 0.6 : null
        },
        '&:hover $text': {
            color: props => props.white ? colors.white : colors.ink,
            opacity: props => props.white ? 0.6 : null
        },
        '&:after': {
            content: '""',
            position: 'absolute',
            width: '100%',
            height: 3,
            bottom: 0,
            left: 0,
            background: 'transparent',
            transition: '0.3s all'
        }
    },
    flex: {
        height: spacing.xLarge
    },
    selected: {
        '& $icon, &:hover $icon': {
            background: props => icons.base(icons[props.iconName].icon([props.white ? colors.bgWhite : colors.prim]))
        },
        '& $text, &:hover $text': {
            color: props => props.white ? colors.white : colors.prim
        },
        '&:after': {
            background: props => props.showBar ? props.white ? colors.bgWhite : colors.prim : null
        }
    },
    icon: {
        width: spacing.base,
        height: spacing.base,
        background: props => icons.base(icons[props.iconName].icon([props.white ? colors.bgWhite : colors.grey600])),
        transition: '0.3s all'
    },
    text: {
        color: props => props.white ? colors.white : colors.inkLight,
        marginLeft: props => props.direction !== 'col' ? spacing.xTiny : null,
        textTransform: 'uppercase',
        transition: '0.3s all'
    }
};
