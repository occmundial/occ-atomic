import colors from '../subatomic/colors';
import newColors from '../tokens/colors.json';
import fonts from '../tokens/fonts.json';
import spacing from '../tokens/spacing.json';
import borderRadius from '../tokens/borderRadius.json';

import { parseFontValue } from '../Text/styles';

const { infoLight, infoText, info, white } = colors;

export default {
  activator: {
    display: 'inline-block'
  },
  tooltip: {
    padding: [spacing['size-2'], spacing['size-3']],
    borderRadius: borderRadius['br-xs']
  },
  content: {
    display: 'flex',
    gap: spacing['size-1'],
    alignItems: 'center',
    justifyContent: 'center'
  },
  info: {
    background: infoLight,
    color: infoText
  },
  dark: {
    background: newColors.bg.neutral,
    color: white,
    boxShadow: `inset 0 0 0 1px ${newColors.border.inverse.subtle}`
  },
  light: {
    background: newColors.bg.surface.default,
    color: info,
    '&:after': {
      boxShadow: `inset -2px -2px 0 -1px ${newColors.border.default.subtle}`
    },
    boxShadow: `inset 0 0 0 1px ${newColors.border.default.subtle}`
  },
  purple: {
    background: info,
    color: white
  },
  text: {
    font: parseFontValue(fonts['body-x-small']),
    margin: 0
  }
};
