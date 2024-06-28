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
    
    it('returns the first two initial letters of the name', () => {
        const wrapper = shallow(
            <AvatarContent name="John Doe" classes={classes} />
        );
        expect(wrapper.find('.initials').text()).toEqual('JD');
    });
    
    it('renders the photo as a background', () => {
        const wrapper = shallow(
            <AvatarContent photo="http://placehold.it/70x70" classes={classes} />
        );
        expect(wrapper.find('.cont').prop('style')).toHaveProperty('background', "url('http://placehold.it/70x70') no-repeat center center / cover");
    });
    
    it('changes the font size', () => {
        const wrapper = shallow(
            <AvatarContent name="John Doe" size={50} classes={classes} />
        );
        const styles = wrapper.find('.initials').prop('style');
        expect(styles).toHaveProperty('transform', 'scale(1.25)');
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