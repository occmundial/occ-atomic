'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Autocomplete = require('./Autocomplete');

var _Autocomplete2 = _interopRequireDefault(_Autocomplete);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var reduceClasses = function reduceClasses(prev, curr) {
    return Object.assign({}, prev, _defineProperty({}, curr, curr));
};

var classes = Object.keys(_styles2.default).reduce(reduceClasses, {});

var items = [{ text: 'Administrador', textRight: '(222)', id: 1 }, { text: 'Administrador Sr', textRight: '(134)', id: 2 }, { text: 'Administrador Jr', textRight: '(52)', id: 3 }, { text: 'Administrar', textRight: '(6)', id: 4 }];

var items2 = [{ text: 'Países', id: '1',
    items: [{ text: 'México', textRight: '(3405)', key: 'MX', type: 'CO', id: '1.1' }]
}, { text: 'Estados', id: '2',
    items: [{ text: 'Querétaro', textRight: '(222)', key: 'QRO', type: 'ST', id: '2.1' }, { text: 'Estado de México', textRight: '(225)', key: 'EMX', type: 'ST', id: '2.2' }]
}, { text: 'Ciudades', id: '3',
    items: [{ text: 'Santiago de Querétaro', textRight: '(102)', key: 'QRO2', type: 'CY', id: '3.1' }]
}];

describe("Autocomplete", function () {

    it('matches the snapshot', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Autocomplete2.default, { droplistProps: { items: items }, classes: classes }));
        expect(wrapper).toMatchSnapshot();
    });

    it('renders the input and droplist', function () {
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_Autocomplete2.default, { inputProps: { valueProp: 'a', className: 'input' }, droplistProps: { items: items, className: 'droplist' }, classes: classes }));
        wrapper.setState({ focus: true });
        expect(wrapper.find('.input').at(0).length).toBe(1);
        expect(wrapper.find('.droplist').at(0).length).toBe(1);
    });

    it('hides the droplist when there\'s no value or the input has no focus', function () {
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_Autocomplete2.default, { inputProps: { valueProp: 'a', className: 'input' }, droplistProps: { items: items, className: 'droplist' }, classes: classes }));
        wrapper.setState({ focus: true });
        expect(wrapper.find('.droplist').at(0).length).toBe(1);
        wrapper.setState({ focus: false });
        expect(wrapper.find('.droplist').at(0).length).toBe(0);
        wrapper.setState({ focus: true, value: '' });
        expect(wrapper.find('.droplist').at(0).length).toBe(0);
    });

    it('filters the items of the droplist using the input value', function () {
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_Autocomplete2.default, { inputProps: { className: 'input' }, droplistProps: { items: items, className: 'droplist' }, classes: classes }));
        wrapper.setState({ focus: true, value: 'a' });
        expect(wrapper.find('.droplist').at(0).text()).toBe('Administrador(222)Administrador Sr(134)Administrador Jr(52)Administrar(6)');
        wrapper.setState({ value: 'administrador' });
        expect(wrapper.find('.droplist').at(0).text()).toBe('Administrador(222)Administrador Sr(134)Administrador Jr(52)');
    });

    // it('calls the customFilter function', () => {
    // 
    // });

    it('returns the input value', function () {
        var onChange = jest.fn();
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_Autocomplete2.default, { onChange: onChange, inputProps: { className: 'input' }, droplistProps: { items: items, className: 'droplist' }, classes: classes }));
        wrapper.find('input').simulate('change', { target: { value: 'a' } });
        expect(onChange.mock.calls[0][0]).toBe('a');
        wrapper.find('input').simulate('change', { target: { value: 'ad' } });
        expect(onChange.mock.calls[1][0]).toBe('ad');
    });

    it('returns the object of the selected item', function () {
        var onClick = jest.fn();
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_Autocomplete2.default, { onClick: onClick, inputProps: { valueProp: 'a', className: 'input' }, droplistProps: { items: items, className: 'droplist' }, classes: classes }));
        wrapper.setState({ focus: true });
        wrapper.find('.Droplist-item-0-1-26').at(0).simulate('click', items[0]);
        expect(onClick.mock.calls[0][0]).toEqual({ id: 1, text: 'Administrador', textRight: '(222)' });
        wrapper.setState({ focus: true, value: 'a' });
        wrapper.find('.Droplist-item-0-1-26').at(1).simulate('click', items[0]);
        expect(onClick.mock.calls[1][0]).toEqual({ id: 2, text: 'Administrador Sr', textRight: '(134)' });
    });

    it('stacks the selected items into labels', function () {
        var onClick = jest.fn();
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_Autocomplete2.default, { onClick: onClick, stackLabels: true, inputProps: { valueProp: 'a', className: 'input' }, droplistProps: { items: items, className: 'droplist', itemIdKey: 'id' }, classes: classes }));
        wrapper.setState({ focus: true });
        wrapper.find('.Droplist-item-0-1-26').at(0).simulate('click');
        expect(onClick.mock.calls[0][0]).toEqual([{ id: 1, text: 'Administrador', textRight: '(222)' }]);
        wrapper.setState({ focus: true, value: 'ad' });
        wrapper.find('.Droplist-item-0-1-26').at(0).simulate('click');
        expect(onClick.mock.calls[1][0]).toEqual([{ "id": 1, "text": "Administrador", "textRight": "(222)" }, { "id": 2, "text": "Administrador Sr", "textRight": "(134)" }]);
    });

    it('disables the input when it reaches the limit of labels', function () {
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_Autocomplete2.default, { stackLabels: true, limit: 2, inputProps: { valueProp: 'a', className: 'input' }, droplistProps: { items: items, className: 'droplist', itemIdKey: 'id' }, classes: classes }));
        wrapper.setState({ focus: true });
        expect(wrapper.find('input').length).toBe(1);
        wrapper.find('.Droplist-item-0-1-26').at(0).simulate('click');
        wrapper.setState({ focus: true, value: 'ad' });
        expect(wrapper.find('input').length).toBe(1);
        wrapper.find('.Droplist-item-0-1-26').at(0).simulate('click');
        wrapper.setState({ focus: true, value: 'ad' });
        expect(wrapper.find('input').length).toBe(0);
    });

    it('deletes a label', function () {
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_Autocomplete2.default, { stackLabels: true, inputProps: { valueProp: 'a', className: 'input' }, droplistProps: { items: items, className: 'droplist', itemIdKey: 'id' }, classes: classes }));
        wrapper.setState({ focus: true });
        expect(wrapper.state('labels')).toEqual([]);
        expect(wrapper.find('label').length).toBe(0);
        wrapper.find('.Droplist-item-0-1-26').at(0).simulate('click');
        expect(wrapper.state('labels')).toEqual([{ "id": 1, "text": "Administrador", "textRight": "(222)" }]);
        expect(wrapper.find('label').length).toBe(1);
        wrapper.find('label span').simulate('click');
        expect(wrapper.state('labels')).toEqual([]);
        expect(wrapper.find('label').length).toBe(0);
    });

    it('calls the onChange function', function () {
        var onChange = jest.fn();
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_Autocomplete2.default, { onChange: onChange, inputProps: { valueProp: 'a', className: 'input' }, droplistProps: { items: items, className: 'droplist' }, classes: classes }));
        wrapper.find('input').simulate('change', { target: { value: 'a' } });
        expect(onChange.mock.calls.length).toBe(1);
    });

    it('calls the onClick function', function () {
        var onClick = jest.fn();
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_Autocomplete2.default, { onClick: onClick, inputProps: { valueProp: 'a', className: 'input' }, droplistProps: { items: items, className: 'droplist' }, classes: classes }));
        wrapper.setState({ focus: true });
        wrapper.find('.Droplist-item-0-1-26').at(0).simulate('click');
        expect(onClick.mock.calls.length).toBe(1);
    });

    it('calls the onFocus function', function () {
        var onFocus = jest.fn();
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_Autocomplete2.default, { onFocus: onFocus, inputProps: { valueProp: 'a', className: 'input' }, droplistProps: { items: items, className: 'droplist' }, classes: classes }));
        wrapper.find('input').simulate('focus');
        expect(onFocus.mock.calls.length).toBe(1);
    });

    it('calls the onBlur function', function () {
        var onBlur = jest.fn();
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_Autocomplete2.default, { onBlur: onBlur, inputProps: { valueProp: 'a', className: 'input' }, droplistProps: { items: items, className: 'droplist' }, classes: classes }));
        wrapper.find('input').simulate('blur');
        expect(onBlur.mock.calls.length).toBe(1);
    });
});

describe("AutocompleteJSS", function () {

    it('matches the snapshot', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { droplistProps: { items: items }, items: items }));
        expect(wrapper).toMatchSnapshot();
    });
});

describe("Autocomplete styles", function () {

    it('matches the snapshot', function () {
        expect(_styles2.default).toMatchSnapshot();
    });
});