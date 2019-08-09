import React from 'react';
import { shallow, mount } from 'enzyme';
import SlideToggle from './SlideToggle';
import styles from './styles';
import SlideToggleJSS from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

describe("SlideToggle", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <SlideToggle classes={classes} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('has the right state', () => {
        const wrapper = shallow(
            <SlideToggle classes={classes} />
        );
        expect(wrapper.find('.cont').exists()).toEqual(true);
        wrapper.setState({value: true});
        expect(wrapper.find('.switch').hasClass('checked')).toEqual(true);
    });

    it('is disabled', () => {
        const wrapper = shallow(
            <SlideToggle classes={classes} disabled />
        );
        expect(wrapper.prop('className')).toEqual('cont disabled');
    });

    it('toggles the value on click', () => {
        const wrapper = shallow(
            <SlideToggle classes={classes} />
        );
        expect(wrapper.find('.cont').exists()).toEqual(true);
        wrapper.find('.switch').simulate('click');
        expect(wrapper.find('.switch').hasClass('checked')).toEqual(true);
    });

    it('calls onChange function', () => {
        const onChange = jest.fn();
        const wrapper = shallow(
            <SlideToggle classes={classes} onChange={onChange} />
        );
        wrapper.find('.switch').simulate('click');
        expect(onChange.mock.calls.length).toBe(1);
    });

    it('shows the label', () => {
        const wrapper = mount(
            <SlideToggle classes={classes} label="Label content" />
        );
        expect(wrapper.find('.label').at(0).text()).toEqual('Label content');
    });

});

describe("SlideToggleJSS", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <SlideToggleJSS />
        );
        expect(wrapper).toMatchSnapshot();
    });

});

describe("SlideToggle styles", () => {

    it('matches the snapshot', () => {
        expect(styles).toMatchSnapshot();
    });

});
