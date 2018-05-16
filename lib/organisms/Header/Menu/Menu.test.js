import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';
import styles from './styles';
import MenuJSS from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

describe("Menu", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <Menu classes={classes} config={{}} recruiterData={{isadmin: true, typeaccount:'OCC', levelaccount:'Administrator'}} properties={[{propdescription:'AccesoVersionAnterior'}]} />
        );
        expect(wrapper).toMatchSnapshot();
    });

});

describe("MenuJSS", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <MenuJSS config={{}} recruiterData={{isadmin: true, typeaccount:'OCC', levelaccount:'Administrator'}} properties={[{propdescription:'AccesoVersionAnterior'}]} />
        );
        expect(wrapper).toMatchSnapshot();
    });

});