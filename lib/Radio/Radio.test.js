import React from 'react';
import { shallow } from 'enzyme';
import Radio from './Radio';
import styles from './styles';
import RadioJSS from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

const options = [
    {value:1, label:'Option 1'},
    {value:2, label:'Option 2'},
    {value:3, label:'Option 3'}
];

describe("Radio", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <Radio classes={classes} options={options} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('has the right state', () => {
        const wrapper = shallow(
            <Radio classes={classes} options={options} selected={3} />
        );
        expect(wrapper.find('.cont').at(0).prop('className')).toEqual('cont');
        wrapper.setState({selected: 1});
        expect(wrapper.find('.cont').at(0).prop('className')).toEqual('cont active');
    });
    it('disables options', () => {
        const options2 = [
            {value:1, label:'Option 1'},
            {value:2, label:'Option 2'},
            {value:3, label:'Option 3', disabled: true}
        ];
        const wrapper = shallow(
            <Radio classes={classes} options={options2} />
        );
        expect(wrapper.find('.cont').at(0).prop('className')).toEqual('cont');
        expect(wrapper.find('.cont').at(1).prop('className')).toEqual('cont');
        expect(wrapper.find('.cont').at(2).prop('className')).toEqual('cont disabled');
    });

    it('changes the value on click', () => {
        const wrapper = shallow(
            <Radio classes={classes} options={options} />
        );
        expect(wrapper.find('.cont').at(1).prop('className')).toEqual('cont');
        wrapper.find('.cont').at(1).simulate('click');
        expect(wrapper.find('.cont').at(1).prop('className')).toEqual('cont active');
    });

    it('calls onChange function', () => {
        const onChange = jest.fn();
        const wrapper = shallow(
            <Radio classes={classes} onChange={onChange} options={options} />
        );
        wrapper.find('.cont').at(0).simulate('click');
        expect(onChange.mock.calls.length).toBe(1);
    });

});

describe("RadioJSS", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <RadioJSS />
        );
        expect(wrapper).toMatchSnapshot();
    });

});

describe("Radio styles", () => {

    it('matches the snapshot', () => {
        expect(styles).toMatchSnapshot();
    });

});
