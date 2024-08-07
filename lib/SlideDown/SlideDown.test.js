import React from 'react';
import { shallow, mount } from 'enzyme';
import SlideDown from './SlideDown';
import styles from './styles';
import SlideDownJSS from './index';
import Text from '../Text';
import Icon from '../Icon';
import colors from '../tokens/colors.json';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

describe('SlideDown', () => {
	it('matches the snapshot', () => {
		const wrapper = shallow(<SlideDown classes={classes} title="Title" />);
		expect(wrapper).toMatchSnapshot();
	});

	it('shows the title', () => {
		const wrapper = mount(<SlideDown title="Title" classes={classes} />);
		expect(wrapper.find('label').at(0).text()).toEqual('Title');
	});

	it('rotates the arrow icon', () => {
		const wrapper = mount(
			<SlideDown expanded classes={classes} title="Title" testId="slidedown-test"/>
		);
		
		expect(wrapper.find('Icon .rotateIcon').length).toBe(1)
		wrapper.find({ "data-testid": 'slidedown-test'}).simulate('click', {
			stopPropagation: () => {}
		});
		expect(wrapper.find('Icon .rotateIcon').length).toBe(0)
	});

	it('shows a Tag on the title', () => {
		const wrapper = mount(<SlideDown classes={classes} title="Title" />);
		wrapper.setProps({ tag: 'Tag text' });
		expect(wrapper.find('label').at(1).text()).toBe('Tag text');
	});

	it('renders the child content', () => {
		const wrapper = shallow(
			<SlideDown classes={classes} title="Title" testId="slidedown-test">
				Children content
			</SlideDown>
		);
		expect(wrapper.find('.showContent').length).toBe(0);

		wrapper.find({ "data-testid": 'slidedown-test'}).simulate('click', {
			stopPropagation: () => {}
		});

		expect(wrapper.find('.showContent').length).toBe(1);
		expect(wrapper.find('.showContent').text()).toEqual('Children content');
	});

	it('Text have the right properties', () => {
		const wrapper = shallow(
			<SlideDown classes={classes} textSize={'lg'} title="Title">
				Children content
			</SlideDown>
		);
		expect(wrapper.find(Text).props().extraLarge).toEqual(true);
	});

	it('Text and Icon has theme color', () => {
		const wrapper = shallow(
			<SlideDown classes={classes} title="Title">
				Children content
			</SlideDown>
		);
		expect(wrapper.find(Icon).props().colors).toEqual([colors.icon.default.bold]);
		expect(wrapper.find(Text).props().primary).toBeFalsy();
		wrapper.setProps({ theme: 'blue' });
		expect(wrapper.find(Text).props().primary).toEqual(true);
		expect(wrapper.find(Icon).props().colors).toEqual([colors.icon.brand.default]);
	});

	it('render a custom title', () => {
		const wrapper = mount(
			<SlideDown
				customTitle={
					<div data-testid="custom-title" style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
						<p style={{ margin: 0 }}>
							Custom <b>SlideDown</b> Title
						</p>
						<Icon iconName="search" width={16} height={16} />
					</div>
				}
				title="This title should not render"
				classes={classes}>
				Children content
			</SlideDown>
		);
		expect(wrapper.find({ "data-testid": 'custom-title'}).exists()).toEqual(true)
		expect(wrapper.find('label').exists()).toEqual(false)
	});
});

describe('SlideDownJSS', () => {
	it('matches the snapshot', () => {
		const wrapper = shallow(<SlideDownJSS />);
		expect(wrapper).toMatchSnapshot();
	});
});

describe('SlideDown styles', () => {
	it('matches the snapshot', () => {
		expect(styles).toMatchSnapshot();
	});
});
