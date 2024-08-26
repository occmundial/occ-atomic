import React from 'react';
import { mount } from 'enzyme';

import Tab from './';
import styles from './styles';
import { TabsProviderUncontrolled } from '../context';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });
const classes = Object.keys(styles).reduce(reduceClasses, {});

describe('Tab', () => {
  it('should throw an error', () => {
    expect(() =>
      mount(<Tab title="Tab title" classes={classes} testId="tab-test" />)
    ).toThrow('useTabsContext must be used within a TabsProvider');
  });
  it('should render', () => {
    const wrapper = mount(
      <TabsProviderUncontrolled>
        <Tab title="Tab title" classes={classes} testId="tab-test" />
      </TabsProviderUncontrolled>
    );
    expect(wrapper.find({ 'data-testid': 'tab-test' }).length).toBe(1);
    expect(wrapper.find({ 'data-testid': 'tab-test' }).text()).toEqual(
      'Tab title'
    );
  });
  it('should render large size', () => {
    const wrapper = mount(
      <TabsProviderUncontrolled>
        <Tab
          title="Tab title"
          classes={classes}
          testId="tab-test"
          size="large"
        />
      </TabsProviderUncontrolled>
    );
    expect(wrapper.find({ 'data-testid': 'tab-test' }).length).toBe(1);
    expect(
      wrapper.find({ 'data-testid': 'tab-test' }).prop('className')
    ).toContain('large');
  });
  it('should render medium size', () => {
    const wrapper = mount(
      <TabsProviderUncontrolled>
        <Tab
          title="Tab title"
          classes={classes}
          testId="tab-test"
          size="medium"
        />
      </TabsProviderUncontrolled>
    );
    expect(wrapper.find({ 'data-testid': 'tab-test' }).length).toBe(1);
    expect(
      wrapper.find({ 'data-testid': 'tab-test' }).prop('className')
    ).toContain('medium');
  });
  it('should render small size', () => {
    const wrapper = mount(
      <TabsProviderUncontrolled>
        <Tab
          title="Tab title"
          classes={classes}
          testId="tab-test"
          size="small"
        />
      </TabsProviderUncontrolled>
    );
    expect(wrapper.find({ 'data-testid': 'tab-test' }).length).toBe(1);
    expect(
      wrapper.find({ 'data-testid': 'tab-test' }).prop('className')
    ).toContain('small');
  });
  it('should render with icon', () => {
    const wrapper = mount(
      <TabsProviderUncontrolled>
        <Tab
          title="Tab title"
          classes={classes}
          testId="tab-test"
          icon="search"
        />
      </TabsProviderUncontrolled>
    );
    const tab = wrapper.find({ 'data-testid': 'tab-test' });
    expect(tab.length).toBe(1);
    const icon = tab.children().at(0).name();
    expect(icon).toBe('Jss(Icon)');
  });
  it('should render with counter', () => {
    const wrapper = mount(
      <TabsProviderUncontrolled>
        <Tab
          title="Tab title"
          classes={classes}
          testId="tab-test"
          counter="12"
        />
      </TabsProviderUncontrolled>
    );
    const tab = wrapper.find({ 'data-testid': 'tab-test' });
    expect(tab.length).toBe(1);
    const counter = tab.children().at(tab.children().length - 1);
    expect(counter.text()).toBe('12');
  });
  it('should be disabled', () => {
    const wrapper = mount(
      <TabsProviderUncontrolled>
        <Tab
          title="Tab title"
          testId="tab-test"
          icon="search"
          counter="12"
          disabled
        />
      </TabsProviderUncontrolled>
    );
    const tab = wrapper.find({ 'data-testid': 'tab-test' });
    expect(tab.length).toBe(1);
    expect(tab.prop('disabled')).toEqual(true);
    expect(tab.prop('className')).toContain('disabled');

    const icon = tab.children().at(0);
    expect(icon.prop('className')).toContain('iconDisabled');
  });
});
