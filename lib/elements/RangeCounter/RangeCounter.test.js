import React from 'react';
import { shallow } from 'enzyme';
import RangeCounter from './RangeCounter';
import styles from './styles';
import RangeCounterJSS from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

describe("RangeCounter", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <RangeCounter classes={classes} min={1} max={10} total={100} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('shows the text correctly', () => {
        const wrapper = shallow(
            <RangeCounter classes={classes} min={1} max={10} total={100} type="things" />
        );
        expect(wrapper.find('div').text()).toEqual('1 - 10 / 100 things');
    });

});

describe("RangeCounterJSS", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <RangeCounterJSS min={1} max={10} total={100} />
        );
        expect(wrapper).toMatchSnapshot();
    });

});

describe("RangeCounter styles", () => {

    it('matches the snapshot', () => {
        expect(styles).toMatchSnapshot();
    });

});