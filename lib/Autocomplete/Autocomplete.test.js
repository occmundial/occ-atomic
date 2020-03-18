import React from 'react';
import { mount } from 'enzyme';
import { JssProvider, SheetsRegistry } from 'react-jss';
import Autocomplete from './Autocomplete';

const items = [
    { text: 'Administrador', textRight: '(222)', id:1 },
    { text: 'Administrador Sr', textRight: '(134)', id:2 },
    { text: 'Administrador Jr', textRight: '(52)', id:3 },
    { text: 'Administrar', textRight: '(6)', id:4 },
];

let sheets, classes;

describe("Autocomplete", () => {

    beforeEach(() => sheets = new SheetsRegistry());
    afterEach(() => sheets = null);

    it('matches the snapshot', () => {
        const wrapper = mount(
            <Autocomplete droplistProps={{items}} />
        );
        expect(wrapper.html()).toMatchSnapshot();
        wrapper.find('input').simulate('focus');
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders the input and droplist', () => {
        const wrapper = mount(
            <Autocomplete textfieldProps={{valueProp:'a', className:'input'}} droplistProps={{items, className:'droplist'}} />
        );
        wrapper.find('input').simulate('focus');
        expect(wrapper.find('.input').at(0).length).toBe(1);
        expect(wrapper.find('.droplist').at(0).length).toBe(1);
    });

    it('hides the droplist when there\'s no value or the input has no focus', () => {
        const wrapper = mount(
            <Autocomplete textfieldProps={{valueProp:'a', className:'input'}} droplistProps={{items, className:'droplist'}} />
        );
        wrapper.find('input').simulate('focus');
        expect(wrapper.find('.droplist').at(0).length).toBe(1);
        wrapper.find('input').simulate('blur');
        expect(wrapper.find('.droplist').at(0).length).toBe(0);
        wrapper.find('input').simulate('focus');
        wrapper.find('input').simulate('change', { target: { value: '' }});
        expect(wrapper.find('.droplist').at(0).length).toBe(0);
    });

    it('filters the items of the droplist using the input value', () => {
        const wrapper = mount(
            <JssProvider registry={sheets}>
                <Autocomplete textfieldProps={{className:'input'}} droplistProps={{items, className:'droplist'}} />
            </JssProvider>
        );
        wrapper.find('input').simulate('focus');
        wrapper.find('input').simulate('change', { target: { value: 'a' }});
        expect(wrapper.find('.droplist').at(0).text()).toBe('Administrador(222)Administrador Sr(134)Administrador Jr(52)Administrar(6)');
        wrapper.find('input').simulate('change', { target: { value: 'administrador' }});
        wrapper.instance().forceUpdate();
        wrapper.update();
        expect(wrapper.find('.droplist').at(0).text()).toBe('Administrador(222)Administrador Sr(134)Administrador Jr(52)');
    });

    it('returns the input value', () => {
        const onChange = jest.fn();
        const wrapper = mount(
            <Autocomplete onChange={onChange} textfieldProps={{className:'input'}} droplistProps={{items, className:'droplist'}} />
        );
        wrapper.find('input').simulate('change', {target: {value:'a'}});
        expect(onChange.mock.calls[0][0]).toBe('a');
        wrapper.find('input').simulate('change', {target: {value:'ad'}});
        expect(onChange.mock.calls[1][0]).toBe('ad');
    });

    it('returns the object of the selected item', () => {
        const onMouseDown = jest.fn();
        const sheets = new SheetsRegistry();
        const wrapper = mount(
            <JssProvider registry={sheets}>
                <Autocomplete onMouseDown={onMouseDown} textfieldProps={{valueProp:'a', className:'input'}} droplistProps={{items, className:'droplist'}} />
            </JssProvider>
        );
        wrapper.find('input').simulate('focus');
        const classes2 = sheets.registry[2].classes;
        const item = `.${classes2.item}`;
        wrapper.find(item).at(0).simulate('mousedown');
        expect(onMouseDown.mock.calls[0][0]).toEqual({id: 1, text: 'Administrador', textRight: '(222)'});
        wrapper.find('input').simulate('focus');
        wrapper.find('input').simulate('change', { target: { value: 'a' }});
        wrapper.find(item).at(1).simulate('mousedown');
        expect(onMouseDown.mock.calls[1][0]).toEqual({id: 2, text: 'Administrador Sr', textRight: '(134)'});
    });

    it('calls the onChange function', () => {
        const onChange = jest.fn();
        const wrapper = mount(
            <Autocomplete onChange={onChange} textfieldProps={{valueProp:'a', className:'input'}} droplistProps={{items, className:'droplist'}} />
        );
        wrapper.find('input').simulate('change', {target: {value:'a'}});
        expect(onChange.mock.calls.length).toBe(1);
    });

    it('calls the onMouseDown function', () => {
        const onMouseDown = jest.fn();
        const wrapper = mount(
            <JssProvider registry={sheets}>
                <Autocomplete onMouseDown={onMouseDown} textfieldProps={{valueProp:'a', className:'input'}} droplistProps={{items, className:'droplist'}} />
            </JssProvider>
        );
        wrapper.find('input').simulate('focus');
        classes = sheets.registry[2].classes;
        wrapper.find(`.${classes.item}`).at(0).simulate('mousedown');
        expect(onMouseDown.mock.calls.length).toBe(1);
    });

    it('calls the onFocus function', () => {
        const onFocus = jest.fn();
        const wrapper = mount(
            <Autocomplete onFocus={onFocus} textfieldProps={{valueProp:'a', className:'input'}} droplistProps={{items, className:'droplist'}} />
        );
        wrapper.find('input').simulate('focus');
        expect(onFocus.mock.calls.length).toBe(1);
    });

    it('calls the onBlur function', () => {
        const onBlur = jest.fn();
        const wrapper = mount(
            <Autocomplete onBlur={onBlur} textfieldProps={{valueProp:'a', className:'input'}} droplistProps={{items, className:'droplist'}} />
        );
        wrapper.find('input').simulate('blur');
        expect(onBlur.mock.calls.length).toBe(1);
    });
});
