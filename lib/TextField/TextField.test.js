import React from 'react';
import { mount } from 'enzyme';
import { JssProvider, SheetsRegistry } from 'react-jss';

import TextField from './TextField';
import Text from '../Text';

let sheets, classes;

describe("TextField", () => {

    beforeEach(() => sheets = new SheetsRegistry());
    afterEach(() => sheets = null);

    it('matches the snapshot', () => {
        const wrapper = mount(
            <TextField />
        );
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders the right html tag', () => {
        const wrapper = mount(
            <JssProvider registry={sheets}>
                <TextField />
            </JssProvider>
        );
        classes = sheets.registry[0].classes;
        const input = `.${classes.input}`;
        expect(wrapper.find(input).type()).toBe('input');
        wrapper.setProps({ children: <TextField type="textarea" />});
        expect(wrapper.find(input).type()).toBe('textarea');
    });

    it('renders the right type of input', () => {
        const wrapper = mount(
            <JssProvider registry={sheets}>
                <TextField />
            </JssProvider>
        );
        classes = sheets.registry[0].classes;
        const input = `.${classes.input}`;
        expect(wrapper.find(input).prop('type')).toBe('text');
        wrapper.setProps({children: <TextField type="email" />});
        expect(wrapper.find(input).prop('type')).toBe('email');
        wrapper.setProps({children: <TextField type="number" />});
        expect(wrapper.find(input).prop('type')).toBe('number');
    });

    it('sets the maxLength property', () => {
        const wrapper = mount(
            <JssProvider registry={sheets}>
                <TextField maxLength={2} />
            </JssProvider>
        );
        classes = sheets.registry[0].classes;
        expect(wrapper.find(`.${classes.input}`).prop('maxLength')).toBe(2);
    });

    it('shows a counter with the number of characters written', () => {
        const wrapper = mount(
            <JssProvider registry={sheets}>
                <TextField maxLength={50} label="Label" counter />
            </JssProvider>
        );
        classes = sheets.registry[1].classes;
        const right = `.${classes.right}`;
        expect(wrapper.find(right).length > 0).toBe(true);
        expect(wrapper.find(right).at(0).text()).toBe('0 / 50');
        wrapper.find('input').simulate('change', { target: { value: '1234567890' }});
        expect(wrapper.find(right).at(0).text()).toBe('10 / 50');
    });

    it('renders a label and a placeholder in the input', () => {
        const wrapper = mount(
            <JssProvider registry={sheets}>
                <TextField label="Label" placeholder="Placeholder" />
            </JssProvider>
        );
        classes = sheets.registry[1].classes;
        const label = `.${classes.label}`;
        expect(wrapper.find(label).length > 0).toBe(true);
        expect(wrapper.find(label).at(0).text()).toBe('Label');
        expect(wrapper.find(`.${classes.input}`).prop('placeholder')).toBe('Placeholder');
    });

    it('renders a static field when disabled', () => {
        const wrapper = mount(
            <JssProvider registry={sheets}>
                <TextField />
            </JssProvider>
        );
        classes = sheets.registry[0].classes;
        const container = `.${classes.container}`;
        const input = `.${classes.input}`;
        expect(wrapper.find(container).hasClass(classes.disabled)).toBe(false);
        expect(wrapper.find(input).type()).toBe('input');
        wrapper.setProps({children: <TextField disabled />});
        expect(wrapper.find(container).hasClass(classes.disabled)).toBe(true);
        expect(wrapper.find(input).type()).toBe('label');
    });

    it('sets the autoFocus property', () => {
        const wrapper = mount(
            <TextField autoFocus />
        );
        expect(wrapper.find('input').prop('autoFocus')).toBe(true);
    });

    it('shows an icon that clears the value on click', () => {
        const wrapper = mount(
            <JssProvider registry={sheets}>
                <TextField clear />
            </JssProvider>
        );
        classes = sheets.registry[0].classes;
        const clear = `.${classes.clear}`;
        expect(wrapper.find(clear).length).toBe(0);
        wrapper.find('input').simulate('change', { target: { value: 'Value' }});
        expect(wrapper.find(clear).length).toBe(1);
        wrapper.find(clear).simulate('click');
        expect(wrapper.find(clear).length).toBe(0);
        expect(wrapper.find('input').prop('value')).toBe('');
    });

    it('shows the TextField with an error', () => {
        const wrapper = mount(
            <JssProvider registry={sheets}>
                <TextField assistiveText="This field has an error" error />
            </JssProvider>
        );
        classes = sheets.registry[1].classes;
        const error = `.${classes.error}`;
        expect(wrapper.find(error).length).toBe(0);
        wrapper.find('input').simulate('focus');
        wrapper.find('input').simulate('blur');
        classes = sheets.registry[1].classes;
        expect(wrapper.find(error).length).toBe(1);
        expect(wrapper.find(Text).text()).toBe(' This field has an error');
        expect(wrapper.find(error).prop('className').indexOf('container') > -1).toBe(true);
    });

    it('sets a default value', () => {
        const wrapper = mount(
            <TextField valueProp="Value" />
        );
        expect(wrapper.find('input').prop('value')).toBe('Value');
    });

    it('calls the onFocus function', () => {
        const onFocus = jest.fn();
        const wrapper = mount(
            <TextField onFocus={onFocus} />
        );
        wrapper.find('input').simulate('focus');
        expect(onFocus.mock.calls.length).toBe(1);
    });

    it('calls the onBlur function', () => {
        const onBlur = jest.fn();
        const wrapper = mount(
            <TextField onBlur={onBlur} />
        );
        wrapper.find('input').simulate('blur');
        expect(onBlur.mock.calls.length).toBe(1);
    });

    it('calls the onChange function', () => {
        const onChange = jest.fn();
        const wrapper = mount(
            <TextField onChange={onChange} />
        );
        wrapper.find('input').simulate('change');
        expect(onChange.mock.calls.length).toBe(1);
    });

    it('calls the onClear function', () => {
        const onClear = jest.fn();
        const wrapper = mount(
            <JssProvider registry={sheets}>
                <TextField clear onClear={onClear} valueProp="Value" />
            </JssProvider>
        );
        classes = sheets.registry[1].classes;
        wrapper.find(`.${classes.clear}`).simulate('click');
        expect(onClear.mock.calls.length).toBe(1);
    });

    it('calls the onRef function', () => {
        const inputRef = jest.fn();
        mount(
            <TextField ref={inputRef} />
        );
        expect(inputRef.mock.calls.length).toBe(1);
    });

    it('shows an icon', () => {
        const wrapper = mount(
            <JssProvider registry={sheets}>
                <TextField />
            </JssProvider>
        );
        classes = sheets.registry[0].classes;
        const icon = `.${classes.icon}`;
        expect(wrapper.find(icon).length > 0).toBe(false);
        wrapper.setProps({children: <TextField iconName="search" />});
        expect(wrapper.find(icon).length > 0).toBe(true);
    });

    it('validates with the regex', () => {
        const onChange = jest.fn();
        const wrapper = mount(
            <TextField regex="^[0-9]*$" onChange={onChange} />
        );
        wrapper.find('input').simulate('change', { target: { value:'123' }});
        expect(onChange).toHaveBeenCalledWith('123');
        wrapper.find('input').simulate('change', { target: { value:'123abc' }});
        expect(onChange).toHaveBeenCalledWith('123');
        wrapper.setProps({regex:''});
        wrapper.setProps({ children: <TextField onChange={onChange} />});
        wrapper.find('input').simulate('change', { target: { value:'123abc' }});
        expect(onChange).toHaveBeenCalledWith('123abc');
    });

});
