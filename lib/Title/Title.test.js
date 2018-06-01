import React from 'react';
import { shallow } from 'enzyme';
import Title from './Title';
import styles from './styles';
import TitleJSS from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

describe("Title", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <Title h={1} classes={classes} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('renders the right heading', () => {
        const wrapper = shallow(
            <Title h={3} classes={classes} />
        );
        expect(wrapper.find('h3').length).toBe(1);
    });

});

describe("TitleJSS", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <TitleJSS h={1} />
        );
        expect(wrapper).toMatchSnapshot();
    });

});

describe("Title styles", () => {

    it('matches the snapshot', () => {
        expect(styles).toMatchSnapshot();
    });

});