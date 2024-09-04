import colors from '../tokens/colors.json';
import spacing from '../tokens/spacing.json';
import shadows from '../tokens/shadows.json';
import borderRadius from '../tokens/borderRadius.json';
import grid from '../subatomic/grid';
import fonts from '../tokens/fonts.json';
import { parseFontValue } from '../Text/styles';

export default {
  footer: {
    backgroundColor: colors.bg.surface.default,
  },
  footerTransparent: {
    backgroundColor: 'transparent',
  },
  borderTop: {
    borderTop: `1px solid ${colors.border.default.subtle}`,
  },
  footerContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: spacing['size-7'],
    paddingBottom: spacing['size-7'],
    rowGap: spacing['size-5'],
    [`@media (min-width: ${grid.xs}px)`]: {
      rowGap: spacing['size-7']
    },
    [`@media (min-width: ${grid.md}px)`]: {
      rowGap: spacing['size-8']
    }
  },
  column: {
    display: 'grid',
    [`@media (min-width: ${grid.xs}px)`]: {
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
      columnGap: spacing['size-4'],
      rowGap: spacing['size-7']
    },
    [`@media (min-width: ${grid.md}px)`]: {
      columnGap: spacing['size-5'],
      rowGap: 0,
      gridTemplateColumns: 'repeat(4, minmax(0, 1fr))'
    }
  },
  link: {
    font: parseFontValue(fonts['body-small']),
    color: colors.text.corp.secondary,
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'all cubic-bezier(0.25,0.46,0.45,0.94) 0.2s',
    '&:hover': {
      color: colors.text.corp.primary
    },
    '&:focus-visible': {
      color: colors.text.corp.primary,
      boxShadow: shadows['focus-corp'],
      borderRadius: borderRadius['br-xs'],
      outline: 0
    }
  },
  listElement: {
    display: 'block',
    textAlign: 'center',
    [`@media (min-width: ${grid.sm}px)`]: {
      position: 'relative',
      display: 'inline-block'
    }
  },
  bottomSection: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: spacing['size-7']
  },
  bottomLinksContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    columnGap: spacing['size-5'],
    rowGap: spacing['size-4'],
    [`@media (min-width: ${grid.sm}px)`]: {
      flexDirection: 'row',
      alignItems: 'stretch'
    }
  },
  linkDivider: {
    width: 1,
    margin: [spacing['size-0'], 0],
    backgroundColor: colors.border.default.bold,
    alignSelf: 'stretch',
    display: 'none',
    [`@media (min-width: ${grid.sm}px)`]: {
      display: 'block'
    }
  },
  copyright: {
    font: parseFontValue(fonts['body-small']),
    color: colors.text.corp.secondary,
    '& > p': {
      margin: 0
    }
  },
  bottomContainer: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: spacing['size-4'],
    [`@media (min-width: ${grid.sm}px)`]: {
      rowGap: spacing['size-5']
    }
  },
  divider: {
    borderTop: `1px solid ${colors.border.default.subtle}`
  },
  auxContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: spacing['size-5'],
    [`@media (min-width: ${grid.md}px)`]: {
      flexDirection: 'row',
      gap: spacing['size-9']
    }
  },
  badgesContainer: {
    display: 'flex',
    gap: spacing['size-4'],
    flexDirection: 'column',
    [`@media (min-width: ${grid.xs}px)`]: {
      flexDirection: 'row'
    }
  },
  socialMediaContainer: {
    display: 'flex',
    direction: 'row',
    columnGap: spacing['size-1']
  }
};
