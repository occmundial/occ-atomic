import React from 'react';
import { shallow, mount } from 'enzyme';
import Autocomplete from './Autocomplete';
import styles from './styles';
import AutocompleteJSS from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

const items = [
    { text: 'Administrador', textRight: '(222)', id:1 },
    { text: 'Administrador Sr', textRight: '(134)', id:2 },
    { text: 'Administrador Jr', textRight: '(52)', id:3 },
    { text: 'Administrar', textRight: '(6)', id:4 },
];

// const items2 = [
//     { text: 'Países', id:'1',
//         items: [
//             { text: 'México', textRight: '(3405)', key: 'MX', type: 'CO', id:'1.1' }
//         ]
//     },
//     { text: 'Estados', id:'2',
//         items: [
//             { text: 'Querétaro', textRight: '(222)', key: 'QRO', type: 'ST', id:'2.1' },
//             { text: 'Estado de México', textRight: '(225)', key: 'EMX', type: 'ST', id:'2.2' }
//         ]
//     },
//     { text: 'Ciudades', id:'3',
//         items: [
//             { text: 'Santiago de Querétaro', textRight: '(102)', key: 'QRO2', type: 'CY', id:'3.1' }
//         ]
//     }    
// ];

describe("Autocomplete", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <Autocomplete droplistProps={{items}} classes={classes} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('renders the input and droplist', () => {
        const wrapper = mount(
            <Autocomplete inputProps={{valueProp:'a', className:'input'}} droplistProps={{items, className:'droplist'}} classes={classes} />
        );
        wrapper.setState({focus: true});
        expect(wrapper.find('.input').at(0).length).toBe(1);
        expect(wrapper.find('.droplist').at(0).length).toBe(1);
    });

    it('hides the droplist when there\'s no value or the input has no focus', () => {
        const wrapper = mount(
            <Autocomplete inputProps={{valueProp:'a', className:'input'}} droplistProps={{items, className:'droplist'}} classes={classes} />
        );
        wrapper.setState({focus: true});
        expect(wrapper.find('.droplist').at(0).length).toBe(1);
        wrapper.setState({focus: false});
        expect(wrapper.find('.droplist').at(0).length).toBe(0);
        wrapper.setState({focus: true, value:''});
        expect(wrapper.find('.droplist').at(0).length).toBe(0);
    });

    it('filters the items of the droplist using the input value', () => {
        const wrapper = mount(
            <Autocomplete inputProps={{className:'input'}} droplistProps={{items, className:'droplist'}} classes={classes} />
        );
        wrapper.setState({focus: true, value:'a'});
        expect(wrapper.find('.droplist').at(0).text()).toBe('Administrador(222)Administrador Sr(134)Administrador Jr(52)Administrar(6)');
        wrapper.setState({value:'administrador'});
        expect(wrapper.find('.droplist').at(0).text()).toBe('Administrador(222)Administrador Sr(134)Administrador Jr(52)');
    });
    
    // it('calls the customFilter function', () => {
    // 
    // });

    it('returns the input value', () => {
        const onChange = jest.fn();
        const wrapper = mount(
            <Autocomplete onChange={onChange} inputProps={{className:'input'}} droplistProps={{items, className:'droplist'}} classes={classes} />
        );
        wrapper.find('input').simulate('change', {target: {value:'a'}});
        expect(onChange.mock.calls[0][0]).toBe('a');
        wrapper.find('input').simulate('change', {target: {value:'ad'}});
        expect(onChange.mock.calls[1][0]).toBe('ad');
    });

    it('returns the object of the selected item', () => {
        const onClick = jest.fn();
        const wrapper = mount(
            <Autocomplete onClick={onClick} inputProps={{valueProp:'a', className:'input'}} droplistProps={{items, className:'droplist'}} classes={classes} />
        );
        wrapper.setState({focus: true});
        wrapper.find('.Droplist-item-0-1-48').at(0).simulate('click', items[0]);
        expect(onClick.mock.calls[0][0]).toEqual({id: 1, text: 'Administrador', textRight: '(222)'});
        wrapper.setState({focus: true, value:'a'});
        wrapper.find('.Droplist-item-0-1-48').at(1).simulate('click', items[0]);
        expect(onClick.mock.calls[1][0]).toEqual({id: 2, text: 'Administrador Sr', textRight: '(134)'});
    });

    it('stacks the selected items into labels', () => {
        const onClick = jest.fn();
        const wrapper = mount(
            <Autocomplete onClick={onClick} stackLabels inputProps={{valueProp:'a', className:'input'}} droplistProps={{items, className:'droplist', itemIdKey:'id'}} classes={classes} />
        );
        wrapper.setState({focus: true});
        wrapper.find('.Droplist-item-0-1-48').at(0).simulate('click');
        expect(onClick.mock.calls[0][0]).toEqual([{id: 1, text: 'Administrador', textRight: '(222)'}]);
        wrapper.setState({focus: true, value:'ad'});
        wrapper.find('.Droplist-item-0-1-48').at(0).simulate('click');
        expect(onClick.mock.calls[1][0]).toEqual([{"id": 1, "text": "Administrador", "textRight": "(222)"}, {"id": 2, "text": "Administrador Sr", "textRight": "(134)"}]);
    });

    it('disables the input when it reaches the limit of labels', () => {
        const wrapper = mount(
            <Autocomplete stackLabels limit={2} inputProps={{valueProp:'a', className:'input'}} droplistProps={{items, className:'droplist', itemIdKey:'id'}} classes={classes} />
        );
        wrapper.setState({focus: true});
        expect(wrapper.find('input').length).toBe(1);
        wrapper.find('.Droplist-item-0-1-48').at(0).simulate('click');
        wrapper.setState({focus: true, value:'ad'});
        expect(wrapper.find('input').length).toBe(1);
        wrapper.find('.Droplist-item-0-1-48').at(0).simulate('click');
        wrapper.setState({focus: true, value:'ad'});
        expect(wrapper.find('input').length).toBe(0);
    });

    it('deletes a label', () => {
        const wrapper = mount(
            <Autocomplete stackLabels inputProps={{valueProp:'a', className:'input'}} droplistProps={{items, className:'droplist', itemIdKey:'id'}} classes={classes} />
        );
        wrapper.setState({focus: true});
        expect(wrapper.state('labels')).toEqual([]);
        expect(wrapper.find('label').length).toBe(0);
        wrapper.find('.Droplist-item-0-1-48').at(0).simulate('click');
        expect(wrapper.state('labels')).toEqual([{"id": 1, "text": "Administrador", "textRight": "(222)"}]);
        expect(wrapper.find('label').length).toBe(1);
        wrapper.find('label span').simulate('click');
        expect(wrapper.state('labels')).toEqual([]);
        expect(wrapper.find('label').length).toBe(0);
    });

    it('calls the onChange function', () => {
        const onChange = jest.fn();
        const wrapper = mount(
            <Autocomplete onChange={onChange} inputProps={{valueProp:'a', className:'input'}} droplistProps={{items, className:'droplist'}} classes={classes} />
        );
        wrapper.find('input').simulate('change', {target: {value:'a'}});
        expect(onChange.mock.calls.length).toBe(1);
    });

    it('calls the onClick function', () => {
        const onClick = jest.fn();
        const wrapper = mount(
            <Autocomplete onClick={onClick} inputProps={{valueProp:'a', className:'input'}} droplistProps={{items, className:'droplist'}} classes={classes} />
        );
        wrapper.setState({focus: true});
        console.log(wrapper.html());
        wrapper.find('.Droplist-item-0-1-48').at(0).simulate('click');
        expect(onClick.mock.calls.length).toBe(1);
    });

    it('calls the onFocus function', () => {
        const onFocus = jest.fn();
        const wrapper = mount(
            <Autocomplete onFocus={onFocus} inputProps={{valueProp:'a', className:'input'}} droplistProps={{items, className:'droplist'}} classes={classes} />
        );
        wrapper.find('input').simulate('focus');
        expect(onFocus.mock.calls.length).toBe(1);
    });

    it('calls the onBlur function', () => {
        const onBlur = jest.fn();
        const wrapper = mount(
            <Autocomplete onBlur={onBlur} inputProps={{valueProp:'a', className:'input'}} droplistProps={{items, className:'droplist'}} classes={classes} />
        );
        wrapper.find('input').simulate('blur');
        expect(onBlur.mock.calls.length).toBe(1);
    });
});

describe("AutocompleteJSS", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <AutocompleteJSS droplistProps={{items}} items={items} />
        );
        expect(wrapper).toMatchSnapshot();
    });

});

describe("Autocomplete styles", () => {

    it('matches the snapshot', () => {
        expect(styles).toMatchSnapshot();
    });

});