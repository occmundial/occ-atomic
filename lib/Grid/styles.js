import grid from "../subatomic/grid";
import spacing from "../subatomic/spacing";

export default {
    conFluid: {
        boxSizing:'border-box',
        paddingRight:spacing.gutter,
        paddingLeft:spacing.gutter,
        marginRight:'auto',
        marginLeft:'auto',
        '&:before, &:after': {
            display:'table',
            content:'""'
        },
        '&:after': {
            clear:'both'
        }
    },
    con: {
        extend: 'conFluid',
        margin:'0 auto'
    },
    [`@media (min-width: ${grid.xs}px)`]: {
        con: {
            width:grid.xsGrid
        }
    },
    [`@media (min-width: ${grid.sm}px)`]: {
        con: {
            width:grid.smGrid
        }
    },
    [`@media (min-width: ${grid.md}px)`]: {
        con: {
            width:grid.mdGrid
        }
    },
    [`@media (min-width: ${grid.lg}px)`]: {
        con: {
            width:grid.lgGrid
        }
    },
    [`@media (min-width: ${grid.xl}px)`]: {
        con: {
            width:grid.xlGrid
        }
    }
};