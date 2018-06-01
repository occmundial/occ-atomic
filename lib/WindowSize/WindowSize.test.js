import React from 'react';
import { shallow } from 'enzyme';
import WindowSize from './WindowSize';
import Button from '../Button';

describe("WindowSize", () => {

    it('matches the snapshot', () => {
        
        const Component = WindowSize(<Button>Button</Button>);
        
        const wrapper = shallow(
            <Component />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('sets the size as medium', () => {
        
        const Component = WindowSize(<Button>Button</Button>);
        
        const wrapper = shallow(
            <Component />
        );
        expect(wrapper.prop('size')).toEqual('md');
    });

});