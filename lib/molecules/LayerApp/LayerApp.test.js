import React from 'react';
import { shallow } from 'enzyme';
import LayerApp from './LayerApp';
import styles from './styles';
import LayerAppJSS from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

describe("LayerApp", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <LayerApp classes={classes} />
        );
        expect(wrapper).toMatchSnapshot();
    });

});

describe("LayerAppJSS", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <LayerAppJSS />
        );
        expect(wrapper).toMatchSnapshot();
    });

});