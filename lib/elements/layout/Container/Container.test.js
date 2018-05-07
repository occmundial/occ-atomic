import React from 'react';
import { shallow } from 'enzyme';
import Container from './Container';
import styles from './styles';
import ContainerJSS from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

describe("Container", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <Container classes={classes} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('renders a regular container', () => {
        const wrapper = shallow(
            <Container classes={classes} />
        );
        expect(wrapper.find('div').prop('className')).toEqual('con');
    });

    it('renders a fluid container', () => {
        const wrapper = shallow(
            <Container classes={classes} fluid />
        );
        expect(wrapper.find('div').prop('className')).toEqual('conFluid');
    });

});

describe("ContainerJSS", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <ContainerJSS />
        );
        expect(wrapper).toMatchSnapshot();
    });

});