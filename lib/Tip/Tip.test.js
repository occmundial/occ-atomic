import React from 'react';
import { mount } from 'enzyme';
import { JssProvider, SheetsRegistry } from 'react-jss';

import Tip from './Tip';

let sheets, classes;

describe("Tip", () => {

    beforeEach(() => sheets = new SheetsRegistry());
    afterEach(() => sheets = null);

    it('matches the snapshot', () => {
        const wrapper = mount(
            <Tip />
        );
        expect(wrapper.html()).toMatchSnapshot();
    });

	it('has the right theme', () => {
		const wrapper = mount(
            <JssProvider registry={sheets}>
                <Tip theme="info" />
            </JssProvider>
        );
        classes = sheets.registry[1].classes;
        const info = `.${classes.info}`;
        const warning = `.${classes.warning}`;
        expect(wrapper.find(info).length).toBe(1);
		expect(wrapper.find(warning).length).toBe(0);
        wrapper.setProps({ children: <Tip theme="warning" /> });
        expect(wrapper.find(info).length).toBe(0);
		expect(wrapper.find(warning).length).toBe(1);
	});

    it('has an icon', () => {
        const wrapper = mount(
            <JssProvider registry={sheets}>
                <Tip icon="search" />
            </JssProvider>
        );
        classes = sheets.registry[2].classes;
        expect(wrapper.find(`.${classes.icon}`).length).toBe(1);
    });

    it('has bold text', () => {
        const wrapper = mount(
            <Tip>
                Text with *bold* text
            </Tip>
        );
        expect(wrapper.find('b').length).toBe(1);
    });

});
