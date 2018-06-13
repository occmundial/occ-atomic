'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

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

describe("Button", function () {

    it('matches the snapshot', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
            _Button2.default,
            { classes: classes },
            'Button'
        ));
        expect(wrapper).toMatchSnapshot();
    });

    it('renders the children content', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
            _Button2.default,
            { classes: classes },
            'Button'
        ));
        expect(wrapper.text()).toEqual('Button');
    });

    it('returns a button', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
            _Button2.default,
            { classes: classes },
            'Button'
        ));
        expect(wrapper.find('button').length).toBe(1);
        expect(wrapper.find('a').length).toBe(0);
    });

    it('returns an anchor', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
            _Button2.default,
            { classes: classes, href: 'http://occ.com.mx' },
            'Button'
        ));
        expect(wrapper.find('button').length).toBe(0);
        expect(wrapper.find('a').length).toBe(1);
    });

    it('has the right theme', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
            _Button2.default,
            { classes: classes },
            'Button'
        ));
        expect(wrapper.find('button').prop('className')).toEqual('btn main');
        wrapper.setProps({ theme: 'secondary' });
        expect(wrapper.find('button').prop('className')).toEqual('btn secondary');
    });

    it('has the right size', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
            _Button2.default,
            { classes: classes, size: 'md' },
            'Button'
        ));
        expect(wrapper.find('button').prop('className').indexOf('md')).not.toBe(-1);
        expect(wrapper.find('button').prop('className').indexOf('lg')).toBe(-1);
        wrapper.setProps({ size: 'lg' });
        expect(wrapper.find('button').prop('className').indexOf('md')).toBe(-1);
        expect(wrapper.find('button').prop('className').indexOf('lg')).not.toBe(-1);
    });

    it('has the block class', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
            _Button2.default,
            { classes: classes },
            'Button'
        ));
        expect(wrapper.find('button').prop('className').indexOf('block')).toBe(-1);
        wrapper.setProps({ block: true });
        expect(wrapper.find('button').prop('className').indexOf('block')).not.toBe(-1);
    });

    it('calls onClick function', function () {
        var onClick = jest.fn();
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
            _Button2.default,
            { classes: classes, onClick: onClick, disabled: true },
            'Button'
        ));
        wrapper.simulate('click');
        expect(onClick.mock.calls.length).toBe(0);
        wrapper.setProps({ disabled: false });
        wrapper.simulate('click');
        expect(onClick.mock.calls.length).toBe(1);
    });

    it('disabled', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
            _Button2.default,
            { classes: classes, disabled: true },
            'Button'
        ));
        expect(wrapper.find('button').prop('className').indexOf('disabled')).not.toBe(-1);
    });

    it('has an icon', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
            _Button2.default,
            { classes: classes, icon: 'plus' },
            'Button'
        ));
        expect(wrapper.find('button span i').prop('className').indexOf('icon')).not.toBe(-1);
    });

    it('has a loaging icon', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
            _Button2.default,
            { classes: classes, loading: true },
            'Button'
        ));
        expect(wrapper.find('button span i').prop('className').indexOf('load')).not.toBe(-1);
    });
});

describe("ButtonJSS", function () {

    it('matches the snapshot', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, null));
        expect(wrapper).toMatchSnapshot();
    });
});

describe("Button styles", function () {

    it('matches the snapshot', function () {
        expect(_styles2.default).toMatchSnapshot();
    });

    it('returns the right icons', function () {
        var props = { icon: 'testing' };
        expect(_styles2.default.main['& $icon'].background(props)).toBe('url(data:image/svg+xml;base64,dGVzdGluZyAtICNmZmZmZmY=) no-repeat center center');
        expect(_styles2.default.secondary['& $icon'].background(props)).toBe('url(data:image/svg+xml;base64,dGVzdGluZyAtICNmZjQ1NmE=) no-repeat center center');
        expect(_styles2.default.secondary['&:hover']['& $icon'].background(props)).toBe('url(data:image/svg+xml;base64,dGVzdGluZyAtICNmZmZmZmY=) no-repeat center center');
        expect(_styles2.default.secondary['&:active']['& $icon'].background(props)).toBe('url(data:image/svg+xml;base64,dGVzdGluZyAtICNmZmZmZmY=) no-repeat center center');
        expect(_styles2.default.flat['& $icon'].background(props)).toBe('url(data:image/svg+xml;base64,dGVzdGluZyAtICNmZjQ1NmE=) no-repeat center center');
        expect(_styles2.default.flat['&$disabled']['& $icon'].background(props)).toBe('url(data:image/svg+xml;base64,dGVzdGluZyAtICNiZmJmYmY=) no-repeat center center');
        expect(_styles2.default.blue['& $icon'].background(props)).toBe('url(data:image/svg+xml;base64,dGVzdGluZyAtICNmZmZmZmY=) no-repeat center center');
        expect(_styles2.default.disabled['& $icon'].background(props)).toBe('url(data:image/svg+xml;base64,dGVzdGluZyAtICNmZmZmZmY=) no-repeat center center');
    });
});