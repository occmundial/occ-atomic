import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';
import styles from './styles';
import MenuJSS from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

const buttons = [
    { id: 'item1', href:'#', label:'Item 1' },
    { id: 'item2', href:'#', label:'Item 2' },
    { id: 'item3', href:'#', label:'Item 3' },
    "separator",
    { id: 'item4', href:'#', label:'Item 4', type:'signOut' }
];

describe("Menu", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <Menu classes={classes} buttons={buttons} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('renders the label', () => {
        const wrapper = shallow(
            <Menu classes={classes} label="Menu" buttons={buttons} />
        );
        expect(wrapper.find('.label').text()).toBe('Menu');
    });

    it('toggles the menu', () => {
        const propagation = jest.fn();
        const wrapper = shallow(
            <Menu classes={classes} buttons={buttons} />
        );
        expect(wrapper.find('.dropdownMenu').hasClass('dropdownMenuOpen')).toBe(false);
        wrapper.find('.btnMenu').simulate('click', {stopPropagation: propagation});
        expect(wrapper.find('.dropdownMenu').hasClass('dropdownMenuOpen')).toBe(true);
    });

    it('renders all the items', () => {
        const wrapper = shallow(
            <Menu classes={classes} buttons={buttons} />
        );
        expect(wrapper.find('li').length).toBe(5);
    });

    it('renders a separator', () => {
        const wrapper = shallow(
            <Menu classes={classes} buttons={buttons} />
        );
        expect(wrapper.find('li').at(3).hasClass('separator')).toBe(true);
    });

    it('renders a button to sign out', () => {
        const wrapper = shallow(
            <Menu classes={classes} buttons={buttons} />
        );
        expect(wrapper.find('li').at(4).find('a').hasClass('signOut')).toBe(true);
    });

});

describe("MenuJSS", () => {

    it('matches the snapshot', () => {
        const buttons = [
            {
                id: 'item1',
                href:'http://occ.com.mx',
                label:'Item 1'
            }
        ];
        const wrapper = shallow(
            <MenuJSS buttons={buttons} />
        );
        expect(wrapper).toMatchSnapshot();
    });

});

describe("Menu styles", () => {

    it('matches the snapshot', () => {
        expect(styles).toMatchSnapshot();
    });

});