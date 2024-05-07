import React from 'react';
import { shallow, mount } from 'enzyme';
import Fab from './Fab';
import styles from './styles';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

describe('FAB', () => {
	it('matches the snapshot', () => {
		const wrapper = shallow(
			<Fab icon="testing" theme="primary" classes={classes} />
		);
		expect(wrapper).toMatchSnapshot();
	});

	it('returns a Button with an icon', () => {
		const wrapper = mount(<Fab classes={classes} icon="testing" />);
		expect(wrapper.find('button').length).toBe(1);
    expect(wrapper.find('button span Jss(Icon)').length).toBe(1);
		expect(wrapper.find('a').length).toBe(0);
	});

	it('returns an anchor', () => {
		const wrapper = mount(
			<Fab classes={classes} href="http://occ.com.mx" icon="testing" />
		);
		expect(wrapper.find('button').length).toBe(0);
		expect(wrapper.find('a').length).toBe(1);
	});

	it('has the right theme', () => {
		const wrapper = mount(<Fab classes={classes} icon="testing" />);
    expect(wrapper.find('button').prop('className').indexOf('Button-primary')).not.toBe(-1);
    wrapper.setProps({ theme: 'secondary' });
    expect(wrapper.find('button').prop('className').indexOf('Button-secondary')).not.toBe(-1);
	});

	it('has the right size', () => {
		const wrapper = mount(<Fab classes={classes} icon="testing" size="md" />);
		expect(wrapper.find('button').prop('className').indexOf('md')).not.toBe(-1);
		expect(wrapper.find('button').prop('className').indexOf('lg')).toBe(-1);
		wrapper.setProps({ size: 'lg' });
		expect(wrapper.find('button').prop('className').indexOf('md')).toBe(-1);
		expect(wrapper.find('button').prop('className').indexOf('lg')).not.toBe(-1);
	});
});
