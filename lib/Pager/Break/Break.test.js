import React from 'react';
import { mount } from 'enzyme';
import Break from './Break';

describe("Break", () => {

    it('matches the snapshot', () => {
        const wrapper = mount(<Break />);
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders the li', () => {
        const wrapper = mount(<Break />);
        expect(wrapper.find('li').length).toBe(1);
    });

    it('renders the label content', () => {
        const wrapper = mount(<Break label="..." />);
        expect(wrapper.find('li').text()).toEqual('...');
    });

});
