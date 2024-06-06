import React from 'react';
import PropTypes from 'prop-types';

const boldRegex = /\*(.*?)\*/g;

const TipText = ({ classes, text }) => {
  if (text === '' || typeof text !== 'string') return text;

  const result = text.replace(boldRegex, (_, txt) => txt);
  return <p className={classes}>{result}</p>;
};

TipText.propTypes = {
  classes: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

export default TipText;
