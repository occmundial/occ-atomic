import React from 'react';
import { mount } from 'enzyme';
import { JssProvider, SheetsRegistry } from 'react-jss';

import Pager from './Pager';

let sheets, classes;

describe("Pager", () => {

    beforeEach(() => sheets = new SheetsRegistry());
    afterEach(() => sheets = null);

    it('matches the snapshot', () => {
        const wrapper = mount(
            <Pager />
        );
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders the prev and next buttons', () => {
        const wrapper = mount(
            <JssProvider registry={sheets}>
                <Pager />
            </JssProvider>
        );
        classes = sheets.registry[3].classes;
        const prev = `.${classes.prev}`;
        const next = `.${classes.next}`;
        expect(wrapper.find(prev).length).toBe(1);
        expect(wrapper.find(prev).text()).toEqual(' Previous');
        expect(wrapper.find(next).length).toBe(1);
        expect(wrapper.find(next).text()).toEqual('Next ');
    });

    it('changes to previous page', () => {
        const wrapper = mount(
            <JssProvider registry={sheets}>
                <Pager initialPage={3} />
            </JssProvider>
        );
        classes = sheets.registry[3].classes;
        const pageClasses = sheets.registry[1].classes;
        const prev = `.${classes.prev}`;
        const active = `.${pageClasses.active}`;
        expect(wrapper.find(active).text()).toBe('3');
        wrapper.find(prev).simulate('click', {target: {}});
        expect(wrapper.find(active).text()).toBe('2');
    });

    it('changes to next page', () => {
        const wrapper = mount(
            <JssProvider registry={sheets}>
                <Pager initialPage={3} />
            </JssProvider>
        );
        classes = sheets.registry[3].classes;
        const pageClasses = sheets.registry[1].classes;
        const next = `.${classes.next}`;
        const active = `.${pageClasses.active}`;
        expect(wrapper.find(active).text()).toBe('3');
        wrapper.find(next).simulate('click', {target: {}});
        expect(wrapper.find(active).text()).toBe('4');
    });

    it('renders the pagination', () => {
        const wrapper = mount(
            <Pager pageCount={3} pageRangeDisplayed={1} marginPagesDisplayed={1} />
        );
        expect(wrapper.find('li').length).toBe(5);
    });

    it('changes to a specific page', () => {
        const wrapper = mount(
            <JssProvider registry={sheets}>
                <Pager pageCount={5} pageRangeDisplayed={1} marginPagesDisplayed={1} />
            </JssProvider>
        );
        classes = sheets.registry[3].classes;
        const pageClasses = sheets.registry[1].classes;
        const active = `.${pageClasses.active}`;
        expect(wrapper.find(active).text()).toBe('1');
        wrapper.find('li').at(3).simulate('click', {target: {}});
        expect(wrapper.find(active).text()).toBe('5');
    });

    it('disables the previous page button', () => {
        const wrapper = mount(
            <JssProvider registry={sheets}>
                <Pager initialPage={10} />
            </JssProvider>
        );
        classes = sheets.registry[3].classes;
        const prev = `.${classes.prev}`;
        expect(wrapper.find(prev).hasClass(classes.disabled)).toEqual(false);
        wrapper.setProps({ children: <Pager initialPage={1} forcePage={1} /> });
        wrapper.instance().forceUpdate();
        wrapper.update();
        expect(wrapper.find(prev).hasClass(classes.disabled)).toEqual(true);
    });

    it('disables the next page button', () => {
        const wrapper = mount(
            <JssProvider registry={sheets}>
                <Pager initialPage={10} />
            </JssProvider>
        );
        classes = sheets.registry[3].classes;
        const next = `.${classes.next}`;
        expect(wrapper.find(next).hasClass(classes.disabled)).toEqual(true);
        wrapper.setProps({ children: <Pager initialPage={1} forcePage={1} /> });
        wrapper.instance().forceUpdate();
        wrapper.update();
        expect(wrapper.find(next).hasClass(classes.disabled)).toEqual(false);
    });

    it('calls the onPageChange function', () => {
        const onPageChange = jest.fn();
        const wrapper = mount(
            <JssProvider registry={sheets}>
                <Pager onPageChange={onPageChange} />
            </JssProvider>
        );
        classes = sheets.registry[3].classes;
        const next = `.${classes.next}`;
        wrapper.find(next).simulate('click', {target: {}});
        expect(onPageChange.mock.calls.length).toBe(1);
    });

});
