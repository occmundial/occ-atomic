import React from 'react';
import { shallow } from 'enzyme';
import Tooltip from './Tooltip';
import styles from './styles';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

describe('Tooltip', () => {
	it('matches the snapshot', () => {
		const wrapper = shallow(
			<Tooltip text="test" open theme="dark" classes={classes} />
		);
		expect(wrapper.html()).toMatchSnapshot();
	});
});

describe('Tooltip styles', () => {
	it('matches the snapshot', () => {
		expect(styles).toMatchSnapshot();
	});
});
