import React from 'react';
import { shallow, mount } from 'enzyme';
import SlideDown from './SlideDown';
import styles from './styles';
import SlideDownJSS from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

describe("SlideDown", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <SlideDown classes={classes} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('shows the title', () => {
        const wrapper = mount(
            <SlideDown title="Title" classes={classes} />
        );
        expect(wrapper.find('h4').text()).toEqual('Title');
    });

    it('rotates the arrow icon', () => {
        const wrapper = mount(
            <SlideDown expanded classes={classes} />
        );
        expect(wrapper.find('.button span').prop('style')).toEqual({"transform": "rotate(180deg)"});
        wrapper.setState({toggled: false});
        expect(wrapper.find('.button span').prop('style')).toEqual({"transform": ""});
    });

    it('shows an indicator on the title', () => {
        const wrapper = mount(
            <SlideDown classes={classes} />
        );
        expect(wrapper.find('h4').hasClass('dot')).toEqual(false);
        wrapper.setProps({active: true});
        expect(wrapper.find('h4').hasClass('dot')).toEqual(true);
    });

    it('renders the child content', () => {
        const wrapper = shallow(
            <SlideDown classes={classes}>Children content</SlideDown>
        );
        expect(wrapper.find('.content').length).toBe(0);
        wrapper.setState({expanded: true});
        expect(wrapper.find('.content').length).toBe(1);
        expect(wrapper.find('.content').text()).toEqual('Children content');
    });

});

describe("SlideDownJSS", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <SlideDownJSS />
        );
        expect(wrapper).toMatchSnapshot();
    });

});

describe("SlideDown styles", () => {

    it('matches the snapshot', () => {
        expect(styles).toMatchSnapshot();
    });

});