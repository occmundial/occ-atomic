import React from 'react';
import { shallow, mount } from 'enzyme';
import Pager from './Pager';
import styles from './styles';
import PagerJSS from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

describe("Pager", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <Pager classes={classes} currentPage={1} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('renders the prev and next buttons', () => {
        const wrapper = shallow(
            <Pager classes={classes} currentPage={1} />
        );
        expect(wrapper.find('.prev').length).toBe(1);
        expect(wrapper.find('.prev').text()).toEqual('<Jss(Button) />');
        expect(wrapper.find('.next').length).toBe(1);
        expect(wrapper.find('.next').text()).toEqual('<Jss(Button) />');
    });

    it('changes to previous page', () => {
        const onPageChange = jest.fn();
        const wrapper = mount(
            <Pager currentPage={3} pageCount={4} classes={classes} onPageChange={onPageChange} />
        );
        expect(onPageChange.mock.calls.length).toBe(0);
        expect(wrapper.find('Page').at(1).prop('selected')).toBe(false);
        expect(wrapper.find('Page').at(2).prop('selected')).toBe(true);
        wrapper.find('.prev button').simulate('click', { target: {} });
        expect(onPageChange.mock.calls.length).toBe(1);
        expect(onPageChange.mock.calls[0][0]).toBe(2);
        wrapper.setProps({ currentPage:2 });
        expect(wrapper.find('Page').at(1).prop('selected')).toBe(true);
        expect(wrapper.find('Page').at(2).prop('selected')).toBe(false);
    });

    it('changes to next page', () => {
        const onPageChange = jest.fn();
        const wrapper = mount(
            <Pager currentPage={2} pageCount={4} classes={classes} onPageChange={onPageChange} />
        );
        expect(onPageChange.mock.calls.length).toBe(0);
        expect(wrapper.find('Page').at(1).prop('selected')).toBe(true);
        expect(wrapper.find('Page').at(2).prop('selected')).toBe(false);
        wrapper.find('.next button').simulate('click', { target: {} });
        expect(onPageChange.mock.calls.length).toBe(1);
        expect(onPageChange.mock.calls[0][0]).toBe(3);
        wrapper.setProps({ currentPage:3 });
        expect(wrapper.find('Page').at(1).prop('selected')).toBe(false);
        expect(wrapper.find('Page').at(2).prop('selected')).toBe(true);
    });

    it('renders the pagination', () => {
        const wrapper = mount(
            <Pager currentPage={1} pageCount={3} centerPages={1} marginPages={1} classes={classes} />
        );
        expect(wrapper.find('Page').length).toBe(3);
        wrapper.setProps({ pageCount: 10 });
        expect(wrapper.find('Page').length).toBe(4);
        wrapper.setProps({ currentPage: 3 });
        expect(wrapper.find('Page').length).toBe(5);
    });

    it('changes to a specific page', () => {
        const onPageChange = jest.fn();
        const wrapper = mount(
            <Pager currentPage={1} pageCount={5} centerPages={1} marginPages={1} classes={classes} onPageChange={onPageChange} />
        );
        expect(onPageChange.mock.calls.length).toBe(0);
        expect(wrapper.find('Page').at(0).prop('selected')).toBe(true);
        expect(wrapper.find('Page').at(1).prop('selected')).toBe(false);
        wrapper.find('Page').at(1).simulate('click', { target: {} });
        expect(onPageChange.mock.calls.length).toBe(1);
        expect(onPageChange.mock.calls[0][0]).toBe(2);
        wrapper.setProps({ currentPage:2 });
        expect(wrapper.find('Page').at(0).prop('selected')).toBe(false);
        expect(wrapper.find('Page').at(1).prop('selected')).toBe(true);
    });

    it('disables the previous page button', () => {
        const wrapper = shallow(
            <Pager currentPage={1} classes={classes} />
        );
        expect(wrapper.find('.prev').prop('disabled')).toEqual(true);
        wrapper.setProps({currentPage:5});
        expect(wrapper.find('.prev').prop('disabled')).toEqual(false);
    });

    it('disables the next page button', () => {
        const wrapper = shallow(
            <Pager pageCount={5} currentPage={5} classes={classes} />
        );
        expect(wrapper.find('.next').prop('disabled')).toEqual(true);
        wrapper.setProps({currentPage:1});
        expect(wrapper.find('.next').prop('disabled')).toEqual(false);
    });

    it('calls the onPageChange function', () => {
        const onPageChange = jest.fn();
        const wrapper = shallow(
            <Pager currentPage={1} onPageChange={onPageChange} classes={classes} />
        );
        wrapper.find('.next').simulate('click', {target: {}});
        expect(onPageChange.mock.calls.length).toBe(1);
    });

});

describe("PagerJSS", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <PagerJSS />
        );
        expect(wrapper).toMatchSnapshot();
    });

});

describe("Pager styles", () => {

    it('matches the snapshot', () => {
        expect(styles).toMatchSnapshot();
    });

});