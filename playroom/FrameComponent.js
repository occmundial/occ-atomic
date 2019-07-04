import React from 'react';
import injectSheet from 'react-jss';
import MetaTags from 'react-meta-tags';

import styles from './styles';

class FrameComponent extends React.Component {
  render() {
    const { children, classes } = this.props;

    return (
        <div>
            <MetaTags>
                <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,600|Open+Sans:400,600,700" rel="stylesheet" />
            </MetaTags>
            {children}
        </div>
    );
  }
}

export default injectSheet(styles)(FrameComponent);
