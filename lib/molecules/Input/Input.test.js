import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';
import styles from './styles';
import InputJSS from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

describe("Input", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <Input classes={classes} />
        );
        expect(wrapper).toMatchSnapshot();
    });

});

describe("InputJSS", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <InputJSS />
        );
        expect(wrapper).toMatchSnapshot();
    });

});