import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import MetaTags from 'react-meta-tags';

import styles from './styles';

class FrameComponent extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <>
        <MetaTags>
          <link
            href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,600|Open+Sans:400,600,700"
            rel="stylesheet"
          />
        </MetaTags>
        {children}
      </>
    );
  }
}

FrameComponent.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(FrameComponent);
