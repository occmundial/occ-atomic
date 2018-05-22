import React from 'react';
import { shallow } from 'enzyme';
import Autocomplete from './Autocomplete';
import styles from './styles';
import AutocompleteJSS from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

describe("Autocomplete", () => {

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
            <Autocomplete items={items} classes={classes} />
        );
        expect(wrapper).toMatchSnapshot();
    });

});

describe("AutocompleteJSS", () => {

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
            <AutocompleteJSS items={items} />
        );
        expect(wrapper).toMatchSnapshot();
    });

});

describe("Autocomplete styles", () => {

    it('matches the snapshot', () => {
        expect(styles).toMatchSnapshot();
    });

});