import React from "react";
import Button from "../Button";
import Text from "../Text";
import Icon from '../Icon';
import Grid from '../Grid';

const FooterDown = ({ list, privacidad, classes }) => (
  <div>
    <div className={classes.DivContent}>
      <a
        href="https://sellosdeconfianza.org.mx/MuestraCertificado.php?NUMERO_SERIE=MD_w088"
        target="_blank"
        rel="noopener noreferrer"
        title="AMIPICI"
      >
        <img
          src="data:image/jpeg;base64,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"
          alt="AMIPICI"
          title="AMIPICI"
          className={classes.SelloConfianza}
        />
      </a>
      <div className={classes.DivMiddleContent}>
        <div className={classes.DivList}>
          {list.map(arrayitem => (
            <div className={classes.DivListItem} key={arrayitem.id}>
              <a
                className={classes.Tag}
                href={arrayitem.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Text small mid>
                  {arrayitem.item}
                </Text>
              </a>
              {arrayitem.id < list.length ? (
                <Text
                  small
                  mid
                  rel="noopener noreferrer"
                  className={classes.MiddleSeparator}
                >
                  |
                </Text>
              ) : (
                ""
              )}
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
    </div>
  </div>
);

export default FooterDown;
