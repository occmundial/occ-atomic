import React from 'react';
import { shallow } from 'enzyme';
import Visible from './Visible';

describe("Visible", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <Visible xs><div>Text</div></Visible>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('shows content in xs', () => {
        const wrapper = shallow(
            <Visible xs><div>Text</div></Visible>
        );
        wrapper.setState({width:1200});
        expect(wrapper.find('div').length).toBe(0);
        wrapper.setState({width:500});
        expect(wrapper.find('div').text()).toEqual('Text');
    });

});