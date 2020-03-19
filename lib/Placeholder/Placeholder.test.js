import React from 'react';
import { mount } from 'enzyme';
import { JssProvider, SheetsRegistry } from 'react-jss';
import classnames from 'classnames';

import Placeholder from './Placeholder';

describe('Placeholder', () => {
	it('matches the snapshot', () => {
		const wrapper = mount(<Placeholder />);
		expect(wrapper.html()).toMatchSnapshot();
	});

	it('has the right classNames', () => {
		const sheets = new SheetsRegistry();
		const wrapper = mount(
			<JssProvider registry={sheets}>
				<Placeholder />
			</JssProvider>
		);
		let classes = sheets.registry[1].classes;
		let flexClasses = sheets.registry[0].classes;
		expect(wrapper.find('div').at(0).prop('className')).toBe(classnames(flexClasses.flex, flexClasses.acenter));
		wrapper.setProps({ children: <Placeholder textSize="headline" /> });
		classes = sheets.registry[1].classes;
		flexClasses = sheets.registry[0].classes;
		expect(wrapper.find('div').at(0).prop('className')).toBe(classnames(flexClasses.flex, flexClasses.acenter, classes.headline));
		wrapper.setProps({ children: <Placeholder top="tiny" /> });
		classes = sheets.registry[1].classes;
		flexClasses = sheets.registry[0].classes;
		expect(wrapper.find('div').at(0).prop('className')).toBe(classnames(flexClasses.flex, flexClasses.acenter, classes.toptiny));
		wrapper.setProps({ children: <Placeholder bottom="small" /> });
		classes = sheets.registry[1].classes;
		flexClasses = sheets.registry[0].classes;
		expect(wrapper.find('div').at(0).prop('className')).toBe(classnames(flexClasses.flex, flexClasses.acenter, classes.bottomsmall));
	});
});
