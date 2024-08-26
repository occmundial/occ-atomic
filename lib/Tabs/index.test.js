import React from 'react';
import { mount } from 'enzyme';

import Tabs from './';
import styles from './styles';
import { TabsProviderUncontrolled } from './context';
import Tab from './Tab';
import TabContent from './TabContent';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });
const classes = Object.keys(styles).reduce(reduceClasses, {});

describe('Tab', () => {
  global.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn()
  }));

  it('should throw an error', () => {
    expect(() => mount(<Tabs classes={classes} size="large">Pruebas</Tabs>)).toThrow(
      'useTabsContext must be used within a TabsProvider'
    );
  });
  it('should not render text child', () => {
    const wrapper = mount(
      <TabsProviderUncontrolled>
        <Tabs classes={classes} size="large">Tab prueba</Tabs>
      </TabsProviderUncontrolled>
    );
    expect(wrapper.find('Tab prueba').length).toBe(0);
  });
  it('should render tabs children', () => {
    const wrapper = mount(
      <TabsProviderUncontrolled>
        <Tabs classes={classes} size="large">
          <div>Tab prueba</div>
        </Tabs>
      </TabsProviderUncontrolled>
    );

    expect(wrapper.find({ children: 'Tab prueba'}).length).toBe(1);
  });
  it('should be selected the first child', () => {
    const wrapper = mount(
      <TabsProviderUncontrolled>
        <Tabs classes={classes} size="large">
          <Tab title="child 1" testId="tab-child-1" />
          <Tab title="child 2" testId="tab-child-2" />
          <Tab title="child 3" testId="tab-child-3" />
        </Tabs>
      </TabsProviderUncontrolled>
    );
    expect(wrapper.find({ 'data-testid': 'tab-child-1' }).prop('className')).toContain(
      'selected'
    );
  });
  it('should be displayed the first child content', () => {
    const wrapper = mount(
      <TabsProviderUncontrolled>
        <Tabs classes={classes} size="large">
          <Tab title="child 1" testId="tab-child-1" />
          <Tab title="child 2" testId="tab-child-2" />
          <Tab title="child 3" testId="tab-child-3" />
        </Tabs>
        <TabContent value={0} testId="tab-content-1">
          Tab child 1 content
        </TabContent>
        <TabContent value={1} testId="tab-content-2">
          Tab child 2 content
        </TabContent>
        <TabContent value={2} testId="tab-content-3">
          Tab child 3 content
        </TabContent>
      </TabsProviderUncontrolled>
    );
    expect(wrapper.find({'data-testid': 'tab-child-1'}).prop('className')).toContain(
      'selected'
    );
    expect(wrapper.find({'data-testid': 'tab-child-2'}).prop('className')).not.toContain(
      'selected'
    );
    expect(wrapper.find({'data-testid': 'tab-child-3'}).prop('className')).not.toContain(
      'selected'
    );

    expect(wrapper.find({'data-testid': 'tab-content-1'}).prop('className')).not.toContain(
      'hide'
    );
    expect(wrapper.find({'data-testid': 'tab-content-2'}).prop('className')).toContain('hide');
    expect(wrapper.find({'data-testid': 'tab-content-3'}).prop('className')).toContain('hide');
  });
  it('should display content on click', () => {
    const wrapper = mount(
      <TabsProviderUncontrolled>
        <Tabs classes={classes} size="large">
          <Tab title="child 1" testId="tab-child-1" />
          <Tab title="child 2" testId="tab-child-2" />
          <Tab title="child 3" testId="tab-child-3" />
        </Tabs>
        <TabContent value={0} testId="tab-content-1">
          Tab child 1 content
        </TabContent>
        <TabContent value={1} testId="tab-content-2">
          Tab child 2 content
        </TabContent>
        <TabContent value={2} testId="tab-content-3">
          Tab child 3 content
        </TabContent>
      </TabsProviderUncontrolled>
    );
    expect(wrapper.find({'data-testid': 'tab-child-1'}).prop('className')).toContain(
      'selected'
    );
    expect(wrapper.find({'data-testid': 'tab-content-1'}).prop('className')).not.toContain(
      'hide'
    );

    wrapper.find({'data-testid': 'tab-child-3'}).simulate('click');

    expect(wrapper.find({'data-testid': 'tab-child-3'}).prop('className')).toContain(
      'selected'
    );
    expect(wrapper.find({'data-testid': 'tab-content-3'}).prop('className')).not.toContain(
      'hide'
    );
  });
});
