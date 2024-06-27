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

    it('returns the right width and height', () => {
        const wrapper = shallow(
            <AvatarJSS name="John Doe" size={50} />
        );
        const styles = wrapper.dive().props().style;
        expect(styles.width).toBe(50);
        expect(styles.height).toBe(50);
        wrapper.setProps({
            size: 70
        });
        const styles2 = wrapper.dive().props().style;
        expect(styles2.width).toBe(70);
        expect(styles2.height).toBe(70);
    });
});

describe("Avatar styles", () => {
    it('matches the snapshot', () => {
        expect(styles).toMatchSnapshot();
    });
});