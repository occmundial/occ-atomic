import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import styles from './styles';
import FooterJSS from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

const buttons = [
    { id:'item1', href:'#', label:'Item 1' },
    { id:'item2', href:'#', label:'Item 2' },
    { id:'item3', label:'Item 3',
        sub: { id:'item3sub',
            items: [
                { id:'subitem1', href:'#', label:'Sub-item 1'},
                { id:'subitem2', href:'#', label:'Sub-item 2'}
            ]
        }
    },
    { id:'item4', href:'#', label:'Item 4' },
];

describe("Footer", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <Footer buttons={buttons} classes={classes} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('renders all the items', () => {
        const wrapper = shallow(
            <Footer buttons={buttons} classes={classes} />
        );
        expect(wrapper.find('.listElement').length).toBe(4);
    });

    it('renders a sub-menu', () => {
        const wrapper = shallow(
            <Footer buttons={buttons} classes={classes} />
        );
        expect(wrapper.find('#item3sub').length).toBe(1);
        expect(wrapper.find('#item3sub li').length).toBe(2);
    });

    it('shows and hides the sub-menu', () => {
        // Problemas para testear jquery
    });

});

describe("FooterJSS", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <FooterJSS buttons={buttons} />
        );
        expect(wrapper).toMatchSnapshot();
    });

});

describe("Footer styles", () => {

    it('matches the snapshot', () => {
        expect(styles).toMatchSnapshot();
    });

});