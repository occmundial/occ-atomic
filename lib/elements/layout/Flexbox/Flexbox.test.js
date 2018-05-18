import React from 'react';
import { shallow } from 'enzyme';
import Flexbox from './Flexbox';
import styles from './styles';
import FlexboxJSS from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

describe("Flexbox", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <Flexbox display="flex" classes={classes} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('matches the classes', () => {
        const wrapper = shallow(
            <Flexbox display="flex" direction="col" justifyContent="center" alignItems="start" alignContent="end" classes={classes} />
        );
        expect(wrapper.find('div').prop('className')).toEqual('flex col jcenter astart cend');
    });

});

describe("FlexboxJSS", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <FlexboxJSS />
        );
        expect(wrapper).toMatchSnapshot();
    });

});