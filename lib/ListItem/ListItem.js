import React from 'react';
import PropTypes from 'prop-types';
import flatten from 'lodash/flatten';
import isString from 'lodash/isString';

import Icon from '../Icon';
import Text from '../Text';
import Flexbox from '../Flexbox';
import colors from '../subatomic/colors';
import iconSizes from '../subatomic/iconSizes';
import List from '../List';

/**
* It is meant to be used as a usual li component
*/

const ListItem = ({
  classes, icon, iconColor, size, style, className, id, child, textColor, subItems,
}) => {
  const resolveTag = (props) => {
    if (props.bold) return 'strong'; else if (props.italic) return 'i'; else return 'span';
  };

  const replaceString = (objectList) => {
    const finalText = [];
    const objectListKeys = Object.keys(objectList);
    if (objectListKeys.length === 1) {
      finalText.push(objectList.text);
    } else {
      for (const [index, value] of objectListKeys.entries()) {
        if (value === 'props') {
          finalText.push(styleMatch(objectList.text, `${index}${objectList.text}`, objectList.props));
        }
        if (value === 'link') {
          finalText.push(linkMatch(objectList.text, `${index}${objectList.text}`, objectList.link));
        }
      }
    }
    return finalText;
  };

  const styleMatch = (match, i, props) => <Text key={i} tag={props ? resolveTag(props) : 'span'} strong={props && props.bold} className={`${props && props.italic && classes.italicLetter} ${props && props.underlined && classes.underlinedLetter} ${props && props.crossed && classes.crossedLetter}`}>{match}</Text>;
  const linkMatch = (match, i, link) => <a key={i} href={link && link.href} target={link && link.target} style={link && link.linkStyle}>{match}</a>;

  const renderText = () => (flatten(child.map(x => (isString(x.text) ? replaceString(x) : x))));

  const getIconSize = () => {
    switch (size) {
      case 'micro':
      case 'small':
        return iconSizes.small;
      case 'standard':
      case 'large':
      case 'subheading':
        return iconSizes.base;
      case 'heading':
        return iconSizes.medium;
      case 'headline':
        return iconSizes.large;
      default:
        return iconSizes.base;
    }
  };

  const parseText = (size, textColor) => {
    switch (size) {
      case 'micro':
        switch (textColor) {
          case 'mid':
            return <Text micro mid>{renderText()}</Text>;
          case 'low':
            return <Text micro low>{renderText()}</Text>;
          case 'white':
            return <Text micro white>{renderText()}</Text>;
          default:
            return <Text micro>{renderText()}</Text>;
        }
      case 'small':
        switch (textColor) {
          case 'mid':
            return <Text small mid>{renderText()}</Text>;
          case 'low':
            return <Text small low>{renderText()}</Text>;
          case 'white':
            return <Text small white>{renderText()}</Text>;
          default:
            return <Text small>{renderText()}</Text>;
        }
      case 'standard':
        switch (textColor) {
          case 'mid':
            return <Text standard mid>{renderText()}</Text>;
          case 'low':
            return <Text standard low>{renderText()}</Text>;
          case 'white':
            return <Text standard white>{renderText()}</Text>;
          default:
            return <Text standard>{renderText()}</Text>;
        }
      case 'large':
        switch (textColor) {
          case 'mid':
            return <Text large mid>{renderText()}</Text>;
          case 'low':
            return <Text large low>{renderText()}</Text>;
          case 'white':
            return <Text large white>{renderText()}</Text>;
          default:
            return <Text large>{renderText()}</Text>;
        }
      case 'subheading':
        switch (textColor) {
          case 'mid':
            return <Text subheading mid>{renderText()}</Text>;
          case 'low':
            return <Text subheading low>{renderText()}</Text>;
          case 'white':
            return <Text subheading white>{renderText()}</Text>;
          default:
            return <Text subheading>{renderText()}</Text>;
        }
      case 'heading':
        switch (textColor) {
          case 'mid':
            return <Text heading mid>{renderText()}</Text>;
          case 'low':
            return <Text heading low>{renderText()}</Text>;
          case 'white':
            return <Text heading white>{renderText()}</Text>;
          default:
            return <Text heading>{renderText()}</Text>;
        }
      case 'headline':
        switch (textColor) {
          case 'mid':
            return <Text headline mid>{renderText()}</Text>;
          case 'low':
            return <Text headline low>{renderText()}</Text>;
          case 'white':
            return <Text headline white>{renderText()}</Text>;
          default:
            return <Text headline>{renderText()}</Text>;
        }
      default:
        switch (textColor) {
          case 'mid':
            return <Text standard mid>{renderText()}</Text>;
          case 'low':
            return <Text standard low>{renderText()}</Text>;
          case 'white':
            return <Text standard white>{renderText()}</Text>;
          default:
            return <Text standard>{renderText()}</Text>;
        }
    }
  };

  return (
    <li style={style} className={`${className} ${classes.liWrapper}`} id={id}>
      <Flexbox display="flex" direction="col">
        <Flexbox display="inline-flex" alignItems="start">
          <div className={classes.bulletContainer}>
            {icon && <Icon iconName={icon} className={classes.icon} colors={[iconColor]} width={getIconSize()} height={getIconSize()} />}
          </div>
          {parseText(size, textColor)}
        </Flexbox>
        {subItems && subItems.length > 0 && (
          <List list={subItems} />
        )}
      </Flexbox>
    </li>
  );
};


ListItem.propTypes = {
  classes: PropTypes.object.isRequired,
  /** Array of Texts in the list. with the props of the text if required and link if required*/
  child: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      props: PropTypes.shape({
        /** if the text between * will be italic. */
        italic: PropTypes.bool,
        /** if the text between * will be underlined. */
        underlined: PropTypes.bool,
        /** if the text between * will be crossed. */
        crossed: PropTypes.bool,
        /** if the text between * will be bold. */
        bold: PropTypes.bool,
      }),
      link: PropTypes.shape({
        /** To set the link in the text. */
        href: PropTypes.string,
        /** To set the target of the link. */
        target: PropTypes.string,
        /** To set the style of the link. */
        linkStyle: PropTypes.object,
      }),
    }).isRequired,
  ),
  /** Color of the Text  */
  textColor: PropTypes.oneOf([
    'mid', 'low', 'white',
  ]),
  /** Icon name to show on the list. */
  icon: PropTypes.string,
  /** Icon color for the icon on the list. */
  iconColor: PropTypes.string,
  /** The listItem accepts the text themes from micro to headline */
  size: PropTypes.oneOf([
    'micro', 'small', 'standard', 'large', 'subheading', 'heading', 'headline',
  ]),
  /** subItems of the list 1-n. */
  subItems: PropTypes.array,
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object
};

ListItem.defaultProps = {
  iconColor: colors.ink,
  icon: 'bullet',
  size: 'standard',
  subItems: [],
  child: [],
};

export default ListItem;
