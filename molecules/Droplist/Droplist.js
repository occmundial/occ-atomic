'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Droplist = function (_React$Component) {
    _inherits(Droplist, _React$Component);

    function Droplist(props) {
        _classCallCheck(this, Droplist);

        var _this = _possibleConstructorReturn(this, (Droplist.__proto__ || Object.getPrototypeOf(Droplist)).call(this, props));

        _this.state = {
            term: props.term ? props.term.trim() : ''
        };
        _this.onClick = _this.onClick.bind(_this);
        _this.renderList = _this.renderList.bind(_this);
        return _this;
    }

    _createClass(Droplist, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            this.setState({
                term: props.term.trim()
            });
        }
    }, {
        key: 'onClick',
        value: function onClick(item) {
            var onClick = this.props.onClick;

            if (onClick) onClick(item);
        }
    }, {
        key: 'compareText',
        value: function compareText(text, term) {
            var textLC = text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
            var termLC = term.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
            var index = textLC.indexOf(termLC);
            return index;
        }
    }, {
        key: 'separateText',
        value: function separateText(itemText, index, term) {
            var text = [itemText.substr(0, index), itemText.substr(index, term.length), itemText.substr(index + term.length, itemText.length)];
            return text;
        }
    }, {
        key: 'renderList',
        value: function renderList(items) {
            var _this2 = this;

            var term = this.state.term;
            var _props = this.props,
                classes = _props.classes,
                itemIdKey = _props.itemIdKey,
                itemTextKey = _props.itemTextKey,
                itemTextRightKey = _props.itemTextRightKey;

            var itemsDOM = items.map(function (item) {
                var index = _this2.compareText(item[itemTextKey], term);
                if (index >= 0) {
                    var text = _this2.separateText(item[itemTextKey], index, term);
                    return _react2.default.createElement(
                        'div',
                        {
                            key: item[itemIdKey],
                            onClick: function onClick() {
                                return _this2.onClick(item);
                            },
                            className: classes.item },
                        text[0].length ? text[0] : '',
                        _react2.default.createElement(
                            'span',
                            { className: classes.bold },
                            text[1].length ? text[1] : ''
                        ),
                        text[2].length ? text[2] : '',
                        item[itemTextRightKey] ? _react2.default.createElement(
                            'span',
                            { className: classes.right },
                            item[itemTextRightKey]
                        ) : ''
                    );
                }
                return false;
            });
            return itemsDOM;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var term = this.state.term;
            var _props2 = this.props,
                classes = _props2.classes,
                className = _props2.className,
                style = _props2.style,
                id = _props2.id,
                items = _props2.items,
                groups = _props2.groups,
                groupNameKey = _props2.groupNameKey,
                groupIdKey = _props2.groupIdKey,
                groupItemsKey = _props2.groupItemsKey,
                itemTextKey = _props2.itemTextKey,
                itemTextRightKey = _props2.itemTextRightKey,
                itemIdKey = _props2.itemIdKey,
                onClick = _props2.onClick;

            return _react2.default.createElement(
                'div',
                { className: '' + classes.block + (className ? ' ' + className : ''), id: id },
                groups ? items.map(function (group) {
                    return _react2.default.createElement(
                        'div',
                        { key: group[groupIdKey], className: classes.groupCon },
                        _react2.default.createElement(
                            'div',
                            { className: classes.group },
                            group[groupNameKey]
                        ),
                        _this3.renderList(group[groupItemsKey])
                    );
                }) : this.renderList(items)
            );
        }
    }]);

    return Droplist;
}(_react2.default.Component);

Droplist.defaultProps = {
    groups: false,
    groupNameKey: 'text',
    groupIdKey: 'id',
    groupItemsKey: 'items',
    itemTextKey: 'text',
    itemTextRightKey: 'textRight',
    itemIdKey: 'id'
};

Droplist.propTypes = {
    classes: _propTypes2.default.object,
    className: _propTypes2.default.string,
    id: _propTypes2.default.string,
    style: _propTypes2.default.object,
    items: _propTypes2.default.array,
    term: _propTypes2.default.string,
    onClick: _propTypes2.default.func,
    groups: _propTypes2.default.bool,
    groupNameKey: _propTypes2.default.string,
    groupIdKey: _propTypes2.default.string,
    groupItemsKey: _propTypes2.default.string,
    itemTextKey: _propTypes2.default.string,
    itemTextRightKey: _propTypes2.default.string,
    itemIdKey: _propTypes2.default.string
};

exports.default = Droplist;