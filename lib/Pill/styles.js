// import colors from '../subatomic/colors';
import colors from '../tokens/colors.json';
import fonts from '../tokens/fonts.json';
import spacing from '../tokens/spacing.json';
import { parseFontValue } from '../Text/styles';

export default {
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: spacing['size-2']
  },
  top: {
    height: 21,
    marginBottom: spacing['size-2']
  },
  label: {
    font: parseFontValue(fonts['text-field-label']),
    color: colors.text.corp.primary,
    transition: '0.3s all',
  },
  left: {
    float: 'left'
  },
  bottom: {
    height: 21,
    display: 'flex',
    alignItems: 'center',
    marginTop: spacing['size-2']
  },
  assistiveText: {
    font: parseFontValue(fonts['text-field-assistive-text']),
    transition: '0.3s all',
  },
  validAssistiveText: {
    color: colors.text.corp.secondary
  },
  errorAssistiveText: {
    color: colors.text.error
  },
  errorIcon: {
    marginBottom: -2
  },
  stackGroup: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: `${spacing['size-4']} ${spacing['size-2']}`
  },
  choiceGroup: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: `${spacing['size-4']} ${spacing['size-2']}`
  }
};
