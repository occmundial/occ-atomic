'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Droplist = require('./Droplist');

var _Droplist2 = _interopRequireDefault(_Droplist);

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

describe("Droplist", function () {

    it('matches the snapshot', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Droplist2.default, { items: items, classes: classes }));
        expect(wrapper).toMatchSnapshot();
    });

    it('returns the right number of items', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Droplist2.default, { items: items, classes: classes }));
        expect(wrapper.find('.item').length).toBe(4);
    });

    it('returns the right number of groups and its items', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Droplist2.default, { items: items2, groups: true, classes: classes }));
        expect(wrapper.find('.groupCon').length).toBe(3);
        expect(wrapper.find('.groupCon').at(0).find('.item').length).toBe(1);
        expect(wrapper.find('.groupCon').at(1).find('.item').length).toBe(2);
        expect(wrapper.find('.groupCon').at(2).find('.item').length).toBe(1);
    });

    it('renders the item correctly', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Droplist2.default, { items: items, itemIdKey: 'id', classes: classes }));
        expect(wrapper.find('.item').at(0).text()).toBe('Administrador(222)');
    });

    it('renders the group and sub-item correctly', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Droplist2.default, { items: items2, groups: true, groupIdKey: 'id', itemIdKey: 'id', classes: classes }));
        expect(wrapper.find('.groupCon').at(0).text()).toBe('PaísesMéxico(3405)');
    });

    it('filters the items', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Droplist2.default, { items: items, itemIdKey: 'id', classes: classes }));
        expect(wrapper.find('.item').length).toBe(4);
        wrapper.setState({ term: 'Administrador' });
        expect(wrapper.find('.item').length).toBe(3);
    });

    it('highlights the matching part of the items', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Droplist2.default, { items: items, itemIdKey: 'id', classes: classes }));
        expect(wrapper.find('.item').at(0).find('.bold').text()).toBe('');
        wrapper.setState({ term: 'Administrador' });
        expect(wrapper.find('.item').at(0).find('.bold').text()).toBe('Administrador');
    });

    it('calls the onClick function', function () {
        var onClick = jest.fn();
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Droplist2.default, { items: items, itemIdKey: 'id', onClick: onClick, classes: classes }));
        wrapper.find('.item').at(0).simulate('click');
        expect(onClick.mock.calls.length).toBe(1);
    });
});

describe("DroplistJSS", function () {

    it('matches the snapshot', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { items: items }));
        expect(wrapper).toMatchSnapshot();
    });
});

describe("Droplist styles", function () {

    it('matches the snapshot', function () {
        expect(_styles2.default).toMatchSnapshot();
    });
});