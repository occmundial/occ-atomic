import React from 'react';
import { mount } from 'enzyme';
import Row from './Row';

describe("Row", () => {

    it('matches the snapshot', () => {
        const wrapper = mount(
            <Row />
        );
        expect(wrapper.html()).toMatchSnapshot();
    });

});
