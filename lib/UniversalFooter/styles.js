import spacing from "../subatomic/spacing";
import colors from "../subatomic/colors";
import grid from "../subatomic/grid";

export default {
  footer: {
    backgroundColor: colors.bgGrey,
    padding: [spacing.base, 0, spacing.medium],
    [`@media (min-width: ${grid.md}px)`]: {
      padding: [spacing.medium, 0]
    }
  },
  column: {
    paddingLeft: spacing.gutter,
    paddingRight: spacing.gutter,
    paddingBottom: spacing.base
  },
  link: {
    color: colors.grey600,
    textDecoration: "none",
    "&:hover, &:focus, &:active": {
      color: colors.grey600
    }
  },
  listElement: {
    paddingLeft: spacing.small,
    paddingRight: spacing.small,
    position: "relative",
    display: "inline-block",
    "&:first-child": {
      paddingLeft: 0
    },
    "&:not(:last-child)": {
      "&::after": {
        content: '"|"',
        position: "absolute",
        right: -2
      }
    }
  },
  mobileListElement: {
    paddingLeft: 0,
    display: "block",
    paddingBottom: spacing.tiny
  },
  footerBottom: {
    paddingLeft: spacing.gutter,
    paddingRight: spacing.gutter
  },
  bottomWrap: {
    paddingTop: spacing.base,
    borderTop: `1px solid ${colors.grey200}`
  }
};
