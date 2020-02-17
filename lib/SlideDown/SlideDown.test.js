import React from 'react';
import { shallow, mount } from 'enzyme';
import SlideDown from './SlideDown';
import styles from './styles';
import SlideDownJSS from './index';
import Text from '../Text';
import Icon from '../Icon';
import colors from '../subatomic/colors';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

describe("SlideDown", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <SlideDown classes={classes} title="Title" />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('shows the title', () => {
        const wrapper = mount(
            <SlideDown title="Title" classes={classes} />
        );
        expect(wrapper.find('label').at(0).text()).toEqual('Title');
    });

    it('rotates the arrow icon', () => {
        const wrapper = mount(
            <SlideDown expanded classes={classes} title="Title" />
        );
        expect(wrapper.find('.button span').prop('style')).toEqual({"transform": "rotate(180deg)"});
        wrapper.setState({toggled: false});
        expect(wrapper.find('.button span').prop('style')).toEqual({"transform": ""});
    });

    it('shows a Tag on the title', () => {
        const wrapper = mount(
            <SlideDown classes={classes} title="Title" />
        );
        wrapper.setProps({tag: 'Tag text'});
        expect(wrapper.find('label').at(1).text()).toBe('Tag text');
    });

    it('renders the child content', () => {
        const wrapper = shallow(
            <SlideDown classes={classes} title="Title">Children content</SlideDown>
        );
        expect(wrapper.find('.content').length).toBe(0);
        wrapper.setState({expanded: true});
        expect(wrapper.find('.content').length).toBe(1);
        expect(wrapper.find('.content').text()).toEqual('Children content');
    });

    it('correct render when prop expanded change', () => {
        const wrapper = shallow(
            <SlideDown classes={classes} title="Title">Children content</SlideDown>
        );
        expect(wrapper.find('.content').length).toBe(0);
        wrapper.setProps({ expanded: true });
        expect(wrapper.find('.content').length).toBe(1);
        wrapper.setProps({ expanded: false });
        setTimeout(()=> {
            expect(wrapper.find('.content').length).toBe(0);
        },400);
    });

    it('Text have the right properties', () => {
        const wrapper = shallow(
            <SlideDown classes={classes} textSize={'lg'} title="Title">Children content</SlideDown>
        );
        expect(wrapper.find(Text).props().large).toEqual(true);
    });

    it('Text and Icon has theme color', ()=>{
        const wrapper = shallow(
            <SlideDown classes={classes} title="Title" >Children content</SlideDown>
        );
        expect(wrapper.find(Icon).props().colors).toEqual([colors.grey900]);
        expect(wrapper.find(Text).props().link).toBeFalsy();
        wrapper.setProps({ theme: 'blue' });
        expect(wrapper.find(Text).props().link).toEqual(true);
        expect(wrapper.find(Icon).props().colors).toEqual([colors.textLink]);
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
