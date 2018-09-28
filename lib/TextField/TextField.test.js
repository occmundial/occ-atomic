import React from 'react';
import { shallow } from 'enzyme';
import TextField from './TextField';
import styles from './styles';
import TextFieldJSS from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

describe("TextField", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <TextField classes={classes} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('renders the right html tag', () => {
        const wrapper = shallow(
            <TextField classes={classes} />
        );
        expect(wrapper.find('.input').type()).toBe('input');
        wrapper.setProps({type:'textarea'});
        expect(wrapper.find('.input').type()).toBe('textarea');
    });

    it('renders the right type of input', () => {
        const wrapper = shallow(
            <TextField classes={classes} />
        );
        expect(wrapper.find('.input').prop('type')).toBe('text');
        wrapper.setProps({type:'email'});
        expect(wrapper.find('.input').prop('type')).toBe('email');
        wrapper.setProps({type:'number'});
        expect(wrapper.find('.input').prop('type')).toBe('number');
    });

    it('sets the maxLength property', () => {
        const wrapper = shallow(
            <TextField classes={classes} maxLength={2} />
        );
        expect(wrapper.find('.input').prop('maxLength')).toBe(2);
    });

    it('shows a counter with the remaining characters', () => {
        const wrapper = shallow(
            <TextField classes={classes} maxLength={50} counter />
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
            <TextField classes={classes} label="Label" placeholder="Placeholder" />
        );
        expect(wrapper.find('.label').length).toBe(1);
        expect(wrapper.find('.label').text()).toBe('Label');
        expect(wrapper.find('.input').prop('placeholder')).toBe('Placeholder');
    });

    it('renders a static field when disabled', () => {
        const wrapper = shallow(
            <TextField classes={classes} />
        );
        expect(wrapper.find('.container').hasClass('disabled')).toBe(false);
        expect(wrapper.find('.input').type()).toBe('input');
        wrapper.setProps({disabled: true});
        expect(wrapper.find('.container').hasClass('disabled')).toBe(true);
        expect(wrapper.find('.input').type()).toBe('label');
    });

    it('sets the autoFocus property', () => {
        const wrapper = shallow(
            <TextField classes={classes} autoFocus />
        );
        expect(wrapper.find('.input').prop('autoFocus')).toBe(true);
    });

    it('shows an icon that clears the value on click', () => {
        const wrapper = shallow(
            <TextField classes={classes} clear />
        );
        expect(wrapper.find('.clear').length).toBe(0);
        wrapper.setState({value:'Value'});
        expect(wrapper.find('.clear').length).toBe(1);
        wrapper.find('.clear').simulate('click');
        expect(wrapper.find('.clear').length).toBe(0);
        expect(wrapper.state('value')).toBe('');
    });

    // it('shows an error message', () => {
    //     const wrapper = shallow(
    //         <TextField classes={classes} assistiveText="This field has an error" error="Damn" />
    //     );
    //     expect(wrapper.find('.error').length).toBe(0);
    //     expect(wrapper.find('.errorAssistiveText').length).toBe(0);
    //     wrapper.setState({touched: true});
    //     expect(wrapper.find('.error').length).toBe(1);
    //     expect(wrapper.find('.errorAssistiveText').length).toBe(1);
    //     expect(wrapper.find('.error').at(0).hasClass('container')).toBe(true);
    //     expect(wrapper.find('.errorAssistiveText').at(1).text()).toBe('This field has an error');
    // });

    it('sets a default value', () => {
        const wrapper = shallow(
            <TextField classes={classes} valueProp="Value" />
        );
        expect(wrapper.state('value')).toBe('Value');
    });

    it('calls the onFocus function', () => {
        const onFocus = jest.fn();
        const wrapper = shallow(
            <TextField classes={classes} onFocus={onFocus} />
        );
        wrapper.find('.input').simulate('focus', {target: {}});
        expect(onFocus.mock.calls.length).toBe(1);
    });

    it('calls the onBlur function', () => {
        const onBlur = jest.fn();
        const wrapper = shallow(
            <TextField classes={classes} onBlur={onBlur} />
        );
        wrapper.find('.input').simulate('blur', {target: {value: 'Value'}});
        expect(onBlur.mock.calls.length).toBe(1);
    });

    it('calls the onChange function', () => {
        const onChange = jest.fn();
        const wrapper = shallow(
            <TextField classes={classes} onChange={onChange} />
        );
        wrapper.find('.input').simulate('change', {target: {}});
        expect(onChange.mock.calls.length).toBe(1);
    });

    it('calls the onClear function', () => {
        const onClear = jest.fn();
        const wrapper = shallow(
            <TextField classes={classes} clear onClear={onClear} valueProp="Value" />
        );
        wrapper.find('.clear').simulate('click');
        expect(onClear.mock.calls.length).toBe(1);
    });

    it('calls the onRef function', () => {
        const onRef = jest.fn();
        const wrapper = shallow(
            <TextField classes={classes} onRef={onRef} />
        );
        expect(onRef.mock.calls.length).toBe(1);
    });

    it('shows an icon', () => {
        const wrapper = shallow(
            <TextField classes={classes} />
        );
        expect(wrapper.find('.icon').length).toBe(0);
        wrapper.setProps({iconName: 'search'});
        expect(wrapper.find('.icon').length).toBe(1);
    });

});

describe("TextFieldJSS", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <TextFieldJSS />
        );
        expect(wrapper).toMatchSnapshot();
    });

});

describe("TextField styles", () => {

    it('matches the snapshot', () => {
        expect(styles).toMatchSnapshot();
    });

});