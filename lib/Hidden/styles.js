import grid from '../subatomic/grid';

export default {
    xs: {
        [`@media screen and (max-width:${grid.sm-1}px)`]: {
            display:'none'
        }
    },
    sm: {
        [`@media screen and (max-width: ${grid.md-1}px) and (min-width: ${grid.sm}px)`]: {
            display:'none'
        }
    },
    md: {
        [`@media screen and (max-width: ${grid.lg-1}px) and (min-width: ${grid.md}px)`]: {
            display:'none'
        }
    },
    lg: {
        [`@media screen and (min-width: ${grid.lg}px)`]: {
            display:'none'
        }
    }
};