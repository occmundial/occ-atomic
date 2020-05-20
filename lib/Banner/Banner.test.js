import React from 'react';
import { shallow } from 'enzyme';
import Banner from './Banner';
import styles from './styles';
import BannerJSS from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

describe("Banner", () => {
    it('matches the snapshot', () => {
        const wrapper = shallow(
            <Banner classes={classes} />
        );
        expect(wrapper).toMatchSnapshot();
    });
});

describe("BannerJSS", () => {
    it('matches the snapshot', () => {
        const wrapper = shallow(
            <BannerJSS />
        );
        expect(wrapper).toMatchSnapshot();
    });

});

describe("Banner styles", () => {
    it('matches the snapshot', () => {
        expect(styles).toMatchSnapshot();
    });

});
