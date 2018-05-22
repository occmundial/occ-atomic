import React from 'react';
import { shallow } from 'enzyme';
import Label from './Label';
import styles from './styles';
import LabelJSS from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

describe("Label", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <Label classes={classes}>Label</Label>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('shows the children content', () => {
        const wrapper = shallow(
            <Label classes={classes}>Label</Label>
        );
        expect(wrapper.text()).toEqual('Label');
    });

    it('calls onClick function', () => {
        const onClick = jest.fn();
        const wrapper = shallow(
            <Label classes={classes} onClick={onClick}>Label</Label>
        );
        wrapper.simulate('click');
        expect(onClick.mock.calls.length).toBe(1);
    });

    it('calls onClose function', () => {
        const onClose = jest.fn();
        const wrapper = shallow(
            <Label classes={classes} onClose={onClose}>Label</Label>
        );
        wrapper.find('span').simulate('click', { stopPropagation() {} });
        expect(onClose.mock.calls.length).toBe(1);
    });

    it('has the right theme', () => {
        const wrapper = shallow(
            <Label classes={classes} theme="default">Label</Label>
        );
        expect(wrapper.prop('className')).toEqual('label default');
    });

});

describe("LabelJSS", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <LabelJSS>Label</LabelJSS>
        );
        expect(wrapper).toMatchSnapshot();
    });

});

describe("Label styles", () => {

    it('matches the snapshot', () => {
        expect(styles).toMatchSnapshot();
    });

});