import React from 'react';
import { mount } from 'enzyme';

import TabContent from './';
import styles from './styles';
import { TabsProviderUncontrolled } from '../context';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });
const classes = Object.keys(styles).reduce(reduceClasses, {});

describe('Tab', () => {
  it('should throw an error', () => {
    expect(() =>
      mount(
        <TabContent classes={classes} value={1} testId="tab-content-1">
          Tab Content
        </TabContent>
      )
    ).toThrow('useTabsContext must be used within a TabsProvider');
  });
  it('should render', () => {
    const wrapper = mount(
      <TabsProviderUncontrolled>
        <TabContent classes={classes} value={0} testId="tab-content-1">
          Tab Content
        </TabContent>
      </TabsProviderUncontrolled>
    );
    const tabContent = wrapper.find({ 'data-testid': 'tab-content-1'});
    expect(tabContent.length).toBe(1);
    expect(tabContent.children().at(0).text()).toEqual('Tab Content');
  });
  it('should be visible', () => {
    const wrapper = mount(
      <TabsProviderUncontrolled>
        <TabContent classes={classes} value={0} testId="tab-content-1">
          Tab Content
        </TabContent>
      </TabsProviderUncontrolled>
    );
    const tabContent = wrapper.find({ 'data-testid': 'tab-content-1'});
    expect(tabContent.length).toBe(1);
    expect(tabContent.prop('className')).not.toContain('hide');
  });
  it('should be hide', () => {
    const wrapper = mount(
      <TabsProviderUncontrolled>
        <TabContent classes={classes} value={1} testId="tab-content-1">
          Tab Content
        </TabContent>
      </TabsProviderUncontrolled>
    );
    const tabContent = wrapper.find({ 'data-testid': 'tab-content-1'});
    expect(tabContent.length).toBe(1);
    expect(tabContent.prop('className')).toContain('hide');
  });
});
