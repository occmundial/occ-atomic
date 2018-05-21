import React from 'react';
import { shallow } from 'enzyme';
import Page from './Page';
import styles from './styles';
import PageJSS from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

describe("Page", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <Page classes={classes} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('renders the li', () => {
        const wrapper = shallow(
            <Page classes={classes} />
        );
        expect(wrapper.find('.li').length).toBe(1);
    });

    it('shows the li as active', () => {
        const wrapper = shallow(
            <Page classes={classes} />
        );
        expect(wrapper.find('.li').hasClass('active')).toBe(false);
        wrapper.setProps({selected: true});
        expect(wrapper.find('.li').hasClass('active')).toBe(true);
    });

    it('calls the onClick function', () => {
        const onClick = jest.fn();
        const wrapper = shallow(
            <Page onClick={onClick} classes={classes} />
        );
        wrapper.simulate('click');
        expect(onClick.mock.calls.length).toBe(1);
    });

});

describe("PageJSS", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <PageJSS />
        );
        expect(wrapper).toMatchSnapshot();
    });

});