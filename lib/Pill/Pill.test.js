import React from 'react';
import { shallow, mount } from 'enzyme';
import Pill from './Pill';
import styles from './styles';
import PillJSS from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

const pills = [
    {
        id:1,
        label:'foo'
    },
    {
        id:2,
        label:'bar'
    },
    {
        id:3,
        label:'baz'
    },
    {
        id:4,
        label:'qux'
    },
];

describe("Pill", () => {

    // Group tests
    it('matches the group snapshot', () => {
        const wrapper = shallow(
            <Pill group={pills} classes={classes} />
        );
        expect(wrapper).toMatchSnapshot();
    });
    it('shows four buttons', () => {
        const wrapper = mount(
            <Pill group={pills} classes={classes} />
        );
        expect(wrapper.find('button').length).toBe(4);
    });
    it('selects the right options', () => {
        const wrapper = mount(
            <Pill group={pills} classes={classes} />
        );
        expect(wrapper.state('selected')).toBe(undefined);
        wrapper.find('button').at(0).simulate('click');
        expect(wrapper.state('selected')).toBe(1);
    });
    it('calls the onChange function', () => {
        const onChange = jest.fn();
        const wrapper = mount(
            <Pill group={pills} onChange={onChange} classes={classes} />
        );
        wrapper.find('button').at(0).simulate('click');
        expect(onChange.mock.calls.length).toBe(1);
    });

    // Stack tests
    it('matches the stack snapshot', () => {
        const wrapper = shallow(
            <Pill stack={pills} classes={classes} />
        );
        expect(wrapper).toMatchSnapshot();
    });
    it('shows four buttons', () => {
        const wrapper = mount(
            <Pill stack={pills} classes={classes} />
        );
        expect(wrapper.find('button').length).toBe(4);
    });
    it('calls the onClick function', () => {
        const onClick = jest.fn();
        const wrapper = mount(
            <Pill stack={pills} onClick={onClick} classes={classes} />
        );
        wrapper.find('button').at(0).simulate('click');
        expect(onClick.mock.calls.length).toBe(1);
    });
    it('calls the onClose function', () => {
        const onClose = jest.fn();
        const wrapper = mount(
            <Pill stack={pills} onClose={onClose} classes={classes} />
        );
        wrapper.find('button').at(0).find('span').at(1).simulate('click');
        expect(onClose.mock.calls.length).toBe(1);
    });

    // Choice tests
    it('matches the choice snapshot', () => {
        const wrapper = shallow(
            <Pill choice={pills} classes={classes} />
        );
        expect(wrapper).toMatchSnapshot();
    });
    it('shows four buttons', () => {
        const wrapper = mount(
            <Pill choice={pills} classes={classes} />
        );
        expect(wrapper.find('button').length).toBe(4);
    });
    it('calls the onChange function', () => {
        const onChange = jest.fn();
        const wrapper = mount(
            <Pill choice={pills} onChange={onChange} classes={classes} />
        );
        wrapper.find('button').at(0).simulate('click');
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
