import React from 'react';
import { shallow } from 'enzyme';
import Droplist from './Droplist';
import styles from './styles';
import DroplistJSS from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

const items = [
    { text: 'Administrador', textRight: '(222)', id:1 },
    { text: 'Administrador Sr', textRight: '(134)', id:2 },
    { text: 'Administrador Jr', textRight: '(52)', id:3 },
    { text: 'Administrar', textRight: '(6)', id:4 },
];

const items2 = [
    { text: 'Países', id:'1',
        items: [
            { text: 'México', textRight: '(3405)', key: 'MX', type: 'CO', id:'1.1' }
        ]
    },
    { text: 'Estados', id:'2',
        items: [
            { text: 'Querétaro', textRight: '(222)', key: 'QRO', type: 'ST', id:'2.1' },
            { text: 'Estado de México', textRight: '(225)', key: 'EMX', type: 'ST', id:'2.2' }
        ]
    },
    { text: 'Ciudades', id:'3',
        items: [
            { text: 'Santiago de Querétaro', textRight: '(102)', key: 'QRO2', type: 'CY', id:'3.1' }
        ]
    }    
];

describe("Droplist", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <Droplist items={items} classes={classes} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('returns the right number of items', () => {
        const wrapper = shallow(
            <Droplist items={items} classes={classes} />
        );
        expect(wrapper.find('.item').length).toBe(4);
    });

    it('returns the right number of groups and its items', () => {
        const wrapper = shallow(
            <Droplist items={items2} groups classes={classes} />
        );
        expect(wrapper.find('.groupCon').length).toBe(3);
        expect(wrapper.find('.groupCon').at(0).find('.item').length).toBe(1);
        expect(wrapper.find('.groupCon').at(1).find('.item').length).toBe(2);
        expect(wrapper.find('.groupCon').at(2).find('.item').length).toBe(1);
    });

    it('renders the item correctly', () => {
        const wrapper = shallow(
            <Droplist items={items} itemIdKey="id" classes={classes} />
        );
        expect(wrapper.find('.item').at(0).text()).toBe('Administrador(222)');
    });

    it('renders the group and sub-item correctly', () => {
        const wrapper = shallow(
            <Droplist items={items2} groups groupIdKey="id" itemIdKey="id" classes={classes} />
        );
        expect(wrapper.find('.groupCon').at(0).text()).toBe('PaísesMéxico(3405)');
    });

    it('filters the items', () => {
        const wrapper = shallow(
            <Droplist items={items} itemIdKey="id" classes={classes} />
        );
        expect(wrapper.find('.item').length).toBe(4);
        wrapper.setState({term:'Administrador'});
        expect(wrapper.find('.item').length).toBe(3);
    });

    it('highlights the matching part of the items', () => {
        const wrapper = shallow(
            <Droplist items={items} itemIdKey="id" classes={classes} />
        );
        expect(wrapper.find('.item').at(0).find('.bold').text()).toBe('');
        wrapper.setState({term:'Administrador'});
        expect(wrapper.find('.item').at(0).find('.bold').text()).toBe('Administrador');
    });

    it('calls the onClick function', () => {
        const onClick = jest.fn();
        const wrapper = shallow(
            <Droplist items={items} itemIdKey="id" onClick={onClick} classes={classes} />
        );
        wrapper.find('.item').at(0).simulate('click', {stopPropagation: jest.fn()});
        expect(onClick.mock.calls.length).toBe(1);
    });

});

describe("DroplistJSS", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <DroplistJSS items={items} />
        );
        expect(wrapper).toMatchSnapshot();
    });

});

describe("Droplist styles", () => {

    it('matches the snapshot', () => {
        expect(styles).toMatchSnapshot();
    });

});