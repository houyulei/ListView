'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _defineProperty = require('babel-runtime/core-js/object/define-property');

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _desc, _value, _class, _descriptor; /**
                                         * @file DateSource.js
                                         * @author houyl@jingoal.com
                                         *
                                         * 长列表数据模型(mobx)
                                         */


var _mobx = require('mobx');

var _GroupState = require('./GroupState');

var _GroupState2 = _interopRequireDefault(_GroupState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    (0, _defineProperty2.default)(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var DateSource = (_class = function () {
    function DateSource() {
        var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        (0, _classCallCheck3.default)(this, DateSource);

        _initDefineProp(this, 'groups', _descriptor, this);

        this.scrollTop = 0;

        this.value = value;
        this.start = 0;
    }

    (0, _createClass3.default)(DateSource, [{
        key: 'set',
        value: function set(options) {
            (0, _assign2.default)(this, options);
        }
    }, {
        key: 'generate',
        value: function generate() {
            var _this = this;

            this.value.slice(this.start).forEach(function (data, index) {
                var hashIndex = parseInt((_this.start + index) / _this.rowsInGroup, 10);
                if (_this.groups.length === hashIndex) {
                    _this.groups[hashIndex] = new _GroupState2.default({
                        id: hashIndex,
                        top: _this.groups[hashIndex - 1] ? _this.groups[hashIndex - 1].top + _this.groups[hashIndex - 1].height : 0,
                        scrollTop: _this.scrollTop
                    });
                }

                if (!_this.rowHeight) {
                    _this.groups[hashIndex].height = null;
                }

                if (typeof _this.rowHeight === 'number') {
                    _this.groups[hashIndex].height += _this.rowHeight;
                }

                if (typeof _this.rowHeight === 'function') {
                    _this.groups[hashIndex].height += _this.rowHeight(data, index);
                }

                _this.groups[hashIndex].data.push(data);
            });
            this.start = this.value.length;
        }
    }, {
        key: 'updateGroupHeight',
        value: function updateGroupHeight(id, height) {
            this.groups[id].update({
                height: height,
                top: this.groups[id - 1] ? this.groups[id - 1].top + this.groups[id - 1].height : 0
            });
        }
    }, {
        key: 'updateScrollTop',
        value: function updateScrollTop(scrollTop) {
            this.scrollTop = scrollTop;
            this.groups.forEach(function (group) {
                group.update({
                    scrollTop: scrollTop
                });
            });
        }
    }, {
        key: 'append',
        value: function append(values) {
            var arr = values;
            if (!Array.isArray(values)) {
                arr = [values];
            }

            this.value = this.value.concat(arr);

            this.generate();
        }
    }, {
        key: 'replace',
        value: function replace(value) {
            this.value = value;
            this.start = 0;
            this.groups = [];
            this.generate();
        }
    }, {
        key: 'clear',
        value: function clear() {
            this.value = [];
            this.start = 0;
            this.groups = [];
        }
    }]);
    return DateSource;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'groups', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return [];
    }
}), _applyDecoratedDescriptor(_class.prototype, 'generate', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'generate'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'updateGroupHeight', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'updateGroupHeight'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'updateScrollTop', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'updateScrollTop'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'append', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'append'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'replace', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'replace'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'clear', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'clear'), _class.prototype)), _class);
exports.default = DateSource;