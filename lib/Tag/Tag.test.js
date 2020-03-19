import React from 'react';
import { mount } from 'enzyme';
import { JssProvider, SheetsRegistry } from 'react-jss';

import Tag from './Tag';

let sheets, classes;

describe('Tag', () => {

	beforeEach(() => sheets = new SheetsRegistry());
	afterEach(() => sheets = null);

	it('matches the snapshot', () => {
		const wrapper = mount(<Tag>Tag</Tag>);
		expect(wrapper.html()).toMatchSnapshot();
	});

	it('shows the children content', () => {
		const wrapper = mount(<Tag>Tag</Tag>);
		expect(wrapper.text()).toEqual('Tag');
	});

	it('has the right theme', () => {
		const wrapper = mount(
			<JssProvider registry={sheets}>
				<Tag theme="default">Tag</Tag>
			</JssProvider>
		);
		classes = sheets.registry[0].classes;
		expect(wrapper.find('label').prop('className')).toEqual(`${classes.tag} ${classes.default}`);
	});

	it('render the span when necessary', () => {
		const wrapper = mount(<Tag>Tag Test</Tag>);
		expect(wrapper.find('span').length).toBe(1);
		wrapper.setProps({ iconName: 'check' });
		expect(wrapper.find('span').length).toBe(2);
	});

	it('shows an icon', () => {
		const wrapper = mount(
			<JssProvider registry={sheets}>
				<Tag>Tag Test</Tag>
			</JssProvider>
		);
		classes = sheets.registry[0].classes;
		const icon = `.${classes.icon}`;
		expect(wrapper.find(icon).length).toBe(0);
		wrapper.setProps({ children: <Tag iconName="check">Tag Test</Tag> });
		expect(wrapper.find(icon).length).toBe(1);
	});
});
