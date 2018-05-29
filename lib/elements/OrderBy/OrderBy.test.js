import React from 'react';
import { shallow, mount } from 'enzyme';
import OrderBy from './OrderBy';
import styles from './styles';
import OrderByJSS from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

const options = [
    {
        value: 1,
        text: 'Option 1'
    },
    {
        value: 2,
        text: 'Option 2,'
    }
];

describe("OrderBy", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <OrderBy classes={classes} options={options} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('shows the text', () => {
        const wrapper = shallow(
            <OrderBy classes={classes} options={options} text="Text" />
        );
        expect(wrapper.find('span').text()).toEqual('Text');
    });

    it('renders all the options', () => {
        const wrapper = shallow(
            <OrderBy classes={classes} options={options} />
        );
        expect(wrapper.find('option').length).toBe(2);
    });

    it('sets a value', () => {
        const wrapper = shallow(
            <OrderBy classes={classes} options={options} value={2} />
        );
        expect(wrapper.find('select').props().value).toBe(2);
    });

    it('calls onChange function', () => {
        const onChange = jest.fn();
        const wrapper = mount(
            <OrderBy classes={classes} options={options} onChange={onChange} />
        );
        wrapper.find('select').simulate('change');
        expect(onChange.mock.calls.length).toBe(1);
    });

});

describe("OrderByJSS", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <OrderByJSS options={options} />
        );
        expect(wrapper).toMatchSnapshot();
    });

});

describe("OrderBy styles", () => {

    it('matches the snapshot', () => {
        expect(styles).toMatchSnapshot();
    });

});