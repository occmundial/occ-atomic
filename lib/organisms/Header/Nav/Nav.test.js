import React from 'react';
import { shallow } from 'enzyme';
import Nav from './Nav';
import styles from './styles';
import NavJSS from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

describe("Nav", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <Nav classes={classes} />
        );
        expect(wrapper).toMatchSnapshot();
    });

});

describe("NavJSS", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <NavJSS />
        );
        expect(wrapper).toMatchSnapshot();
    });

});