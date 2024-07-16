import grid from '../subatomic/grid';
import spacing from '../tokens/spacing.json';

export default {
  conFluid: {
    boxSizing: 'border-box',
    paddingRight: spacing['size-3'],
    paddingLeft: spacing['size-3'],
    marginRight: 'auto',
    marginLeft: 'auto',
    '&:before, &:after': {
      display: 'table',
      content: '""'
    },
    '&:after': {
      clear: 'both'
    }
  },
  con: {
    margin: [0, spacing['size-3']],
    width: `calc(${grid.full} - ${spacing['size-5']})`,
  },
  [`@media (min-width: ${grid.xs}px)`]: {
    con: {
      width: `calc(${grid.xsGrid} - ${spacing['size-6']})`,
      margin: [0, spacing['size-4']]
    }
  },
  [`@media (min-width: ${grid.sm}px)`]: {
    con: {
      width: `calc(${grid.smGrid} - ${spacing['size-8']})`,
      margin: [0, spacing['size-5']]
    }
  },
  [`@media (min-width: ${grid.md}px)`]: {
    con: {
      width: `calc(${grid.mdGrid} - ${spacing['size-10']})`,
      margin: [0, spacing['size-7']]
    }
  },
  [`@media (min-width: ${grid.lg}px)`]: {
    con: {
      width: grid.lgGrid,
      margin: 'auto'
    }
  },
  [`@media (min-width: ${grid.xl}px)`]: {
    con: {
      width: grid.xlGrid,
      margin: 'auto'
    }
  }
};
