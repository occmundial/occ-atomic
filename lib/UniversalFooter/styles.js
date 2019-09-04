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
  column:{
    paddingLeft: spacing.gutter,
    paddingRight:spacing.gutter
  },



  footerDown: {
    marginTop: spacing.base,
    paddingTop: spacing.base,
    borderTop: `1px solid ${colors.inkLightest}`
  },
  link: {
    textDecoration: "none"
  },
  listElement: {
    [`@media (min-width: ${grid.md}px)`]: {
      display: "inline",
      "&:not(:last-child)": {
        "&::after": {
          content: '" | "',
          fontSize: 12,
          color: colors.inkLight,
          marginRight: spacing.tiny,
          marginLeft: spacing.tiny
        }
      }
    }
  },
  infoButton: {
    [`@media (min-width: ${grid.md}px)`]: {
      textAlign: "right"
    }
  }
};
