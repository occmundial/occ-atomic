import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import styles from './styles';
import HeaderJSS from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

describe("Header", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <Header config={{}} classes={classes} />
        );
        expect(wrapper).toMatchSnapshot();
    });

});

describe("HeaderJSS", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <HeaderJSS config={{}} />
        );
        expect(wrapper).toMatchSnapshot();
    });

});