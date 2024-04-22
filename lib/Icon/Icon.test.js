import React from 'react';
import { mount, shallow } from 'enzyme';
import Icon from './Icon';
import styles from './styles';
import IconJSS from './index';
import AtomicProvider from '../Provider';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

describe("Icon", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <Icon iconName="search" classes={classes} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('calls the onClick function', () => {
        const onClick = jest.fn();
        const wrapper = shallow(
            <Icon iconName="search" classes={classes} onClick={onClick} />
        );
        wrapper.simulate('click');
        expect(onClick.mock.calls.length).toBe(1);
    });

});

describe("IconJSS", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <IconJSS iconName="search" />
        );
        expect(wrapper).toMatchSnapshot();
    });

});

describe("Icon styles", () => {

    it('matches the snapshot', () => {
        expect(styles).toMatchSnapshot();
    });

    it('returns the right width, height and display', () => {
        let props = { iconName: "testing" };
        expect(styles.oldIcon.width(props)).toBe('5px');
        expect(styles.oldIcon.height(props)).toBe('5px');
        expect(styles.oldIcon.display(props)).toBe('inline-block');
        props.width = 20; props.height = 20; props.display = "block";
        expect(styles.oldIcon.width(props)).toBe('20px');
        expect(styles.oldIcon.height(props)).toBe('20px');
        expect(styles.oldIcon.display(props)).toBe('block');
    });

    it('returns the icon with a given color', () => {
        let props = { iconName: "testing" };
        expect(styles.oldIcon.background(props)).toBe('url(data:image/svg+xml;base64,dGVzdGluZyAtICMwMDA=)');
        expect(styles.oldIcon['&:hover'].background(props)).toBe(undefined);
        props.colors=['#f00']; props.hover=['#00f'];
        expect(styles.oldIcon.background(props)).toBe('url(data:image/svg+xml;base64,dGVzdGluZyAtICNmMDA=)');
        expect(styles.oldIcon['&:hover'].background(props)).toBe('url(data:image/svg+xml;base64,dGVzdGluZyAtICMwMGY=)');
    });

});
