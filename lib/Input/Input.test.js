import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';
import styles from './styles';
import InputJSS from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

describe("Input", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <Input classes={classes} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('renders the right html tag', () => {
        const wrapper = shallow(
            <Input classes={classes} />
        );
        expect(wrapper.find('.input').type()).toBe('input');
        wrapper.setProps({type:'textarea'});
        expect(wrapper.find('.input').type()).toBe('textarea');
        wrapper.setProps({type:'select', options:[]});
        expect(wrapper.find('.input').type()).toBe('select');
    });

    it('renders the right type of input', () => {
        const wrapper = shallow(
            <Input classes={classes} />
        );
        expect(wrapper.find('.input').prop('type')).toBe('text');
        wrapper.setProps({type:'email'});
        expect(wrapper.find('.input').prop('type')).toBe('email');
        wrapper.setProps({type:'number'});
        expect(wrapper.find('.input').prop('type')).toBe('number');
    });

    it('sets the maxLength property', () => {
        const wrapper = shallow(
            <Input classes={classes} maxLength={2} />
        );
        expect(wrapper.find('.input').prop('maxLength')).toBe(2);
    });

    it('shows a counter with the remaining characters', () => {
        const wrapper = shallow(
            <Input classes={classes} maxLength={50} counter />
        );
        expect(wrapper.find('.counter').length).toBe(0);
        wrapper.setState({status:'focus'});
        expect(wrapper.find('.counter').length).toBe(1);
        expect(wrapper.find('.counter').text()).toBe('50');
        wrapper.setState({value:'1234567890'});
        expect(wrapper.find('.counter').text()).toBe('40');
    });

    it('renders a label and a placeholder in the input', () => {
        const wrapper = shallow(
            <Input classes={classes} label="Label" placeholder="Placeholder" />
        );
        expect(wrapper.find('.label').length).toBe(1);
        expect(wrapper.find('.label').text()).toBe('Label');
        expect(wrapper.find('.input').prop('placeholder')).toBe('Placeholder');
    });

    it('renders a placeholder that works as a label on focus', () => {
        const wrapper = shallow(
            <Input classes={classes} placeholder="Placeholder" />
        );
        expect(wrapper.find('.placeholder').length).toBe(1);
        expect(wrapper.find('.placeholder').text()).toBe('Placeholder');
        expect(wrapper.find('.container').hasClass('push')).toBe(true);
    });

    it('renders a static field when disabled', () => {
        const wrapper = shallow(
            <Input classes={classes} />
        );
        expect(wrapper.find('.container').hasClass('disabled')).toBe(false);
        expect(wrapper.find('.input').type()).toBe('input');
        wrapper.setProps({disabled: true});
        expect(wrapper.find('.container').hasClass('disabled')).toBe(true);
        expect(wrapper.find('.input').type()).toBe('label');
    });

    it('sets the autoFocus property', () => {
        const wrapper = shallow(
            <Input classes={classes} autoFocus />
        );
        expect(wrapper.find('.input').prop('autoFocus')).toBe(true);
    });

    it('shows an icon that clears the value on click', () => {
        const wrapper = shallow(
            <Input classes={classes} clear />
        );
        expect(wrapper.find('.clear').length).toBe(0);
        wrapper.setState({value:'Value'});
        expect(wrapper.find('.clear').length).toBe(1);
        wrapper.find('.clear').simulate('click');
        expect(wrapper.find('.clear').length).toBe(0);
        expect(wrapper.state('value')).toBe('');
    });

    it('shows an error message', () => {
        const wrapper = shallow(
            <Input classes={classes} error="This field has an error" />
        );
        expect(wrapper.find('.error').length).toBe(0);
        wrapper.setState({touched: true});
        expect(wrapper.find('.error').length).toBe(2);
        expect(wrapper.find('.error').at(0).hasClass('container')).toBe(true);
        expect(wrapper.find('.error').at(1).text()).toBe('This field has an error');
    });

    it('shows the field as a valid value', () => {
        const wrapper = shallow(
            <Input classes={classes} valid />
        );
        expect(wrapper.find('.container').hasClass('correct')).toBe(false);
        wrapper.setState({touched: true});
        expect(wrapper.find('.container').hasClass('correct')).toBe(true);
    });

    it('sets a default value', () => {
        const wrapper = shallow(
            <Input classes={classes} valueProp="Value" />
        );
        expect(wrapper.state('value')).toBe('Value');
    });

    it('calls the onFocus function', () => {
        const onFocus = jest.fn();
        const wrapper = shallow(
            <Input classes={classes} onFocus={onFocus} />
        );
        wrapper.find('.input').simulate('focus', {target: {}});
        expect(onFocus.mock.calls.length).toBe(1);
    });

    it('calls the onBlur function', () => {
        const onBlur = jest.fn();
        const wrapper = shallow(
            <Input classes={classes} onBlur={onBlur} />
        );
        wrapper.find('.input').simulate('blur', {target: {value: 'Value'}});
        expect(onBlur.mock.calls.length).toBe(1);
    });

    it('calls the onChange function', () => {
        const onChange = jest.fn();
        const wrapper = shallow(
            <Input classes={classes} onChange={onChange} />
        );
        wrapper.find('.input').simulate('change', {target: {}});
        expect(onChange.mock.calls.length).toBe(1);
    });

    it('calls the onClear function', () => {
        const onClear = jest.fn();
        const wrapper = shallow(
            <Input classes={classes} clear onClear={onClear} valueProp="Value" />
        );
        wrapper.find('.clear').simulate('click');
        expect(onClear.mock.calls.length).toBe(1);
    });

    it('calls the onRef function', () => {
        const onRef = jest.fn();
        const wrapper = shallow(
            <Input classes={classes} onRef={onRef} />
        );
        wrapper.update();
        expect(onRef.mock.calls.length).toBe(1);
    });

    it('renders the options of the select', () => {
        const options = [
            {
                value: 1,
                text: 'Option 1'
            },
            {
                value: 2,
                text: 'Option 2'
            }
        ];
        const wrapper = shallow(
            <Input classes={classes} type="select" options={options} />
        );
        expect(wrapper.find('option').length).toBe(2);
        expect(wrapper.find('option').at(0).text()).toBe('Option 1');
        expect(wrapper.find('option').at(0).prop('value')).toBe(1);
    });

    it('shows an icon', () => {
        const wrapper = shallow(
            <Input classes={classes} />
        );
        expect(wrapper.find('.icon').length).toBe(0);
        wrapper.setProps({iconName: 'search'});
        expect(wrapper.find('.icon').length).toBe(1);
    });

});

describe("InputJSS", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <InputJSS />
        );
        expect(wrapper).toMatchSnapshot();
    });

});

describe("Input styles", () => {

    it('matches the snapshot', () => {
        expect(styles).toMatchSnapshot();
    });

});