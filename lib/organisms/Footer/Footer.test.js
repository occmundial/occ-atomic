import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import styles from './styles';
import FooterJSS from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

describe("Footer", () => {

    it('matches the snapshot', () => {
        const buttons = [
            {
                id: 'item1',
                href:'http://occ.com.mx',
                label:'Item 1'
            }
        ];
        const wrapper = shallow(
            <Footer buttons={buttons} classes={classes} />
        );
        expect(wrapper).toMatchSnapshot();
    });

});

describe("FooterJSS", () => {

    it('matches the snapshot', () => {
        const buttons = [
            {
                id: 'item1',
                href:'http://occ.com.mx',
                label:'Item 1'
            }
        ];
        const wrapper = shallow(
            <FooterJSS buttons={buttons} />
        );
        expect(wrapper).toMatchSnapshot();
    });

});