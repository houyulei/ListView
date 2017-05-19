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

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

var _mobx = require('mobx');

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

var GroupState = (_class = function () {
    (0, _createClass3.default)(GroupState, [{
        key: 'inView',
        get: function get() {
            if (this.height) {
                return this.scrollTop < -this.top + 1000 && this.scrollTop > -this.top - this.height - 1000;
            }
            return true;
        }
    }]);

    function GroupState(prop) {
        (0, _classCallCheck3.default)(this, GroupState);

        _initDefineProp(this, 'id', _descriptor, this);

        _initDefineProp(this, 'top', _descriptor2, this);

        _initDefineProp(this, 'height', _descriptor3, this);

        _initDefineProp(this, 'data', _descriptor4, this);

        _initDefineProp(this, 'scrollTop', _descriptor5, this);

        (0, _assign2.default)(this, prop);
    }

    (0, _createClass3.default)(GroupState, [{
        key: 'update',
        value: function update(prop) {
            (0, _assign2.default)(this, prop);
        }
    }]);
    return GroupState;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'id', [_mobx.observable], {
    enumerable: true,
    initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'top', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return 0;
    }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'height', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'data', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return [];
    }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'scrollTop', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return 0;
    }
}), _applyDecoratedDescriptor(_class.prototype, 'inView', [_mobx.computed], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'inView'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'update', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'update'), _class.prototype)), _class);
exports.default = GroupState;