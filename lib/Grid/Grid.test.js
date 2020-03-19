import React from 'react';
import { mount } from 'enzyme';
import Grid from './Grid';

describe("Grid", () => {

	it('matches the snapshot', () => {
        const wrapper = mount(
            <Grid />
        );
        expect(wrapper.html()).toMatchSnapshot();
    });

	it('matches the snapshot with the fluid prop', () => {
        const wrapper = mount(
            <Grid fluid />
        );
        expect(wrapper.html()).toMatchSnapshot();
    });

});
