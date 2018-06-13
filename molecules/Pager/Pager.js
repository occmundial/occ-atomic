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

var _Icon = require('../../elements/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Page = require('./Page');

var _Page2 = _interopRequireDefault(_Page);

var _Break = require('./Break');

var _Break2 = _interopRequireDefault(_Break);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pager = function (_React$Component) {
    _inherits(Pager, _React$Component);

    function Pager(props) {
        _classCallCheck(this, Pager);

        var _this = _possibleConstructorReturn(this, (Pager.__proto__ || Object.getPrototypeOf(Pager)).call(this, props));

        _this.state = {
            selected: props.initialPage ? props.initialPage : props.forcePage ? props.forcePage : 0
        };
        _this.callCallback = _this.callCallback.bind(_this);
        _this.handlePrevPage = _this.handlePrevPage.bind(_this);
        _this.handleNextPage = _this.handleNextPage.bind(_this);
        _this.handlePageSelected = _this.handlePageSelected.bind(_this);
        _this.getPageElement = _this.getPageElement.bind(_this);
        _this.pagination = _this.pagination.bind(_this);
        return _this;
    }

    _createClass(Pager, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _props = this.props,
                initialPage = _props.initialPage,
                disableInitialCallback = _props.disableInitialCallback;

            if (typeof initialPage != 'undefined' && !disableInitialCallback) {
                this.callCallback(initialPage);
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            if (typeof props.forcePage != 'undefined' && this.props.forcePage != props.forcePage) {
                this.setState({ selected: props.forcePage });
            }
        }
    }, {
        key: 'callCallback',
        value: function callCallback(selectedItem) {
            var onPageChange = this.props.onPageChange;

            if (typeof onPageChange != 'undefined' && typeof onPageChange == 'function') {
                onPageChange({ selected: selectedItem });
            }
        }
    }, {
        key: 'handlePrevPage',
        value: function handlePrevPage(e) {
            var selected = this.state.selected;

            e.preventDefault ? e.preventDefault() : e.returnValue = false;
            if (selected > 0) {
                this.handlePageSelected(selected - 1, e);
            }
        }
    }, {
        key: 'handleNextPage',
        value: function handleNextPage(e) {
            var selected = this.state.selected;
            var pageCount = this.props.pageCount;

            e.preventDefault ? e.preventDefault() : e.returnValue = false;
            if (selected < pageCount - 1) {
                this.handlePageSelected(selected + 1, e);
            }
        }
    }, {
        key: 'handlePageSelected',
        value: function handlePageSelected(selected, e) {
            e.preventDefault ? e.preventDefault() : e.returnValue = false;
            if (this.state.selected == selected) return;
            this.setState({ selected: selected });
            this.callCallback(selected);
        }
    }, {
        key: 'getPageElement',
        value: function getPageElement(index) {
            var selected = this.state.selected;

            return _react2.default.createElement(_Page2.default, {
                key: index,
                onClick: this.handlePageSelected.bind(null, index),
                selected: selected == index,
                page: index + 1
            });
        }
    }, {
        key: 'pagination',
        value: function pagination() {
            var _this2 = this;

            var items = [];
            var selected = this.state.selected;
            var _props2 = this.props,
                pageRangeDisplayed = _props2.pageRangeDisplayed,
                pageCount = _props2.pageCount,
                marginPagesDisplayed = _props2.marginPagesDisplayed,
                breakLabel = _props2.breakLabel;


            if (pageCount <= pageRangeDisplayed) {
                for (var index = 0; index < pageCount; index++) {
                    items.push(this.getPageElement(index));
                }
            } else {
                var leftSide = pageRangeDisplayed / 2;
                var rightSide = pageRangeDisplayed - leftSide;

                if (selected > pageCount - pageRangeDisplayed / 2) {
                    rightSide = pageCount - selected;
                    leftSide = pageRangeDisplayed - rightSide;
                } else if (selected < pageRangeDisplayed / 2) {
                    leftSide = selected;
                    rightSide = pageRangeDisplayed - leftSide;
                }

                var _index = void 0;
                var page = void 0;
                var breakView = void 0;
                var createPage = function createPage(index) {
                    return _this2.getPageElement(index);
                };

                for (_index = 0; _index < pageCount; _index++) {
                    page = _index + 1;

                    // 
                    if (page <= marginPagesDisplayed) {
                        items.push(createPage(_index));
                        continue;
                    }

                    if (page > pageCount - marginPagesDisplayed) {
                        items.push(createPage(_index));
                        continue;
                    }

                    if (_index >= selected - leftSide && _index <= selected + rightSide) {
                        items.push(createPage(_index));
                        continue;
                    }

                    if (breakLabel && items[items.length - 1] != breakView) {
                        breakView = _react2.default.createElement(_Break2.default, {
                            key: _index,
                            label: breakLabel
                        });
                        items.push(breakView);
                    }
                }
            }

            return items;
        }
    }, {
        key: 'render',
        value: function render() {
            var selected = this.state.selected;
            var _props3 = this.props,
                classes = _props3.classes,
                pageCount = _props3.pageCount,
                previousLabel = _props3.previousLabel,
                nextLabel = _props3.nextLabel,
                hideNumbers = _props3.hideNumbers,
                className = _props3.className;

            return _react2.default.createElement(
                'ul',
                { className: '' + classes.pager + (className ? ' ' + className : '') },
                _react2.default.createElement(
                    'li',
                    { className: classes.btn + ' ' + classes.prev + (selected == 0 ? ' ' + classes.disabled : ''), tabIndex: '0', onClick: this.handlePrevPage },
                    _react2.default.createElement(_Icon2.default, { iconName: 'arrowDown', colors: ['#adb4bb'] }),
                    ' ',
                    previousLabel
                ),
                !hideNumbers && this.pagination(),
                _react2.default.createElement(
                    'li',
                    { className: classes.btn + ' ' + classes.next + (selected == pageCount - 1 ? ' ' + classes.disabled : ''), tabIndex: '0', onClick: this.handleNextPage },
                    nextLabel,
                    ' ',
                    _react2.default.createElement(_Icon2.default, { iconName: 'arrowDown', colors: ['#adb4bb'] })
                )
            );
        }
    }]);

    return Pager;
}(_react2.default.Component);

Pager.propTypes = {
    classes: _propTypes2.default.object,
    className: _propTypes2.default.string,
    pageCount: _propTypes2.default.number.isRequired,
    pageRangeDisplayed: _propTypes2.default.number.isRequired,
    marginPagesDisplayed: _propTypes2.default.number.isRequired,
    previousLabel: _propTypes2.default.node,
    nextLabel: _propTypes2.default.node,
    onPageChange: _propTypes2.default.func,
    initialPage: _propTypes2.default.number,
    forcePage: _propTypes2.default.number,
    disableInitialCallback: _propTypes2.default.bool,
    hideNumbers: _propTypes2.default.bool,
    breakLabel: _propTypes2.default.string
};

Pager.defaultProps = {
    pageCount: 10,
    pageRangeDisplayed: 2,
    marginPagesDisplayed: 3,
    previousLabel: 'Previous',
    nextLabel: 'Next',
    breakLabel: '...',
    disableInitialCallback: false,
    hideNumbers: false
};

exports.default = Pager;