import grid from '../../../subatomic/grid';

export default {
    conFluid: {
        boxSizing:'border-box',
        paddingRight:'15px',
        paddingLeft:'15px',
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
    [`@media (min-width: ${grid.sm}px)`]: {
        con: {
            width:'750px'
        }
    },
    [`@media (min-width: ${grid.md}px)`]: {
        con: {
            width:'970px'
        }
    },
    [`@media (min-width: ${grid.lg}px)`]: {
        con: {
            width:'1170px'
        }
    }
};