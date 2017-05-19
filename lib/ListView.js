'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _class2, _temp; /**
                             *  @file ListView.jsx
                             *  @author houyl@jingoal.com yanwx@jingoal.com
                             *
                             *  根据dataSource分组渲染
                             */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require('mobx-react');

var _silkScroller = require('silk-scroller');

var _silkScroller2 = _interopRequireDefault(_silkScroller);

var _GroupView = require('./GroupView');

var _GroupView2 = _interopRequireDefault(_GroupView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function throttle(func, wait) {
    var last = 0;
    return function () {
        var curr = +new Date();
        if (curr - last > wait) {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            func.apply(this, args);
            last = curr;
        }
    };
}

var ListView = (0, _mobxReact.observer)(_class = (_temp = _class2 = function (_Component) {
    (0, _inherits3.default)(ListView, _Component);

    function ListView(props) {
        (0, _classCallCheck3.default)(this, ListView);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ListView.__proto__ || (0, _getPrototypeOf2.default)(ListView)).call(this, props));

        _this.props.dataSource.set({
            rowHeight: _this.props.rowHeight,
            rowsInGroup: _this.props.rowsInGroup,
            scrollTop: _this.props.scrollTop
        });
        _this.props.dataSource.generate();

        _this.updateScrollTop = throttle(function (evt) {
            _this.props.dataSource.updateScrollTop(evt.contentOffset.y);
        }, 200);

        _this.updateGroupHeight = _this.updateGroupHeight.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(ListView, [{
        key: 'updateGroupHeight',
        value: function updateGroupHeight(id, height) {
            this.props.dataSource.updateGroupHeight(id, height);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                rowHeight = _props.rowHeight,
                rowsInGroup = _props.rowsInGroup,
                scrollTop = _props.scrollTop,
                rowRenderer = _props.rowRenderer,
                dataSource = _props.dataSource,
                onScroll = _props.onScroll,
                onScrollEnd = _props.onScrollEnd,
                props = (0, _objectWithoutProperties3.default)(_props, ['rowHeight', 'rowsInGroup', 'scrollTop', 'rowRenderer', 'dataSource', 'onScroll', 'onScrollEnd']);


            return _react2.default.createElement(
                _silkScroller2.default,
                (0, _extends3.default)({
                    onScroll: this.updateScrollTop,
                    onScrollEnd: this.updateScrollTop
                }, props),
                dataSource.groups.map(function (store, index) {
                    return _react2.default.createElement(_GroupView2.default, {
                        key: index,
                        store: store,
                        rowRenderer: rowRenderer,
                        updateHeight: _this2.updateGroupHeight
                    });
                })
            );
        }
    }]);
    return ListView;
}(_react.Component), _class2.propTypes = {
    rowHeight: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]),
    /**
     * 分组大小
     */
    rowsInGroup: _react.PropTypes.number,
    scrollTop: _react.PropTypes.number,
    rowRenderer: _react.PropTypes.func,
    dataSource: _react.PropTypes.object // eslint-disable-line react/forbid-prop-types
}, _class2.defaultProps = {
    rowsInGroup: 50,
    scrollTop: 0
}, _temp)) || _class;

exports.default = ListView;