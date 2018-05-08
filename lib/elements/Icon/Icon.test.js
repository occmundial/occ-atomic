import React from 'react';
import { shallow } from 'enzyme';
import Icon from './Icon';
import styles from './styles';
import IconJSS from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

describe("Icon", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <Icon classes={classes} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('calls', () => {
        const wrapper = shallow(
            <Icon classes={classes} />
        );
        expect(wrapper).toMatchSnapshot();
    });

});

describe("IconJSS", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <IconJSS />
        );
        expect(wrapper).toMatchSnapshot();
    });

});