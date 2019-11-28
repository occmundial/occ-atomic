import React from 'react';
import { shallow } from 'enzyme';
import List from './List';
import styles from './styles';
import colors from '../subatomic/colors';


const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

const minProps = {
  list: [
    {text: 'Bullet1'},
    {text: 'Bullet2', size: 'small'},
    {text: 'Bullet3', textColor: 'mid' },
    {text: 'Bullet4', iconName: 'cross', iconColor: colors.prim },
    {text: 'Bullet4.1', hierarchy: 1 },
    {text: 'Bullet4.1.1', hierarchy: 2 },
    {text: 'This text is *italic* <-', props:{italic: true}},
    {text: 'This text is *bold* <-', props:{bold: true}},
    {text: 'This text is *underlined* <-', props:{underlined: true}},
    {text: 'This text is *crossed* <-', props:{crossed: true}},
    {text: 'This text is *italic bold underlined* <-', props:{italic: true, bold:true, underlined: true}},
    {text: 'This text has a  #link# <-', link:{href: 'https://google.com', target:'_blank', linkStyle: {textDecoration: 'none', color: colors.textLink }}},
    {text: 'This text has a  #link# <- and *bold text* <-', props:{bold: true}, link:{href: 'https://google.com'}},
  ],
};

describe('List', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(
        <List classes={classes} {...minProps}/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe("ListItemJSS", () => {

  it('matches the snapshot', () => {
      const wrapper = shallow(
          <List {...minProps}/>
      );
      expect(wrapper).toMatchSnapshot();
  });

});

describe("ListItem styles", () => {

  it('matches the snapshot', () => {
      expect(styles).toMatchSnapshot();
  });

});
