import React from 'react';
import { shallow } from 'enzyme';
import Text from './Text';
import styles from './styles';
import TextJSS from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

describe("Text", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <Text classes={classes}>Text</Text>
        );
        expect(wrapper).toMatchSnapshot();
    });
    
    it('has the correct size style', () => {
        const wrapper = shallow(
            <Text hero classes={classes}>Text</Text>
        );
        expect(wrapper.find('.h1').length).toBe(1);
    });
    
    it('has a default color style', () => {
        const wrapper = shallow(
            <Text classes={classes}>Text</Text>
        );
        expect(wrapper.find('.corpPrimary').length).toBe(1);
    });
    
    it('has the correct color style', () => {
        const wrapper = shallow(
            <Text primary classes={classes}>Text</Text>
        );
        expect(wrapper.find('.indigoPrimary').length).toBe(1);
    });
    
    it('has the correct align style', () => {
        const wrapper = shallow(
            <Text center classes={classes}>Text</Text>
        );
        expect(wrapper.find('.center').length).toBe(1);
    });
    
    it('has the correct spacing style', () => {
        const wrapper = shallow(
            <Text topTiny bottomLarge classes={classes}>Text</Text>
        );
        expect(wrapper.find('.top2').length).toBe(1);
        expect(wrapper.find('.bottom8').length).toBe(1);
    });

    it('has the correct html tag', () => {
        const wrapper = shallow(
            <Text tag="h3" classes={classes}>Text</Text>
        );
        expect(wrapper.find('h3').length).toBe(1);
    });

});

describe("TextJSS", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <TextJSS>Text</TextJSS>
        );
        expect(wrapper).toMatchSnapshot();
    });

});

describe("Text styles", () => {

    it('matches the snapshot', () => {
        expect(styles).toMatchSnapshot();
    });

});