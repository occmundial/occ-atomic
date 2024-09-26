import spacing from '../tokens/spacing.json';

function generateSpacingClasses() {
  const spacingClasses = {};
  for (const [key, value] of Object.values(spacing)) {
    spacingClasses[key] = { padding: value };
  }
  return spacingClasses;
}

export default {
  container: {
    marginBlock: 0,
    paddingBlock: 0,
    paddingInline: 0
  },
  ...generateSpacingClasses()
};
