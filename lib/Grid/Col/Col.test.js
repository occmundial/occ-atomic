import React from 'react';
import { shallow } from 'enzyme';
import Col from './Col';
import styles from './styles';
import ColJSS from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

describe("Col", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <Col xs={{col:12}} classes={classes} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('matches the classes', () => {
        const wrapper = shallow(
            <Col xxs={{col:6, offset:3, push:1, pull:1}} classes={classes} />
        );
        expect(wrapper.find('div').prop('className')).toEqual('col xxs6 offset-xxs3 push-xxs1 pull-xxs1');
    });

});

describe("ColJSS", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <ColJSS xs={{col:12}} />
        );
        expect(wrapper).toMatchSnapshot();
    });

});

describe("Col styles", () => {

    it('matches the snapshot', () => {
        expect(styles).toMatchSnapshot();
    });

});