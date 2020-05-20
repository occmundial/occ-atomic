import React from 'react';
import { mount } from 'enzyme';
import { JssProvider, SheetsRegistry } from 'react-jss';

import Page from './Page';

describe("Page", () => {

    it('matches the snapshot', () => {
        const wrapper = mount(<Page />);
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders the li', () => {
        const wrapper = mount(<Page />);
        expect(wrapper.find('li').length).toBe(1);
    });

    it('shows the li as active', () => {
        const sheets = new SheetsRegistry();
        const wrapper = mount(
            <JssProvider registry={sheets}>
                <Page />
            </JssProvider>
        );
        const { classes } = sheets.registry[0];
        expect(wrapper.find('li').hasClass(classes.active)).toBe(false);
        wrapper.setProps({ children: <Page selected /> });
        expect(wrapper.find('li').hasClass(classes.active)).toBe(true);
    });

    it('calls the onClick function', () => {
        const onClick = jest.fn();
        const wrapper = mount(<Page onClick={onClick} />);
        wrapper.find('li').simulate('click');
        expect(onClick.mock.calls.length).toBe(1);
    });

});
