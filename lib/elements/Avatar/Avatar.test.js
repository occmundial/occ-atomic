import React from 'react';
import { shallow } from 'enzyme';
import Avatar from './Avatar';
import styles from './styles';
import AvatarJSS from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

describe("Avatar", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <Avatar name="John Doe" classes={classes} />
        );
        expect(wrapper).toMatchSnapshot();
    });

});

describe("AvatarJSS", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <AvatarJSS name="John Doe" />
        );
        expect(wrapper).toMatchSnapshot();
    });

});

describe("Avatar styles", () => {

    it('matches the snapshot', () => {
        expect(styles).toMatchSnapshot();
    });
    
    it('returns the right width and height', () => {
        let props = {};
        expect(styles.circle.width(props)).toBe(70);
        expect(styles.circle.height(props)).toBe(70);
        props.size = 50;
        expect(styles.circle.width(props)).toBe(50);
        expect(styles.circle.height(props)).toBe(50);
    });

});