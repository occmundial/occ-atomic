import React from 'react';
import { shallow } from 'enzyme';
import Break from './Break';
import styles from './styles';
import BreakJSS from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

describe("Break", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <Break classes={classes} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('renders the li', () => {
        const wrapper = shallow(
            <Break classes={classes} />
        );
        expect(wrapper.find('.li').length).toBe(1);
    });

    it('renders the label content', () => {
        const wrapper = shallow(
            <Break label="..." classes={classes} />
        );
        expect(wrapper.find('.li').text()).toEqual('...');
    });

});

describe("BreakJSS", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <BreakJSS />
        );
        expect(wrapper).toMatchSnapshot();
    });

});

describe("Break styles", () => {

    it('matches the snapshot', () => {
        expect(styles).toMatchSnapshot();
    });

});