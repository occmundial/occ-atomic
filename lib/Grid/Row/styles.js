import grid from "../../subatomic/grid";
import spacing from "../../tokens/spacing.json";

export default {
    row: {
        boxSizing:'border-box',
        '&:before, &:after': {
            display:'table',
            content:'""'
        },
        '&:after': {
            clear:'both'
        },
        [`@media (min-width: ${grid.xxs}px)`]: {
            margin: [0, '-6px']
        },
        [`@media (min-width: ${grid.xs}px)`]: {
            margin: [0, `-${spacing["size-2"]}`]
        },
        [`@media (min-width: ${grid.sm}px)`]: {
            margin: [0, `-${spacing["size-3"]}`]
        },
        [`@media (min-width: ${grid.md}px)`]: {
            margin: [0, `-${spacing["size-3"]}`]
        },
        [`@media (min-width: ${grid.lg}px)`]: {
            margin: [0, `-${spacing["size-3"]}`]
        },
        [`@media (min-width: ${grid.xl}px)`]: {
            margin: [0, `-${spacing["size-3"]}`]
        },
    }
};