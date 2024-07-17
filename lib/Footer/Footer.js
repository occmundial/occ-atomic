import React from 'react';
import PropTypes from 'prop-types';
import Grid from '../Grid';
import WindowSize from '../WindowSize';
import Flexbox from '../Flexbox';
import grid from '../subatomic/grid';
import List from './List';
import Text from '../Text';
import Button from '../Button';

const itemTypes = {
  link: 'link',
  icon: 'icon',
  custom: 'custom'
};

/** Customisable footer component. This component can receive an array of columns. Those columns can contain an array of lists, and those lists can contain a title and and array of items. The items are objects that must define a type (one of 'link,', 'icon' or 'cursom').
  It can also receive a copy string, to show the copyright data, and an array of links to show above it.
*/
const Footer = ({
  classes,
  columns,
  winWidth,
  bottomLinks,
  copyText,
  aux,
  bottomItem,
  listClassName
}) => {
  const { text, icon, href, target, iconRight, className: auxClassName } = aux;
  const isMobile = winWidth < grid.sm;

  return (
    <div
      className={
        columns.length > 0 ? classes.footer : classes.footerWithoutColumns
      }
    >
      <Grid fluid={winWidth < grid.xl}>
        <Flexbox
          display="flex"
          direction={isMobile ? 'col' : 'row'}
          className={classes.column}
        >
          {columns.map((column, index) => (
            <Flexbox
              key={index}
              flex="1"
              className={!isMobile ? classes.list : ''}
            >
              {column.map(list => (
                <List
                  list={list}
                  isMobile={isMobile}
                  key={list.key}
                  listClassName={listClassName}
                />
              ))}
            </Flexbox>
          ))}
        </Flexbox>
        <div className={classes.footerBottom}>
          <Flexbox
            display="flex"
            alignItems="start"
            className={classes.bottomWrap}
            direction={isMobile ? 'col' : 'row'}
          >
            <Flexbox flex="1">
              {aux && (
                <Button
                  href={href}
                  target={target}
                  icon={icon}
                  iconRight={iconRight}
                  size="md"
                  theme="ghostPink"
                  className={`${
                    isMobile ? classes.buttonMobile : ''
                  } ${auxClassName}`}
                >
                  {text}
                </Button>
              )}
              <Text small mid bottomTiny tag="div">
                {bottomLinks.map(item => (
                  <div
                    className={
                      isMobile ? classes.mobileListElement : classes.listElement
                    }
                    key={item.key}
                  >
                    <Text tag="label" small mid testId={item.testId}>
                      <a
                        className={classes.link}
                        href={item.href}
                        target={item.target}
                        rel={item.rel}
                        onClick={item.onClick}
                      >
                        {item.text}
                      </a>
                    </Text>
                  </div>
                ))}
              </Text>
              {copyText && (
                <Text small mid>
                  {copyText}
                </Text>
              )}
            </Flexbox>
            {bottomItem}
          </Flexbox>
        </div>
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
          rel: PropTypes.string,
          title: PropTypes.string,
          iconName: PropTypes.string,
          custom: PropTypes.node
        })
      )
    })
  )
);

Footer.propTypes = {
  classes: PropTypes.object,
  /** This prop is sended by the WindowSize HOC. You can't use it. */
  winWidth: PropTypes.number,
  /** Array of the columns to render. Each column will render an array of lists. Those lists are arrays of objects that must define a type ('link', 'icon, 'custom) and properties related to that type of element. */
  columns: columnPropTypes,
  /** Array of links to render at the bottom. */
  bottomLinks: PropTypes.array,
  /** Custom component to render on the bottom left. */
  customBottom: PropTypes.node,
  /** String or component to show as the copyright label. */
  copyText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Object to implement an auxiliar button on the bottom right. */
  aux: PropTypes.shape({
    text: PropTypes.string,
    icon: PropTypes.string,
    href: PropTypes.string,
    target: PropTypes.string,
    iconRight: PropTypes.string
  }),
  /** Custom component to render on the bottom right, at the end of the footer */
  bottomItem: PropTypes.node,
  /** Footer list className.  */
  listClassName: PropTypes.string
};

Footer.defaultProps = {
  bottomLinks: [],
  columns: []
};

export default WindowSize(Footer);
