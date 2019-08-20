import React, {Fragment} from "react";
import Button from "../Button";
import Text from "../Text";
import Icon from '../Icon';
import Grid from '../Grid';
import Flexbox from '../Flexbox';

const FooterDown = ({ list, privacidad, classes }) => (
  <Fragment>
    <Flexbox display="flex" justifyContent="between" className={classes.DivContent}>
      <div  className={classes.DivMiddleContent}>
        <div className={classes.DivList}>
          {list.map(arrayitem => (
            <div className={classes.listElement} key={arrayitem.id}>
              <a
                className={classes.Tag}
                href={arrayitem.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Text tag="label" small mid>
                  {arrayitem.item}
                </Text>
              </a>
            </div>
          ))}
        </div>
        <div className={classes.DivPrivacidad}>
          <Text small mid rel="noopener noreferrer">
            {privacidad}
          </Text>
        </div>
      </div>
      <div className={classes.DivButton}>
        <Button
          theme="ghostPink"
          size="md"
          href="https://empresas.occ.com.mx/ayuda/hc/es/"
          target="_blank"
          rel="noopener noreferrer"
        >
          AYUDA
        </Button>
        <Icon iconName={'info'} />
      </div>
    </Flexbox>
  </Fragment>
);

export default FooterDown;
