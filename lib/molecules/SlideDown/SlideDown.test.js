import React from 'react';
import { shallow } from 'enzyme';
import SlideDown from './SlideDown';
import styles from './styles';
import SlideDownJSS from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

describe("SlideDown", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <SlideDown classes={classes} />
        );
        expect(wrapper).toMatchSnapshot();
    });

});

describe("SlideDownJSS", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <SlideDownJSS />
        );
        expect(wrapper).toMatchSnapshot();
    });

});