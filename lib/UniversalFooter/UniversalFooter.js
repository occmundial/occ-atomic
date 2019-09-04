import React from "react";
import PropTypes from "prop-types";
import Grid from '../Grid';
import WindowSize from "../WindowSize";
import Flexbox from "../Flexbox";
import grid from "../subatomic/grid";
import List from "./List";

const itemTypes = {
  link: "link",
  icon: "icon",
  custom: "custom"
};

const UniversalFooter = ({ classes, columns, winWidth }) => {
  const isMobile = winWidth < grid.sm;

  return (
    <div className={classes.footer}>
      <Grid fluid={winWidth < grid.xl}>
        <Flexbox display="flex" direction={isMobile ? "col" : "row"}>
          {columns.map(column => (
            <Flexbox key={column.key} flex="1">
              {column.map(list => (
                <List list={list} isMobile={isMobile} key={list.key} />
              ))}
            </Flexbox>
          ))}
        </Flexbox>
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
  size: PropTypes.string,
  // columns: columnPropTypes,
  classes: PropTypes.object
};

export default WindowSize(UniversalFooter);
