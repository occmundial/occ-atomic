import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';
import styles from './styles';
import CardJSS from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

describe("Card", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <Card classes={classes} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('has no padding', () => {
        const wrapper = shallow(
            <Card classes={classes} noPadding />
        );
        expect(wrapper.hasClass('cardNoPadding')).toBe(true);
    });

    it('has the right level of shadow', () => {
        const wrapper = shallow(
            <Card classes={classes} shadow={3} />
        );
        expect(wrapper.prop('className')).toEqual('card shadow3');
    });

});

describe("CardJSS", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <CardJSS />
        );
        expect(wrapper).toMatchSnapshot();
    });

});

describe("Card styles", () => {

    it('matches the snapshot', () => {
        expect(styles).toMatchSnapshot();
    });

});