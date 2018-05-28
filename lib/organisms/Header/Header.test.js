import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';
import styles from './styles';
import HeaderJSS from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

describe("Header", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <Header classes={classes} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('shows the shadow at the right place', () => {
        const wrapper = shallow(
            <Header classes={classes} />
        );
        global.innerWidth = 500;
        global.dispatchEvent(new Event('resize'));
        wrapper.update();
        expect(wrapper.find('.master').hasClass('shadow')).toBe(true);
        expect(wrapper.find('.separate .shadow').length).toBe(0);
        wrapper.setState({shadow:false});
        expect(wrapper.find('.master').hasClass('shadow')).toBe(false);
        expect(wrapper.find('.separate .shadow').length).toBe(1);
    });

    it('shows and hides the logo', () => {
        const wrapper = mount(
            <Header classes={classes} logo="Logo" />
        );
        global.innerWidth = 1200;
        global.dispatchEvent(new Event('resize'));
        expect(wrapper.find('.content').text()).toBe('Logo');
        global.innerWidth = 500;
        global.dispatchEvent(new Event('resize'));
        expect(wrapper.find('.content').text()).toBe('');
    });

    it('shows and hides the title', () => {
        const wrapper = mount(
            <Header classes={classes} title="Title" />
        );
        global.innerWidth = 1200;
        global.dispatchEvent(new Event('resize'));
        expect(wrapper.find('.content').text()).toBe('');
        global.innerWidth = 500;
        global.dispatchEvent(new Event('resize'));
        expect(wrapper.find('.content').text()).toBe('Title');
    });

    it('renders the message icon', () => {
        const wrapper = mount(
            <Header classes={classes} messagesIcon={{active: true, id:'messagesIcon', href:'#'}} />
        );
        expect(wrapper.find('#messagesIcon').at(0).length).toBe(1);
        wrapper.setProps({messagesIcon:{}});
        expect(wrapper.find('#messagesIcon').at(0).length).toBe(0);
    });

    it('renders the menu', () => {
        const wrapper = mount(
            <Header classes={classes} menu="Menu" />
        );
        expect(wrapper.find('.user').text()).toBe('Menu');
    });

    it('renders the nav menu', () => {
        const wrapper = mount(
            <Header classes={classes} nav="Nav" />
        );
        global.innerWidth = 1200;
        global.dispatchEvent(new Event('resize'));
        wrapper.update();
        expect(wrapper.find('.content').text()).toBe('Nav');
        expect(wrapper.find('.separate').length).toBe(0);
        global.innerWidth = 500;
        global.dispatchEvent(new Event('resize'));
        wrapper.update();
        expect(wrapper.find('.content').text()).toBe('');
        expect(wrapper.find('.separate').length).toBe(1);
        expect(wrapper.find('.separate').text()).toBe('Nav');
    });

});

describe("HeaderJSS", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <HeaderJSS />
        );
        expect(wrapper).toMatchSnapshot();
    });

});

describe("Header styles", () => {

    it('matches the snapshot', () => {
        expect(styles).toMatchSnapshot();
    });

});