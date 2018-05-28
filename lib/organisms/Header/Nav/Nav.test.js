import React from 'react';
import { shallow } from 'enzyme';
import Nav from './Nav';
import styles from './styles';
import NavJSS from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

const buttons = [
    { id: 'item1', icon:'dashboard', label:'Item 1' },
    { id: 'item2', icon:'publications', label:'Item 2' },
    { id: 'item3', icon:'talent', label:'Item 3' }
]

describe("Nav", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <Nav classes={classes} buttons={buttons} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('renders all the buttons', () => {
        const wrapper = shallow(
            <Nav classes={classes} buttons={buttons} />
        );
        expect(wrapper.find('li').length).toBe(3);
    });

    it('calls the onClick function', () => {
        const onClick = jest.fn();
        const wrapper = shallow(
            <Nav classes={classes} navigate={onClick} buttons={buttons} />
        );
        wrapper.find('li').at(1).simulate('click');
        expect(onClick.mock.calls.length).toBe(1);
    });

    it('sets an active button', () => {
        const wrapper = shallow(
            <Nav classes={classes} active="item1" buttons={buttons} />
        );
        expect(wrapper.find('li').at(0).hasClass('activeItem')).toBe(true);
    });

});

describe("NavJSS", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <NavJSS buttons={buttons} />
        );
        expect(wrapper).toMatchSnapshot();
    });

});

describe("Nav styles", () => {

    it('matches the snapshot', () => {
        expect(styles).toMatchSnapshot();
    });

});