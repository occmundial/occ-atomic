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
            <Pager classes={classes} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('renders the prev and next buttons', () => {
        const wrapper = shallow(
            <Pager classes={classes} />
        );
        expect(wrapper.find('.prev').length).toBe(1);
        expect(wrapper.find('.prev').text()).toEqual('<Jss(Icon) /> Previous');
        expect(wrapper.find('.next').length).toBe(1);
        expect(wrapper.find('.next').text()).toEqual('Next <Jss(Icon) />');
    });

    it('changes to previous page', () => {
        const wrapper = shallow(
            <Pager initialPage={3} classes={classes} />
        );
        expect(wrapper.state('selected')).toEqual(3);
        wrapper.find('.prev').simulate('click', {target: {}});
        expect(wrapper.state('selected')).toEqual(2);
    });

    it('changes to next page', () => {
        const wrapper = shallow(
            <Pager initialPage={3} classes={classes} />
        );
        expect(wrapper.state('selected')).toEqual(3);
        wrapper.find('.next').simulate('click', {target: {}});
        expect(wrapper.state('selected')).toEqual(4);
    });

    it('renders the pagination', () => {
        const wrapper = mount(
            <Pager pageCount={3} pageRangeDisplayed={1} marginPagesDisplayed={1} classes={classes} />
        );
        expect(wrapper.find('li').length).toBe(5);
    });

    it('changes to a specific page', () => {
        const wrapper = mount(
            <Pager pageCount={5} pageRangeDisplayed={1} marginPagesDisplayed={1} classes={classes} />
        );
        expect(wrapper.state('selected')).toEqual(0);
        wrapper.find('li').at(4).simulate('click', {target: {}});
        expect(wrapper.state('selected')).toEqual(4);
    });

    it('disables the previous page button', () => {
        const wrapper = shallow(
            <Pager initialPage={0} classes={classes} />
        );
        expect(wrapper.find('.prev').hasClass('disabled')).toEqual(true);
        wrapper.setProps({forcePage:5});
        expect(wrapper.find('.prev').hasClass('disabled')).toEqual(false);
    });

    it('disables the next page button', () => {
        const wrapper = shallow(
            <Pager pageCount={5} initialPage={4} classes={classes} />
        );
        expect(wrapper.find('.next').hasClass('disabled')).toEqual(true);
        wrapper.setProps({forcePage:0});
        expect(wrapper.find('.next').hasClass('disabled')).toEqual(false);
    });

    it('calls the onPageChange function', () => {
        const onPageChange = jest.fn();
        const wrapper = shallow(
            <Pager onPageChange={onPageChange} classes={classes} />
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