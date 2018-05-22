import React from 'react';
import { shallow, mount } from 'enzyme';
import SubHeader from './SubHeader';
import styles from './styles';
import SubHeaderJSS from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

describe("SubHeader", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <SubHeader classes={classes} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('renders the SubHeader with the right theme', () => {
        const wrapper = shallow(
            <SubHeader classes={classes} />
        );
        expect(wrapper.find('.subHeader').hasClass('blue')).toEqual(true);
        wrapper.setProps({theme:'white'});
        expect(wrapper.find('.subHeader').hasClass('white')).toEqual(true);
    });

    it('renders the subHeader as fixed', () => {
        const wrapper = shallow(
            <SubHeader classes={classes} />
        );
        expect(wrapper.find('.subHeader').hasClass('fixed')).toEqual(false);
        wrapper.setProps({fixed:true});
        expect(wrapper.find('.subHeader').hasClass('fixed')).toEqual(true);
    });

    it('renders the Left content', () => {
        const wrapper = mount(
            <SubHeader classes={classes} left="Left content" />
        );
        expect(wrapper.find('.left').first().text()).toEqual('Left content');
    });

    it('renders the Right content', () => {
        const wrapper = mount(
            <SubHeader classes={classes} right="Right content" />
        );
        expect(wrapper.find('.right').first().text()).toEqual('Right content');
    });

    it('renders the Center content', () => {
        const wrapper = mount(
            <SubHeader classes={classes} center="Center content" />
        );
        expect(wrapper.find('.center').first().text()).toEqual('Center content');
    });

});

describe("SubHeaderJSS", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <SubHeaderJSS />
        );
        expect(wrapper).toMatchSnapshot();
    });

});

describe("SubHeader styles", () => {

    it('matches the snapshot', () => {
        expect(styles).toMatchSnapshot();
    });

});