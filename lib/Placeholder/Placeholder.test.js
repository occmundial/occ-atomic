import React from 'react';
import { shallow } from 'enzyme';

import Placeholder from './Placeholder';
import styles from './styles';
import PlaceholderJSS from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });
const classes = Object.keys(styles).reduce(reduceClasses, {});

describe('Placeholder', () => {
	it('matches the snapshot', () => {
		const wrapper = shallow(<Placeholder classes={classes} />);
		expect(wrapper).toMatchSnapshot();
	});

	it('has the right classNames', () => {
		const wrapper = shallow(<Placeholder classes={classes} />);
		expect(wrapper.prop('className')).toBe('placeholder light  ');
		wrapper.setProps({ textSize: 'headline' });
		expect(wrapper.prop('className')).toBe('placeholder light  h2 ');
		wrapper.setProps({ top: 'tiny' });
		expect(wrapper.prop('className')).toBe('placeholder light  h2 toptiny  ');
		wrapper.setProps({ bottom: 'small' });
		expect(wrapper.prop('className')).toBe('placeholder light  h2 toptiny  bottomsmall ');
	});
});

describe("PlaceholderJSS", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <PlaceholderJSS />
        );
        expect(wrapper).toMatchSnapshot();
    });

});

describe("Placeholder styles", () => {

    it('matches the snapshot', () => {
        expect(styles).toMatchSnapshot();
    });

});
