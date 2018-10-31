import spacing from "../../subatomic/spacing";

export default {
    row: {
        boxSizing:'border-box',
        marginRight:-spacing.gutter,
        marginLeft:-spacing.gutter,
        '&:before, &:after': {
            display:'table',
            content:'""'
        },
        '&:after': {
            clear:'both'
        }
    }
};