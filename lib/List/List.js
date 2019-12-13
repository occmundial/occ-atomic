import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem';

/**
* List Component
* It is meant to be used as a usual ul component
*/

const boldRegex = /\*(.*?)\*/g;
const italicRegex = /\/(.*?)\//g;
const underlinedRegex = /\_(.*?)\_/g;
const crossedRegex = /\-(.*?)\-/g;
const linkRegex = /\#(.*?)\#/g;

const List = ({
  list, style, id, className,
}) => {
    const checkText = (phrase) => {
      const defaultProps = {italic: false, bold: false, underlined: false, crossed: false, link: false};
      let cleanText = phrase;
      if (boldRegex.test(phrase)) {defaultProps.bold = true; cleanText = phrase.split("*")[1];}
      if (italicRegex.test(phrase)) {defaultProps.italic = true; cleanText = phrase.split("/")[1];}
      if (underlinedRegex.test(phrase)) {defaultProps.underlined = true; cleanText = phrase.split("_")[1];}
      if (crossedRegex.test(phrase)) {defaultProps.crossed = true; cleanText = phrase.split("-")[1];}
      if (linkRegex.test(phrase)) {defaultProps.link = true; cleanText = phrase.split("#")[1];}
      return [defaultProps, cleanText];
    };

    const renderText = (text, link) => {
      let result = text.split('°');
      if (result.length === 1) return [{text}];
      const child = result.map(bullet => {
        const [props, text] = checkText(bullet);
        if (props.link) return {text, link};
        return {text, props};
      });
      console.log(child);
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
            subItems={element.subItems}
            child={renderText(element.text, element.link)}
          />
      ))}
    </ul>
  );
};


List.propTypes = {
  classes: PropTypes.object.isRequired,
  /** Este componente recibe un arreglo de objetos que pueden tener los siguiente forma:
   * ..........................................................................................................
   * text: string - * requerida (si esta entre * será bold, / será italic, _subrayada y - tachada y si esta entre # le aplicara los links)
   * ...............................................................................
   * textColor: string - one of [mid, low, white] - default high
   * ...............................................................................................................................................................
   * iconName: string - default bullet
   * .............................................................................................................................................................................................
   * iconColor: string - default ink
   * ............................................................................................................................................................................................................
   * size: string - one of [micro, small, standard, large, subheading, heading, headline]
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
