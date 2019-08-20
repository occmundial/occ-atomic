import React, {Fragment} from "react";
import PropTypes from "prop-types";
import FooterSection from "./FooterSection";
import FooterDown from "./FooterDown";
import WindowSize from "../WindowSize";
import Grid from "../Grid";
import { selectArray } from "./helper";

const { Row, Col } = Grid;

const UniversalFooter = ({ classes, size, origin }) => {
  return (
    <div className={classes.DivDefault}>
      {size !== "sm" || size !== "xs" ? (
        <Fragment>
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
            </Col>
            <Col sm={{ col: 2 }}>
              <FooterSection
                name={"OCCMundial"}
                list={selectArray("listOCC")}
                classes={classes}
              />
            </Col>
          </Row>
        </Fragment>
      ) : null}
      <FooterDown
        list={selectArray("sitio")}
        privacidad={`OCCMundial D.R. © 1996-${new Date().getFullYear()} Derechos reservados.`}
        classes={classes}
      />
    </div>
  );
};

export default WindowSize(UniversalFooter);
