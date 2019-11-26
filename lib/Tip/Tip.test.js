import React from 'react';
import { shallow, mount } from 'enzyme';
import Tip from './Tip';
import styles from './styles';
import TipJSS from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

describe("Tip", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <Tip classes={classes} text="" />
        );
        expect(wrapper).toMatchSnapshot();
    });

	it('has the right theme', () => {
		const wrapper = shallow(
            <Tip classes={classes} theme="info" text="" />
        );
        expect(wrapper.find('.info').length).toBe(1);
		expect(wrapper.find('.warning').length).toBe(0);
        wrapper.setProps({ theme: 'warning' });
        expect(wrapper.find('.info').length).toBe(0);
		expect(wrapper.find('.warning').length).toBe(1);
	});

    it('has an icon', () => {
        const wrapper = shallow(
            <Tip classes={classes} icon="search" text="" />
        );
        expect(wrapper.find('.icon').length).toBe(1);
    });

    it('has bold text', () => {
        const wrapper = mount(
            <Tip classes={classes}>
                Text with *bold* text
            </Tip>
        );
        expect(wrapper.find('b').length).toBe(1);
    });

});

describe("TipJSS", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <TipJSS text="" />
        );
        expect(wrapper).toMatchSnapshot();
    });

});

describe("Tip styles", () => {

    it('matches the snapshot', () => {
        expect(styles).toMatchSnapshot();
    });

});
