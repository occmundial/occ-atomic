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
            <Page classes={classes} page={1} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('renders the page element', () => {
        const wrapper = shallow(
            <Page classes={classes} page={1} />
        );
        expect(wrapper.find('.page').length).toBe(1);
    });

    it('shows the page element as active', () => {
        const wrapper = shallow(
            <Page classes={classes} page={1} />
        );
        expect(wrapper.find('.page').hasClass('active')).toBe(false);
        wrapper.setProps({selected: true});
        expect(wrapper.find('.page').hasClass('active')).toBe(true);
    });

    it('calls the onClick function', () => {
        const onClick = jest.fn();
        const wrapper = shallow(
            <Page onClick={onClick} classes={classes} page={1} />
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

describe("Page styles", () => {

    it('matches the snapshot', () => {
        expect(styles).toMatchSnapshot();
    });

});