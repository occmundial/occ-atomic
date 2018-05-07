import React from 'react';
import { shallow } from 'enzyme';
import Hidden from './Hidden';

describe("Hidden", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <Hidden xs><div>Text</div></Hidden>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('hides content in xs', () => {
        const wrapper = shallow(
            <Hidden xs><div>Text</div></Hidden>
        );
        wrapper.setState({width:1200});
        expect(wrapper.find('div').text()).toEqual('Text');
        wrapper.setState({width:500});
        expect(wrapper.find('div').length).toBe(0);
    });

});