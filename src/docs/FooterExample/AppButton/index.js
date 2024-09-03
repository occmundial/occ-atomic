/* eslint-disable react/prop-types */
import { Flexbox } from '@occmundial/occ-atomic';
import injectSheets from 'react-jss';

import React from 'react';
import styles from './styles';

function AppButton({
  show,
  href,
  title,
  id,
  img,
  imgAlt,
  classes
}) {

  return (
    <Flexbox
      display="flex"
      justifyContent="center"
      className={`${classes.logoApp}${!show ? ` ${classes.hide}` : ''}`}
    >
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        title={title}
        id={id}
        className={classes.appImage}
      >
        <img
          src={img}
          alt={imgAlt}
          loading="lazy"
        />
      </a>
    </Flexbox>
  );
}

export default injectSheets(styles)(AppButton);
