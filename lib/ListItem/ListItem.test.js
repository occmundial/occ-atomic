import React from 'react';
import { shallow, mount } from 'enzyme';
import ListItem from './ListItem';
import Text from '../Text';
import styles from './styles';
import ListItemJSS from './index';


const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

const minProps = {
  size: 'bs',
  hierarchy: 0,
  iconColor: '#222222',
  child: [{text: 'Hola'}],
};

describe('ListItem', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(
        <ListItem classes={classes} {...minProps}/>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('has the right size', () => {
		const wrapper = mount(
            <ListItem classes={classes} {...minProps} />
        );
    const wrapperProps = wrapper.props();
    expect(wrapperProps.size).toBe(minProps.size);
  });
  
  it('has the right hierarchy', () => {
		const wrapper = mount(
            <ListItem classes={classes} {...minProps} />
        );
    const wrapperProps = wrapper.props();
    expect(wrapperProps.hierarchy).toBe(minProps.hierarchy);
	});

  it('Render the correct HTML values from props', () => {
    const wrapper = mount(
      <ListItem classes={classes} {...minProps}>
        <Text>Hola</Text>
      </ListItem>
  );
    const wrapperProps = wrapper.props();
    expect(wrapperProps.child).toEqual(minProps.child);
  });
});

describe("ListItemJSS", () => {

  it('matches the snapshot', () => {
      const wrapper = shallow(
          <ListItemJSS {...minProps}/>
      );
      expect(wrapper).toMatchSnapshot();
  });

});

describe("ListItem styles", () => {

  it('matches the snapshot', () => {
      expect(styles).toMatchSnapshot();
  });

});
