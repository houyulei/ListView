'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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
                             * @file GroupView.jsx
                             * @author houyl@jingoal.com yanwx@jingoal.com
                             *
                             * 滚动拆分分组
                             * 实际监听滚动的组件，用来将子组件进行虚拟化
                             */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require('mobx-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GroupView = (0, _mobxReact.observer)(_class = (_temp = _class2 = function (_Component) {
    (0, _inherits3.default)(GroupView, _Component);

    function GroupView() {
        (0, _classCallCheck3.default)(this, GroupView);
        return (0, _possibleConstructorReturn3.default)(this, (GroupView.__proto__ || (0, _getPrototypeOf2.default)(GroupView)).apply(this, arguments));
    }

    (0, _createClass3.default)(GroupView, [{
        key: 'updateHeight',
        value: function updateHeight() {
            if (!this.props.store.height) {
                this.props.updateHeight(this.props.store.id, this.element.offsetHeight);
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.updateHeight();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.updateHeight();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            if (this.props.store.inView) {
                return _react2.default.createElement(
                    'div',
                    { ref: function ref(_ref) {
                            _this2.element = _ref;
                        } },
                    this.props.store.data.map(function (data) {
                        return _this2.props.rowRenderer(data);
                    })
                );
            }
            return _react2.default.createElement('div', { style: { height: this.props.store.height + 'px' } });
        }
    }]);
    return GroupView;
}(_react.Component), _class2.propTypes = {
    store: _react.PropTypes.shape({
        id: _react.PropTypes.number,
        top: _react.PropTypes.number,
        height: _react.PropTypes.number,
        data: _react.PropTypes.object
    }),
    updateHeight: _react.PropTypes.func,
    rowRenderer: _react.PropTypes.func
}, _class2.defaultProps = {}, _temp)) || _class;

exports.default = GroupView;