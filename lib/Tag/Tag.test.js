import React from 'react';
import { shallow } from 'enzyme';
import Tag from './Tag';
import styles from './styles';
import TagJSS from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

describe("Tag", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <Tag classes={classes}>Tag</Tag>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('shows the children content', () => {
        const wrapper = shallow(
            <Tag classes={classes}>Tag</Tag>
        );
        expect(wrapper.text()).toEqual('Tag');
    });

    it('has the right theme', () => {
        const wrapper = shallow(
            <Tag classes={classes} theme="default">Tag</Tag>
        );
        expect(wrapper.prop('className')).toEqual('tag default');
    });
    
    it('render the span when necessary', () => {
        const wrapper = shallow(
            <Tag classes={classes}>Tag Test</Tag>
        );
        expect(wrapper.find('span').length).toBe(0);
        wrapper.setProps({iconName: 'check'});
        expect(wrapper.find('span').length).toBe(1);
    });

    it('shows an icon', () => {
        const wrapper = shallow(
            <Tag classes={classes}>Tag Test</Tag>
        );
        expect(wrapper.find('.icon').length).toBe(0);
        wrapper.setProps({iconName: 'check'});
        expect(wrapper.find('.icon').length).toBe(1);
    });

});

describe("TagJSS", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <TagJSS>Tag</TagJSS>
        );
        expect(wrapper).toMatchSnapshot();
    });

});

describe("Tag styles", () => {

    it('matches the snapshot', () => {
        expect(styles).toMatchSnapshot();
    });

    it('returns the right icons', () => {
      let props = {iconName:'testing'};
      expect(styles.defaultIcon.background(props)).toBe('url(data:image/svg+xml;base64,dGVzdGluZyAtICMwMDAwMDA=)');
    });

});
