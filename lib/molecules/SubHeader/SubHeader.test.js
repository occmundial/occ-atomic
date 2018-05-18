import React from 'react';
import { shallow } from 'enzyme';
import SubHeader from './SubHeader';
import styles from './styles';
import SubHeaderJSS from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

describe("SubHeader", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <SubHeader classes={classes} />
        );
        expect(wrapper).toMatchSnapshot();
    });

});

describe("SubHeaderJSS", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <SubHeaderJSS />
        );
        expect(wrapper).toMatchSnapshot();
    });

});