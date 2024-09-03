import colors from '../../tokens/colors.json';
import spacing from '../../tokens/spacing.json';
import shadows from '../../tokens/shadows.json';
import borderRadius from '../../tokens/borderRadius.json';
import grid from '../../subatomic/grid';
import fonts from '../../tokens/fonts.json';
import { parseFontValue } from '../../Text/styles';

export default {
  list: {
    display: 'grid',
    gridTemplateRows: '0fr',
    transition:
      'grid-template-rows cubic-bezier(0.25,0.46,0.45,0.94) 0.2s 0.05s, opacity cubic-bezier(0.25,0.46,0.45,0.94) 0.2s',
    opacity: 0,
    [`@media (min-width: ${grid.xs}px)`]: {
      opacity: 1,
      gridTemplateRows: '1fr'
    }
  },
  toggle: {
    opacity: 1,
    gridTemplateRows: '1fr',
    transition:
      'grid-template-rows cubic-bezier(0.25,0.46,0.45,0.94) 0.2s, opacity cubic-bezier(0.25,0.46,0.45,0.94) 0.2s 0.05s'
  },
  content: {
    overflow: 'hidden',
    transform: 'translateY(-10px)',
    transition: 'transform cubic-bezier(0.25,0.46,0.45,0.94) 0.2s',
    display: 'flex',
    flexDirection: 'column',
    rowGap: spacing['size-4'],
    [`@media (min-width: ${grid.xs}px)`]: {
      transform: 'translateY(0px)',
      overflow: 'visible'
    }
  },
  showContent: {
    [`@media (max-width: ${grid.xs - 1}px)`]: {
      transform: 'translateY(0px)',
      transition: 'transform cubic-bezier(0.25,0.46,0.45,0.94) 0.2s 0.05s',
      marginBottom: spacing['size-3']
    }
  },
  overflowVisible: {
    overflow: 'visible'
  },
  collapsible: {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    [`@media (min-width: ${grid.xs}px)`]: {
      cursor: 'default'
    }
  },
  arrow: {
    display: 'inline-block',
    [`@media (min-width: ${grid.xs}px)`]: {
      display: 'none'
    }
  },
  arrowUp: {
    transform: 'rotate(-180deg)'
  },
  link: {
    font: parseFontValue(fonts['body-regular']),
    color: colors.text.corp.secondary,
    textDecoration: 'none',
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
  iconWrapper: {
    marginBottom: spacing['size-2'],
    marginRight: spacing['size-2'],
    display: 'inline-block'
  },
  title: {
    padding: [spacing['size-4'], 0],
    [`@media (min-width: ${grid.xs}px)`]: {
      display: 'none',
      padding: 0,
      marginBottom: spacing['size-5']
    }
  },
  titleColor: {
    font: parseFontValue(fonts['heading-h5']),
    margin: 0
  },
  titleDesktop: {
    display: 'none',
    [`@media (min-width: ${grid.xs}px)`]: {
      marginBottom: spacing['size-5'],
      display: 'block'
    }
  }
};
