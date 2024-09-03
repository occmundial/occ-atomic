import spacing from '../subatomic/spacing';
import grid from '../subatomic/grid';
import colors from '../subatomic/colors';
import fontsOld from '../subatomic/fonts';

import newColors from '../tokens/colors.json';
import newSpacing from '../tokens/spacing.json';
import borderRadius from '../tokens/borderRadius.json';
import fonts from '../tokens/fonts.json';

export const objectToFontValue = (font) =>
  `${font.fontWeight} ${font.fontSize}/${font.lineHeight} ${fontsOld.body}`;

export default {
  '@global': {
    body: {
      overflow:'hidden'
    }
  },
  '@keyframes modalFadeIn': {
    from: { opacity: 0 },
    to: { opacity: 1 }
  },
  '@keyframes modalFadeDown': {
    from: { opacity: 0, marginTop: -spacing.xLarge },
    to: { opacity: 1, marginTop: 0 }
  },
  overlay: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 5, 0.85)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    zIndex: 1000,
    transition: '0.3s all',
    cursor: 'pointer'
  },
  show: {
    animation: '0.3s modalFadeIn linear',
    '& $card': {
      animation: '0.3s modalFadeDown ease-out'
    }
  },
  hide: {
    opacity: 0,
    '& $card': {
      opacity: 0,
      marginTop: -spacing.xLarge
    }
  },
  noClose: {
    cursor: 'default'
  },
  cardWrapper: {
    position: 'relative',
    maxWidth: '100vw',
    maxHeight: '100vh'
  },
  cardBlock: {
    margin: spacing.gutter,
    [`@media screen and (max-width:${grid.xs - 1}px)`]: {
      margin: ({ fullSize }) => fullSize && 0
    }
  },
  card: {
    maxWidth: '100%',
    cursor: 'auto',
    overflow: 'hidden',
    transition: '0.3s opacity, 0.3s margin-top',
    borderRadius: borderRadius['br-sm'],
    border: `1px solid ${newColors.border.default.default}`,
    background: newColors.bg.surface.default,
    [`@media screen and (max-width:${grid.xs - 1}px)`]: {
      minHeight: ({ fullSize }) => fullSize && '100vh',
      borderRadius: ({ fullSize }) => fullSize && 0
    }
  },
  xl: {
    width: 1024
  },
  lg: {
    width: 820
  },
  md: {
    width: 600,
    [`@media screen and (max-width:${grid.sm - 1}px)`]: {
      maxWidth: '100%'
    }
  },
  sm: {
    width: 320,
    maxWidth: '100%',
    '& $header': {
      height: 56,
      padding: [newSpacing['size-2'], newSpacing['size-3']]
    },
    '& $title': {
      font: objectToFontValue(fonts['mobile-h4-m'])
    },
    '& $contentChild': {
      padding: newSpacing['size-3']
    },
    '& $footer': {
      flexDirection: 'column-reverse',
      gap: newSpacing['size-1'],
      padding: newSpacing['size-3']
    }
  },
  fullSize: {
    [`@media screen and (max-width:${grid.xs - 1}px)`]: {
      width: '100% !important',
      border: 0,
    },
    '& $contentWrapper': {
      height: '100vh',
      maxHeight: '100vh',
      overflow: 'auto',
      [`@media screen and (min-width:${grid.xs}px)`]: {
        height: 'auto',
        maxHeight: '85vh'
      }
    }
  },
  contentWrapper: {
    flex: 1,
    height: 'auto',
    maxHeight: '85vh'
  },
  header: {
    height: 56,
    flexGrow: 0,
    padding: [newSpacing['size-2'], newSpacing['size-3']],
    display: 'flex',
    alignItems: 'center',
    zIndex: 1,
    background: 'transparent',
    border: '1px solid transparent',
    transition: '0.2s all',
    [`@media screen and (min-width:${grid.xs}px)`]: {
      height: 72,
      padding: [
        newSpacing['size-4'],
        newSpacing['size-4'],
        newSpacing['size-4'],
        newSpacing['size-7']
      ]
    }
  },
  stickyHeader: {
    marginBottom: -56,
    [`@media screen and (min-width:${grid.xs}px)`]: {
      marginBottom: -72
    }
  },
  solidHeader: {
    background: newColors.bg.surface.default
  },
  title: {
    margin: 0,
    font: objectToFontValue(fonts['mobile-h4-m']),
    [`@media screen and (min-width:${grid.xs}px)`]: {
      font: objectToFontValue(fonts['heading-h4'])
    }
  },
  content: {
    transition: '0.1s height',
    overflow: 'auto',
    flex: 1,
    '&::-webkit-scrollbar': {
      width: 6
    },
    '&::-webkit-scrollbar-thumb': {
      background: colors.grey200,
      borderRadius: 3
    }
  },
  contentChild: {
    padding: newSpacing['size-3'],
    borderBottom: '1px solid transparent',
    [`@media screen and (min-width:${grid.xs}px)`]: {
      padding: [newSpacing['size-3'], newSpacing['size-7']]
    }
  },
  noHeader: {
    [`@media screen and (min-width:${grid.sm}px)`]: {
      paddingTop: newSpacing['size-7']
    }
  },
  noFooter: {
    paddingBottom: newSpacing['size-7']
  },
  headerBorder: {
    borderBottom: `1px solid ${newColors.border.default.subtle}`
  },
  footer: {
    flexGrow: 0,
    textAlign: 'right',
    padding: newSpacing['size-3'],
    borderTop: '1px solid transparent',
    display: 'flex',
    flexDirection: 'column-reverse',
    gap: newSpacing['size-1'],
    [`@media screen and (min-width:${grid.xs}px)`]: {
      padding: [newSpacing['size-4'], newSpacing['size-7']],
      flexDirection: 'row',
      justifyContent: 'flex-end',
      gap: newSpacing['size-2']
    }
  },
  footerBorder: {
    borderTop: `1px solid ${newColors.border.default.subtle}`
  },
  split: {
    display: 'flex',
    flexDirection: 'row'
  },
  imgLeft: {
    display: 'none',
    [`@media screen and (min-width:${grid.xs}px)`]: {
      display: 'block',
      width: 200
    }
  },
  imgTop: {
    width: '100%',
    aspectRatio: '21 / 9',
    maxHeight: 200,
    objectFit: 'cover'
  },
  closePosition: {
    position: 'absolute',
    top: spacing.small,
    right: spacing.small,
    [`@media screen and (min-width:${grid.sm}px)`]: {
      top: spacing.medium,
      right: spacing.medium
    }
  },
  imgTopPadding: {
    paddingTop: newSpacing['size-5']
  }
};
