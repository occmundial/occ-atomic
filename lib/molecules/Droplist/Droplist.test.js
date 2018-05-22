import React from 'react';
import { shallow } from 'enzyme';
import Droplist from './Droplist';
import styles from './styles';
import DroplistJSS from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

describe("Droplist", () => {

    it('matches the snapshot', () => {
        const items = [
            {
                text: 'Administrador',
                textRight: '(222)'
            },
            {
                text: 'Administrador Sr',
                textRight: '(134)'
            },
            {
                text: 'Administrador Jr',
                textRight: '(52)'
            },
            {
                text: 'Administrar',
                textRight: '(6)'
            },
        ];
        const wrapper = shallow(
            <Droplist items={items} itemTextKey="text" itemTextRightKey="textRight" itemIdKey="text" classes={classes} />
        );
        expect(wrapper).toMatchSnapshot();
    });

});

describe("DroplistJSS", () => {

    it('matches the snapshot', () => {
        const items = [
            {
                text: 'Administrador',
                textRight: '(222)'
            },
            {
                text: 'Administrador Sr',
                textRight: '(134)'
            },
            {
                text: 'Administrador Jr',
                textRight: '(52)'
            },
            {
                text: 'Administrar',
                textRight: '(6)'
            },
        ];
        const wrapper = shallow(
            <DroplistJSS items={items} itemTextKey="text" itemTextRightKey="textRight" itemIdKey="text" />
        );
        expect(wrapper).toMatchSnapshot();
    });

});

describe("Droplist styles", () => {

    it('matches the snapshot', () => {
        expect(styles).toMatchSnapshot();
    });

});