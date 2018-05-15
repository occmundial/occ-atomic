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

});

describe("BreakJSS", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <BreakJSS />
        );
        expect(wrapper).toMatchSnapshot();
    });

});