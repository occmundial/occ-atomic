import React, { Component } from "react";
import PropTypes from "prop-types";
import Text from "../../Text";
import Icon from "../../Icon";
import spacing from "../../subatomic/spacing";
import colors from "../../subatomic/colors";

const itemTypes = {
  link: "link",
  icon: "icon",
  custom: "custom"
};

class List extends Component {
  state = {
    toggle: false
  };

  toggleList = () => this.setState({ toggle: !this.state.toggle });

  renderLink = item => {
    const { classes } = this.props;
    return (
      <Text key={item.key} small bottomTiny>
        <a href={item.href} target={item.target} className={classes.link}>
          {item.text}
        </a>
      </Text>
    );
  };

  renderIcon = item => {
    const { classes } = this.props;
    return (
      <div key={item.key} className={classes.iconWrapper}>
        <Icon
          iconName={item.iconName}
          className={classes.icon}
          onClick={item.onClick}
          colors={[colors.grey600]}
        />
      </div>
    );
  };

  renderCustom = item => <div key={item.key}>{item.custom}</div>;

  renderItem = item => {
    if (item.type === itemTypes.link) return this.renderLink(item);
    else if (item.type === itemTypes.icon) return this.renderIcon(item);
    else if (item.type === itemTypes.custom) return this.renderCustom(item);
  };

  render() {
    const {
      list: { key, collapse, title, items },
      isMobile,
      classes
    } = this.props;
    const { toggle } = this.state;
    const isCollapsible = collapse || isMobile;
    return (
      <div>
        <div
          onClick={isCollapsible ? this.toggleList : null}
          className={`${classes.title} ${
            isCollapsible ? classes.collapsible : ""
          }`}
        >
          <Text tag="span">{title}</Text>
          {isCollapsible && (
            <Icon
              iconName="forward"
              width={spacing.small}
              height={spacing.small}
              className={`${classes.arrow} ${
                toggle ? classes.arrowUp : classes.arrowDown
              }`}
            />
          )}
        </div>
        <div
          className={`${classes.list} ${
            toggle || !isCollapsible ? classes.toggle : ""
          }`}
        >
          {items.map(item => this.renderItem(item))}
        </div>
      </div>
    );
  }
}

List.propTypes = {
  classes: PropTypes.object,
  list: PropTypes.object,
  isMobile: PropTypes.bool
};

export default List;
