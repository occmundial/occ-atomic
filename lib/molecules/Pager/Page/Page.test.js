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

});

describe("PageJSS", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <PageJSS />
        );
        expect(wrapper).toMatchSnapshot();
    });

});