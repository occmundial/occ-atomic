import React from "react";
import PropTypes from "prop-types";
import Grid from "../Grid";
import WindowSize from "../WindowSize";
import Flexbox from "../Flexbox";
import grid from "../subatomic/grid";
import List from "./List";
import FooterDown from './FooterDown';

const itemTypes = {
  link: "link",
  icon: "icon",
  custom: "custom"
};

const UniversalFooter = ({ classes, columns, winWidth, bottom }) => {
  const isMobile = winWidth < grid.sm;

  return (
    <div className={classes.footer}>
      <Grid fluid={winWidth < grid.xl}>
        <Grid.Row>
          <Flexbox
            display="flex"
            direction={isMobile ? "col" : "row"}
            className={classes.column}
          >
            {columns.map((column, index) => (
              <Flexbox key={index} flex="1">
                {column.map(list => (
                  <List list={list} isMobile={isMobile} key={list.key} />
                ))}
              </Flexbox>
            ))}
          </Flexbox>
        </Grid.Row>
        <FooterDown />
      </Grid>
    </div>
  );
};

const columnPropTypes = PropTypes.arrayOf(
  PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      title: PropTypes.string,
      collapse: PropTypes.bool,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
          type: PropTypes.oneOf([
            itemTypes.link,
            itemTypes.icon,
            itemTypes.custom
          ]),
          text: PropTypes.string,
          onClick: PropTypes.func,
          href: PropTypes.string,
          target: PropTypes.string,
          iconName: PropTypes.string,
          custom: PropTypes.node
        })
      )
    })
  )
);

UniversalFooter.propTypes = {
  classes: PropTypes.object,
  winWidth: PropTypes.number,
  columns: columnPropTypes,
  bottom: PropTypes.array
};

export default WindowSize(UniversalFooter);
