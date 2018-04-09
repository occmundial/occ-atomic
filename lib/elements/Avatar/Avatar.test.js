import React from 'react';
import { shallow } from 'enzyme';
import Avatar from './Avatar';
import styles from './styles';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

describe("Avatar", () => {
    it('renders correctly', () => {
        const wrapper = shallow(
            <Avatar name="John Doe" classes={classes} />
        );
        expect(wrapper).toMatchSnapshot();
    });
});