import spacing from "../subatomic/spacing";
import colors from "../subatomic/colors";

export default {
  DivDefault: {
    backgroundColor: colors.bgGrey
  },
  DivUpperFooter: {
    marginTop: "56px"
  },
  DivUpperFooterMobile: {
    marginTop: spacing.base
  },
  CollapseContent: {
    marginLeft: spacing.medium
  },
  DivCollapseMobile: {
    marginTop: spacing.tiny
  },
  DivOCCMundial: {
    marginTop: spacing.base
  },
  Tag:{
    textDecoration: 'none'
  },
  listElement: {
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
};
