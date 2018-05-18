import React from 'react';
import { shallow } from 'enzyme';
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

});

describe("PagerJSS", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <PagerJSS />
        );
        expect(wrapper).toMatchSnapshot();
    });

});