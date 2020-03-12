import React from 'react';
import { mount } from 'enzyme';
import Avatar from './Avatar';


describe('Avatar', () => {

    it('matches the snapshot', () => {
        const wrapper = mount(
            <Avatar name="John Doe" />
        );
        expect(wrapper.html()).toMatchSnapshot();
        wrapper.setProps({ name: '', gender: 'f' });
        expect(wrapper.html()).toMatchSnapshot();
        wrapper.setProps({ gender: null, photo: 'http://photo.url' });
        expect(wrapper.html()).toMatchSnapshot();
    });

});
