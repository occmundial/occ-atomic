import React from 'react';
import { shallow } from 'enzyme';
import Check from './Check';
import styles from './styles';
import CheckJSS from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

describe("Check", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <Check classes={classes} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('has the right state', () => {
        const wrapper = shallow(
            <Check classes={classes} />
        );
        expect(wrapper.prop('className')).toEqual('cont');
        wrapper.setState({value: true});
        expect(wrapper.prop('className')).toEqual('cont active');
    });

    it('is disabled', () => {
        const wrapper = shallow(
            <Check classes={classes} disabled />
        );
        expect(wrapper.prop('className')).toEqual('cont disabled');
    });

    it('toggles the value on click', () => {
        const wrapper = shallow(
            <Check classes={classes} />
        );
        expect(wrapper.prop('className')).toEqual('cont');
        wrapper.simulate('click');
        expect(wrapper.prop('className')).toEqual('cont active');
    });

    it('calls onChange function', () => {
        const onChange = jest.fn();
        const wrapper = shallow(
            <Check classes={classes} onChange={onChange} />
        );
        wrapper.simulate('click');
        expect(onChange.mock.calls.length).toBe(1);
    });
    
    it('shows the label and right-label', () => {
        const wrapper = shallow(
            <Check classes={classes} label="Label content" right="Right" />
        );
        expect(wrapper.find('.label').length).toBe(1);
        expect(wrapper.find('.label').text()).toEqual('Label content');
        expect(wrapper.find('.right').length).toBe(1);
        expect(wrapper.find('.right').text()).toEqual('Right');
    });

});

describe("CheckJSS", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <CheckJSS />
        );
        expect(wrapper).toMatchSnapshot();
    });

});

describe("Check styles", () => {

    it('matches the snapshot', () => {
        expect(styles).toMatchSnapshot();
    });

});