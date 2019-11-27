import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem';

/**
* List Component
* It is meant to be used as a usual ul component
*/

const asterixRegex = /\*(.*?)\*/g;
const linkRegex = /\#(.*?)\#/g;

const List = ({
  list, style, id, className,
}) => {
    const renderText = (text, props, link) => {
      let result = text.split(asterixRegex);
      const linkText = text.split(linkRegex);
      if (result.length === 1 && linkText.length === 1) return [{text: text}];
      const child = [];
      if (result.length > 1) {
        for (let i = 0, length = result.length; i < length; i += 1) {
          if (i === 1) child.push({text: result[i], props: props}); else child.push({text: result[i]});
        }
      }
      if (linkText.length > 1) {
        if (!(result.length > 1)) {
          for (let i = 0, length = linkText.length; i < length; i += 1) {
            if (i === 1) child.push({text: linkText[i], link: link}); else child.push({text: linkText[i]});
          }
        } else {
          const newChild = [];
          for (let i = 0, length = child.length; i < length; i += 1) {
            const patTest = linkRegex.test(child[i].text);
            if (patTest) {
              const resultLink = (child[i].text).split(linkRegex);
              for (let i = 0, length = resultLink.length; i < length; i += 1) {
                if (i === 1) resultLink[i] = {text: resultLink[i], link: link}; else resultLink[i] = {text: resultLink[i]};
                newChild.push(resultLink[i]);
              }
            } else {
              newChild.push(child[i]);
            }
          }
          return newChild;
        }
      }
      return child;
  };
  return (
    <ul style={style} className={`${className}`} id={id}>
      {list.map((element, index) => (
          <ListItem
            key={index}
            icon={element.iconName}
            iconColor={element.iconColor}
            textColor={element.textColor}
            size={element.size}
            hierarchy={element.hierarchy}
            child={renderText(element.text, element.props, element.link)}
          />
      ))}
    </ul>
  );
};


List.propTypes = {
  classes: PropTypes.object.isRequired,
  /** Este componente recibe un arreglo de objetos que pueden tener los siguiente forma:
   * ..........................................................................................................
   * text: string - * requerida (si esta entre * le aplicara los props y si esta entre # le aplicara los links)
   * ...............................................................................
   * textColor: string - one of [mid, low, white] - default high
   * ...............................................................................................................................................................
   * iconName: string - default bullet
   * .............................................................................................................................................................................................
   * iconColor: string - default ink
   * ............................................................................................................................................................................................................
   * size: string - one of [micro, small, standard, large, subheading, heading, headline]
   * ................................................................................................................
   * hierarchy: number - 0
   * ..........................................................................................................................................................................................................................
   * props: {italic: bool, bold: bool, underlined: bool, crossed: bool} - default all false
   * ...........................................................................................................................
   * link: {href: string, target: string, linkStyle: object }
   */
  list: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      textColor: PropTypes.oneOf([
        'mid', 'low', 'white',
      ]),
      iconName: PropTypes.string,
      iconColor: PropTypes.string,
      size: PropTypes.oneOf([
        'micro', 'small', 'standard', 'large', 'subheading', 'heading', 'headline',
      ]),
      hierarchy: PropTypes.number,
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
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object
};

List.defaultProps = {
};

export default List;
