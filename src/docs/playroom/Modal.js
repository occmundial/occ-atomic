export default `<Text>Add the \`show\` prop to the Modal component.</Text>
<Modal
  title="Title of the modal"
  onClose={() => alert('You should close the modal here')}
  mainBtn={{
    text: 'Main button',
    onClick: () => alert('Main button clicked!')
  }}
  secBtn={{
    text: 'Secondary button',
    onClick: () => alert('Secondary button clicked!')
  }}
>
  <Text>Text</Text>
</Modal>`;
