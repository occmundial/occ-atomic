import React from 'react';
import { shallow } from 'enzyme';
import Drawer from './';

describe('Drawer', () => {
  it('should render', () => {
    const wrapper = shallow(<Drawer show>Test</Drawer>);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.text()).toContain('Test');
  });

  it('should apply the correct classes based on the show prop', () => {
    const wrapper = shallow(<Drawer show={true}>Test</Drawer>);
    expect(wrapper.find('.show').exists()).toBe(true);
    expect(wrapper.find('.hide').exists()).toBe(false);

    wrapper.setProps({ show: false });
    expect(wrapper.find('.show').exists()).toBe(false);
    expect(wrapper.find('.hide').exists()).toBe(true);
  });

  it('should call onAnimationEnd when animation ends', () => {
    const onAnimationEndMock = jest.fn();
    const wrapper = shallow(<Drawer show onAnimationEnd={onAnimationEndMock}>Test</Drawer>);
    wrapper.find('div').simulate('animationEnd');
    expect(onAnimationEndMock).toHaveBeenCalled();
  });
});
