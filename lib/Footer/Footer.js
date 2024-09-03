import React, {
  Fragment,
  isValidElement,
} from 'react';
import PropTypes from 'prop-types';

import Grid from './../Grid';

import List from './List';

const itemTypes = {
  link: 'link',
  icon: 'icon',
  custom: 'custom'
};

const Footer = ({
  columns = [],
  bottomLinks = [],
  copyText,
  aux,
  listClassName,
  isFluid,
  topElement,
  bottomLinksClassName,
  sectionDivider,
  classes
}) => {

  return (
    <footer className={classes.footer}>
      <Grid fluid={isFluid} className={classes.footerContainer}>
        {isValidElement(topElement) ? topElement : ''}
        {columns.length ? (
          <section className={classes.column}>
            {columns.map((column, index) => (
              <div key={index} className={classes.listContainer}>
                {column.map(list => (
                  <List
                    key={list.key}
                    list={list}
                    listClassName={listClassName}
                  />
                ))}
              </div>
            ))}
          </section>
        ) : (
          ''
        )}
        {sectionDivider ? <div className={classes.divider} /> : ''}
        <section className={classes.bottomSection}>
          {aux ? (
            <div className={classes.auxContainer}>
              {aux.badges ? (
                <div className={classes.badgesContainer}>{aux.badges}</div>
              ) : (
                ''
              )}
              {aux.socialMedia ? (
                <div className={classes.socialMediaContainer}>
                  {aux.socialMedia}
                </div>
              ) : (
                ''
              )}
              {aux.extraContent}
            </div>
          ) : (
            ''
          )}
          <div className={classes.bottomContainer}>
            <div
              className={`${classes.bottomLinksContainer} ${bottomLinksClassName}`}
            >
              {bottomLinks.map((item, index) => (
                <Fragment key={item.key}>
                  {index === 0 || index === bottomLinks.length ? (
                    ''
                  ) : (
                    <div className={classes.linkDivider} />
                  )}
                  <div className={classes.listElement}>
                    <a
                      className={classes.link}
                      href={item.href}
                      target={item.target}
                      rel={item.rel}
                      onClick={item.onClick}
                    >
                      {item.text}
                    </a>
                  </div>
                </Fragment>
              ))}
            </div>
            {copyText && <div className={classes.copyright}>{copyText}</div>}
          </div>
        </section>
      </Grid>
    </footer>
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
  /** String or component to show as the copyright label. */
  copyText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Object to implement an auxiliar button on the bottom right. */
  aux: PropTypes.shape({
    badges: PropTypes.node,
    socialMedia: PropTypes.node,
    extraContent: PropTypes.node
  }),
  /** Custom component to render on the bottom right, at the end of the footer */
  bottomItem: PropTypes.node,
  /** Footer list className.  */
  listClassName: PropTypes.string,
  isFluid: PropTypes.bool,
  /** Custom component to render at the top of the footer, commonly used for brand logo */
  topElement: PropTypes.node,
  /** Custom classname for bottomLinks container. */
  bottomLinksClassName: PropTypes.string,
  /** Flag to display an horizontal line between sections */
  sectionDivider: PropTypes.bool,
};

Footer.defaultProps = {
  bottomLinks: [],
  columns: []
};

export default Footer;
