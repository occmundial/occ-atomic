import React from 'react';
import PropTypes from 'prop-types';
import flatten from 'lodash/flatten';
import isString from 'lodash/isString';

import Icon from '../Icon';
import Text from '../Text';
import Flexbox from '../Flexbox';
import colors from '../subatomic/colors';
import iconSizes from '../subatomic/iconSizes';
import spacing from '../subatomic/spacing';

/**
* It is meant to be used as a usual li component
*/

const ListItem = ({
  classes, icon, iconColor, size, style, className, id, hierarchy, child, textColor,
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

  const styleMatch = (match, i, props) => {
    return <Text key={i} tag={props ? resolveTag(props) : 'span'} strong={props && props.bold} className={`${props && props.italic && classes.italicLetter} ${props && props.underlined && classes.underlinedLetter} ${props && props.crossed && classes.crossedLetter}`}>{match}</Text>;
  };
  const linkMatch = (match, i, link) => {
    return <a key={i} href={link && link.href} target={link && link.target} style={link && link.linkStyle}>{match}</a>;
  };

  const renderText = () => {
      return flatten(child.map(x => {
          return isString(x.text) ? replaceString(x) : x;
      }));
  };

  const getIconSize = () => {
    switch(size) {
      case 'micro':
        return iconSizes.small;
      case 'small':
        return iconSizes.small;
      case 'standard':
        return iconSizes.base;
      case'large':
        return iconSizes.base;
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
  
  return (
    <li style={style} className={`${className} ${classes.liWrapper}`} id={id}>
      <Flexbox display="flex" direction="col" style={hierarchy ? { marginLeft: (spacing.small * hierarchy) } : {}}>
        <Flexbox display="inline-flex" alignItems="start">
          <div className={classes.bulletContainer}>
            {icon && <Icon iconName={icon} className={classes.icon} colors={[iconColor]} width={getIconSize()} height={getIconSize()} />}
          </div>
          <Text
            micro={size === 'micro'}
            small={size === 'small'}
            standard={size === 'standard'}
            large={size === 'large'}
            subheading={size === 'subheading'}
            heading={size === 'heading'}
            headline={size === 'headline'}
            mid={textColor === 'mid'}
            low={textColor === 'low'}
            white={textColor === 'white'}
            >
            {renderText()}
          </Text>
        </Flexbox>
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
  ).isRequired,
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
  /** Hierarchy of the list 1-n. */
  hierarchy: PropTypes.number,
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object
};

ListItem.defaultProps = {
  iconColor: colors.ink,
  icon: 'bullet',
  size: 'standard',
  hierarchy: 0,
};

export default ListItem;
