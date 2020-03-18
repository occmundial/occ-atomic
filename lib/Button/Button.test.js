import React from 'react';
import { mount } from 'enzyme';
import Button from './Button';

describe('Button', () => {

    it('matches the snapshot', () => {
        const wrapper = mount(
            <Button>Button</Button>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('renders the children content', () => {
        const wrapper = mount(
            <Button>Button</Button>
        );
        expect(wrapper.text()).toEqual('Button');
    });

    it('returns a button', () => {
        const wrapper = mount(
            <Button>Button</Button>
        );
        expect(wrapper.find('button').length).toBe(1);
        expect(wrapper.find('a').length).toBe(0);
    });

    it('returns an anchor', () => {
        const wrapper = mount(
            <Button href="http://occ.com.mx">Button</Button>
        );
        expect(wrapper.find('button').length).toBe(0);
        expect(wrapper.find('a').length).toBe(1);
    });

    it('has the right theme', () => {
        let wrapper = mount(
            <Button>Button</Button>
        );
        expect(wrapper.find('button').prop('className').indexOf('primary')).not.toBe(-1);
        wrapper.setProps({ theme: 'secondary' });
        expect(wrapper.find('button').prop('className').indexOf('primary')).toBe(-1);
        expect(wrapper.find('button').prop('className').indexOf('secondary')).not.toBe(-1);
    });

    it('has the right size', () => {
        const wrapper = mount(
            <Button size="md">Button</Button>
        );
        expect(wrapper.find('button').prop('className').indexOf('md')).not.toBe(-1);
        expect(wrapper.find('button').prop('className').indexOf('lg')).toBe(-1);
        wrapper.setProps({size:'lg'});
        expect(wrapper.find('button').prop('className').indexOf('md')).toBe(-1);
        expect(wrapper.find('button').prop('className').indexOf('lg')).not.toBe(-1);
    });

    it('has the block class', () => {
        const wrapper = mount(
            <Button>Button</Button>
        );
        expect(wrapper.find('button').prop('className').indexOf('block')).toBe(-1);
        wrapper.setProps({block:true});
        expect(wrapper.find('button').prop('className').indexOf('block')).not.toBe(-1);
    });

    it('calls onClick function', () => {
        const onClick = jest.fn();
        const wrapper = mount(
            <Button onClick={onClick} disabled>Button</Button>
        );
        wrapper.simulate('click');
        expect(onClick.mock.calls.length).toBe(0);
        wrapper.setProps({disabled: false});
        wrapper.simulate('click');
        expect(onClick.mock.calls.length).toBe(1);
    });

    it('disabled', () => {
        const wrapper = mount(
            <Button disabled>Button</Button>
        );
        expect(wrapper.find('button').prop('className').indexOf('disabled')).not.toBe(-1);
    });

    it('has an icon', () => {
        const wrapper = mount(
            <Button icon="plus">Button</Button>
        );
        expect(wrapper.find('button span i').prop('className').indexOf('icon')).not.toBe(-1);
    });

    it('has an icon on the right', () => {
        const wrapper = mount(
            <Button iconRight="plus">Button</Button>
        );
        expect(wrapper.find('button span i').prop('className').indexOf('iconRight')).not.toBe(-1);
    });

    it('has a loaging icon', () => {
        const wrapper = mount(
            <Button loading>Button</Button>
        );
        expect(wrapper.find('button span i').prop('className').indexOf('load')).not.toBe(-1);
    });

});
