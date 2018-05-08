import React from 'react';
import { shallow } from 'enzyme';
import ButtonAlign from './ButtonAlign';
import styles from './styles';
import ButtonAlignJSS from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

describe("ButtonAlign", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <ButtonAlign classes={classes} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('has the right size', () => {
        const wrapper = shallow(
            <ButtonAlign classes={classes} />
        );
        expect(wrapper.prop('className')).toEqual('sm');
        wrapper.setProps({size:'md'});
        expect(wrapper.prop('className')).toEqual('md');
    });

});

describe("ButtonAlignJSS", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <ButtonAlignJSS />
        );
        expect(wrapper).toMatchSnapshot();
    });

});