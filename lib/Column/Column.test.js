import React from 'react';
import { shallow } from 'enzyme';
import Column from './Column';
import styles from './styles';
import ColumnJSS from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

describe("Column", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <Column xs={{col:12}} classes={classes} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('matches the classes', () => {
        const wrapper = shallow(
            <Column xs={{col:6, offset:3, push:1, pull:1}} classes={classes} />
        );
        expect(wrapper.find('div').prop('className')).toEqual('col xs6 offset-xs3 push-xs1 pull-xs1');
    });

});

describe("ColumnJSS", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <ColumnJSS xs={{col:12}} />
        );
        expect(wrapper).toMatchSnapshot();
    });

});

describe("Column styles", () => {

    it('matches the snapshot', () => {
        expect(styles).toMatchSnapshot();
    });

});