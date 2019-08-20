import React from "react";
import PropTypes from "prop-types";
import FooterSection from "./FooterSection";
import FooterDown from "./FooterDown";
import WindowSize from "../WindowSize";
import Grid from "../Grid";
import { selectArray } from "./helper";

const { Row, Col } = Grid;

const UniversalFooter = ({ classes, size, origin }) => {
  return (
    <div className={classes.footer}>
      {size !== "sm" || size !== "xs" ? (
        <Row className={classes.DivUpperFooter}>
          <Col sm={{ col: 2, offset: 1 }}>
            <FooterSection
              name={"Candidatos"}
              list={selectArray("candidatos")}
              classes={classes}
            />
          </Col>
          {origin === "home" && (
            <Col sm={{ col: 2 }}>
              <FooterSection
                name={"Empleo por clasificación"}
                list={selectArray("clasification")}
                classes={classes}
              />
            </Col>
          )}
          <Col sm={{ col: 2 }}>
            <FooterSection
              name={"Empresas"}
              list={selectArray("empresas")}
              classes={classes}
            />
          </Col>
          <Col sm={{ col: 2 }}>
            <FooterSection
              name={"Productos"}
              list={selectArray("productos")}
              classes={classes}
            />
            <FooterSection
              name={"Presencia"}
              list={selectArray("presence")}
              classes={classes}
            />
          </Col>
          <Col sm={{ col: 2 }}>
            <FooterSection
              name={"OCCMundial"}
              list={selectArray("listOCC")}
              classes={classes}
            />
          </Col>
        </Row>
      ) : null}
      <FooterDown list={selectArray("sitio")} classes={classes} />
    </div>
  );
};

UniversalFooter.propTypes = {
  size: PropTypes.string,
  origin: PropTypes.string,
  classes: PropTypes.object
};

UniversalFooter.defaultProps = {
  origin: ''
};

export default WindowSize(UniversalFooter);
