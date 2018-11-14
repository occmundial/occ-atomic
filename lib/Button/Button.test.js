import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';
import styles from './styles';
import ButtonJSS from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

describe("Button", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <Button classes={classes}>Button</Button>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('renders the children content', () => {
        const wrapper = shallow(
            <Button classes={classes}>Button</Button>
        );
        expect(wrapper.text()).toEqual('Button');
    });

    it('returns a button', () => {
        const wrapper = shallow(
            <Button classes={classes}>Button</Button>
        );
        expect(wrapper.find('button').length).toBe(1);
        expect(wrapper.find('a').length).toBe(0);
    });

    it('returns an anchor', () => {
        const wrapper = shallow(
            <Button classes={classes} href="http://occ.com.mx">Button</Button>
        );
        expect(wrapper.find('button').length).toBe(0);
        expect(wrapper.find('a').length).toBe(1);
    });

    it('has the right theme', () => {
        const wrapper = shallow(
            <Button classes={classes}>Button</Button>
        );
        expect(wrapper.find('button').prop('className')).toEqual('btn primary');
        wrapper.setProps({theme:'secondary'});
        expect(wrapper.find('button').prop('className')).toEqual('btn secondary');
    });

    it('has the right size', () => {
        const wrapper = shallow(
            <Button classes={classes} size="md">Button</Button>
        );
        expect(wrapper.find('button').prop('className').indexOf('md')).not.toBe(-1);
        expect(wrapper.find('button').prop('className').indexOf('lg')).toBe(-1);
        wrapper.setProps({size:'lg'});
        expect(wrapper.find('button').prop('className').indexOf('md')).toBe(-1);
        expect(wrapper.find('button').prop('className').indexOf('lg')).not.toBe(-1);
    });

    it('has the block class', () => {
        const wrapper = shallow(
            <Button classes={classes}>Button</Button>
        );
        expect(wrapper.find('button').prop('className').indexOf('block')).toBe(-1);
        wrapper.setProps({block:true});
        expect(wrapper.find('button').prop('className').indexOf('block')).not.toBe(-1);
    });

    it('calls onClick function', () => {
        const onClick = jest.fn();
        const wrapper = shallow(
            <Button classes={classes} onClick={onClick} disabled>Button</Button>
        );
        wrapper.simulate('click');
        expect(onClick.mock.calls.length).toBe(0);
        wrapper.setProps({disabled: false});
        wrapper.simulate('click');
        expect(onClick.mock.calls.length).toBe(1);
    });

    it('disabled', () => {
        const wrapper = shallow(
            <Button classes={classes} disabled>Button</Button>
        );
        expect(wrapper.find('button').prop('className').indexOf('disabled')).not.toBe(-1);
    });

    it('has an icon', () => {
        const wrapper = shallow(
            <Button classes={classes} icon="plus">Button</Button>
        );
        expect(wrapper.find('button span i').prop('className').indexOf('icon')).not.toBe(-1);
    });

    it('has a loaging icon', () => {
        const wrapper = shallow(
            <Button classes={classes} loading>Button</Button>
        );
        expect(wrapper.find('button span i').prop('className').indexOf('load')).not.toBe(-1);
    });

});

describe("ButtonJSS", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <ButtonJSS />
        );
        expect(wrapper).toMatchSnapshot();
    });

});

describe("Button styles", () => {

    it('matches the snapshot', () => {
        expect(styles).toMatchSnapshot();
    });

    it('returns the right icons', () => {
        let props = {icon:'testing'};
        expect(styles.primary['& i'].background(props)).toBe('url(data:image/svg+xml;base64,dGVzdGluZyAtICNmZmZmZmY=)');
        expect(styles.secondary['& i'].background(props)).toBe('url(data:image/svg+xml;base64,dGVzdGluZyAtICNmMTM0NjU=)');
        expect(styles.secondary['&:hover, &:active']['& i'].background(props)).toBe('url(data:image/svg+xml;base64,dGVzdGluZyAtICNjYzFiNGE=)');
        expect(styles.tertiary['& i'].background(props)).toBe('url(data:image/svg+xml;base64,dGVzdGluZyAtICMyMjIyMjI=)');
        expect(styles.tertiary['&:hover, &:active']['& i'].background(props)).toBe('url(data:image/svg+xml;base64,dGVzdGluZyAtICM3Nzc3Nzc=)');
        expect(styles.ghostPink['& i'].background(props)).toBe('url(data:image/svg+xml;base64,dGVzdGluZyAtICNmMTM0NjU=)');
        expect(styles.ghostPink['&:hover, &:active']['& i'].background(props)).toBe('url(data:image/svg+xml;base64,dGVzdGluZyAtICNjYzFiNGE=)');
        expect(styles.ghostGrey['& i'].background(props)).toBe('url(data:image/svg+xml;base64,dGVzdGluZyAtICMyMjIyMjI=)');
        expect(styles.ghostGrey['&:hover, &:active']['& i'].background(props)).toBe('url(data:image/svg+xml;base64,dGVzdGluZyAtICM3Nzc3Nzc=)');
        expect(styles.ghostWhite['& i'].background(props)).toBe('url(data:image/svg+xml;base64,dGVzdGluZyAtICNmZmZmZmY=)');
        expect(styles.disabled['& i'].background(props)).toBe('url(data:image/svg+xml;base64,dGVzdGluZyAtICNmZmZmZmY=)');
    });

});
