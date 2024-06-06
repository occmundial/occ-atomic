import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

const boldRegex = /\*(.*?)\*/g;

const TipText = ({ classes, text }) => {
  const result = useMemo(() => {
    if (text === '' || typeof text !== 'string') return text;
    return (
      <p className={classes}>
        {text.replace(boldRegex, (_, txt) => txt)}
      </p>
    );
  }, [text, classes]);

  return result;
};

TipText.propTypes = {
  classes: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

export default TipText;
