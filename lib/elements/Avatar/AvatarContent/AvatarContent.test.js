import React from 'react';
import { shallow } from 'enzyme';
import AvatarContent from './AvatarContent';
import styles from './styles';
import AvatarContentJSS from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

describe("AvatarContent", () => {
    
    it('matches the snapshot', () => {
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
    
    it('renders the photo as a background', () => {
        const wrapper = shallow(
            <AvatarContent photo="http://placehold.it/70x70" classes={classes} />
        );
        expect(wrapper.find('.cont').prop('style')).toHaveProperty('background', "url('http://placehold.it/70x70') no-repeat center center / cover")
    });
    
    it('changes the font size', () => {
        const wrapper = shallow(
            <AvatarContent name="John Doe" size={50} classes={classes} />
        );
        const styles = wrapper.find('.capital').prop('style');
        expect(styles).toHaveProperty('fontSize', '20px');
        expect(styles).toHaveProperty('lineHeight', '50px');
    });
    
});

describe("AvatarContentJSS", () => {
    
    it('matches the snapshot', () => {
        const wrapper = shallow(
            <AvatarContentJSS name="John Doe" />
        );
        expect(wrapper).toMatchSnapshot();
    });
});

describe("AvatarContent styles", () => {

    it('matches the snapshot', () => {
        expect(styles).toMatchSnapshot();
    });

});