import React from 'react';
import { shallow } from 'enzyme';
import AvatarContent from './AvatarContent';
import styles from './styles';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

describe("AvatarContent", () => {
    
    it('renders correctly', () => {
        const wrapper = shallow(
            <AvatarContent name="John Doe" classes={classes} />
        );
        expect(wrapper).toMatchSnapshot();
    });
    
    it('returns the first two capital letters of the name', () => {
        const wrapper = shallow(
            <AvatarContent name="John Doe" classes={classes} />
        );
        expect(wrapper.find('.capital span').text()).toEqual('JD');
    });
    
    it('shows the right gender icon', () => {
        const wrapper = shallow(
            <AvatarContent gender="m" classes={classes} />
        );
        expect(wrapper.find('.m').length).toBe(1);
        expect(wrapper.find('.f').length).toBe(0);
        wrapper.setProps({ gender: 'f' });
        expect(wrapper.find('.m').length).toBe(0);
        expect(wrapper.find('.f').length).toBe(1);
    });
    
});