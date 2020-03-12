import { createUseStyles } from 'react-jss';

import colors from '../subatomic/colors';
import spacing from '../subatomic/spacing';
import icons from '../subatomic/icons';
import iconSizes from '../subatomic/iconSizes';

export default createUseStyles({
    cont: {
        paddingTop:spacing.tiny,
        paddingBottom:spacing.tiny,
        boxSizing:'border-box',
        display:'flex',
        alignItems:'start',
        cursor:'pointer',
        outline:'0',
        '&:after': {
            content:'""',
            display:'table',
            clear:'both'
        },
        '&:hover $check:after': {
            background:icons.base(icons.check.icon([colors.grey200]))
        }
    },
    check: {
        width:spacing.base,
        height:spacing.base,
        position:'relative',
        '&:before': {
            content:'""',
            width:spacing.small,
            height:spacing.small,
            borderRadius:4,
            position:'absolute',
            top:'50%',
            left:'50%',
            transform:'translate(-50%, -50%)',
            border:`1px solid ${colors.grey200}`,
            background:colors.bgWhite
        },
        '&:after': {
            content:'""',
            width:iconSizes.small,
            height:iconSizes.small,
            marginTop:-1,
            position:'absolute',
            top:'50%',
            left:'50%',
            transform:'translate(-50%, -50%)',
            transition:'0.3s all',
            background:'transparent'
        }
    },
    active: {
        '& $check:after': {
            background:[icons.base(icons.check.icon([colors.prim])), '!important']
        }
    },
    undetermined: {
        '& $check:after': {
            background:[icons.base(icons.minus.icon([colors.prim])), '!important'],
            marginTop: 0
        }
    },
    disabled: {
        opacity:0.4,
        pointerEvents:'none'
    },
    label: {
        marginLeft:spacing.tiny,
        cursor:'pointer',
        float:'left',
        flex:'1'
    },
    right: {
        marginLeft:spacing.tiny,
        float:'right'
    },
    overflow: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    }
});
