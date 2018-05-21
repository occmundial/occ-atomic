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

    it('renders the LayerApp with the right theme', () => {
        const wrapper = shallow(
            <LayerApp classes={classes} />
        );
        expect(wrapper.find('.layerApp').hasClass('blue')).toEqual(true);
        wrapper.setProps({theme:'white'});
        expect(wrapper.find('.layerApp').hasClass('white')).toEqual(true);
    });

    it('renders the child content', () => {
        const wrapper = shallow(
            <LayerApp classes={classes}>Child content</LayerApp>
        );
        expect(wrapper.find('.content').text()).toEqual('Child content');
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