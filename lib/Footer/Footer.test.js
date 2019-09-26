import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import styles from './styles';
import FooterJSS from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

describe("Footer", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <Footer classes={classes} />
        );
        expect(wrapper).toMatchSnapshot();
    });

});

describe("FooterJSS", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <FooterJSS />
        );
        expect(wrapper).toMatchSnapshot();
    });

});

describe("Footer styles", () => {

    it('matches the snapshot', () => {
        expect(styles).toMatchSnapshot();
    });

});
