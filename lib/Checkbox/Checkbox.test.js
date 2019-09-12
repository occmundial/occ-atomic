import React from 'react';
import { shallow, mount } from 'enzyme';
import Checkbox from './Checkbox';
import styles from './styles';
import CheckboxJSS from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

describe("Checkbox", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <Checkbox classes={classes} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('has the right state', () => {
        const wrapper = shallow(
            <Checkbox classes={classes} />
        );
        expect(wrapper.prop('className')).toEqual('cont');
        wrapper.setState({value: true});
        expect(wrapper.prop('className')).toEqual('cont active');
    });

    it('appears indeterminated', () => {
        const wrapper = shallow(
            <Checkbox classes={classes} />
        );
        expect(wrapper.prop('className')).toEqual('cont');
        wrapper.setState({indeterminated: true});
        expect(wrapper.prop('className')).toEqual('cont indeterminated');
    });

    it('is disabled', () => {
        const wrapper = shallow(
            <Checkbox classes={classes} disabled />
        );
        expect(wrapper.prop('className')).toEqual('cont disabled');
    });

    it('toggles the value on click', () => {
        const wrapper = shallow(
            <Checkbox classes={classes} />
        );
        expect(wrapper.prop('className')).toEqual('cont');
        wrapper.simulate('click');
        expect(wrapper.prop('className')).toEqual('cont active');
    });

    it('calls onChange function', () => {
        const onChange = jest.fn();
        const wrapper = shallow(
            <Checkbox classes={classes} onChange={onChange} />
        );
        wrapper.simulate('click');
        expect(onChange.mock.calls.length).toBe(1);
    });

    it('shows the label', () => {
        const wrapper = mount(
            <Checkbox classes={classes} label="Label content" right="Right" />
        );
        expect(wrapper.find('.label').at(0).text()).toEqual('Label content');
    });

});

describe("CheckboxJSS", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <CheckboxJSS />
        );
        expect(wrapper).toMatchSnapshot();
    });

});

describe("Checkbox styles", () => {

    it('matches the snapshot', () => {
        expect(styles).toMatchSnapshot();
    });

});
