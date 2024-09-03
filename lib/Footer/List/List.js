import React, {
  useState,
  useCallback,
  Fragment,
  useEffect
} from 'react';
import PropTypes from 'prop-types';

import Icon from '../../Icon';
import spacing from '../../tokens/spacing.json';
import colors from '../../tokens/colors.json';

const itemTypes = {
  link: 'link',
  icon: 'icon',
  custom: 'custom'
};

const List = ({ list: { title, items }, listClassName, classes } ) => {
  const [toggle, setToggle] = useState(false);
  const [overflowVisible, setOverflowVisible] = useState(false);

  const toggleList = useCallback(() => setToggle(!toggle), [toggle]);

  useEffect(() => {
    const timeout = setTimeout(
      () => setOverflowVisible(toggle),
      toggle ? 200 : 0
    );
    return () => clearTimeout(timeout);
  }, [toggle]);

  const renderLink = useCallback(
    item => {
      return (
        <a
          key={item.key}
          href={item.href}
          target={item.target}
          rel={item.rel}
          className={classes.link}
          title={item.title}
          data-testid={item.testId}
        >
          {item.text}
        </a>
      );
    },
    [classes]
  );

  const renderIcon = useCallback(
    item => {
      return (
        <div key={item.key} className={classes.iconWrapper} title={item.title}>
          <Icon
            iconName={item.iconName}
            onClick={item.onClick}
            color={colors.grey600}
            testId={item.testId}
          />
        </div>
      );
    },
    [classes]
  );

  const renderCustom = useCallback(
    item => <div key={item.key}>{item.custom}</div>,
    []
  );

  const renderItem = useCallback(
    item => {
      if (item.type === itemTypes.link) return renderLink(item);
      else if (item.type === itemTypes.icon) return renderIcon(item);
      else if (item.type === itemTypes.custom) return renderCustom(item);
    },
    [renderLink, renderIcon, renderCustom]
  );

  return (
    <Fragment>
      <div
        onClick={toggleList}
        className={`${classes.title} ${classes.collapsible}`}
        data-testid={`footer-list__title-${title}`}
      >
        <h5 className={classes.titleColor}>{title}</h5>
        <Icon
          iconName="chevron-down"
          size={spacing.small}
          className={`${classes.arrow}${toggle ? ` ${classes.arrowUp}` : '' }`}
        />
      </div>
      <div className={classes.titleDesktop}>
        <h5 className={classes.titleColor}>{title}</h5>
      </div>
      <div
        className={`${classes.list}${toggle ? ` ${classes.toggle}`: '' }${listClassName ? ` ${listClassName}` : ''}`}
      >
        <div
          className={`${classes.content}${
            toggle ? ` ${classes.showContent}` : ''
          }${overflowVisible ? ` ${classes.overflowVisible}` : ''}`}
        >
          {items.map(item => renderItem(item))}
        </div>
      </div>
    </Fragment>
  );
};


List.propTypes = {
  classes: PropTypes.object,
  list: PropTypes.object,
  isMobile: PropTypes.bool,
  listClassName: PropTypes.string
};

export default List;
