import React from 'react';
import { shallow } from 'enzyme';
import Row from './Row';
import styles from './styles';
import RowJSS from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

describe("Row", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <Row classes={classes} />
        );
        expect(wrapper).toMatchSnapshot();
    });

});

describe("RowJSS", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <RowJSS/>
        );
        expect(wrapper).toMatchSnapshot();
    });

});

describe("Row styles", () => {

    it('matches the snapshot', () => {
        expect(styles).toMatchSnapshot();
    });

});