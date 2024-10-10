import React from 'react';
import { mount } from 'enzyme';
import Drawer from './Drawer';
import styles from './styles';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

describe('Drawer', () => {
  it('should render', () => {
    const wrapper = mount(<Drawer classes={classes} show>Test</Drawer>);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.text()).toContain('Test');
  });

  it('should apply the correct classes based on the show prop', () => {
    const wrapper = mount(<Drawer classes={classes} show={true}>Test</Drawer>);
    expect(wrapper.find('.show').exists()).toBe(true);
    expect(wrapper.find('.hide').exists()).toBe(false);

    wrapper.setProps({ show: false });
    expect(wrapper.find('.show').exists()).toBe(false);
    expect(wrapper.find('.hide').exists()).toBe(true);
  });

  it('should call onAnimationEnd when animation ends', () => {
    const onAnimationEndMock = jest.fn();
    const wrapper = mount(<Drawer classes={classes} show onAnimationEnd={onAnimationEndMock}>Test</Drawer>);
    wrapper.find('div.container').simulate('animationEnd');
    expect(onAnimationEndMock).toHaveBeenCalled();
  });
});
