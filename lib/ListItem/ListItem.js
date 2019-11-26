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
* List Component
* It is meant to be used as a usual ul component
*/

const asterixRegex = /\*(.*?)\*/g;
const linkRegex = /\#(.*?)\#/g;
const ListItem = ({
  classes, icon, iconColor, size, style, className, id, hierarchy, text, textColor, italic, bold, underlined, crossed, href, target, linkStyle,
}) => {
    const replaceString = () => {
      let result = text.split(asterixRegex);
      const link = text.split(linkRegex);
      if (result.length === 1 && link.length === 1) return text;
      if (result.length > 1) {
        for (let i = 1, length = result.length; i < length; i += 2) {
          result[i] = styleMatch(result[i], i);
        }
      }
      if (link.length > 1) {
        if (!(result.length > 1)) {
          result = link;
          for (let i = 1, length = result.length; i < length; i += 2) {
            result[i] = linkMatch(result[i], i);
          }
        } else {
          for (let i = 0, length = result.length; i < length; i += 1) {
            const patTest = linkRegex.test(result[i]);
            if (patTest) {
              const resultLink = result[i].split(linkRegex);
              for (let i = 1, length = resultLink.length; i < length; i += 2) {
                resultLink[i] = linkMatch(resultLink[i], i);
              }
              result[i] = resultLink;
            }
          }
        }
      }
      return result;
  };

  const styleMatch = (match, i) => {
    return <Text key={i} tag="em" strong={bold} className={`${italic && classes.italicLetter} ${underlined && classes.underlinedLetter} ${crossed && classes.crossedLetter}`}>{match}</Text>;
  };

  const linkMatch = (match, i) => {
    return <a key={i} href={href} target={target} style={linkStyle}>{match}</a>;
  };

  const renderText = () => {
      let textArray;
      if (!Array.isArray(text)) textArray = [text];

      return flatten(textArray.map(x => {
          return isString(x) ? replaceString(x) : x;
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
  /** Text of the list. If you put text between two * characters that text will be displayed depending on prop. and between two # the text will be a link */
  text: PropTypes.string.isRequired,
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
  /** if the text between * will be italic. */
  italic: PropTypes.bool,
  /** if the text between * will be underlined. */
  underlined: PropTypes.bool,
  /** if the text between * will be crossed. */
  crossed: PropTypes.bool,
  /** if the text between * will be bold. */
  bold: PropTypes.bool,
  /** To set the link in the text. */
  href: PropTypes.string,
  /** To set the target of the link. */
  target: PropTypes.string,
  /** To set the style of the link. */
  linkStyle: PropTypes.object,
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object
};

ListItem.defaultProps = {
  iconColor: colors.ink,
  size: 'standard',
  hierarchy: 0,
  italic: false,
  bold: false,
  underlined: false,
  crossed: false,
};

export default ListItem;
