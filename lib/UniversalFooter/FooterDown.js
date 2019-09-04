import React from "react";
import PropTypes from 'prop-types';
import Button from "../Button";
import Text from "../Text";
import Grid from "../Grid";

const { Row, Col } = Grid;

const FooterDown = ({ list, classes }) => (
  <Row className={classes.footerDown}>
    <Col xxs={{ col: 12 }} md={{ col: 10 }}>

      <Text small mid topSmall rel="noopener noreferrer">
        {`OCCMundial D.R. © 1996-${new Date().getFullYear()} Derechos reservados.`}
      </Text>
    </Col>
    <Col xxs={{ col: 12 }} md={{ col: 2 }} className={classes.infoButton}>
      <Button
        theme="ghostPink"
        size="md"
        href="https://empresas.occ.com.mx/ayuda/hc/es/"
        target="_blank"
        rel="noopener noreferrer"
        icon="info"
      >
        AYUDA
      </Button>
    </Col>
  </Row>
);

FooterDown.propTypes= {
  list: PropTypes.array,
  classes: PropTypes.object
}

FooterDown.defaultProps = {
  list: []
}

export default FooterDown;
