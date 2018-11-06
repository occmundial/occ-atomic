import React from 'react';
import { shallow } from 'enzyme';
import Pill from './Pill';
import styles from './styles';
import PillJSS from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

const pills = [
    {
        id:1,
        value:10,
        label:'foo'
    },
    {
        id:2,
        value:20,
        label:'bar'
    },
    {
        id:3,
        value:30,
        label:'baz'
    },
    {
        id:4,
        value:40,
        label:'qux'
    },
];

describe("Pill", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <Pill group={pills} classes={classes} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('shows four buttons', () => {
        const wrapper = shallow(
            <Pill group={pills} classes={classes} />
        );
        expect(wrapper.find('.pill').length).toBe(4);
    });
    
    it('selects the right options', () => {
        const wrapper = shallow(
            <Pill group={pills} classes={classes} />
        );
        expect(wrapper.state('value')).toBe(undefined);
        wrapper.find('.pill').at(0).simulate('click');
        expect(wrapper.state('value')).toBe(10);
    });
    
    it('calls the onChange function', () => {
        const onChange = jest.fn();
        const wrapper = shallow(
            <Pill group={pills} onChange={onChange} classes={classes} />
        );
        wrapper.find('.pill').at(0).simulate('click');
        expect(onChange.mock.calls.length).toBe(1);
    });

});

describe("PillJSS", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <PillJSS group={pills} />
        );
        expect(wrapper).toMatchSnapshot();
    });

});

describe("Pill styles", () => {

    it('matches the snapshot', () => {
        expect(styles).toMatchSnapshot();
    });

});