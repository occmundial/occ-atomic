import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';
import styles from './styles';
import MenuJSS from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

describe("Menu", () => {

    it('matches the snapshot', () => {
        const buttons = [
            {
                id: 'item1',
                href:'http://occ.com.mx',
                label:'Item 1'
            }
        ];
        const wrapper = shallow(
            <Menu classes={classes} buttons={buttons} />
        );
        expect(wrapper).toMatchSnapshot();
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