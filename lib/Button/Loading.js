import React from 'react';
import PropTypes from 'prop-types';

export default function Loading(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="4" cy="13" r="3">
        <animate
          attributeName="r"
          begin="0s"
          dur="0.7s"
          values="2;3;2"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="cy"
          begin="0s"
          dur="0.7s"
          values="10;14;10"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="12" cy="13" r="3">
        <animate
          attributeName="r"
          begin="0.1s"
          dur="0.7s"
          values="2;3;2"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="cy"
          begin="0.1s"
          dur="0.7s"
          values="10;14;10"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="20" cy="13" r="3">
        <animate
          attributeName="r"
          begin="0.2s"
          dur="0.7s"
          values="2;3;2"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="cy"
          begin="0.2s"
          dur="0.7s"
          values="10;14;10"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
};

Loading.propTypes = {
    fill: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
};