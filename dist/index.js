webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _getPrototypeOf = __webpack_require__(1);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(27);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(28);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(32);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(79);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(87);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(117);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _index = __webpack_require__(255);

	var _index2 = _interopRequireDefault(_index);

	__webpack_require__(306);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @file index.jsx
	 * @author houyl@jingoal.com yanwx@jingoal.com
	 *
	 * 长列表组件示例
	 */
	var data = [];
	for (var i = 0; i < 300; i++) {
	    data.push(i);
	}
	var dataSource = new _index.DateSource(data);

	var ListViewExample = function (_Component) {
	    (0, _inherits3.default)(ListViewExample, _Component);

	    function ListViewExample(props) {
	        (0, _classCallCheck3.default)(this, ListViewExample);

	        var _this = (0, _possibleConstructorReturn3.default)(this, (ListViewExample.__proto__ || (0, _getPrototypeOf2.default)(ListViewExample)).call(this, props));

	        _this.refresh = function (resolve) {
	            setTimeout(function () {
	                var arr = [];
	                for (var _i = 0; _i < 15; _i++) {
	                    arr.push(_i);
	                }

	                dataSource.replace(arr);

	                resolve();
	            }, 500);
	        };

	        _this.loadMore = function (resolve) {
	            setTimeout(function () {
	                var arr = [];
	                for (var _i2 = dataSource.value.length, len = dataSource.value.length + 15; _i2 < len; _i2++) {
	                    arr.push(_i2);
	                }

	                dataSource.append(arr);
	                resolve();
	            }, 500);
	        };

	        _this.lastScrollTop = 0;
	        _this.state = {
	            scrollTop: 0,
	            dataSource: dataSource
	        };
	        return _this;
	    }

	    (0, _createClass3.default)(ListViewExample, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(_index2.default, {
	                dataSource: dataSource,
	                rowRenderer: function rowRenderer(item) {
	                    return _react2.default.createElement(
	                        'div',
	                        { key: item, className: 'list-view-item' },
	                        'item',
	                        item + 1
	                    );
	                },
	                usePullRefresh: true,
	                pullRefreshAction: this.refresh,
	                useLoadMore: true,
	                loadMoreAction: this.loadMore
	            });
	        }
	    }]);
	    return ListViewExample;
	}(_react.Component);

	_reactDom2.default.render(_react2.default.createElement(ListViewExample, null), document.getElementById('root'));

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(2), __esModule: true };

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	module.exports = __webpack_require__(14).Object.getPrototypeOf;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(4)
	  , $getPrototypeOf = __webpack_require__(6);

	__webpack_require__(12)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(5);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(7)
	  , toObject    = __webpack_require__(4)
	  , IE_PROTO    = __webpack_require__(8)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(9)('keys')
	  , uid    = __webpack_require__(11);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(10)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(13)
	  , core    = __webpack_require__(14)
	  , fails   = __webpack_require__(23);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(10)
	  , core      = __webpack_require__(14)
	  , ctx       = __webpack_require__(15)
	  , hide      = __webpack_require__(17)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(16);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(18)
	  , createDesc = __webpack_require__(26);
	module.exports = __webpack_require__(22) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(19)
	  , IE8_DOM_DEFINE = __webpack_require__(21)
	  , toPrimitive    = __webpack_require__(25)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(22) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(20);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(22) && !__webpack_require__(23)(function(){
	  return Object.defineProperty(__webpack_require__(24)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(23)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(20)
	  , document = __webpack_require__(10).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(20);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(29);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(30), __esModule: true };

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(31);
	var $Object = __webpack_require__(14).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(13);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(22), 'Object', {defineProperty: __webpack_require__(18).f});

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(33);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(34);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(63);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(35), __esModule: true };

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(36);
	__webpack_require__(58);
	module.exports = __webpack_require__(62).f('iterator');

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(37)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(39)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(38)
	  , defined   = __webpack_require__(5);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ }),
/* 38 */
/***/ (function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(40)
	  , $export        = __webpack_require__(13)
	  , redefine       = __webpack_require__(41)
	  , hide           = __webpack_require__(17)
	  , has            = __webpack_require__(7)
	  , Iterators      = __webpack_require__(42)
	  , $iterCreate    = __webpack_require__(43)
	  , setToStringTag = __webpack_require__(56)
	  , getPrototypeOf = __webpack_require__(6)
	  , ITERATOR       = __webpack_require__(57)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ }),
/* 40 */
/***/ (function(module, exports) {

	module.exports = true;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(17);

/***/ }),
/* 42 */
/***/ (function(module, exports) {

	module.exports = {};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(44)
	  , descriptor     = __webpack_require__(26)
	  , setToStringTag = __webpack_require__(56)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(17)(IteratorPrototype, __webpack_require__(57)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(19)
	  , dPs         = __webpack_require__(45)
	  , enumBugKeys = __webpack_require__(54)
	  , IE_PROTO    = __webpack_require__(8)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(24)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(55).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(18)
	  , anObject = __webpack_require__(19)
	  , getKeys  = __webpack_require__(46);

	module.exports = __webpack_require__(22) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(47)
	  , enumBugKeys = __webpack_require__(54);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(7)
	  , toIObject    = __webpack_require__(48)
	  , arrayIndexOf = __webpack_require__(51)(false)
	  , IE_PROTO     = __webpack_require__(8)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(49)
	  , defined = __webpack_require__(5);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(50);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ }),
/* 50 */
/***/ (function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(48)
	  , toLength  = __webpack_require__(52)
	  , toIndex   = __webpack_require__(53);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(38)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(38)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ }),
/* 54 */
/***/ (function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(10).document && document.documentElement;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	var def = __webpack_require__(18).f
	  , has = __webpack_require__(7)
	  , TAG = __webpack_require__(57)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(9)('wks')
	  , uid        = __webpack_require__(11)
	  , Symbol     = __webpack_require__(10).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(59);
	var global        = __webpack_require__(10)
	  , hide          = __webpack_require__(17)
	  , Iterators     = __webpack_require__(42)
	  , TO_STRING_TAG = __webpack_require__(57)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(60)
	  , step             = __webpack_require__(61)
	  , Iterators        = __webpack_require__(42)
	  , toIObject        = __webpack_require__(48);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(39)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ }),
/* 60 */
/***/ (function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ }),
/* 61 */
/***/ (function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(57);

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(64), __esModule: true };

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(65);
	__webpack_require__(76);
	__webpack_require__(77);
	__webpack_require__(78);
	module.exports = __webpack_require__(14).Symbol;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(10)
	  , has            = __webpack_require__(7)
	  , DESCRIPTORS    = __webpack_require__(22)
	  , $export        = __webpack_require__(13)
	  , redefine       = __webpack_require__(41)
	  , META           = __webpack_require__(66).KEY
	  , $fails         = __webpack_require__(23)
	  , shared         = __webpack_require__(9)
	  , setToStringTag = __webpack_require__(56)
	  , uid            = __webpack_require__(11)
	  , wks            = __webpack_require__(57)
	  , wksExt         = __webpack_require__(62)
	  , wksDefine      = __webpack_require__(67)
	  , keyOf          = __webpack_require__(68)
	  , enumKeys       = __webpack_require__(69)
	  , isArray        = __webpack_require__(72)
	  , anObject       = __webpack_require__(19)
	  , toIObject      = __webpack_require__(48)
	  , toPrimitive    = __webpack_require__(25)
	  , createDesc     = __webpack_require__(26)
	  , _create        = __webpack_require__(44)
	  , gOPNExt        = __webpack_require__(73)
	  , $GOPD          = __webpack_require__(75)
	  , $DP            = __webpack_require__(18)
	  , $keys          = __webpack_require__(46)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(74).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(71).f  = $propertyIsEnumerable;
	  __webpack_require__(70).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(40)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(17)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(11)('meta')
	  , isObject = __webpack_require__(20)
	  , has      = __webpack_require__(7)
	  , setDesc  = __webpack_require__(18).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(23)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(10)
	  , core           = __webpack_require__(14)
	  , LIBRARY        = __webpack_require__(40)
	  , wksExt         = __webpack_require__(62)
	  , defineProperty = __webpack_require__(18).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(46)
	  , toIObject = __webpack_require__(48);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(46)
	  , gOPS    = __webpack_require__(70)
	  , pIE     = __webpack_require__(71);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ }),
/* 70 */
/***/ (function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 71 */
/***/ (function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(50);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(48)
	  , gOPN      = __webpack_require__(74).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(47)
	  , hiddenKeys = __webpack_require__(54).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(71)
	  , createDesc     = __webpack_require__(26)
	  , toIObject      = __webpack_require__(48)
	  , toPrimitive    = __webpack_require__(25)
	  , has            = __webpack_require__(7)
	  , IE8_DOM_DEFINE = __webpack_require__(21)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(22) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ }),
/* 76 */
/***/ (function(module, exports) {

	

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(67)('asyncIterator');

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(67)('observable');

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _setPrototypeOf = __webpack_require__(80);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(84);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(33);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(81), __esModule: true };

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(82);
	module.exports = __webpack_require__(14).Object.setPrototypeOf;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(13);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(83).set});

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(20)
	  , anObject = __webpack_require__(19);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(15)(Function.call, __webpack_require__(75).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(85), __esModule: true };

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(86);
	var $Object = __webpack_require__(14).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(13)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(44)});

/***/ }),
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DateSource = undefined;

	var _ListView = __webpack_require__(256);

	var _ListView2 = _interopRequireDefault(_ListView);

	var _DateSource = __webpack_require__(301);

	var _DateSource2 = _interopRequireDefault(_DateSource);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @file index.jsx
	 * @author houyl@jingoal.com
	 *
	 * 长列表组件
	 */
	_ListView2.default.DateSource = _DateSource2.default;

	exports.default = _ListView2.default;
	exports.DateSource = _DateSource2.default;

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends2 = __webpack_require__(257);

	var _extends3 = _interopRequireDefault(_extends2);

	var _objectWithoutProperties2 = __webpack_require__(262);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	var _getPrototypeOf = __webpack_require__(1);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(27);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(28);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(32);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(79);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class, _class2, _temp; /**
	                             *  @file ListView.jsx
	                             *  @author houyl@jingoal.com yanwx@jingoal.com
	                             *
	                             *  根据dataSource分组渲染
	                             */


	var _react = __webpack_require__(87);

	var _react2 = _interopRequireDefault(_react);

	var _mobxReact = __webpack_require__(263);

	var _silkScroller = __webpack_require__(265);

	var _silkScroller2 = _interopRequireDefault(_silkScroller);

	var _GroupView = __webpack_require__(300);

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

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _assign = __webpack_require__(258);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(259), __esModule: true };

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(260);
	module.exports = __webpack_require__(14).Object.assign;

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(13);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(261)});

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(46)
	  , gOPS     = __webpack_require__(70)
	  , pIE      = __webpack_require__(71)
	  , toObject = __webpack_require__(4)
	  , IObject  = __webpack_require__(49)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(23)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ }),
/* 262 */
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (obj, keys) {
	  var target = {};

	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }

	  return target;
	};

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(87), __webpack_require__(264), __webpack_require__(117));
		else if(typeof define === 'function' && define.amd)
			define(["react", "mobx", "react-dom"], factory);
		else if(typeof exports === 'object')
			exports["mobxReact"] = factory(require("react"), require("mobx"), require("react-dom"));
		else
			root["mobxReact"] = factory(root["React"], root["mobx"], root["ReactDOM"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_5__) {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			i: moduleId,
	/******/ 			l: false,
	/******/ 			exports: {}
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.l = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// identity function for calling harmony imports with the correct context
	/******/ 	__webpack_require__.i = function(value) { return value; };
	/******/
	/******/ 	// define getter function for harmony exports
	/******/ 	__webpack_require__.d = function(exports, name, getter) {
	/******/ 		if(!__webpack_require__.o(exports, name)) {
	/******/ 			Object.defineProperty(exports, name, {
	/******/ 				configurable: false,
	/******/ 				enumerable: true,
	/******/ 				get: getter
	/******/ 			});
	/******/ 		}
	/******/ 	};
	/******/
	/******/ 	// getDefaultExport function for compatibility with non-harmony modules
	/******/ 	__webpack_require__.n = function(module) {
	/******/ 		var getter = module && module.__esModule ?
	/******/ 			function getDefault() { return module['default']; } :
	/******/ 			function getModuleExports() { return module; };
	/******/ 		__webpack_require__.d(getter, 'a', getter);
	/******/ 		return getter;
	/******/ 	};
	/******/
	/******/ 	// Object.prototype.hasOwnProperty.call
	/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(__webpack_require__.s = 8);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ (function(module, exports, __webpack_require__) {

	"use strict";


	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.objectOrObservableObject = exports.arrayOrObservableArrayOf = exports.arrayOrObservableArray = exports.observableObject = exports.observableMap = exports.observableArrayOf = exports.observableArray = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _mobx = __webpack_require__(2);

	// Copied from React.PropTypes
	function createChainableTypeChecker(validate) {
	  function checkType(isRequired, props, propName, componentName, location, propFullName) {
	    for (var _len = arguments.length, rest = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
	      rest[_key - 6] = arguments[_key];
	    }

	    return (0, _mobx.untracked)(function () {
	      componentName = componentName || '<<anonymous>>';
	      propFullName = propFullName || propName;
	      if (props[propName] == null) {
	        if (isRequired) {
	          var actual = props[propName] === null ? 'null' : 'undefined';
	          return new Error('The ' + location + ' `' + propFullName + '` is marked as required ' + 'in `' + componentName + '`, but its value is `' + actual + '`.');
	        }
	        return null;
	      } else {
	        return validate.apply(undefined, [props, propName, componentName, location, propFullName].concat(rest));
	      }
	    });
	  }

	  var chainedCheckType = checkType.bind(null, false);
	  chainedCheckType.isRequired = checkType.bind(null, true);
	  return chainedCheckType;
	}

	// Copied from React.PropTypes
	function isSymbol(propType, propValue) {
	  // Native Symbol.
	  if (propType === 'symbol') {
	    return true;
	  }

	  // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	  if (propValue['@@toStringTag'] === 'Symbol') {
	    return true;
	  }

	  // Fallback for non-spec compliant Symbols which are polyfilled.
	  if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	    return true;
	  }

	  return false;
	}

	// Copied from React.PropTypes
	function getPropType(propValue) {
	  var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);
	  if (Array.isArray(propValue)) {
	    return 'array';
	  }
	  if (propValue instanceof RegExp) {
	    // Old webkits (at least until Android 4.0) return 'function' rather than
	    // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	    // passes PropTypes.object.
	    return 'object';
	  }
	  if (isSymbol(propType, propValue)) {
	    return 'symbol';
	  }
	  return propType;
	}

	// This handles more types than `getPropType`. Only used for error messages.
	// Copied from React.PropTypes
	function getPreciseType(propValue) {
	  var propType = getPropType(propValue);
	  if (propType === 'object') {
	    if (propValue instanceof Date) {
	      return 'date';
	    } else if (propValue instanceof RegExp) {
	      return 'regexp';
	    }
	  }
	  return propType;
	}

	function createObservableTypeCheckerCreator(allowNativeType, mobxType) {
	  return createChainableTypeChecker(function (props, propName, componentName, location, propFullName) {
	    return (0, _mobx.untracked)(function () {
	      if (allowNativeType) {
	        if (getPropType(props[propName]) === mobxType.toLowerCase()) return null;
	      }
	      var mobxChecker = void 0;
	      switch (mobxType) {
	        case 'Array':
	          mobxChecker = _mobx.isObservableArray;break;
	        case 'Object':
	          mobxChecker = _mobx.isObservableObject;break;
	        case 'Map':
	          mobxChecker = _mobx.isObservableMap;break;
	        default:
	          throw new Error('Unexpected mobxType: ' + mobxType);
	      }
	      var propValue = props[propName];
	      if (!mobxChecker(propValue)) {
	        var preciseType = getPreciseType(propValue);
	        var nativeTypeExpectationMessage = allowNativeType ? ' or javascript `' + mobxType.toLowerCase() + '`' : '';
	        return new Error('Invalid prop `' + propFullName + '` of type `' + preciseType + '` supplied to' + ' `' + componentName + '`, expected `mobx.Observable' + mobxType + '`' + nativeTypeExpectationMessage + '.');
	      }
	      return null;
	    });
	  });
	}

	function createObservableArrayOfTypeChecker(allowNativeType, typeChecker) {
	  return createChainableTypeChecker(function (props, propName, componentName, location, propFullName) {
	    for (var _len2 = arguments.length, rest = Array(_len2 > 5 ? _len2 - 5 : 0), _key2 = 5; _key2 < _len2; _key2++) {
	      rest[_key2 - 5] = arguments[_key2];
	    }

	    return (0, _mobx.untracked)(function () {
	      if (typeof typeChecker !== 'function') {
	        return new Error('Property `' + propFullName + '` of component `' + componentName + '` has ' + 'invalid PropType notation.');
	      }
	      var error = createObservableTypeCheckerCreator(allowNativeType, 'Array')(props, propName, componentName);
	      if (error instanceof Error) return error;
	      var propValue = props[propName];
	      for (var i = 0; i < propValue.length; i++) {
	        error = typeChecker.apply(undefined, [propValue, i, componentName, location, propFullName + '[' + i + ']'].concat(rest));
	        if (error instanceof Error) return error;
	      }
	      return null;
	    });
	  });
	}

	var observableArray = exports.observableArray = createObservableTypeCheckerCreator(false, 'Array');
	var observableArrayOf = exports.observableArrayOf = createObservableArrayOfTypeChecker.bind(null, false);
	var observableMap = exports.observableMap = createObservableTypeCheckerCreator(false, 'Map');
	var observableObject = exports.observableObject = createObservableTypeCheckerCreator(false, 'Object');
	var arrayOrObservableArray = exports.arrayOrObservableArray = createObservableTypeCheckerCreator(true, 'Array');
	var arrayOrObservableArrayOf = exports.arrayOrObservableArrayOf = createObservableArrayOfTypeChecker.bind(null, true);
	var objectOrObservableObject = exports.objectOrObservableObject = createObservableTypeCheckerCreator(true, 'Object');

	/***/ }),
	/* 1 */
	/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

	/***/ }),
	/* 2 */
	/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

	/***/ }),
	/* 3 */
	/***/ (function(module, exports, __webpack_require__) {

	"use strict";


	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = inject;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _hoistNonReactStatics = __webpack_require__(10);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _propTypes = __webpack_require__(0);

	var PropTypes = _interopRequireWildcard(_propTypes);

	var _observer = __webpack_require__(4);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var injectorContextTypes = {
	  mobxStores: PropTypes.objectOrObservableObject
	};
	Object.seal(injectorContextTypes);

	var proxiedInjectorProps = {
	  contextTypes: {
	    get: function get() {
	      return injectorContextTypes;
	    },
	    set: function set(_) {
	      console.warn("Mobx Injector: you are trying to attach `contextTypes` on an component decorated with `inject` (or `observer`) HOC. Please specify the contextTypes on the wrapped component instead. It is accessible through the `wrappedComponent`");
	    },
	    configurable: true,
	    enumerable: false
	  },
	  isMobxInjector: {
	    value: true,
	    writable: true,
	    configurable: true,
	    enumerable: true
	  }
	};

	/**
	 * Store Injection
	 */
	function createStoreInjector(grabStoresFn, component, injectNames) {
	  var _class, _temp2;

	  var displayName = "inject-" + (component.displayName || component.name || component.constructor && component.constructor.name || "Unknown");
	  if (injectNames) displayName += "-with-" + injectNames;

	  var Injector = (_temp2 = _class = function (_Component) {
	    _inherits(Injector, _Component);

	    function Injector() {
	      var _ref;

	      var _temp, _this, _ret;

	      _classCallCheck(this, Injector);

	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Injector.__proto__ || Object.getPrototypeOf(Injector)).call.apply(_ref, [this].concat(args))), _this), _this.storeRef = function (instance) {
	        _this.wrappedInstance = instance;
	      }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    _createClass(Injector, [{
	      key: 'render',
	      value: function render() {
	        // Optimization: it might be more efficient to apply the mapper function *outside* the render method
	        // (if the mapper is a function), that could avoid expensive(?) re-rendering of the injector component
	        // See this test: 'using a custom injector is not too reactive' in inject.js
	        var newProps = {};
	        for (var key in this.props) {
	          if (this.props.hasOwnProperty(key)) {
	            newProps[key] = this.props[key];
	          }
	        }var additionalProps = grabStoresFn(this.context.mobxStores || {}, newProps, this.context) || {};
	        for (var _key2 in additionalProps) {
	          newProps[_key2] = additionalProps[_key2];
	        }
	        newProps.ref = this.storeRef;

	        return _react2.default.createElement(component, newProps);
	      }
	    }]);

	    return Injector;
	  }(_react.Component), _class.displayName = displayName, _temp2);

	  // Static fields from component should be visible on the generated Injector

	  (0, _hoistNonReactStatics2.default)(Injector, component);

	  Injector.wrappedComponent = component;
	  Object.defineProperties(Injector, proxiedInjectorProps);

	  return Injector;
	}

	function grabStoresByName(storeNames) {
	  return function (baseStores, nextProps) {
	    storeNames.forEach(function (storeName) {
	      if (storeName in nextProps) // prefer props over stores
	        return;
	      if (!(storeName in baseStores)) throw new Error("MobX observer: Store '" + storeName + "' is not available! Make sure it is provided by some Provider");
	      nextProps[storeName] = baseStores[storeName];
	    });
	    return nextProps;
	  };
	}

	/**
	 * higher order component that injects stores to a child.
	 * takes either a varargs list of strings, which are stores read from the context,
	 * or a function that manually maps the available stores from the context to props:
	 * storesToProps(mobxStores, props, context) => newProps
	 */
	function inject() /* fn(stores, nextProps) or ...storeNames */{
	  var grabStoresFn = void 0;
	  if (typeof arguments[0] === "function") {
	    grabStoresFn = arguments[0];
	    return function (componentClass) {
	      var injected = createStoreInjector(grabStoresFn, componentClass);
	      injected.isMobxInjector = false; // supress warning
	      // mark the Injector as observer, to make it react to expressions in `grabStoresFn`,
	      // see #111
	      injected = (0, _observer.observer)(injected);
	      injected.isMobxInjector = true; // restore warning
	      return injected;
	    };
	  } else {
	    var storeNames = [];
	    for (var i = 0; i < arguments.length; i++) {
	      storeNames[i] = arguments[i];
	    }grabStoresFn = grabStoresByName(storeNames);
	    return function (componentClass) {
	      return createStoreInjector(grabStoresFn, componentClass, storeNames.join("-"));
	    };
	  }
	}

	/***/ }),
	/* 4 */
	/***/ (function(module, exports, __webpack_require__) {

	"use strict";


	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Observer = exports.renderReporter = exports.componentByNodeRegistery = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.trackComponents = trackComponents;
	exports.useStaticRendering = useStaticRendering;
	exports.observer = observer;

	var _mobx = __webpack_require__(2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(5);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _EventEmitter = __webpack_require__(9);

	var _EventEmitter2 = _interopRequireDefault(_EventEmitter);

	var _propTypes = __webpack_require__(0);

	var PropTypes = _interopRequireWildcard(_propTypes);

	var _inject = __webpack_require__(3);

	var _inject2 = _interopRequireDefault(_inject);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * dev tool support
	 */
	var isDevtoolsEnabled = false;

	var isUsingStaticRendering = false;

	var warnedAboutObserverInjectDeprecation = false;

	// WeakMap<Node, Object>;
	var componentByNodeRegistery = exports.componentByNodeRegistery = typeof WeakMap !== "undefined" ? new WeakMap() : undefined;
	var renderReporter = exports.renderReporter = new _EventEmitter2.default();

	function findDOMNode(component) {
	  if (_reactDom2.default) {
	    try {
	      return _reactDom2.default.findDOMNode(component);
	    } catch (e) {
	      // findDOMNode will throw in react-test-renderer, see:
	      // See https://github.com/mobxjs/mobx-react/issues/216
	      // Is there a better heuristic?
	      return null;
	    }
	  }
	  return null;
	}

	function reportRendering(component) {
	  var node = findDOMNode(component);
	  if (node && componentByNodeRegistery) componentByNodeRegistery.set(node, component);

	  renderReporter.emit({
	    event: 'render',
	    renderTime: component.__$mobRenderEnd - component.__$mobRenderStart,
	    totalTime: Date.now() - component.__$mobRenderStart,
	    component: component,
	    node: node
	  });
	}

	function trackComponents() {
	  if (typeof WeakMap === "undefined") throw new Error("[mobx-react] tracking components is not supported in this browser.");
	  if (!isDevtoolsEnabled) isDevtoolsEnabled = true;
	}

	function useStaticRendering(useStaticRendering) {
	  isUsingStaticRendering = useStaticRendering;
	}

	/**
	 * Utilities
	 */

	function patch(target, funcName) {
	  var runMixinFirst = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

	  var base = target[funcName];
	  var mixinFunc = reactiveMixin[funcName];
	  var f = !base ? mixinFunc : runMixinFirst === true ? function () {
	    mixinFunc.apply(this, arguments);
	    base.apply(this, arguments);
	  } : function () {
	    base.apply(this, arguments);
	    mixinFunc.apply(this, arguments);
	  };

	  // MWE: ideally we freeze here to protect against accidental overwrites in component instances, see #195
	  // ...but that breaks react-hot-loader, see #231...
	  target[funcName] = f;
	}

	function isObjectShallowModified(prev, next) {
	  if (null == prev || null == next || (typeof prev === 'undefined' ? 'undefined' : _typeof(prev)) !== "object" || (typeof next === 'undefined' ? 'undefined' : _typeof(next)) !== "object") {
	    return prev !== next;
	  }
	  var keys = Object.keys(prev);
	  if (keys.length !== Object.keys(next).length) {
	    return true;
	  }
	  var key = void 0;
	  for (var i = keys.length - 1; i >= 0, key = keys[i]; i--) {
	    if (next[key] !== prev[key]) {
	      return true;
	    }
	  }
	  return false;
	}

	/**
	 * ReactiveMixin
	 */
	var reactiveMixin = {
	  componentWillMount: function componentWillMount() {
	    var _this = this;

	    if (isUsingStaticRendering === true) return;
	    // Generate friendly name for debugging
	    var initialName = this.displayName || this.name || this.constructor && (this.constructor.displayName || this.constructor.name) || "<component>";
	    var rootNodeID = this._reactInternalInstance && this._reactInternalInstance._rootNodeID;

	    /**
	     * If props are shallowly modified, react will render anyway,
	     * so atom.reportChanged() should not result in yet another re-render
	     */
	    var skipRender = false;
	    /**
	     * forceUpdate will re-assign this.props. We don't want that to cause a loop,
	     * so detect these changes
	     */
	    var isForcingUpdate = false;

	    function makePropertyObservableReference(propName) {
	      var valueHolder = this[propName];
	      var atom = new _mobx.Atom("reactive " + propName);
	      Object.defineProperty(this, propName, {
	        configurable: true, enumerable: true,
	        get: function get() {
	          atom.reportObserved();
	          return valueHolder;
	        },
	        set: function set(v) {
	          if (!isForcingUpdate && isObjectShallowModified(valueHolder, v)) {
	            valueHolder = v;
	            skipRender = true;
	            atom.reportChanged();
	            skipRender = false;
	          } else {
	            valueHolder = v;
	          }
	        }
	      });
	    }

	    // make this.props an observable reference, see #124
	    makePropertyObservableReference.call(this, "props");
	    // make state an observable reference
	    makePropertyObservableReference.call(this, "state");

	    // wire up reactive render
	    var baseRender = this.render.bind(this);
	    var reaction = null;
	    var isRenderingPending = false;

	    var initialRender = function initialRender() {
	      reaction = new _mobx.Reaction(initialName + '#' + rootNodeID + '.render()', function () {
	        if (!isRenderingPending) {
	          // N.B. Getting here *before mounting* means that a component constructor has side effects (see the relevant test in misc.js)
	          // This unidiomatic React usage but React will correctly warn about this so we continue as usual
	          // See #85 / Pull #44
	          isRenderingPending = true;
	          if (typeof _this.componentWillReact === "function") _this.componentWillReact(); // TODO: wrap in action?
	          if (_this.__$mobxIsUnmounted !== true) {
	            // If we are unmounted at this point, componentWillReact() had a side effect causing the component to unmounted
	            // TODO: remove this check? Then react will properly warn about the fact that this should not happen? See #73
	            // However, people also claim this migth happen during unit tests..
	            var hasError = true;
	            try {
	              isForcingUpdate = true;
	              if (!skipRender) _react2.default.Component.prototype.forceUpdate.call(_this);
	              hasError = false;
	            } finally {
	              isForcingUpdate = false;
	              if (hasError) reaction.dispose();
	            }
	          }
	        }
	      });
	      reactiveRender.$mobx = reaction;
	      _this.render = reactiveRender;
	      return reactiveRender();
	    };

	    var reactiveRender = function reactiveRender() {
	      isRenderingPending = false;
	      var exception = undefined;
	      var rendering = undefined;
	      reaction.track(function () {
	        if (isDevtoolsEnabled) {
	          _this.__$mobRenderStart = Date.now();
	        }
	        try {
	          rendering = _mobx.extras.allowStateChanges(false, baseRender);
	        } catch (e) {
	          exception = e;
	        }
	        if (isDevtoolsEnabled) {
	          _this.__$mobRenderEnd = Date.now();
	        }
	      });
	      if (exception) throw exception;
	      return rendering;
	    };

	    this.render = initialRender;
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    if (isUsingStaticRendering === true) return;
	    this.render.$mobx && this.render.$mobx.dispose();
	    this.__$mobxIsUnmounted = true;
	    if (isDevtoolsEnabled) {
	      var node = findDOMNode(this);
	      if (node && componentByNodeRegistery) {
	        componentByNodeRegistery.delete(node);
	      }
	      renderReporter.emit({
	        event: 'destroy',
	        component: this,
	        node: node
	      });
	    }
	  },

	  componentDidMount: function componentDidMount() {
	    if (isDevtoolsEnabled) {
	      reportRendering(this);
	    }
	  },

	  componentDidUpdate: function componentDidUpdate() {
	    if (isDevtoolsEnabled) {
	      reportRendering(this);
	    }
	  },

	  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
	    if (isUsingStaticRendering) {
	      console.warn("[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.");
	    }
	    // update on any state changes (as is the default)
	    if (this.state !== nextState) {
	      return true;
	    }
	    // update if props are shallowly not equal, inspired by PureRenderMixin
	    // we could return just 'false' here, and avoid the `skipRender` checks etc
	    // however, it is nicer if lifecycle events are triggered like usually,
	    // so we return true here if props are shallowly modified.
	    return isObjectShallowModified(this.props, nextProps);
	  }
	};

	/**
	 * Observer function / decorator
	 */
	function observer(arg1, arg2) {
	  if (typeof arg1 === "string") {
	    throw new Error("Store names should be provided as array");
	  }
	  if (Array.isArray(arg1)) {
	    // component needs stores
	    if (!warnedAboutObserverInjectDeprecation) {
	      warnedAboutObserverInjectDeprecation = true;
	      console.warn('Mobx observer: Using observer to inject stores is deprecated since 4.0. Use `@inject("store1", "store2") @observer ComponentClass` or `inject("store1", "store2")(observer(componentClass))` instead of `@observer(["store1", "store2"]) ComponentClass`');
	    }
	    if (!arg2) {
	      // invoked as decorator
	      return function (componentClass) {
	        return observer(arg1, componentClass);
	      };
	    } else {
	      return _inject2.default.apply(null, arg1)(observer(arg2));
	    }
	  }
	  var componentClass = arg1;

	  if (componentClass.isMobxInjector === true) {
	    console.warn('Mobx observer: You are trying to use \'observer\' on a component that already has \'inject\'. Please apply \'observer\' before applying \'inject\'');
	  }

	  // Stateless function component:
	  // If it is function but doesn't seem to be a react class constructor,
	  // wrap it to a react class automatically
	  if (typeof componentClass === "function" && (!componentClass.prototype || !componentClass.prototype.render) && !componentClass.isReactClass && !_react2.default.Component.isPrototypeOf(componentClass)) {
	    var _class, _temp;

	    return observer((_temp = _class = function (_Component) {
	      _inherits(_class, _Component);

	      function _class() {
	        _classCallCheck(this, _class);

	        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	      }

	      _createClass(_class, [{
	        key: 'render',
	        value: function render() {
	          return componentClass.call(this, this.props, this.context);
	        }
	      }]);

	      return _class;
	    }(_react.Component), _class.displayName = componentClass.displayName || componentClass.name, _class.contextTypes = componentClass.contextTypes, _class.propTypes = componentClass.propTypes, _class.defaultProps = componentClass.defaultProps, _temp));
	  }

	  if (!componentClass) {
	    throw new Error("Please pass a valid component to 'observer'");
	  }

	  var target = componentClass.prototype || componentClass;
	  mixinLifecycleEvents(target);
	  componentClass.isMobXReactObserver = true;
	  return componentClass;
	}

	function mixinLifecycleEvents(target) {
	  patch(target, "componentWillMount", true);
	  ["componentDidMount", "componentWillUnmount", "componentDidUpdate"].forEach(function (funcName) {
	    patch(target, funcName);
	  });
	  if (!target.shouldComponentUpdate) {
	    target.shouldComponentUpdate = reactiveMixin.shouldComponentUpdate;
	  }
	}

	// TODO: support injection somehow as well?
	var Observer = exports.Observer = observer(function (_ref) {
	  var children = _ref.children;
	  return children();
	});

	Observer.propTypes = {
	  children: function children(propValue, key, componentName, location, propFullName) {
	    if (typeof propValue[key] !== 'function') return new Error('Invalid prop `' + propFullName + '` of type `' + _typeof(propValue[key]) + '` supplied to' + ' `' + componentName + '`, expected `function`.');
	  }
	};

	/***/ }),
	/* 5 */
	/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

	/***/ }),
	/* 6 */
	/***/ (function(module, exports, __webpack_require__) {

	"use strict";


	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(0);

	var PropTypes = _interopRequireWildcard(_propTypes);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var specialReactKeys = { children: true, key: true, ref: true };

	var Provider = (_temp = _class = function (_Component) {
	  _inherits(Provider, _Component);

	  function Provider() {
	    _classCallCheck(this, Provider);

	    return _possibleConstructorReturn(this, (Provider.__proto__ || Object.getPrototypeOf(Provider)).apply(this, arguments));
	  }

	  _createClass(Provider, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.Children.only(this.props.children);
	    }
	  }, {
	    key: 'getChildContext',
	    value: function getChildContext() {
	      var stores = {};
	      // inherit stores
	      var baseStores = this.context.mobxStores;
	      if (baseStores) for (var key in baseStores) {
	        stores[key] = baseStores[key];
	      }
	      // add own stores
	      for (var _key in this.props) {
	        if (!specialReactKeys[_key] && _key !== "suppressChangedStoreWarning") stores[_key] = this.props[_key];
	      }return {
	        mobxStores: stores
	      };
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      // Maybe this warning is too aggressive?
	      if (Object.keys(nextProps).length !== Object.keys(this.props).length) console.warn("MobX Provider: The set of provided stores has changed. Please avoid changing stores as the change might not propagate to all children");
	      if (!nextProps.suppressChangedStoreWarning) for (var key in nextProps) {
	        if (!specialReactKeys[key] && this.props[key] !== nextProps[key]) console.warn("MobX Provider: Provided store '" + key + "' has changed. Please avoid replacing stores as the change might not propagate to all children");
	      }
	    }
	  }]);

	  return Provider;
	}(_react.Component), _class.contextTypes = {
	  mobxStores: PropTypes.objectOrObservableObject
	}, _class.childContextTypes = {
	  mobxStores: PropTypes.objectOrObservableObject.isRequired
	}, _temp);
	exports.default = Provider;

	/***/ }),
	/* 7 */
	/***/ (function(module, exports) {

	module.exports = null


	/***/ }),
	/* 8 */
	/***/ (function(module, exports, __webpack_require__) {

	"use strict";


	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PropTypes = exports.propTypes = exports.inject = exports.Provider = exports.useStaticRendering = exports.trackComponents = exports.componentByNodeRegistery = exports.renderReporter = exports.Observer = exports.observer = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _observer = __webpack_require__(4);

	Object.defineProperty(exports, 'observer', {
	  enumerable: true,
	  get: function get() {
	    return _observer.observer;
	  }
	});
	Object.defineProperty(exports, 'Observer', {
	  enumerable: true,
	  get: function get() {
	    return _observer.Observer;
	  }
	});
	Object.defineProperty(exports, 'renderReporter', {
	  enumerable: true,
	  get: function get() {
	    return _observer.renderReporter;
	  }
	});
	Object.defineProperty(exports, 'componentByNodeRegistery', {
	  enumerable: true,
	  get: function get() {
	    return _observer.componentByNodeRegistery;
	  }
	});
	Object.defineProperty(exports, 'trackComponents', {
	  enumerable: true,
	  get: function get() {
	    return _observer.trackComponents;
	  }
	});
	Object.defineProperty(exports, 'useStaticRendering', {
	  enumerable: true,
	  get: function get() {
	    return _observer.useStaticRendering;
	  }
	});

	var _Provider = __webpack_require__(6);

	Object.defineProperty(exports, 'Provider', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Provider).default;
	  }
	});

	var _inject = __webpack_require__(3);

	Object.defineProperty(exports, 'inject', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_inject).default;
	  }
	});

	var _mobx = __webpack_require__(2);

	var mobx = _interopRequireWildcard(_mobx);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(5);

	var _reactNative = __webpack_require__(7);

	var _propTypes = __webpack_require__(0);

	var propTypes = _interopRequireWildcard(_propTypes);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TARGET_LIB_NAME = void 0;
	if (true) TARGET_LIB_NAME = 'mobx-react';
	if (false) TARGET_LIB_NAME = 'mobx-react/native';
	if (false) TARGET_LIB_NAME = 'mobx-react/custom';

	if (!mobx) throw new Error(TARGET_LIB_NAME + ' requires the MobX package');
	if (!_react2.default) throw new Error(TARGET_LIB_NAME + ' requires React to be available');

	if ("browser" === 'browser' && typeof _reactDom.unstable_batchedUpdates === "function") mobx.extras.setReactionScheduler(_reactDom.unstable_batchedUpdates);
	if (false) mobx.extras.setReactionScheduler(_reactNative.unstable_batchedUpdates);

	exports.propTypes = propTypes;
	exports.PropTypes = propTypes;
	exports.default = module.exports;

	/* DevTool support */

	if ((typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ? 'undefined' : _typeof(__MOBX_DEVTOOLS_GLOBAL_HOOK__)) === 'object') {
	  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobxReact(module.exports, mobx);
	}

	/***/ }),
	/* 9 */
	/***/ (function(module, exports, __webpack_require__) {

	"use strict";


	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var EventEmitter = function () {
	  function EventEmitter() {
	    _classCallCheck(this, EventEmitter);

	    this.listeners = [];
	  }

	  _createClass(EventEmitter, [{
	    key: "on",
	    value: function on(cb) {
	      var _this = this;

	      this.listeners.push(cb);
	      return function () {
	        var index = _this.listeners.indexOf(cb);
	        if (index !== -1) _this.listeners.splice(index, 1);
	      };
	    }
	  }, {
	    key: "emit",
	    value: function emit(data) {
	      this.listeners.forEach(function (fn) {
	        return fn(data);
	      });
	    }
	  }]);

	  return EventEmitter;
	}();

	exports.default = EventEmitter;

	/***/ }),
	/* 10 */
	/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */


	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};

	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};

	var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	        var keys = Object.getOwnPropertyNames(sourceComponent);

	        /* istanbul ignore else */
	        if (isGetOwnPropertySymbolsAvailable) {
	            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
	        }

	        for (var i = 0; i < keys.length; ++i) {
	            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
	                try {
	                    targetComponent[keys[i]] = sourceComponent[keys[i]];
	                } catch (error) {

	                }
	            }
	        }
	    }

	    return targetComponent;
	};


	/***/ })
	/******/ ]);
	});

/***/ }),
/* 264 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	registerGlobals();
	exports.extras = {
	    allowStateChanges: allowStateChanges,
	    deepEqual: deepEqual,
	    getAtom: getAtom,
	    getDebugName: getDebugName,
	    getDependencyTree: getDependencyTree,
	    getAdministration: getAdministration,
	    getGlobalState: getGlobalState,
	    getObserverTree: getObserverTree,
	    isComputingDerivation: isComputingDerivation,
	    isSpyEnabled: isSpyEnabled,
	    onReactionError: onReactionError,
	    reserveArrayBuffer: reserveArrayBuffer,
	    resetGlobalState: resetGlobalState,
	    shareGlobalState: shareGlobalState,
	    spyReport: spyReport,
	    spyReportEnd: spyReportEnd,
	    spyReportStart: spyReportStart,
	    setReactionScheduler: setReactionScheduler
	};
	if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
	    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx(module.exports);
	}
	module.exports.default = module.exports;
	var actionFieldDecorator = createClassPropertyDecorator(function (target, key, value, args, originalDescriptor) {
	    var actionName = (args && args.length === 1) ? args[0] : (value.name || key || "<unnamed action>");
	    var wrappedAction = action(actionName, value);
	    addHiddenProp(target, key, wrappedAction);
	}, function (key) {
	    return this[key];
	}, function () {
	    invariant(false, getMessage("m001"));
	}, false, true);
	var boundActionDecorator = createClassPropertyDecorator(function (target, key, value) {
	    defineBoundAction(target, key, value);
	}, function (key) {
	    return this[key];
	}, function () {
	    invariant(false, getMessage("m001"));
	}, false, false);
	var action = function action(arg1, arg2, arg3, arg4) {
	    if (arguments.length === 1 && typeof arg1 === "function")
	        return createAction(arg1.name || "<unnamed action>", arg1);
	    if (arguments.length === 2 && typeof arg2 === "function")
	        return createAction(arg1, arg2);
	    if (arguments.length === 1 && typeof arg1 === "string")
	        return namedActionDecorator(arg1);
	    return namedActionDecorator(arg2).apply(null, arguments);
	};
	exports.action = action;
	action.bound = function boundAction(arg1, arg2, arg3) {
	    if (typeof arg1 === "function") {
	        var action_1 = createAction("<not yet bound action>", arg1);
	        action_1.autoBind = true;
	        return action_1;
	    }
	    return boundActionDecorator.apply(null, arguments);
	};
	function namedActionDecorator(name) {
	    return function (target, prop, descriptor) {
	        if (descriptor && typeof descriptor.value === "function") {
	            descriptor.value = createAction(name, descriptor.value);
	            descriptor.enumerable = false;
	            descriptor.configurable = true;
	            return descriptor;
	        }
	        return actionFieldDecorator(name).apply(this, arguments);
	    };
	}
	function runInAction(arg1, arg2, arg3) {
	    var actionName = typeof arg1 === "string" ? arg1 : arg1.name || "<unnamed action>";
	    var fn = typeof arg1 === "function" ? arg1 : arg2;
	    var scope = typeof arg1 === "function" ? arg2 : arg3;
	    invariant(typeof fn === "function", getMessage("m002"));
	    invariant(fn.length === 0, getMessage("m003"));
	    invariant(typeof actionName === "string" && actionName.length > 0, "actions should have valid names, got: '" + actionName + "'");
	    return executeAction(actionName, fn, scope, undefined);
	}
	exports.runInAction = runInAction;
	function isAction(thing) {
	    return typeof thing === "function" && thing.isMobxAction === true;
	}
	exports.isAction = isAction;
	function defineBoundAction(target, propertyName, fn) {
	    var res = function () {
	        return executeAction(propertyName, fn, target, arguments);
	    };
	    res.isMobxAction = true;
	    addHiddenProp(target, propertyName, res);
	}
	function autorun(arg1, arg2, arg3) {
	    var name, view, scope;
	    if (typeof arg1 === "string") {
	        name = arg1;
	        view = arg2;
	        scope = arg3;
	    }
	    else {
	        name = arg1.name || ("Autorun@" + getNextId());
	        view = arg1;
	        scope = arg2;
	    }
	    invariant(typeof view === "function", getMessage("m004"));
	    invariant(isAction(view) === false, getMessage("m005"));
	    if (scope)
	        view = view.bind(scope);
	    var reaction = new Reaction(name, function () {
	        this.track(reactionRunner);
	    });
	    function reactionRunner() {
	        view(reaction);
	    }
	    reaction.schedule();
	    return reaction.getDisposer();
	}
	exports.autorun = autorun;
	function when(arg1, arg2, arg3, arg4) {
	    var name, predicate, effect, scope;
	    if (typeof arg1 === "string") {
	        name = arg1;
	        predicate = arg2;
	        effect = arg3;
	        scope = arg4;
	    }
	    else {
	        name = ("When@" + getNextId());
	        predicate = arg1;
	        effect = arg2;
	        scope = arg3;
	    }
	    var disposer = autorun(name, function (r) {
	        if (predicate.call(scope)) {
	            r.dispose();
	            var prevUntracked = untrackedStart();
	            effect.call(scope);
	            untrackedEnd(prevUntracked);
	        }
	    });
	    return disposer;
	}
	exports.when = when;
	function autorunAsync(arg1, arg2, arg3, arg4) {
	    var name, func, delay, scope;
	    if (typeof arg1 === "string") {
	        name = arg1;
	        func = arg2;
	        delay = arg3;
	        scope = arg4;
	    }
	    else {
	        name = arg1.name || ("AutorunAsync@" + getNextId());
	        func = arg1;
	        delay = arg2;
	        scope = arg3;
	    }
	    invariant(isAction(func) === false, getMessage("m006"));
	    if (delay === void 0)
	        delay = 1;
	    if (scope)
	        func = func.bind(scope);
	    var isScheduled = false;
	    var r = new Reaction(name, function () {
	        if (!isScheduled) {
	            isScheduled = true;
	            setTimeout(function () {
	                isScheduled = false;
	                if (!r.isDisposed)
	                    r.track(reactionRunner);
	            }, delay);
	        }
	    });
	    function reactionRunner() { func(r); }
	    r.schedule();
	    return r.getDisposer();
	}
	exports.autorunAsync = autorunAsync;
	function reaction(expression, effect, arg3) {
	    if (arguments.length > 3) {
	        fail(getMessage("m007"));
	    }
	    if (isModifierDescriptor(expression)) {
	        fail(getMessage("m008"));
	    }
	    var opts;
	    if (typeof arg3 === "object") {
	        opts = arg3;
	    }
	    else {
	        opts = {};
	    }
	    opts.name = opts.name || expression.name || effect.name || ("Reaction@" + getNextId());
	    opts.fireImmediately = arg3 === true || opts.fireImmediately === true;
	    opts.delay = opts.delay || 0;
	    opts.compareStructural = opts.compareStructural || opts.struct || false;
	    effect = action(opts.name, opts.context ? effect.bind(opts.context) : effect);
	    if (opts.context) {
	        expression = expression.bind(opts.context);
	    }
	    var firstTime = true;
	    var isScheduled = false;
	    var nextValue;
	    var r = new Reaction(opts.name, function () {
	        if (firstTime || opts.delay < 1) {
	            reactionRunner();
	        }
	        else if (!isScheduled) {
	            isScheduled = true;
	            setTimeout(function () {
	                isScheduled = false;
	                reactionRunner();
	            }, opts.delay);
	        }
	    });
	    function reactionRunner() {
	        if (r.isDisposed)
	            return;
	        var changed = false;
	        r.track(function () {
	            var v = expression(r);
	            changed = valueDidChange(opts.compareStructural, nextValue, v);
	            nextValue = v;
	        });
	        if (firstTime && opts.fireImmediately)
	            effect(nextValue, r);
	        if (!firstTime && changed === true)
	            effect(nextValue, r);
	        if (firstTime)
	            firstTime = false;
	    }
	    r.schedule();
	    return r.getDisposer();
	}
	exports.reaction = reaction;
	function createComputedDecorator(compareStructural) {
	    return createClassPropertyDecorator(function (target, name, _, __, originalDescriptor) {
	        invariant(typeof originalDescriptor !== "undefined", getMessage("m009"));
	        invariant(typeof originalDescriptor.get === "function", getMessage("m010"));
	        var adm = asObservableObject(target, "");
	        defineComputedProperty(adm, name, originalDescriptor.get, originalDescriptor.set, compareStructural, false);
	    }, function (name) {
	        var observable = this.$mobx.values[name];
	        if (observable === undefined)
	            return undefined;
	        return observable.get();
	    }, function (name, value) {
	        this.$mobx.values[name].set(value);
	    }, false, false);
	}
	var computedDecorator = createComputedDecorator(false);
	var computedStructDecorator = createComputedDecorator(true);
	var computed = (function computed(arg1, arg2, arg3) {
	    if (typeof arg2 === "string") {
	        return computedDecorator.apply(null, arguments);
	    }
	    invariant(typeof arg1 === "function", getMessage("m011"));
	    invariant(arguments.length < 3, getMessage("m012"));
	    var opts = typeof arg2 === "object" ? arg2 : {};
	    opts.setter = typeof arg2 === "function" ? arg2 : opts.setter;
	    return new ComputedValue(arg1, opts.context, opts.compareStructural || opts.struct || false, opts.name || arg1.name || "", opts.setter);
	});
	exports.computed = computed;
	computed.struct = computedStructDecorator;
	function createTransformer(transformer, onCleanup) {
	    invariant(typeof transformer === "function" && transformer.length < 2, "createTransformer expects a function that accepts one argument");
	    var objectCache = {};
	    var resetId = globalState.resetId;
	    var Transformer = (function (_super) {
	        __extends(Transformer, _super);
	        function Transformer(sourceIdentifier, sourceObject) {
	            var _this = _super.call(this, function () { return transformer(sourceObject); }, undefined, false, "Transformer-" + transformer.name + "-" + sourceIdentifier, undefined) || this;
	            _this.sourceIdentifier = sourceIdentifier;
	            _this.sourceObject = sourceObject;
	            return _this;
	        }
	        Transformer.prototype.onBecomeUnobserved = function () {
	            var lastValue = this.value;
	            _super.prototype.onBecomeUnobserved.call(this);
	            delete objectCache[this.sourceIdentifier];
	            if (onCleanup)
	                onCleanup(lastValue, this.sourceObject);
	        };
	        return Transformer;
	    }(ComputedValue));
	    return function (object) {
	        if (resetId !== globalState.resetId) {
	            objectCache = {};
	            resetId = globalState.resetId;
	        }
	        var identifier = getMemoizationId(object);
	        var reactiveTransformer = objectCache[identifier];
	        if (reactiveTransformer)
	            return reactiveTransformer.get();
	        reactiveTransformer = objectCache[identifier] = new Transformer(identifier, object);
	        return reactiveTransformer.get();
	    };
	}
	exports.createTransformer = createTransformer;
	function getMemoizationId(object) {
	    if (typeof object === 'string' || typeof object === 'number')
	        return object;
	    if (object === null || typeof object !== "object")
	        throw new Error("[mobx] transform expected some kind of object or primitive value, got: " + object);
	    var tid = object.$transformId;
	    if (tid === undefined) {
	        tid = getNextId();
	        addHiddenProp(object, "$transformId", tid);
	    }
	    return tid;
	}
	function expr(expr, scope) {
	    if (!isComputingDerivation())
	        console.warn(getMessage("m013"));
	    return computed(expr, { context: scope }).get();
	}
	exports.expr = expr;
	function extendObservable(target) {
	    var properties = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        properties[_i - 1] = arguments[_i];
	    }
	    return extendObservableHelper(target, deepEnhancer, properties);
	}
	exports.extendObservable = extendObservable;
	function extendShallowObservable(target) {
	    var properties = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        properties[_i - 1] = arguments[_i];
	    }
	    return extendObservableHelper(target, referenceEnhancer, properties);
	}
	exports.extendShallowObservable = extendShallowObservable;
	function extendObservableHelper(target, defaultEnhancer, properties) {
	    invariant(arguments.length >= 2, getMessage("m014"));
	    invariant(typeof target === "object", getMessage("m015"));
	    invariant(!(isObservableMap(target)), getMessage("m016"));
	    properties.forEach(function (propSet) {
	        invariant(typeof propSet === "object", getMessage("m017"));
	        invariant(!isObservable(propSet), getMessage("m018"));
	    });
	    var adm = asObservableObject(target);
	    var definedProps = {};
	    for (var i = properties.length - 1; i >= 0; i--) {
	        var propSet = properties[i];
	        for (var key in propSet)
	            if (definedProps[key] !== true && hasOwnProperty(propSet, key)) {
	                definedProps[key] = true;
	                if (target === propSet && !isPropertyConfigurable(target, key))
	                    continue;
	                var descriptor = Object.getOwnPropertyDescriptor(propSet, key);
	                defineObservablePropertyFromDescriptor(adm, key, descriptor, defaultEnhancer);
	            }
	    }
	    return target;
	}
	function getDependencyTree(thing, property) {
	    return nodeToDependencyTree(getAtom(thing, property));
	}
	function nodeToDependencyTree(node) {
	    var result = {
	        name: node.name
	    };
	    if (node.observing && node.observing.length > 0)
	        result.dependencies = unique(node.observing).map(nodeToDependencyTree);
	    return result;
	}
	function getObserverTree(thing, property) {
	    return nodeToObserverTree(getAtom(thing, property));
	}
	function nodeToObserverTree(node) {
	    var result = {
	        name: node.name
	    };
	    if (hasObservers(node))
	        result.observers = getObservers(node).map(nodeToObserverTree);
	    return result;
	}
	function intercept(thing, propOrHandler, handler) {
	    if (typeof handler === "function")
	        return interceptProperty(thing, propOrHandler, handler);
	    else
	        return interceptInterceptable(thing, propOrHandler);
	}
	exports.intercept = intercept;
	function interceptInterceptable(thing, handler) {
	    return getAdministration(thing).intercept(handler);
	}
	function interceptProperty(thing, property, handler) {
	    return getAdministration(thing, property).intercept(handler);
	}
	function isComputed(value, property) {
	    if (value === null || value === undefined)
	        return false;
	    if (property !== undefined) {
	        if (isObservableObject(value) === false)
	            return false;
	        var atom = getAtom(value, property);
	        return isComputedValue(atom);
	    }
	    return isComputedValue(value);
	}
	exports.isComputed = isComputed;
	function isObservable(value, property) {
	    if (value === null || value === undefined)
	        return false;
	    if (property !== undefined) {
	        if (isObservableArray(value) || isObservableMap(value))
	            throw new Error(getMessage("m019"));
	        else if (isObservableObject(value)) {
	            var o = value.$mobx;
	            return o.values && !!o.values[property];
	        }
	        return false;
	    }
	    return isObservableObject(value) || !!value.$mobx || isAtom(value) || isReaction(value) || isComputedValue(value);
	}
	exports.isObservable = isObservable;
	var deepDecorator = createDecoratorForEnhancer(deepEnhancer);
	var shallowDecorator = createDecoratorForEnhancer(shallowEnhancer);
	var refDecorator = createDecoratorForEnhancer(referenceEnhancer);
	var deepStructDecorator = createDecoratorForEnhancer(deepStructEnhancer);
	var refStructDecorator = createDecoratorForEnhancer(refStructEnhancer);
	function createObservable(v) {
	    if (v === void 0) { v = undefined; }
	    if (typeof arguments[1] === "string")
	        return deepDecorator.apply(null, arguments);
	    invariant(arguments.length <= 1, getMessage("m021"));
	    invariant(!isModifierDescriptor(v), getMessage("m020"));
	    if (isObservable(v))
	        return v;
	    var res = deepEnhancer(v, undefined, undefined);
	    if (res !== v)
	        return res;
	    return observable.box(v);
	}
	var IObservableFactories = (function () {
	    function IObservableFactories() {
	    }
	    IObservableFactories.prototype.box = function (value, name) {
	        if (arguments.length > 2)
	            incorrectlyUsedAsDecorator("box");
	        return new ObservableValue(value, deepEnhancer, name);
	    };
	    IObservableFactories.prototype.shallowBox = function (value, name) {
	        if (arguments.length > 2)
	            incorrectlyUsedAsDecorator("shallowBox");
	        return new ObservableValue(value, referenceEnhancer, name);
	    };
	    IObservableFactories.prototype.array = function (initialValues, name) {
	        if (arguments.length > 2)
	            incorrectlyUsedAsDecorator("array");
	        return new ObservableArray(initialValues, deepEnhancer, name);
	    };
	    IObservableFactories.prototype.shallowArray = function (initialValues, name) {
	        if (arguments.length > 2)
	            incorrectlyUsedAsDecorator("shallowArray");
	        return new ObservableArray(initialValues, referenceEnhancer, name);
	    };
	    IObservableFactories.prototype.map = function (initialValues, name) {
	        if (arguments.length > 2)
	            incorrectlyUsedAsDecorator("map");
	        return new ObservableMap(initialValues, deepEnhancer, name);
	    };
	    IObservableFactories.prototype.shallowMap = function (initialValues, name) {
	        if (arguments.length > 2)
	            incorrectlyUsedAsDecorator("shallowMap");
	        return new ObservableMap(initialValues, referenceEnhancer, name);
	    };
	    IObservableFactories.prototype.object = function (props, name) {
	        if (arguments.length > 2)
	            incorrectlyUsedAsDecorator("object");
	        var res = {};
	        asObservableObject(res, name);
	        extendObservable(res, props);
	        return res;
	    };
	    IObservableFactories.prototype.shallowObject = function (props, name) {
	        if (arguments.length > 2)
	            incorrectlyUsedAsDecorator("shallowObject");
	        var res = {};
	        asObservableObject(res, name);
	        extendShallowObservable(res, props);
	        return res;
	    };
	    IObservableFactories.prototype.ref = function () {
	        if (arguments.length < 2) {
	            return createModifierDescriptor(referenceEnhancer, arguments[0]);
	        }
	        else {
	            return refDecorator.apply(null, arguments);
	        }
	    };
	    IObservableFactories.prototype.shallow = function () {
	        if (arguments.length < 2) {
	            return createModifierDescriptor(shallowEnhancer, arguments[0]);
	        }
	        else {
	            return shallowDecorator.apply(null, arguments);
	        }
	    };
	    IObservableFactories.prototype.deep = function () {
	        if (arguments.length < 2) {
	            return createModifierDescriptor(deepEnhancer, arguments[0]);
	        }
	        else {
	            return deepDecorator.apply(null, arguments);
	        }
	    };
	    IObservableFactories.prototype.struct = function () {
	        if (arguments.length < 2) {
	            return createModifierDescriptor(deepStructEnhancer, arguments[0]);
	        }
	        else {
	            return deepStructDecorator.apply(null, arguments);
	        }
	    };
	    return IObservableFactories;
	}());
	exports.IObservableFactories = IObservableFactories;
	var observable = createObservable;
	exports.observable = observable;
	Object.keys(IObservableFactories.prototype).forEach(function (key) { return observable[key] = IObservableFactories.prototype[key]; });
	observable.deep.struct = observable.struct;
	observable.ref.struct = function () {
	    if (arguments.length < 2) {
	        return createModifierDescriptor(refStructEnhancer, arguments[0]);
	    }
	    else {
	        return refStructDecorator.apply(null, arguments);
	    }
	};
	function incorrectlyUsedAsDecorator(methodName) {
	    fail("Expected one or two arguments to observable." + methodName + ". Did you accidentally try to use observable." + methodName + " as decorator?");
	}
	function createDecoratorForEnhancer(enhancer) {
	    invariant(!!enhancer, ":(");
	    return createClassPropertyDecorator(function (target, name, baseValue, _, baseDescriptor) {
	        assertPropertyConfigurable(target, name);
	        invariant(!baseDescriptor || !baseDescriptor.get, getMessage("m022"));
	        var adm = asObservableObject(target, undefined);
	        defineObservableProperty(adm, name, baseValue, enhancer);
	    }, function (name) {
	        var observable = this.$mobx.values[name];
	        if (observable === undefined)
	            return undefined;
	        return observable.get();
	    }, function (name, value) {
	        setPropertyValue(this, name, value);
	    }, true, false);
	}
	function observe(thing, propOrCb, cbOrFire, fireImmediately) {
	    if (typeof cbOrFire === "function")
	        return observeObservableProperty(thing, propOrCb, cbOrFire, fireImmediately);
	    else
	        return observeObservable(thing, propOrCb, cbOrFire);
	}
	exports.observe = observe;
	function observeObservable(thing, listener, fireImmediately) {
	    return getAdministration(thing).observe(listener, fireImmediately);
	}
	function observeObservableProperty(thing, property, listener, fireImmediately) {
	    return getAdministration(thing, property).observe(listener, fireImmediately);
	}
	function toJS(source, detectCycles, __alreadySeen) {
	    if (detectCycles === void 0) { detectCycles = true; }
	    if (__alreadySeen === void 0) { __alreadySeen = []; }
	    function cache(value) {
	        if (detectCycles)
	            __alreadySeen.push([source, value]);
	        return value;
	    }
	    if (isObservable(source)) {
	        if (detectCycles && __alreadySeen === null)
	            __alreadySeen = [];
	        if (detectCycles && source !== null && typeof source === "object") {
	            for (var i = 0, l = __alreadySeen.length; i < l; i++)
	                if (__alreadySeen[i][0] === source)
	                    return __alreadySeen[i][1];
	        }
	        if (isObservableArray(source)) {
	            var res = cache([]);
	            var toAdd = source.map(function (value) { return toJS(value, detectCycles, __alreadySeen); });
	            res.length = toAdd.length;
	            for (var i = 0, l = toAdd.length; i < l; i++)
	                res[i] = toAdd[i];
	            return res;
	        }
	        if (isObservableObject(source)) {
	            var res = cache({});
	            for (var key in source)
	                res[key] = toJS(source[key], detectCycles, __alreadySeen);
	            return res;
	        }
	        if (isObservableMap(source)) {
	            var res_1 = cache({});
	            source.forEach(function (value, key) { return res_1[key] = toJS(value, detectCycles, __alreadySeen); });
	            return res_1;
	        }
	        if (isObservableValue(source))
	            return toJS(source.get(), detectCycles, __alreadySeen);
	    }
	    return source;
	}
	exports.toJS = toJS;
	function transaction(action, thisArg) {
	    if (thisArg === void 0) { thisArg = undefined; }
	    deprecated(getMessage("m023"));
	    return runInTransaction.apply(undefined, arguments);
	}
	exports.transaction = transaction;
	function runInTransaction(action, thisArg) {
	    if (thisArg === void 0) { thisArg = undefined; }
	    return executeAction("", action);
	}
	function log(msg) {
	    console.log(msg);
	    return msg;
	}
	function whyRun(thing, prop) {
	    switch (arguments.length) {
	        case 0:
	            thing = globalState.trackingDerivation;
	            if (!thing)
	                return log(getMessage("m024"));
	            break;
	        case 2:
	            thing = getAtom(thing, prop);
	            break;
	    }
	    thing = getAtom(thing);
	    if (isComputedValue(thing))
	        return log(thing.whyRun());
	    else if (isReaction(thing))
	        return log(thing.whyRun());
	    return fail(getMessage("m025"));
	}
	exports.whyRun = whyRun;
	function createAction(actionName, fn) {
	    invariant(typeof fn === "function", getMessage("m026"));
	    invariant(typeof actionName === "string" && actionName.length > 0, "actions should have valid names, got: '" + actionName + "'");
	    var res = function () {
	        return executeAction(actionName, fn, this, arguments);
	    };
	    res.originalFn = fn;
	    res.isMobxAction = true;
	    return res;
	}
	function executeAction(actionName, fn, scope, args) {
	    var runInfo = startAction(actionName, fn, scope, args);
	    try {
	        return fn.apply(scope, args);
	    }
	    finally {
	        endAction(runInfo);
	    }
	}
	function startAction(actionName, fn, scope, args) {
	    var notifySpy = isSpyEnabled() && !!actionName;
	    var startTime = 0;
	    if (notifySpy) {
	        startTime = Date.now();
	        var l = (args && args.length) || 0;
	        var flattendArgs = new Array(l);
	        if (l > 0)
	            for (var i = 0; i < l; i++)
	                flattendArgs[i] = args[i];
	        spyReportStart({
	            type: "action",
	            name: actionName,
	            fn: fn,
	            object: scope,
	            arguments: flattendArgs
	        });
	    }
	    var prevDerivation = untrackedStart();
	    startBatch();
	    var prevAllowStateChanges = allowStateChangesStart(true);
	    return {
	        prevDerivation: prevDerivation,
	        prevAllowStateChanges: prevAllowStateChanges,
	        notifySpy: notifySpy,
	        startTime: startTime
	    };
	}
	function endAction(runInfo) {
	    allowStateChangesEnd(runInfo.prevAllowStateChanges);
	    endBatch();
	    untrackedEnd(runInfo.prevDerivation);
	    if (runInfo.notifySpy)
	        spyReportEnd({ time: Date.now() - runInfo.startTime });
	}
	function useStrict(strict) {
	    invariant(globalState.trackingDerivation === null, getMessage("m028"));
	    globalState.strictMode = strict;
	    globalState.allowStateChanges = !strict;
	}
	exports.useStrict = useStrict;
	function isStrictModeEnabled() {
	    return globalState.strictMode;
	}
	exports.isStrictModeEnabled = isStrictModeEnabled;
	function allowStateChanges(allowStateChanges, func) {
	    var prev = allowStateChangesStart(allowStateChanges);
	    var res;
	    try {
	        res = func();
	    }
	    finally {
	        allowStateChangesEnd(prev);
	    }
	    return res;
	}
	function allowStateChangesStart(allowStateChanges) {
	    var prev = globalState.allowStateChanges;
	    globalState.allowStateChanges = allowStateChanges;
	    return prev;
	}
	function allowStateChangesEnd(prev) {
	    globalState.allowStateChanges = prev;
	}
	var BaseAtom = (function () {
	    function BaseAtom(name) {
	        if (name === void 0) { name = "Atom@" + getNextId(); }
	        this.name = name;
	        this.isPendingUnobservation = true;
	        this.observers = [];
	        this.observersIndexes = {};
	        this.diffValue = 0;
	        this.lastAccessedBy = 0;
	        this.lowestObserverState = IDerivationState.NOT_TRACKING;
	    }
	    BaseAtom.prototype.onBecomeUnobserved = function () {
	    };
	    BaseAtom.prototype.reportObserved = function () {
	        reportObserved(this);
	    };
	    BaseAtom.prototype.reportChanged = function () {
	        startBatch();
	        propagateChanged(this);
	        endBatch();
	    };
	    BaseAtom.prototype.toString = function () {
	        return this.name;
	    };
	    return BaseAtom;
	}());
	exports.BaseAtom = BaseAtom;
	var Atom = (function (_super) {
	    __extends(Atom, _super);
	    function Atom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
	        if (name === void 0) { name = "Atom@" + getNextId(); }
	        if (onBecomeObservedHandler === void 0) { onBecomeObservedHandler = noop; }
	        if (onBecomeUnobservedHandler === void 0) { onBecomeUnobservedHandler = noop; }
	        var _this = _super.call(this, name) || this;
	        _this.name = name;
	        _this.onBecomeObservedHandler = onBecomeObservedHandler;
	        _this.onBecomeUnobservedHandler = onBecomeUnobservedHandler;
	        _this.isPendingUnobservation = false;
	        _this.isBeingTracked = false;
	        return _this;
	    }
	    Atom.prototype.reportObserved = function () {
	        startBatch();
	        _super.prototype.reportObserved.call(this);
	        if (!this.isBeingTracked) {
	            this.isBeingTracked = true;
	            this.onBecomeObservedHandler();
	        }
	        endBatch();
	        return !!globalState.trackingDerivation;
	    };
	    Atom.prototype.onBecomeUnobserved = function () {
	        this.isBeingTracked = false;
	        this.onBecomeUnobservedHandler();
	    };
	    return Atom;
	}(BaseAtom));
	exports.Atom = Atom;
	var isAtom = createInstanceofPredicate("Atom", BaseAtom);
	var ComputedValue = (function () {
	    function ComputedValue(derivation, scope, compareStructural, name, setter) {
	        this.derivation = derivation;
	        this.scope = scope;
	        this.compareStructural = compareStructural;
	        this.dependenciesState = IDerivationState.NOT_TRACKING;
	        this.observing = [];
	        this.newObserving = null;
	        this.isPendingUnobservation = false;
	        this.observers = [];
	        this.observersIndexes = {};
	        this.diffValue = 0;
	        this.runId = 0;
	        this.lastAccessedBy = 0;
	        this.lowestObserverState = IDerivationState.UP_TO_DATE;
	        this.unboundDepsCount = 0;
	        this.__mapid = "#" + getNextId();
	        this.value = undefined;
	        this.isComputing = false;
	        this.isRunningSetter = false;
	        this.name = name || "ComputedValue@" + getNextId();
	        if (setter)
	            this.setter = createAction(name + "-setter", setter);
	    }
	    ComputedValue.prototype.onBecomeStale = function () {
	        propagateMaybeChanged(this);
	    };
	    ComputedValue.prototype.onBecomeUnobserved = function () {
	        clearObserving(this);
	        this.value = undefined;
	    };
	    ComputedValue.prototype.get = function () {
	        invariant(!this.isComputing, "Cycle detected in computation " + this.name, this.derivation);
	        if (globalState.inBatch === 0) {
	            startBatch();
	            if (shouldCompute(this))
	                this.value = this.computeValue(false);
	            endBatch();
	        }
	        else {
	            reportObserved(this);
	            if (shouldCompute(this))
	                if (this.trackAndCompute())
	                    propagateChangeConfirmed(this);
	        }
	        var result = this.value;
	        if (isCaughtException(result))
	            throw result.cause;
	        return result;
	    };
	    ComputedValue.prototype.peek = function () {
	        var res = this.computeValue(false);
	        if (isCaughtException(res))
	            throw res.cause;
	        return res;
	    };
	    ComputedValue.prototype.set = function (value) {
	        if (this.setter) {
	            invariant(!this.isRunningSetter, "The setter of computed value '" + this.name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?");
	            this.isRunningSetter = true;
	            try {
	                this.setter.call(this.scope, value);
	            }
	            finally {
	                this.isRunningSetter = false;
	            }
	        }
	        else
	            invariant(false, "[ComputedValue '" + this.name + "'] It is not possible to assign a new value to a computed value.");
	    };
	    ComputedValue.prototype.trackAndCompute = function () {
	        if (isSpyEnabled()) {
	            spyReport({
	                object: this.scope,
	                type: "compute",
	                fn: this.derivation
	            });
	        }
	        var oldValue = this.value;
	        var newValue = this.value = this.computeValue(true);
	        return isCaughtException(newValue) || valueDidChange(this.compareStructural, newValue, oldValue);
	    };
	    ComputedValue.prototype.computeValue = function (track) {
	        this.isComputing = true;
	        globalState.computationDepth++;
	        var res;
	        if (track) {
	            res = trackDerivedFunction(this, this.derivation, this.scope);
	        }
	        else {
	            try {
	                res = this.derivation.call(this.scope);
	            }
	            catch (e) {
	                res = new CaughtException(e);
	            }
	        }
	        globalState.computationDepth--;
	        this.isComputing = false;
	        return res;
	    };
	    ;
	    ComputedValue.prototype.observe = function (listener, fireImmediately) {
	        var _this = this;
	        var firstTime = true;
	        var prevValue = undefined;
	        return autorun(function () {
	            var newValue = _this.get();
	            if (!firstTime || fireImmediately) {
	                var prevU = untrackedStart();
	                listener({
	                    type: "update",
	                    object: _this,
	                    newValue: newValue,
	                    oldValue: prevValue
	                });
	                untrackedEnd(prevU);
	            }
	            firstTime = false;
	            prevValue = newValue;
	        });
	    };
	    ComputedValue.prototype.toJSON = function () {
	        return this.get();
	    };
	    ComputedValue.prototype.toString = function () {
	        return this.name + "[" + this.derivation.toString() + "]";
	    };
	    ComputedValue.prototype.valueOf = function () {
	        return toPrimitive(this.get());
	    };
	    ;
	    ComputedValue.prototype.whyRun = function () {
	        var isTracking = Boolean(globalState.trackingDerivation);
	        var observing = unique(this.isComputing ? this.newObserving : this.observing).map(function (dep) { return dep.name; });
	        var observers = unique(getObservers(this).map(function (dep) { return dep.name; }));
	        return ("\nWhyRun? computation '" + this.name + "':\n * Running because: " + (isTracking ? "[active] the value of this computation is needed by a reaction" : this.isComputing ? "[get] The value of this computed was requested outside a reaction" : "[idle] not running at the moment") + "\n" +
	            (this.dependenciesState === IDerivationState.NOT_TRACKING ? getMessage("m032") :
	                " * This computation will re-run if any of the following observables changes:\n    " + joinStrings(observing) + "\n    " + ((this.isComputing && isTracking) ? " (... or any observable accessed during the remainder of the current run)" : "") + "\n\t" + getMessage("m038") + "\n\n  * If the outcome of this computation changes, the following observers will be re-run:\n    " + joinStrings(observers) + "\n"));
	    };
	    return ComputedValue;
	}());
	ComputedValue.prototype[primitiveSymbol()] = ComputedValue.prototype.valueOf;
	var isComputedValue = createInstanceofPredicate("ComputedValue", ComputedValue);
	var IDerivationState;
	(function (IDerivationState) {
	    IDerivationState[IDerivationState["NOT_TRACKING"] = -1] = "NOT_TRACKING";
	    IDerivationState[IDerivationState["UP_TO_DATE"] = 0] = "UP_TO_DATE";
	    IDerivationState[IDerivationState["POSSIBLY_STALE"] = 1] = "POSSIBLY_STALE";
	    IDerivationState[IDerivationState["STALE"] = 2] = "STALE";
	})(IDerivationState || (IDerivationState = {}));
	exports.IDerivationState = IDerivationState;
	var CaughtException = (function () {
	    function CaughtException(cause) {
	        this.cause = cause;
	    }
	    return CaughtException;
	}());
	function isCaughtException(e) {
	    return e instanceof CaughtException;
	}
	function shouldCompute(derivation) {
	    switch (derivation.dependenciesState) {
	        case IDerivationState.UP_TO_DATE: return false;
	        case IDerivationState.NOT_TRACKING:
	        case IDerivationState.STALE: return true;
	        case IDerivationState.POSSIBLY_STALE: {
	            var prevUntracked = untrackedStart();
	            var obs = derivation.observing, l = obs.length;
	            for (var i = 0; i < l; i++) {
	                var obj = obs[i];
	                if (isComputedValue(obj)) {
	                    try {
	                        obj.get();
	                    }
	                    catch (e) {
	                        untrackedEnd(prevUntracked);
	                        return true;
	                    }
	                    if (derivation.dependenciesState === IDerivationState.STALE) {
	                        untrackedEnd(prevUntracked);
	                        return true;
	                    }
	                }
	            }
	            changeDependenciesStateTo0(derivation);
	            untrackedEnd(prevUntracked);
	            return false;
	        }
	    }
	}
	function isComputingDerivation() {
	    return globalState.trackingDerivation !== null;
	}
	function checkIfStateModificationsAreAllowed(atom) {
	    var hasObservers = atom.observers.length > 0;
	    if (globalState.computationDepth > 0 && hasObservers)
	        fail(getMessage("m031") + atom.name);
	    if (!globalState.allowStateChanges && hasObservers)
	        fail(getMessage(globalState.strictMode ? "m030a" : "m030b") + atom.name);
	}
	function trackDerivedFunction(derivation, f, context) {
	    changeDependenciesStateTo0(derivation);
	    derivation.newObserving = new Array(derivation.observing.length + 100);
	    derivation.unboundDepsCount = 0;
	    derivation.runId = ++globalState.runId;
	    var prevTracking = globalState.trackingDerivation;
	    globalState.trackingDerivation = derivation;
	    var result;
	    try {
	        result = f.call(context);
	    }
	    catch (e) {
	        result = new CaughtException(e);
	    }
	    globalState.trackingDerivation = prevTracking;
	    bindDependencies(derivation);
	    return result;
	}
	function bindDependencies(derivation) {
	    var prevObserving = derivation.observing;
	    var observing = derivation.observing = derivation.newObserving;
	    var lowestNewObservingDerivationState = IDerivationState.UP_TO_DATE;
	    derivation.newObserving = null;
	    var i0 = 0, l = derivation.unboundDepsCount;
	    for (var i = 0; i < l; i++) {
	        var dep = observing[i];
	        if (dep.diffValue === 0) {
	            dep.diffValue = 1;
	            if (i0 !== i)
	                observing[i0] = dep;
	            i0++;
	        }
	        if (dep.dependenciesState > lowestNewObservingDerivationState) {
	            lowestNewObservingDerivationState = dep.dependenciesState;
	        }
	    }
	    observing.length = i0;
	    l = prevObserving.length;
	    while (l--) {
	        var dep = prevObserving[l];
	        if (dep.diffValue === 0) {
	            removeObserver(dep, derivation);
	        }
	        dep.diffValue = 0;
	    }
	    while (i0--) {
	        var dep = observing[i0];
	        if (dep.diffValue === 1) {
	            dep.diffValue = 0;
	            addObserver(dep, derivation);
	        }
	    }
	    if (lowestNewObservingDerivationState !== IDerivationState.UP_TO_DATE) {
	        derivation.dependenciesState = lowestNewObservingDerivationState;
	        derivation.onBecomeStale();
	    }
	}
	function clearObserving(derivation) {
	    var obs = derivation.observing;
	    derivation.observing = [];
	    var i = obs.length;
	    while (i--)
	        removeObserver(obs[i], derivation);
	    derivation.dependenciesState = IDerivationState.NOT_TRACKING;
	}
	function untracked(action) {
	    var prev = untrackedStart();
	    var res = action();
	    untrackedEnd(prev);
	    return res;
	}
	exports.untracked = untracked;
	function untrackedStart() {
	    var prev = globalState.trackingDerivation;
	    globalState.trackingDerivation = null;
	    return prev;
	}
	function untrackedEnd(prev) {
	    globalState.trackingDerivation = prev;
	}
	function changeDependenciesStateTo0(derivation) {
	    if (derivation.dependenciesState === IDerivationState.UP_TO_DATE)
	        return;
	    derivation.dependenciesState = IDerivationState.UP_TO_DATE;
	    var obs = derivation.observing;
	    var i = obs.length;
	    while (i--)
	        obs[i].lowestObserverState = IDerivationState.UP_TO_DATE;
	}
	var persistentKeys = ["mobxGuid", "resetId", "spyListeners", "strictMode", "runId"];
	var MobXGlobals = (function () {
	    function MobXGlobals() {
	        this.version = 5;
	        this.trackingDerivation = null;
	        this.computationDepth = 0;
	        this.runId = 0;
	        this.mobxGuid = 0;
	        this.inBatch = 0;
	        this.pendingUnobservations = [];
	        this.pendingReactions = [];
	        this.isRunningReactions = false;
	        this.allowStateChanges = true;
	        this.strictMode = false;
	        this.resetId = 0;
	        this.spyListeners = [];
	        this.globalReactionErrorHandlers = [];
	    }
	    return MobXGlobals;
	}());
	var globalState = new MobXGlobals();
	function shareGlobalState() {
	    var global = getGlobal();
	    var ownState = globalState;
	    if (global.__mobservableTrackingStack || global.__mobservableViewStack)
	        throw new Error("[mobx] An incompatible version of mobservable is already loaded.");
	    if (global.__mobxGlobal && global.__mobxGlobal.version !== ownState.version)
	        throw new Error("[mobx] An incompatible version of mobx is already loaded.");
	    if (global.__mobxGlobal)
	        globalState = global.__mobxGlobal;
	    else
	        global.__mobxGlobal = ownState;
	}
	function getGlobalState() {
	    return globalState;
	}
	function registerGlobals() {
	}
	function resetGlobalState() {
	    globalState.resetId++;
	    var defaultGlobals = new MobXGlobals();
	    for (var key in defaultGlobals)
	        if (persistentKeys.indexOf(key) === -1)
	            globalState[key] = defaultGlobals[key];
	    globalState.allowStateChanges = !globalState.strictMode;
	}
	function hasObservers(observable) {
	    return observable.observers && observable.observers.length > 0;
	}
	function getObservers(observable) {
	    return observable.observers;
	}
	function invariantObservers(observable) {
	    var list = observable.observers;
	    var map = observable.observersIndexes;
	    var l = list.length;
	    for (var i = 0; i < l; i++) {
	        var id = list[i].__mapid;
	        if (i) {
	            invariant(map[id] === i, "INTERNAL ERROR maps derivation.__mapid to index in list");
	        }
	        else {
	            invariant(!(id in map), "INTERNAL ERROR observer on index 0 shouldnt be held in map.");
	        }
	    }
	    invariant(list.length === 0 || Object.keys(map).length === list.length - 1, "INTERNAL ERROR there is no junk in map");
	}
	function addObserver(observable, node) {
	    var l = observable.observers.length;
	    if (l) {
	        observable.observersIndexes[node.__mapid] = l;
	    }
	    observable.observers[l] = node;
	    if (observable.lowestObserverState > node.dependenciesState)
	        observable.lowestObserverState = node.dependenciesState;
	}
	function removeObserver(observable, node) {
	    if (observable.observers.length === 1) {
	        observable.observers.length = 0;
	        queueForUnobservation(observable);
	    }
	    else {
	        var list = observable.observers;
	        var map_1 = observable.observersIndexes;
	        var filler = list.pop();
	        if (filler !== node) {
	            var index = map_1[node.__mapid] || 0;
	            if (index) {
	                map_1[filler.__mapid] = index;
	            }
	            else {
	                delete map_1[filler.__mapid];
	            }
	            list[index] = filler;
	        }
	        delete map_1[node.__mapid];
	    }
	}
	function queueForUnobservation(observable) {
	    if (!observable.isPendingUnobservation) {
	        observable.isPendingUnobservation = true;
	        globalState.pendingUnobservations.push(observable);
	    }
	}
	function startBatch() {
	    globalState.inBatch++;
	}
	function endBatch() {
	    if (--globalState.inBatch === 0) {
	        runReactions();
	        var list = globalState.pendingUnobservations;
	        for (var i = 0; i < list.length; i++) {
	            var observable_1 = list[i];
	            observable_1.isPendingUnobservation = false;
	            if (observable_1.observers.length === 0) {
	                observable_1.onBecomeUnobserved();
	            }
	        }
	        globalState.pendingUnobservations = [];
	    }
	}
	function reportObserved(observable) {
	    var derivation = globalState.trackingDerivation;
	    if (derivation !== null) {
	        if (derivation.runId !== observable.lastAccessedBy) {
	            observable.lastAccessedBy = derivation.runId;
	            derivation.newObserving[derivation.unboundDepsCount++] = observable;
	        }
	    }
	    else if (observable.observers.length === 0) {
	        queueForUnobservation(observable);
	    }
	}
	function invariantLOS(observable, msg) {
	    var min = getObservers(observable).reduce(function (a, b) { return Math.min(a, b.dependenciesState); }, 2);
	    if (min >= observable.lowestObserverState)
	        return;
	    throw new Error("lowestObserverState is wrong for " + msg + " because " + min + " < " + observable.lowestObserverState);
	}
	function propagateChanged(observable) {
	    if (observable.lowestObserverState === IDerivationState.STALE)
	        return;
	    observable.lowestObserverState = IDerivationState.STALE;
	    var observers = observable.observers;
	    var i = observers.length;
	    while (i--) {
	        var d = observers[i];
	        if (d.dependenciesState === IDerivationState.UP_TO_DATE)
	            d.onBecomeStale();
	        d.dependenciesState = IDerivationState.STALE;
	    }
	}
	function propagateChangeConfirmed(observable) {
	    if (observable.lowestObserverState === IDerivationState.STALE)
	        return;
	    observable.lowestObserverState = IDerivationState.STALE;
	    var observers = observable.observers;
	    var i = observers.length;
	    while (i--) {
	        var d = observers[i];
	        if (d.dependenciesState === IDerivationState.POSSIBLY_STALE)
	            d.dependenciesState = IDerivationState.STALE;
	        else if (d.dependenciesState === IDerivationState.UP_TO_DATE)
	            observable.lowestObserverState = IDerivationState.UP_TO_DATE;
	    }
	}
	function propagateMaybeChanged(observable) {
	    if (observable.lowestObserverState !== IDerivationState.UP_TO_DATE)
	        return;
	    observable.lowestObserverState = IDerivationState.POSSIBLY_STALE;
	    var observers = observable.observers;
	    var i = observers.length;
	    while (i--) {
	        var d = observers[i];
	        if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
	            d.dependenciesState = IDerivationState.POSSIBLY_STALE;
	            d.onBecomeStale();
	        }
	    }
	}
	var Reaction = (function () {
	    function Reaction(name, onInvalidate) {
	        if (name === void 0) { name = "Reaction@" + getNextId(); }
	        this.name = name;
	        this.onInvalidate = onInvalidate;
	        this.observing = [];
	        this.newObserving = [];
	        this.dependenciesState = IDerivationState.NOT_TRACKING;
	        this.diffValue = 0;
	        this.runId = 0;
	        this.unboundDepsCount = 0;
	        this.__mapid = "#" + getNextId();
	        this.isDisposed = false;
	        this._isScheduled = false;
	        this._isTrackPending = false;
	        this._isRunning = false;
	    }
	    Reaction.prototype.onBecomeStale = function () {
	        this.schedule();
	    };
	    Reaction.prototype.schedule = function () {
	        if (!this._isScheduled) {
	            this._isScheduled = true;
	            globalState.pendingReactions.push(this);
	            runReactions();
	        }
	    };
	    Reaction.prototype.isScheduled = function () {
	        return this._isScheduled;
	    };
	    Reaction.prototype.runReaction = function () {
	        if (!this.isDisposed) {
	            startBatch();
	            this._isScheduled = false;
	            if (shouldCompute(this)) {
	                this._isTrackPending = true;
	                this.onInvalidate();
	                if (this._isTrackPending && isSpyEnabled()) {
	                    spyReport({
	                        object: this,
	                        type: "scheduled-reaction"
	                    });
	                }
	            }
	            endBatch();
	        }
	    };
	    Reaction.prototype.track = function (fn) {
	        startBatch();
	        var notify = isSpyEnabled();
	        var startTime;
	        if (notify) {
	            startTime = Date.now();
	            spyReportStart({
	                object: this,
	                type: "reaction",
	                fn: fn
	            });
	        }
	        this._isRunning = true;
	        var result = trackDerivedFunction(this, fn, undefined);
	        this._isRunning = false;
	        this._isTrackPending = false;
	        if (this.isDisposed) {
	            clearObserving(this);
	        }
	        if (isCaughtException(result))
	            this.reportExceptionInDerivation(result.cause);
	        if (notify) {
	            spyReportEnd({
	                time: Date.now() - startTime
	            });
	        }
	        endBatch();
	    };
	    Reaction.prototype.reportExceptionInDerivation = function (error) {
	        var _this = this;
	        if (this.errorHandler) {
	            this.errorHandler(error, this);
	            return;
	        }
	        var message = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this;
	        var messageToUser = getMessage("m037");
	        console.error(message || messageToUser, error);
	        if (isSpyEnabled()) {
	            spyReport({
	                type: "error",
	                message: message,
	                error: error,
	                object: this
	            });
	        }
	        globalState.globalReactionErrorHandlers.forEach(function (f) { return f(error, _this); });
	    };
	    Reaction.prototype.dispose = function () {
	        if (!this.isDisposed) {
	            this.isDisposed = true;
	            if (!this._isRunning) {
	                startBatch();
	                clearObserving(this);
	                endBatch();
	            }
	        }
	    };
	    Reaction.prototype.getDisposer = function () {
	        var r = this.dispose.bind(this);
	        r.$mobx = this;
	        r.onError = registerErrorHandler;
	        return r;
	    };
	    Reaction.prototype.toString = function () {
	        return "Reaction[" + this.name + "]";
	    };
	    Reaction.prototype.whyRun = function () {
	        var observing = unique(this._isRunning ? this.newObserving : this.observing).map(function (dep) { return dep.name; });
	        return ("\nWhyRun? reaction '" + this.name + "':\n * Status: [" + (this.isDisposed ? "stopped" : this._isRunning ? "running" : this.isScheduled() ? "scheduled" : "idle") + "]\n * This reaction will re-run if any of the following observables changes:\n    " + joinStrings(observing) + "\n    " + ((this._isRunning) ? " (... or any observable accessed during the remainder of the current run)" : "") + "\n\t" + getMessage("m038") + "\n");
	    };
	    return Reaction;
	}());
	exports.Reaction = Reaction;
	function registerErrorHandler(handler) {
	    invariant(this && this.$mobx && isReaction(this.$mobx), "Invalid `this`");
	    invariant(!this.$mobx.errorHandler, "Only one onErrorHandler can be registered");
	    this.$mobx.errorHandler = handler;
	}
	function onReactionError(handler) {
	    globalState.globalReactionErrorHandlers.push(handler);
	    return function () {
	        var idx = globalState.globalReactionErrorHandlers.indexOf(handler);
	        if (idx >= 0)
	            globalState.globalReactionErrorHandlers.splice(idx, 1);
	    };
	}
	var MAX_REACTION_ITERATIONS = 100;
	var reactionScheduler = function (f) { return f(); };
	function runReactions() {
	    if (globalState.inBatch > 0 || globalState.isRunningReactions)
	        return;
	    reactionScheduler(runReactionsHelper);
	}
	function runReactionsHelper() {
	    globalState.isRunningReactions = true;
	    var allReactions = globalState.pendingReactions;
	    var iterations = 0;
	    while (allReactions.length > 0) {
	        if (++iterations === MAX_REACTION_ITERATIONS) {
	            console.error("Reaction doesn't converge to a stable state after " + MAX_REACTION_ITERATIONS + " iterations."
	                + (" Probably there is a cycle in the reactive function: " + allReactions[0]));
	            allReactions.splice(0);
	        }
	        var remainingReactions = allReactions.splice(0);
	        for (var i = 0, l = remainingReactions.length; i < l; i++)
	            remainingReactions[i].runReaction();
	    }
	    globalState.isRunningReactions = false;
	}
	var isReaction = createInstanceofPredicate("Reaction", Reaction);
	function setReactionScheduler(fn) {
	    var baseScheduler = reactionScheduler;
	    reactionScheduler = function (f) { return fn(function () { return baseScheduler(f); }); };
	}
	function isSpyEnabled() {
	    return !!globalState.spyListeners.length;
	}
	function spyReport(event) {
	    if (!globalState.spyListeners.length)
	        return;
	    var listeners = globalState.spyListeners;
	    for (var i = 0, l = listeners.length; i < l; i++)
	        listeners[i](event);
	}
	function spyReportStart(event) {
	    var change = objectAssign({}, event, { spyReportStart: true });
	    spyReport(change);
	}
	var END_EVENT = { spyReportEnd: true };
	function spyReportEnd(change) {
	    if (change)
	        spyReport(objectAssign({}, change, END_EVENT));
	    else
	        spyReport(END_EVENT);
	}
	function spy(listener) {
	    globalState.spyListeners.push(listener);
	    return once(function () {
	        var idx = globalState.spyListeners.indexOf(listener);
	        if (idx !== -1)
	            globalState.spyListeners.splice(idx, 1);
	    });
	}
	exports.spy = spy;
	function hasInterceptors(interceptable) {
	    return (interceptable.interceptors && interceptable.interceptors.length > 0);
	}
	function registerInterceptor(interceptable, handler) {
	    var interceptors = interceptable.interceptors || (interceptable.interceptors = []);
	    interceptors.push(handler);
	    return once(function () {
	        var idx = interceptors.indexOf(handler);
	        if (idx !== -1)
	            interceptors.splice(idx, 1);
	    });
	}
	function interceptChange(interceptable, change) {
	    var prevU = untrackedStart();
	    try {
	        var interceptors = interceptable.interceptors;
	        if (interceptors)
	            for (var i = 0, l = interceptors.length; i < l; i++) {
	                change = interceptors[i](change);
	                invariant(!change || change.type, "Intercept handlers should return nothing or a change object");
	                if (!change)
	                    break;
	            }
	        return change;
	    }
	    finally {
	        untrackedEnd(prevU);
	    }
	}
	function hasListeners(listenable) {
	    return listenable.changeListeners && listenable.changeListeners.length > 0;
	}
	function registerListener(listenable, handler) {
	    var listeners = listenable.changeListeners || (listenable.changeListeners = []);
	    listeners.push(handler);
	    return once(function () {
	        var idx = listeners.indexOf(handler);
	        if (idx !== -1)
	            listeners.splice(idx, 1);
	    });
	}
	function notifyListeners(listenable, change) {
	    var prevU = untrackedStart();
	    var listeners = listenable.changeListeners;
	    if (!listeners)
	        return;
	    listeners = listeners.slice();
	    for (var i = 0, l = listeners.length; i < l; i++) {
	        listeners[i](change);
	    }
	    untrackedEnd(prevU);
	}
	function asReference(value) {
	    deprecated("asReference is deprecated, use observable.ref instead");
	    return observable.ref(value);
	}
	exports.asReference = asReference;
	function asStructure(value) {
	    deprecated("asStructure is deprecated. Use observable.struct, computed.struct or reaction options instead.");
	    return observable.struct(value);
	}
	exports.asStructure = asStructure;
	function asFlat(value) {
	    deprecated("asFlat is deprecated, use observable.shallow instead");
	    return observable.shallow(value);
	}
	exports.asFlat = asFlat;
	function asMap(data) {
	    deprecated("asMap is deprecated, use observable.map or observable.shallowMap instead");
	    return observable.map(data || {});
	}
	exports.asMap = asMap;
	function isModifierDescriptor(thing) {
	    return typeof thing === "object" && thing !== null && thing.isMobxModifierDescriptor === true;
	}
	exports.isModifierDescriptor = isModifierDescriptor;
	function createModifierDescriptor(enhancer, initialValue) {
	    invariant(!isModifierDescriptor(initialValue), "Modifiers cannot be nested");
	    return {
	        isMobxModifierDescriptor: true,
	        initialValue: initialValue,
	        enhancer: enhancer
	    };
	}
	function deepEnhancer(v, _, name) {
	    if (isModifierDescriptor(v))
	        fail("You tried to assign a modifier wrapped value to a collection, please define modifiers when creating the collection, not when modifying it");
	    if (isObservable(v))
	        return v;
	    if (Array.isArray(v))
	        return observable.array(v, name);
	    if (isPlainObject(v))
	        return observable.object(v, name);
	    if (isES6Map(v))
	        return observable.map(v, name);
	    return v;
	}
	function shallowEnhancer(v, _, name) {
	    if (isModifierDescriptor(v))
	        fail("You tried to assign a modifier wrapped value to a collection, please define modifiers when creating the collection, not when modifying it");
	    if (v === undefined || v === null)
	        return v;
	    if (isObservableObject(v) || isObservableArray(v) || isObservableMap(v))
	        return v;
	    if (Array.isArray(v))
	        return observable.shallowArray(v, name);
	    if (isPlainObject(v))
	        return observable.shallowObject(v, name);
	    if (isES6Map(v))
	        return observable.shallowMap(v, name);
	    return fail("The shallow modifier / decorator can only used in combination with arrays, objects and maps");
	}
	function referenceEnhancer(newValue) {
	    return newValue;
	}
	function deepStructEnhancer(v, oldValue, name) {
	    if (deepEqual(v, oldValue))
	        return oldValue;
	    if (isObservable(v))
	        return v;
	    if (Array.isArray(v))
	        return new ObservableArray(v, deepStructEnhancer, name);
	    if (isES6Map(v))
	        return new ObservableMap(v, deepStructEnhancer, name);
	    if (isPlainObject(v)) {
	        var res = {};
	        asObservableObject(res, name);
	        extendObservableHelper(res, deepStructEnhancer, [v]);
	        return res;
	    }
	    return v;
	}
	function refStructEnhancer(v, oldValue, name) {
	    if (deepEqual(v, oldValue))
	        return oldValue;
	    return v;
	}
	var MAX_SPLICE_SIZE = 10000;
	var safariPrototypeSetterInheritanceBug = (function () {
	    var v = false;
	    var p = {};
	    Object.defineProperty(p, "0", { set: function () { v = true; } });
	    Object.create(p)["0"] = 1;
	    return v === false;
	})();
	var OBSERVABLE_ARRAY_BUFFER_SIZE = 0;
	var StubArray = (function () {
	    function StubArray() {
	    }
	    return StubArray;
	}());
	StubArray.prototype = [];
	var ObservableArrayAdministration = (function () {
	    function ObservableArrayAdministration(name, enhancer, array, owned) {
	        this.array = array;
	        this.owned = owned;
	        this.lastKnownLength = 0;
	        this.interceptors = null;
	        this.changeListeners = null;
	        this.atom = new BaseAtom(name || ("ObservableArray@" + getNextId()));
	        this.enhancer = function (newV, oldV) { return enhancer(newV, oldV, name + "[..]"); };
	    }
	    ObservableArrayAdministration.prototype.intercept = function (handler) {
	        return registerInterceptor(this, handler);
	    };
	    ObservableArrayAdministration.prototype.observe = function (listener, fireImmediately) {
	        if (fireImmediately === void 0) { fireImmediately = false; }
	        if (fireImmediately) {
	            listener({
	                object: this.array,
	                type: "splice",
	                index: 0,
	                added: this.values.slice(),
	                addedCount: this.values.length,
	                removed: [],
	                removedCount: 0
	            });
	        }
	        return registerListener(this, listener);
	    };
	    ObservableArrayAdministration.prototype.getArrayLength = function () {
	        this.atom.reportObserved();
	        return this.values.length;
	    };
	    ObservableArrayAdministration.prototype.setArrayLength = function (newLength) {
	        if (typeof newLength !== "number" || newLength < 0)
	            throw new Error("[mobx.array] Out of range: " + newLength);
	        var currentLength = this.values.length;
	        if (newLength === currentLength)
	            return;
	        else if (newLength > currentLength) {
	            var newItems = new Array(newLength - currentLength);
	            for (var i = 0; i < newLength - currentLength; i++)
	                newItems[i] = undefined;
	            this.spliceWithArray(currentLength, 0, newItems);
	        }
	        else
	            this.spliceWithArray(newLength, currentLength - newLength);
	    };
	    ObservableArrayAdministration.prototype.updateArrayLength = function (oldLength, delta) {
	        if (oldLength !== this.lastKnownLength)
	            throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed. Did you use peek() to change it?");
	        this.lastKnownLength += delta;
	        if (delta > 0 && oldLength + delta + 1 > OBSERVABLE_ARRAY_BUFFER_SIZE)
	            reserveArrayBuffer(oldLength + delta + 1);
	    };
	    ObservableArrayAdministration.prototype.spliceWithArray = function (index, deleteCount, newItems) {
	        var _this = this;
	        checkIfStateModificationsAreAllowed(this.atom);
	        var length = this.values.length;
	        if (index === undefined)
	            index = 0;
	        else if (index > length)
	            index = length;
	        else if (index < 0)
	            index = Math.max(0, length + index);
	        if (arguments.length === 1)
	            deleteCount = length - index;
	        else if (deleteCount === undefined || deleteCount === null)
	            deleteCount = 0;
	        else
	            deleteCount = Math.max(0, Math.min(deleteCount, length - index));
	        if (newItems === undefined)
	            newItems = [];
	        if (hasInterceptors(this)) {
	            var change = interceptChange(this, {
	                object: this.array,
	                type: "splice",
	                index: index,
	                removedCount: deleteCount,
	                added: newItems
	            });
	            if (!change)
	                return EMPTY_ARRAY;
	            deleteCount = change.removedCount;
	            newItems = change.added;
	        }
	        newItems = newItems.map(function (v) { return _this.enhancer(v, undefined); });
	        var lengthDelta = newItems.length - deleteCount;
	        this.updateArrayLength(length, lengthDelta);
	        var res = this.spliceItemsIntoValues(index, deleteCount, newItems);
	        if (deleteCount !== 0 || newItems.length !== 0)
	            this.notifyArraySplice(index, newItems, res);
	        return res;
	    };
	    ObservableArrayAdministration.prototype.spliceItemsIntoValues = function (index, deleteCount, newItems) {
	        if (newItems.length < MAX_SPLICE_SIZE) {
	            return (_a = this.values).splice.apply(_a, [index, deleteCount].concat(newItems));
	        }
	        else {
	            var res = this.values.slice(index, index + deleteCount);
	            this.values = this.values.slice(0, index).concat(newItems, this.values.slice(index + deleteCount));
	            return res;
	        }
	        var _a;
	    };
	    ObservableArrayAdministration.prototype.notifyArrayChildUpdate = function (index, newValue, oldValue) {
	        var notifySpy = !this.owned && isSpyEnabled();
	        var notify = hasListeners(this);
	        var change = notify || notifySpy ? {
	            object: this.array,
	            type: "update",
	            index: index, newValue: newValue, oldValue: oldValue
	        } : null;
	        if (notifySpy)
	            spyReportStart(change);
	        this.atom.reportChanged();
	        if (notify)
	            notifyListeners(this, change);
	        if (notifySpy)
	            spyReportEnd();
	    };
	    ObservableArrayAdministration.prototype.notifyArraySplice = function (index, added, removed) {
	        var notifySpy = !this.owned && isSpyEnabled();
	        var notify = hasListeners(this);
	        var change = notify || notifySpy ? {
	            object: this.array,
	            type: "splice",
	            index: index, removed: removed, added: added,
	            removedCount: removed.length,
	            addedCount: added.length
	        } : null;
	        if (notifySpy)
	            spyReportStart(change);
	        this.atom.reportChanged();
	        if (notify)
	            notifyListeners(this, change);
	        if (notifySpy)
	            spyReportEnd();
	    };
	    return ObservableArrayAdministration;
	}());
	var ObservableArray = (function (_super) {
	    __extends(ObservableArray, _super);
	    function ObservableArray(initialValues, enhancer, name, owned) {
	        if (name === void 0) { name = "ObservableArray@" + getNextId(); }
	        if (owned === void 0) { owned = false; }
	        var _this = _super.call(this) || this;
	        var adm = new ObservableArrayAdministration(name, enhancer, _this, owned);
	        addHiddenFinalProp(_this, "$mobx", adm);
	        if (initialValues && initialValues.length) {
	            adm.updateArrayLength(0, initialValues.length);
	            adm.values = initialValues.map(function (v) { return enhancer(v, undefined, name + "[..]"); });
	            adm.notifyArraySplice(0, adm.values.slice(), EMPTY_ARRAY);
	        }
	        else {
	            adm.values = [];
	        }
	        if (safariPrototypeSetterInheritanceBug) {
	            Object.defineProperty(adm.array, "0", ENTRY_0);
	        }
	        return _this;
	    }
	    ObservableArray.prototype.intercept = function (handler) {
	        return this.$mobx.intercept(handler);
	    };
	    ObservableArray.prototype.observe = function (listener, fireImmediately) {
	        if (fireImmediately === void 0) { fireImmediately = false; }
	        return this.$mobx.observe(listener, fireImmediately);
	    };
	    ObservableArray.prototype.clear = function () {
	        return this.splice(0);
	    };
	    ObservableArray.prototype.concat = function () {
	        var arrays = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            arrays[_i] = arguments[_i];
	        }
	        this.$mobx.atom.reportObserved();
	        return Array.prototype.concat.apply(this.peek(), arrays.map(function (a) { return isObservableArray(a) ? a.peek() : a; }));
	    };
	    ObservableArray.prototype.replace = function (newItems) {
	        return this.$mobx.spliceWithArray(0, this.$mobx.values.length, newItems);
	    };
	    ObservableArray.prototype.toJS = function () {
	        return this.slice();
	    };
	    ObservableArray.prototype.toJSON = function () {
	        return this.toJS();
	    };
	    ObservableArray.prototype.peek = function () {
	        return this.$mobx.values;
	    };
	    ObservableArray.prototype.find = function (predicate, thisArg, fromIndex) {
	        if (fromIndex === void 0) { fromIndex = 0; }
	        this.$mobx.atom.reportObserved();
	        var items = this.$mobx.values, l = items.length;
	        for (var i = fromIndex; i < l; i++)
	            if (predicate.call(thisArg, items[i], i, this))
	                return items[i];
	        return undefined;
	    };
	    ObservableArray.prototype.splice = function (index, deleteCount) {
	        var newItems = [];
	        for (var _i = 2; _i < arguments.length; _i++) {
	            newItems[_i - 2] = arguments[_i];
	        }
	        switch (arguments.length) {
	            case 0:
	                return [];
	            case 1:
	                return this.$mobx.spliceWithArray(index);
	            case 2:
	                return this.$mobx.spliceWithArray(index, deleteCount);
	        }
	        return this.$mobx.spliceWithArray(index, deleteCount, newItems);
	    };
	    ObservableArray.prototype.spliceWithArray = function (index, deleteCount, newItems) {
	        return this.$mobx.spliceWithArray(index, deleteCount, newItems);
	    };
	    ObservableArray.prototype.push = function () {
	        var items = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            items[_i] = arguments[_i];
	        }
	        var adm = this.$mobx;
	        adm.spliceWithArray(adm.values.length, 0, items);
	        return adm.values.length;
	    };
	    ObservableArray.prototype.pop = function () {
	        return this.splice(Math.max(this.$mobx.values.length - 1, 0), 1)[0];
	    };
	    ObservableArray.prototype.shift = function () {
	        return this.splice(0, 1)[0];
	    };
	    ObservableArray.prototype.unshift = function () {
	        var items = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            items[_i] = arguments[_i];
	        }
	        var adm = this.$mobx;
	        adm.spliceWithArray(0, 0, items);
	        return adm.values.length;
	    };
	    ObservableArray.prototype.reverse = function () {
	        this.$mobx.atom.reportObserved();
	        var clone = this.slice();
	        return clone.reverse.apply(clone, arguments);
	    };
	    ObservableArray.prototype.sort = function (compareFn) {
	        this.$mobx.atom.reportObserved();
	        var clone = this.slice();
	        return clone.sort.apply(clone, arguments);
	    };
	    ObservableArray.prototype.remove = function (value) {
	        var idx = this.$mobx.values.indexOf(value);
	        if (idx > -1) {
	            this.splice(idx, 1);
	            return true;
	        }
	        return false;
	    };
	    ObservableArray.prototype.move = function (fromIndex, toIndex) {
	        function checkIndex(index) {
	            if (index < 0) {
	                throw new Error("[mobx.array] Index out of bounds: " + index + " is negative");
	            }
	            var length = this.$mobx.values.length;
	            if (index >= length) {
	                throw new Error("[mobx.array] Index out of bounds: " + index + " is not smaller than " + length);
	            }
	        }
	        checkIndex.call(this, fromIndex);
	        checkIndex.call(this, toIndex);
	        if (fromIndex === toIndex) {
	            return;
	        }
	        var oldItems = this.$mobx.values;
	        var newItems;
	        if (fromIndex < toIndex) {
	            newItems = oldItems.slice(0, fromIndex).concat(oldItems.slice(fromIndex + 1, toIndex + 1), [oldItems[fromIndex]], oldItems.slice(toIndex + 1));
	        }
	        else {
	            newItems = oldItems.slice(0, toIndex).concat([oldItems[fromIndex]], oldItems.slice(toIndex, fromIndex), oldItems.slice(fromIndex + 1));
	        }
	        this.replace(newItems);
	    };
	    ObservableArray.prototype.toString = function () {
	        this.$mobx.atom.reportObserved();
	        return Array.prototype.toString.apply(this.$mobx.values, arguments);
	    };
	    ObservableArray.prototype.toLocaleString = function () {
	        this.$mobx.atom.reportObserved();
	        return Array.prototype.toLocaleString.apply(this.$mobx.values, arguments);
	    };
	    ObservableArray.prototype.get = function (index) {
	        var impl = this.$mobx;
	        if (impl) {
	            if (index < impl.values.length) {
	                impl.atom.reportObserved();
	                return impl.values[index];
	            }
	            console.warn("[mobx.array] Attempt to read an array index (" + index + ") that is out of bounds (" + impl.values.length + "). Please check length first. Out of bound indices will not be tracked by MobX");
	        }
	        return undefined;
	    };
	    ObservableArray.prototype.set = function (index, newValue) {
	        var adm = this.$mobx;
	        var values = adm.values;
	        if (index < values.length) {
	            checkIfStateModificationsAreAllowed(adm.atom);
	            var oldValue = values[index];
	            if (hasInterceptors(adm)) {
	                var change = interceptChange(adm, {
	                    type: "update",
	                    object: this,
	                    index: index, newValue: newValue
	                });
	                if (!change)
	                    return;
	                newValue = change.newValue;
	            }
	            newValue = adm.enhancer(newValue, oldValue);
	            var changed = newValue !== oldValue;
	            if (changed) {
	                values[index] = newValue;
	                adm.notifyArrayChildUpdate(index, newValue, oldValue);
	            }
	        }
	        else if (index === values.length) {
	            adm.spliceWithArray(index, 0, [newValue]);
	        }
	        else {
	            throw new Error("[mobx.array] Index out of bounds, " + index + " is larger than " + values.length);
	        }
	    };
	    return ObservableArray;
	}(StubArray));
	declareIterator(ObservableArray.prototype, function () {
	    return arrayAsIterator(this.slice());
	});
	makeNonEnumerable(ObservableArray.prototype, [
	    "constructor",
	    "intercept",
	    "observe",
	    "clear",
	    "concat",
	    "get",
	    "replace",
	    "toJS",
	    "toJSON",
	    "peek",
	    "find",
	    "splice",
	    "spliceWithArray",
	    "push",
	    "pop",
	    "set",
	    "shift",
	    "unshift",
	    "reverse",
	    "sort",
	    "remove",
	    "move",
	    "toString",
	    "toLocaleString"
	]);
	Object.defineProperty(ObservableArray.prototype, "length", {
	    enumerable: false,
	    configurable: true,
	    get: function () {
	        return this.$mobx.getArrayLength();
	    },
	    set: function (newLength) {
	        this.$mobx.setArrayLength(newLength);
	    }
	});
	[
	    "every",
	    "filter",
	    "forEach",
	    "indexOf",
	    "join",
	    "lastIndexOf",
	    "map",
	    "reduce",
	    "reduceRight",
	    "slice",
	    "some"
	].forEach(function (funcName) {
	    var baseFunc = Array.prototype[funcName];
	    invariant(typeof baseFunc === "function", "Base function not defined on Array prototype: '" + funcName + "'");
	    addHiddenProp(ObservableArray.prototype, funcName, function () {
	        this.$mobx.atom.reportObserved();
	        return baseFunc.apply(this.$mobx.values, arguments);
	    });
	});
	var ENTRY_0 = createArrayEntryDescriptor(0);
	function createArrayEntryDescriptor(index) {
	    return {
	        enumerable: false,
	        configurable: false,
	        get: function () {
	            return this.get(index);
	        },
	        set: function (value) {
	            this.set(index, value);
	        }
	    };
	}
	function createArrayBufferItem(index) {
	    Object.defineProperty(ObservableArray.prototype, "" + index, createArrayEntryDescriptor(index));
	}
	function reserveArrayBuffer(max) {
	    for (var index = OBSERVABLE_ARRAY_BUFFER_SIZE; index < max; index++)
	        createArrayBufferItem(index);
	    OBSERVABLE_ARRAY_BUFFER_SIZE = max;
	}
	reserveArrayBuffer(1000);
	var isObservableArrayAdministration = createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);
	function isObservableArray(thing) {
	    return isObject(thing) && isObservableArrayAdministration(thing.$mobx);
	}
	exports.isObservableArray = isObservableArray;
	var ObservableMapMarker = {};
	var ObservableMap = (function () {
	    function ObservableMap(initialData, enhancer, name) {
	        if (enhancer === void 0) { enhancer = deepEnhancer; }
	        if (name === void 0) { name = "ObservableMap@" + getNextId(); }
	        this.enhancer = enhancer;
	        this.name = name;
	        this.$mobx = ObservableMapMarker;
	        this._data = Object.create(null);
	        this._hasMap = Object.create(null);
	        this._keys = new ObservableArray(undefined, referenceEnhancer, this.name + ".keys()", true);
	        this.interceptors = null;
	        this.changeListeners = null;
	        this.merge(initialData);
	    }
	    ObservableMap.prototype._has = function (key) {
	        return typeof this._data[key] !== "undefined";
	    };
	    ObservableMap.prototype.has = function (key) {
	        if (!this.isValidKey(key))
	            return false;
	        key = "" + key;
	        if (this._hasMap[key])
	            return this._hasMap[key].get();
	        return this._updateHasMapEntry(key, false).get();
	    };
	    ObservableMap.prototype.set = function (key, value) {
	        this.assertValidKey(key);
	        key = "" + key;
	        var hasKey = this._has(key);
	        if (hasInterceptors(this)) {
	            var change = interceptChange(this, {
	                type: hasKey ? "update" : "add",
	                object: this,
	                newValue: value,
	                name: key
	            });
	            if (!change)
	                return this;
	            value = change.newValue;
	        }
	        if (hasKey) {
	            this._updateValue(key, value);
	        }
	        else {
	            this._addValue(key, value);
	        }
	        return this;
	    };
	    ObservableMap.prototype.delete = function (key) {
	        var _this = this;
	        this.assertValidKey(key);
	        key = "" + key;
	        if (hasInterceptors(this)) {
	            var change = interceptChange(this, {
	                type: "delete",
	                object: this,
	                name: key
	            });
	            if (!change)
	                return false;
	        }
	        if (this._has(key)) {
	            var notifySpy = isSpyEnabled();
	            var notify = hasListeners(this);
	            var change = notify || notifySpy ? {
	                type: "delete",
	                object: this,
	                oldValue: this._data[key].value,
	                name: key
	            } : null;
	            if (notifySpy)
	                spyReportStart(change);
	            runInTransaction(function () {
	                _this._keys.remove(key);
	                _this._updateHasMapEntry(key, false);
	                var observable = _this._data[key];
	                observable.setNewValue(undefined);
	                _this._data[key] = undefined;
	            });
	            if (notify)
	                notifyListeners(this, change);
	            if (notifySpy)
	                spyReportEnd();
	            return true;
	        }
	        return false;
	    };
	    ObservableMap.prototype._updateHasMapEntry = function (key, value) {
	        var entry = this._hasMap[key];
	        if (entry) {
	            entry.setNewValue(value);
	        }
	        else {
	            entry = this._hasMap[key] = new ObservableValue(value, referenceEnhancer, this.name + "." + key + "?", false);
	        }
	        return entry;
	    };
	    ObservableMap.prototype._updateValue = function (name, newValue) {
	        var observable = this._data[name];
	        newValue = observable.prepareNewValue(newValue);
	        if (newValue !== UNCHANGED) {
	            var notifySpy = isSpyEnabled();
	            var notify = hasListeners(this);
	            var change = notify || notifySpy ? {
	                type: "update",
	                object: this,
	                oldValue: observable.value,
	                name: name, newValue: newValue
	            } : null;
	            if (notifySpy)
	                spyReportStart(change);
	            observable.setNewValue(newValue);
	            if (notify)
	                notifyListeners(this, change);
	            if (notifySpy)
	                spyReportEnd();
	        }
	    };
	    ObservableMap.prototype._addValue = function (name, newValue) {
	        var _this = this;
	        runInTransaction(function () {
	            var observable = _this._data[name] = new ObservableValue(newValue, _this.enhancer, _this.name + "." + name, false);
	            newValue = observable.value;
	            _this._updateHasMapEntry(name, true);
	            _this._keys.push(name);
	        });
	        var notifySpy = isSpyEnabled();
	        var notify = hasListeners(this);
	        var change = notify || notifySpy ? {
	            type: "add",
	            object: this,
	            name: name, newValue: newValue
	        } : null;
	        if (notifySpy)
	            spyReportStart(change);
	        if (notify)
	            notifyListeners(this, change);
	        if (notifySpy)
	            spyReportEnd();
	    };
	    ObservableMap.prototype.get = function (key) {
	        key = "" + key;
	        if (this.has(key))
	            return this._data[key].get();
	        return undefined;
	    };
	    ObservableMap.prototype.keys = function () {
	        return arrayAsIterator(this._keys.slice());
	    };
	    ObservableMap.prototype.values = function () {
	        return arrayAsIterator(this._keys.map(this.get, this));
	    };
	    ObservableMap.prototype.entries = function () {
	        var _this = this;
	        return arrayAsIterator(this._keys.map(function (key) { return [key, _this.get(key)]; }));
	    };
	    ObservableMap.prototype.forEach = function (callback, thisArg) {
	        var _this = this;
	        this.keys().forEach(function (key) { return callback.call(thisArg, _this.get(key), key, _this); });
	    };
	    ObservableMap.prototype.merge = function (other) {
	        var _this = this;
	        if (isObservableMap(other)) {
	            other = other.toJS();
	        }
	        runInTransaction(function () {
	            if (isPlainObject(other))
	                Object.keys(other).forEach(function (key) { return _this.set(key, other[key]); });
	            else if (Array.isArray(other))
	                other.forEach(function (_a) {
	                    var key = _a[0], value = _a[1];
	                    return _this.set(key, value);
	                });
	            else if (isES6Map(other))
	                other.forEach(function (value, key) { return _this.set(key, value); });
	            else if (other !== null && other !== undefined)
	                fail("Cannot initialize map from " + other);
	        });
	        return this;
	    };
	    ObservableMap.prototype.clear = function () {
	        var _this = this;
	        runInTransaction(function () {
	            untracked(function () {
	                _this.keys().forEach(_this.delete, _this);
	            });
	        });
	    };
	    ObservableMap.prototype.replace = function (values) {
	        var _this = this;
	        runInTransaction(function () {
	            _this.clear();
	            _this.merge(values);
	        });
	        return this;
	    };
	    Object.defineProperty(ObservableMap.prototype, "size", {
	        get: function () {
	            return this._keys.length;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ObservableMap.prototype.toJS = function () {
	        var _this = this;
	        var res = {};
	        this.keys().forEach(function (key) { return res[key] = _this.get(key); });
	        return res;
	    };
	    ObservableMap.prototype.toJSON = function () {
	        return this.toJS();
	    };
	    ObservableMap.prototype.isValidKey = function (key) {
	        if (key === null || key === undefined)
	            return false;
	        if (typeof key === "string" || typeof key === "number" || typeof key === "boolean")
	            return true;
	        return false;
	    };
	    ObservableMap.prototype.assertValidKey = function (key) {
	        if (!this.isValidKey(key))
	            throw new Error("[mobx.map] Invalid key: '" + key + "', only strings, numbers and booleans are accepted as key in observable maps.");
	    };
	    ObservableMap.prototype.toString = function () {
	        var _this = this;
	        return this.name + "[{ " + this.keys().map(function (key) { return key + ": " + ("" + _this.get(key)); }).join(", ") + " }]";
	    };
	    ObservableMap.prototype.observe = function (listener, fireImmediately) {
	        invariant(fireImmediately !== true, getMessage("m033"));
	        return registerListener(this, listener);
	    };
	    ObservableMap.prototype.intercept = function (handler) {
	        return registerInterceptor(this, handler);
	    };
	    return ObservableMap;
	}());
	exports.ObservableMap = ObservableMap;
	declareIterator(ObservableMap.prototype, function () {
	    return this.entries();
	});
	function map(initialValues) {
	    deprecated("`mobx.map` is deprecated, use `new ObservableMap` or `mobx.observable.map` instead");
	    return observable.map(initialValues);
	}
	exports.map = map;
	var isObservableMap = createInstanceofPredicate("ObservableMap", ObservableMap);
	exports.isObservableMap = isObservableMap;
	var ObservableObjectAdministration = (function () {
	    function ObservableObjectAdministration(target, name) {
	        this.target = target;
	        this.name = name;
	        this.values = {};
	        this.changeListeners = null;
	        this.interceptors = null;
	    }
	    ObservableObjectAdministration.prototype.observe = function (callback, fireImmediately) {
	        invariant(fireImmediately !== true, "`observe` doesn't support the fire immediately property for observable objects.");
	        return registerListener(this, callback);
	    };
	    ObservableObjectAdministration.prototype.intercept = function (handler) {
	        return registerInterceptor(this, handler);
	    };
	    return ObservableObjectAdministration;
	}());
	function asObservableObject(target, name) {
	    if (isObservableObject(target))
	        return target.$mobx;
	    invariant(Object.isExtensible(target), getMessage("m035"));
	    if (!isPlainObject(target))
	        name = (target.constructor.name || "ObservableObject") + "@" + getNextId();
	    if (!name)
	        name = "ObservableObject@" + getNextId();
	    var adm = new ObservableObjectAdministration(target, name);
	    addHiddenFinalProp(target, "$mobx", adm);
	    return adm;
	}
	function defineObservablePropertyFromDescriptor(adm, propName, descriptor, defaultEnhancer) {
	    if (adm.values[propName]) {
	        invariant("value" in descriptor, "The property " + propName + " in " + adm.name + " is already observable, cannot redefine it as computed property");
	        adm.target[propName] = descriptor.value;
	        return;
	    }
	    if ("value" in descriptor) {
	        if (isModifierDescriptor(descriptor.value)) {
	            var modifierDescriptor = descriptor.value;
	            defineObservableProperty(adm, propName, modifierDescriptor.initialValue, modifierDescriptor.enhancer);
	        }
	        else if (isAction(descriptor.value) && descriptor.value.autoBind === true) {
	            defineBoundAction(adm.target, propName, descriptor.value.originalFn);
	        }
	        else if (isComputedValue(descriptor.value)) {
	            defineComputedPropertyFromComputedValue(adm, propName, descriptor.value);
	        }
	        else {
	            defineObservableProperty(adm, propName, descriptor.value, defaultEnhancer);
	        }
	    }
	    else {
	        defineComputedProperty(adm, propName, descriptor.get, descriptor.set, false, true);
	    }
	}
	function defineObservableProperty(adm, propName, newValue, enhancer) {
	    assertPropertyConfigurable(adm.target, propName);
	    if (hasInterceptors(adm)) {
	        var change = interceptChange(adm, {
	            object: adm.target,
	            name: propName,
	            type: "add",
	            newValue: newValue
	        });
	        if (!change)
	            return;
	        newValue = change.newValue;
	    }
	    var observable = adm.values[propName] = new ObservableValue(newValue, enhancer, adm.name + "." + propName, false);
	    newValue = observable.value;
	    Object.defineProperty(adm.target, propName, generateObservablePropConfig(propName));
	    notifyPropertyAddition(adm, adm.target, propName, newValue);
	}
	function defineComputedProperty(adm, propName, getter, setter, compareStructural, asInstanceProperty) {
	    if (asInstanceProperty)
	        assertPropertyConfigurable(adm.target, propName);
	    adm.values[propName] = new ComputedValue(getter, adm.target, compareStructural, adm.name + "." + propName, setter);
	    if (asInstanceProperty) {
	        Object.defineProperty(adm.target, propName, generateComputedPropConfig(propName));
	    }
	}
	function defineComputedPropertyFromComputedValue(adm, propName, computedValue) {
	    var name = adm.name + "." + propName;
	    computedValue.name = name;
	    if (!computedValue.scope)
	        computedValue.scope = adm.target;
	    adm.values[propName] = computedValue;
	    Object.defineProperty(adm.target, propName, generateComputedPropConfig(propName));
	}
	var observablePropertyConfigs = {};
	var computedPropertyConfigs = {};
	function generateObservablePropConfig(propName) {
	    return observablePropertyConfigs[propName] || (observablePropertyConfigs[propName] = {
	        configurable: true,
	        enumerable: true,
	        get: function () {
	            return this.$mobx.values[propName].get();
	        },
	        set: function (v) {
	            setPropertyValue(this, propName, v);
	        }
	    });
	}
	function generateComputedPropConfig(propName) {
	    return computedPropertyConfigs[propName] || (computedPropertyConfigs[propName] = {
	        configurable: true,
	        enumerable: false,
	        get: function () {
	            return this.$mobx.values[propName].get();
	        },
	        set: function (v) {
	            return this.$mobx.values[propName].set(v);
	        }
	    });
	}
	function setPropertyValue(instance, name, newValue) {
	    var adm = instance.$mobx;
	    var observable = adm.values[name];
	    if (hasInterceptors(adm)) {
	        var change = interceptChange(adm, {
	            type: "update",
	            object: instance,
	            name: name, newValue: newValue
	        });
	        if (!change)
	            return;
	        newValue = change.newValue;
	    }
	    newValue = observable.prepareNewValue(newValue);
	    if (newValue !== UNCHANGED) {
	        var notify = hasListeners(adm);
	        var notifySpy = isSpyEnabled();
	        var change = notify || notifySpy ? {
	            type: "update",
	            object: instance,
	            oldValue: observable.value,
	            name: name, newValue: newValue
	        } : null;
	        if (notifySpy)
	            spyReportStart(change);
	        observable.setNewValue(newValue);
	        if (notify)
	            notifyListeners(adm, change);
	        if (notifySpy)
	            spyReportEnd();
	    }
	}
	function notifyPropertyAddition(adm, object, name, newValue) {
	    var notify = hasListeners(adm);
	    var notifySpy = isSpyEnabled();
	    var change = notify || notifySpy ? {
	        type: "add",
	        object: object, name: name, newValue: newValue
	    } : null;
	    if (notifySpy)
	        spyReportStart(change);
	    if (notify)
	        notifyListeners(adm, change);
	    if (notifySpy)
	        spyReportEnd();
	}
	var isObservableObjectAdministration = createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);
	function isObservableObject(thing) {
	    if (isObject(thing)) {
	        runLazyInitializers(thing);
	        return isObservableObjectAdministration(thing.$mobx);
	    }
	    return false;
	}
	exports.isObservableObject = isObservableObject;
	var UNCHANGED = {};
	var ObservableValue = (function (_super) {
	    __extends(ObservableValue, _super);
	    function ObservableValue(value, enhancer, name, notifySpy) {
	        if (name === void 0) { name = "ObservableValue@" + getNextId(); }
	        if (notifySpy === void 0) { notifySpy = true; }
	        var _this = _super.call(this, name) || this;
	        _this.enhancer = enhancer;
	        _this.hasUnreportedChange = false;
	        _this.value = enhancer(value, undefined, name);
	        if (notifySpy && isSpyEnabled()) {
	            spyReport({ type: "create", object: _this, newValue: _this.value });
	        }
	        return _this;
	    }
	    ObservableValue.prototype.set = function (newValue) {
	        var oldValue = this.value;
	        newValue = this.prepareNewValue(newValue);
	        if (newValue !== UNCHANGED) {
	            var notifySpy = isSpyEnabled();
	            if (notifySpy) {
	                spyReportStart({
	                    type: "update",
	                    object: this,
	                    newValue: newValue, oldValue: oldValue
	                });
	            }
	            this.setNewValue(newValue);
	            if (notifySpy)
	                spyReportEnd();
	        }
	    };
	    ObservableValue.prototype.prepareNewValue = function (newValue) {
	        checkIfStateModificationsAreAllowed(this);
	        if (hasInterceptors(this)) {
	            var change = interceptChange(this, { object: this, type: "update", newValue: newValue });
	            if (!change)
	                return UNCHANGED;
	            newValue = change.newValue;
	        }
	        newValue = this.enhancer(newValue, this.value, this.name);
	        return this.value !== newValue
	            ? newValue
	            : UNCHANGED;
	    };
	    ObservableValue.prototype.setNewValue = function (newValue) {
	        var oldValue = this.value;
	        this.value = newValue;
	        this.reportChanged();
	        if (hasListeners(this)) {
	            notifyListeners(this, {
	                type: "update",
	                object: this,
	                newValue: newValue,
	                oldValue: oldValue
	            });
	        }
	    };
	    ObservableValue.prototype.get = function () {
	        this.reportObserved();
	        return this.value;
	    };
	    ObservableValue.prototype.intercept = function (handler) {
	        return registerInterceptor(this, handler);
	    };
	    ObservableValue.prototype.observe = function (listener, fireImmediately) {
	        if (fireImmediately)
	            listener({
	                object: this,
	                type: "update",
	                newValue: this.value,
	                oldValue: undefined
	            });
	        return registerListener(this, listener);
	    };
	    ObservableValue.prototype.toJSON = function () {
	        return this.get();
	    };
	    ObservableValue.prototype.toString = function () {
	        return this.name + "[" + this.value + "]";
	    };
	    ObservableValue.prototype.valueOf = function () {
	        return toPrimitive(this.get());
	    };
	    return ObservableValue;
	}(BaseAtom));
	ObservableValue.prototype[primitiveSymbol()] = ObservableValue.prototype.valueOf;
	var isObservableValue = createInstanceofPredicate("ObservableValue", ObservableValue);
	exports.isBoxedObservable = isObservableValue;
	function getAtom(thing, property) {
	    if (typeof thing === "object" && thing !== null) {
	        if (isObservableArray(thing)) {
	            invariant(property === undefined, getMessage("m036"));
	            return thing.$mobx.atom;
	        }
	        if (isObservableMap(thing)) {
	            var anyThing = thing;
	            if (property === undefined)
	                return getAtom(anyThing._keys);
	            var observable_2 = anyThing._data[property] || anyThing._hasMap[property];
	            invariant(!!observable_2, "the entry '" + property + "' does not exist in the observable map '" + getDebugName(thing) + "'");
	            return observable_2;
	        }
	        runLazyInitializers(thing);
	        if (isObservableObject(thing)) {
	            if (!property)
	                return fail("please specify a property");
	            var observable_3 = thing.$mobx.values[property];
	            invariant(!!observable_3, "no observable property '" + property + "' found on the observable object '" + getDebugName(thing) + "'");
	            return observable_3;
	        }
	        if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
	            return thing;
	        }
	    }
	    else if (typeof thing === "function") {
	        if (isReaction(thing.$mobx)) {
	            return thing.$mobx;
	        }
	    }
	    return fail("Cannot obtain atom from " + thing);
	}
	function getAdministration(thing, property) {
	    invariant(thing, "Expecting some object");
	    if (property !== undefined)
	        return getAdministration(getAtom(thing, property));
	    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing))
	        return thing;
	    if (isObservableMap(thing))
	        return thing;
	    runLazyInitializers(thing);
	    if (thing.$mobx)
	        return thing.$mobx;
	    invariant(false, "Cannot obtain administration from " + thing);
	}
	function getDebugName(thing, property) {
	    var named;
	    if (property !== undefined)
	        named = getAtom(thing, property);
	    else if (isObservableObject(thing) || isObservableMap(thing))
	        named = getAdministration(thing);
	    else
	        named = getAtom(thing);
	    return named.name;
	}
	function createClassPropertyDecorator(onInitialize, get, set, enumerable, allowCustomArguments) {
	    function classPropertyDecorator(target, key, descriptor, customArgs, argLen) {
	        if (argLen === void 0) { argLen = 0; }
	        invariant(allowCustomArguments || quacksLikeADecorator(arguments), "This function is a decorator, but it wasn't invoked like a decorator");
	        if (!descriptor) {
	            var newDescriptor = {
	                enumerable: enumerable,
	                configurable: true,
	                get: function () {
	                    if (!this.__mobxInitializedProps || this.__mobxInitializedProps[key] !== true)
	                        typescriptInitializeProperty(this, key, undefined, onInitialize, customArgs, descriptor);
	                    return get.call(this, key);
	                },
	                set: function (v) {
	                    if (!this.__mobxInitializedProps || this.__mobxInitializedProps[key] !== true) {
	                        typescriptInitializeProperty(this, key, v, onInitialize, customArgs, descriptor);
	                    }
	                    else {
	                        set.call(this, key, v);
	                    }
	                }
	            };
	            if (arguments.length < 3 || arguments.length === 5 && argLen < 3) {
	                Object.defineProperty(target, key, newDescriptor);
	            }
	            return newDescriptor;
	        }
	        else {
	            if (!hasOwnProperty(target, "__mobxLazyInitializers")) {
	                addHiddenProp(target, "__mobxLazyInitializers", (target.__mobxLazyInitializers && target.__mobxLazyInitializers.slice()) || []);
	            }
	            var value_1 = descriptor.value, initializer_1 = descriptor.initializer;
	            target.__mobxLazyInitializers.push(function (instance) {
	                onInitialize(instance, key, (initializer_1 ? initializer_1.call(instance) : value_1), customArgs, descriptor);
	            });
	            return {
	                enumerable: enumerable, configurable: true,
	                get: function () {
	                    if (this.__mobxDidRunLazyInitializers !== true)
	                        runLazyInitializers(this);
	                    return get.call(this, key);
	                },
	                set: function (v) {
	                    if (this.__mobxDidRunLazyInitializers !== true)
	                        runLazyInitializers(this);
	                    set.call(this, key, v);
	                }
	            };
	        }
	    }
	    if (allowCustomArguments) {
	        return function () {
	            if (quacksLikeADecorator(arguments))
	                return classPropertyDecorator.apply(null, arguments);
	            var outerArgs = arguments;
	            var argLen = arguments.length;
	            return function (target, key, descriptor) { return classPropertyDecorator(target, key, descriptor, outerArgs, argLen); };
	        };
	    }
	    return classPropertyDecorator;
	}
	function typescriptInitializeProperty(instance, key, v, onInitialize, customArgs, baseDescriptor) {
	    if (!hasOwnProperty(instance, "__mobxInitializedProps"))
	        addHiddenProp(instance, "__mobxInitializedProps", {});
	    instance.__mobxInitializedProps[key] = true;
	    onInitialize(instance, key, v, customArgs, baseDescriptor);
	}
	function runLazyInitializers(instance) {
	    if (instance.__mobxDidRunLazyInitializers === true)
	        return;
	    if (instance.__mobxLazyInitializers) {
	        addHiddenProp(instance, "__mobxDidRunLazyInitializers", true);
	        instance.__mobxDidRunLazyInitializers && instance.__mobxLazyInitializers.forEach(function (initializer) { return initializer(instance); });
	    }
	}
	function quacksLikeADecorator(args) {
	    return (args.length === 2 || args.length === 3) && typeof args[1] === "string";
	}
	function iteratorSymbol() {
	    return (typeof Symbol === "function" && Symbol.iterator) || "@@iterator";
	}
	var IS_ITERATING_MARKER = "__$$iterating";
	function arrayAsIterator(array) {
	    invariant(array[IS_ITERATING_MARKER] !== true, "Illegal state: cannot recycle array as iterator");
	    addHiddenFinalProp(array, IS_ITERATING_MARKER, true);
	    var idx = -1;
	    addHiddenFinalProp(array, "next", function next() {
	        idx++;
	        return {
	            done: idx >= this.length,
	            value: idx < this.length ? this[idx] : undefined
	        };
	    });
	    return array;
	}
	function declareIterator(prototType, iteratorFactory) {
	    addHiddenFinalProp(prototType, iteratorSymbol(), iteratorFactory);
	}
	var messages = {
	    "m001": "It is not allowed to assign new values to @action fields",
	    "m002": "`runInAction` expects a function",
	    "m003": "`runInAction` expects a function without arguments",
	    "m004": "autorun expects a function",
	    "m005": "Warning: attempted to pass an action to autorun. Actions are untracked and will not trigger on state changes. Use `reaction` or wrap only your state modification code in an action.",
	    "m006": "Warning: attempted to pass an action to autorunAsync. Actions are untracked and will not trigger on state changes. Use `reaction` or wrap only your state modification code in an action.",
	    "m007": "reaction only accepts 2 or 3 arguments. If migrating from MobX 2, please provide an options object",
	    "m008": "wrapping reaction expression in `asReference` is no longer supported, use options object instead",
	    "m009": "@computed can only be used on getter functions, like: '@computed get myProps() { return ...; }'. It looks like it was used on a property.",
	    "m010": "@computed can only be used on getter functions, like: '@computed get myProps() { return ...; }'",
	    "m011": "First argument to `computed` should be an expression. If using computed as decorator, don't pass it arguments",
	    "m012": "computed takes one or two arguments if used as function",
	    "m013": "[mobx.expr] 'expr' should only be used inside other reactive functions.",
	    "m014": "extendObservable expected 2 or more arguments",
	    "m015": "extendObservable expects an object as first argument",
	    "m016": "extendObservable should not be used on maps, use map.merge instead",
	    "m017": "all arguments of extendObservable should be objects",
	    "m018": "extending an object with another observable (object) is not supported. Please construct an explicit propertymap, using `toJS` if need. See issue #540",
	    "m019": "[mobx.isObservable] isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.",
	    "m020": "modifiers can only be used for individual object properties",
	    "m021": "observable expects zero or one arguments",
	    "m022": "@observable can not be used on getters, use @computed instead",
	    "m023": "Using `transaction` is deprecated, use `runInAction` or `(@)action` instead.",
	    "m024": "whyRun() can only be used if a derivation is active, or by passing an computed value / reaction explicitly. If you invoked whyRun from inside a computation; the computation is currently suspended but re-evaluating because somebody requested its value.",
	    "m025": "whyRun can only be used on reactions and computed values",
	    "m026": "`action` can only be invoked on functions",
	    "m028": "It is not allowed to set `useStrict` when a derivation is running",
	    "m029": "INTERNAL ERROR only onBecomeUnobserved shouldn't be called twice in a row",
	    "m030a": "Since strict-mode is enabled, changing observed observable values outside actions is not allowed. Please wrap the code in an `action` if this change is intended. Tried to modify: ",
	    "m030b": "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, the render function of a React component? Tried to modify: ",
	    "m031": "Computed values are not allowed to not cause side effects by changing observables that are already being observed. Tried to modify: ",
	    "m032": "* This computation is suspended (not in use by any reaction) and won't run automatically.\n	Didn't expect this computation to be suspended at this point?\n	  1. Make sure this computation is used by a reaction (reaction, autorun, observer).\n	  2. Check whether you are using this computation synchronously (in the same stack as they reaction that needs it).",
	    "m033": "`observe` doesn't support the fire immediately property for observable maps.",
	    "m034": "`mobx.map` is deprecated, use `new ObservableMap` or `mobx.observable.map` instead",
	    "m035": "Cannot make the designated object observable; it is not extensible",
	    "m036": "It is not possible to get index atoms from arrays",
	    "m037": "Hi there! I'm sorry you have just run into an exception.\nIf your debugger ends up here, know that some reaction (like the render() of an observer component, autorun or reaction)\nthrew an exception and that mobx caught it, to avoid that it brings the rest of your application down.\nThe original cause of the exception (the code that caused this reaction to run (again)), is still in the stack.\n\nHowever, more interesting is the actual stack trace of the error itself.\nHopefully the error is an instanceof Error, because in that case you can inspect the original stack of the error from where it was thrown.\nSee `error.stack` property, or press the very subtle \"(...)\" link you see near the console.error message that probably brought you here.\nThat stack is more interesting than the stack of this console.error itself.\n\nIf the exception you see is an exception you created yourself, make sure to use `throw new Error(\"Oops\")` instead of `throw \"Oops\"`,\nbecause the javascript environment will only preserve the original stack trace in the first form.\n\nYou can also make sure the debugger pauses the next time this very same exception is thrown by enabling \"Pause on caught exception\".\n(Note that it might pause on many other, unrelated exception as well).\n\nIf that all doesn't help you out, feel free to open an issue https://github.com/mobxjs/mobx/issues!\n",
	    "m038": "Missing items in this list?\n    1. Check whether all used values are properly marked as observable (use isObservable to verify)\n    2. Make sure you didn't dereference values too early. MobX observes props, not primitives. E.g: use 'person.name' instead of 'name' in your computation.\n"
	};
	function getMessage(id) {
	    return messages[id];
	}
	var EMPTY_ARRAY = [];
	Object.freeze(EMPTY_ARRAY);
	function getGlobal() {
	    return global;
	}
	function getNextId() {
	    return ++globalState.mobxGuid;
	}
	function fail(message, thing) {
	    invariant(false, message, thing);
	    throw "X";
	}
	function invariant(check, message, thing) {
	    if (!check)
	        throw new Error("[mobx] Invariant failed: " + message + (thing ? " in '" + thing + "'" : ""));
	}
	var deprecatedMessages = [];
	function deprecated(msg) {
	    if (deprecatedMessages.indexOf(msg) !== -1)
	        return false;
	    deprecatedMessages.push(msg);
	    console.error("[mobx] Deprecated: " + msg);
	    return true;
	}
	function once(func) {
	    var invoked = false;
	    return function () {
	        if (invoked)
	            return;
	        invoked = true;
	        return func.apply(this, arguments);
	    };
	}
	var noop = function () { };
	function unique(list) {
	    var res = [];
	    list.forEach(function (item) {
	        if (res.indexOf(item) === -1)
	            res.push(item);
	    });
	    return res;
	}
	function joinStrings(things, limit, separator) {
	    if (limit === void 0) { limit = 100; }
	    if (separator === void 0) { separator = " - "; }
	    if (!things)
	        return "";
	    var sliced = things.slice(0, limit);
	    return "" + sliced.join(separator) + (things.length > limit ? " (... and " + (things.length - limit) + "more)" : "");
	}
	function isObject(value) {
	    return value !== null && typeof value === "object";
	}
	function isPlainObject(value) {
	    if (value === null || typeof value !== "object")
	        return false;
	    var proto = Object.getPrototypeOf(value);
	    return proto === Object.prototype || proto === null;
	}
	function objectAssign() {
	    var res = arguments[0];
	    for (var i = 1, l = arguments.length; i < l; i++) {
	        var source = arguments[i];
	        for (var key in source)
	            if (hasOwnProperty(source, key)) {
	                res[key] = source[key];
	            }
	    }
	    return res;
	}
	function valueDidChange(compareStructural, oldValue, newValue) {
	    if (typeof oldValue === 'number' && isNaN(oldValue)) {
	        return typeof newValue !== 'number' || !isNaN(newValue);
	    }
	    return compareStructural
	        ? !deepEqual(oldValue, newValue)
	        : oldValue !== newValue;
	}
	var prototypeHasOwnProperty = Object.prototype.hasOwnProperty;
	function hasOwnProperty(object, propName) {
	    return prototypeHasOwnProperty.call(object, propName);
	}
	function makeNonEnumerable(object, propNames) {
	    for (var i = 0; i < propNames.length; i++) {
	        addHiddenProp(object, propNames[i], object[propNames[i]]);
	    }
	}
	function addHiddenProp(object, propName, value) {
	    Object.defineProperty(object, propName, {
	        enumerable: false,
	        writable: true,
	        configurable: true,
	        value: value
	    });
	}
	function addHiddenFinalProp(object, propName, value) {
	    Object.defineProperty(object, propName, {
	        enumerable: false,
	        writable: false,
	        configurable: true,
	        value: value
	    });
	}
	function isPropertyConfigurable(object, prop) {
	    var descriptor = Object.getOwnPropertyDescriptor(object, prop);
	    return !descriptor || (descriptor.configurable !== false && descriptor.writable !== false);
	}
	function assertPropertyConfigurable(object, prop) {
	    invariant(isPropertyConfigurable(object, prop), "Cannot make property '" + prop + "' observable, it is not configurable and writable in the target object");
	}
	function getEnumerableKeys(obj) {
	    var res = [];
	    for (var key in obj)
	        res.push(key);
	    return res;
	}
	function deepEqual(a, b) {
	    if (a === null && b === null)
	        return true;
	    if (a === undefined && b === undefined)
	        return true;
	    if (typeof a !== "object")
	        return a === b;
	    var aIsArray = isArrayLike(a);
	    var aIsMap = isMapLike(a);
	    if (aIsArray !== isArrayLike(b)) {
	        return false;
	    }
	    else if (aIsMap !== isMapLike(b)) {
	        return false;
	    }
	    else if (aIsArray) {
	        if (a.length !== b.length)
	            return false;
	        for (var i = a.length - 1; i >= 0; i--)
	            if (!deepEqual(a[i], b[i]))
	                return false;
	        return true;
	    }
	    else if (aIsMap) {
	        if (a.size !== b.size)
	            return false;
	        var equals_1 = true;
	        a.forEach(function (value, key) {
	            equals_1 = equals_1 && deepEqual(b.get(key), value);
	        });
	        return equals_1;
	    }
	    else if (typeof a === "object" && typeof b === "object") {
	        if (a === null || b === null)
	            return false;
	        if (isMapLike(a) && isMapLike(b)) {
	            if (a.size !== b.size)
	                return false;
	            return deepEqual(observable.shallowMap(a).entries(), observable.shallowMap(b).entries());
	        }
	        if (getEnumerableKeys(a).length !== getEnumerableKeys(b).length)
	            return false;
	        for (var prop in a) {
	            if (!(prop in b))
	                return false;
	            if (!deepEqual(a[prop], b[prop]))
	                return false;
	        }
	        return true;
	    }
	    return false;
	}
	function createInstanceofPredicate(name, clazz) {
	    var propName = "isMobX" + name;
	    clazz.prototype[propName] = true;
	    return function (x) {
	        return isObject(x) && x[propName] === true;
	    };
	}
	function isArrayLike(x) {
	    return Array.isArray(x) || isObservableArray(x);
	}
	exports.isArrayLike = isArrayLike;
	function isMapLike(x) {
	    return isES6Map(x) || isObservableMap(x);
	}
	function isES6Map(thing) {
	    if (getGlobal().Map !== undefined && thing instanceof getGlobal().Map)
	        return true;
	    return false;
	}
	function primitiveSymbol() {
	    return (typeof Symbol === "function" && Symbol.toPrimitive) || "@@toPrimitive";
	}
	function toPrimitive(value) {
	    return value === null ? null : typeof value === "object" ? ("" + value) : value;
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Sticky = undefined;

	var _Scroller = __webpack_require__(266);

	var _Scroller2 = _interopRequireDefault(_Scroller);

	var _Sticky = __webpack_require__(299);

	var _Sticky2 = _interopRequireDefault(_Sticky);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @file index.js
	 * @author liyang@jingoal.com
	 *
	 * 入口文件
	 * */

	_Scroller2.default.Sticky = _Sticky2.default;

	exports.default = _Scroller2.default;
	exports.Sticky = _Sticky2.default;

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _promise = __webpack_require__(267);

	var _promise2 = _interopRequireDefault(_promise);

	var _getPrototypeOf = __webpack_require__(1);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(27);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(28);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(32);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(79);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class, _temp; /**
	                    * @file Scroller.jsx
	                    * @author liyang@jingoal.com
	                    *
	                    * 滚动组件，用于提供滚动容器
	                    *
	                    * 滚动原理:
	                    * 该组件是通过提供一个容器（container）和一个滑块 (scroller) 实现的。容器必须有一个确定的高度才能正常工作，滑块通过两种方案实现滚动
	                    * 1、CSS3动画实现方案 transition + transform
	                    * 2、通过requestAnimationFrame + transform实现，这样做是为了更加精细的控制滚动过程，但是会稍微牺牲性能
	                    *
	                    * tip: 如果系统不支持transform，修改left、right、top、bottom值作为降级方案
	                    *
	                    * 功能:
	                    * 1、提供横向滚动、纵向滚动和自由滚动
	                    * 2、提供下拉刷新和上拉加载更多功能
	                    * */

	var _react = __webpack_require__(87);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(117);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(283);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _utils = __webpack_require__(284);

	var _utils2 = _interopRequireDefault(_utils);

	var _icons = __webpack_require__(285);

	var _icons2 = _interopRequireDefault(_icons);

	var _status = __webpack_require__(286);

	var _lang = __webpack_require__(287);

	__webpack_require__(291);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var boundaryThreshold = 5;

	var Scroller = (_temp = _class = function (_Component) {
	    (0, _inherits3.default)(Scroller, _Component);

	    /*eslint-enable*/

	    function Scroller(props) {
	        (0, _classCallCheck3.default)(this, Scroller);

	        var _this = (0, _possibleConstructorReturn3.default)(this, (Scroller.__proto__ || (0, _getPrototypeOf2.default)(Scroller)).call(this, props));

	        _this.x = 0;
	        _this.y = 0;
	        _this.directionX = 0;
	        _this.directionY = 0;
	        _this.scrollerStyle = {};
	        _this.stickyHeaders = [];
	        _this.stickyIndex = 0;
	        _this.stickyOffset = 0;
	        _this.wrapperOffsetTop = 0;

	        _this.isIphone = /iphone/gi.test(navigator.appVersion);
	        // 重置属性
	        _this.resetProps();
	        // 缓存个滑块的DOM节点
	        _this.loadTipElCache = _this.getLoadTipElCache();
	        // 初始化语言包
	        _this.lang = (0, _lang.getMessage)('ScrollControl', props.lang);
	        return _this;
	    }
	    /*eslint-disable*/
	    // 这里禁用了eslint语法检查：no-unused-prop-types，因为这些属性可能不是直接调用，有可能是传参调用，这时候esline语法检查不能通过


	    (0, _createClass3.default)(Scroller, [{
	        key: 'getChildContext',
	        value: function getChildContext() {
	            return { scroller: this };
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            // 缓存滑块的样式，提高效率
	            this.scrollerStyle = this.scroller.style;

	            if (this.props.usePullRefresh) {
	                this.pullRefreshOffsetHeight = this.pullRefreshEl.offsetHeight;
	            }

	            if (this.props.useLoadMore) {
	                this.loadMoreOffsetHeight = this.loadMoreEl.offsetHeight;
	            }

	            // 初始化事件
	            this.initEvent();
	            this.refresh();

	            this.refreshSticky(true);
	            if (this.stickyHeaders.length) this.useTransition = false;

	            // 设置刷新、加载更多状态
	            this.setRefreshStatus(_status.REFRESHSTATUS.PULL);
	            this.setLoadMoreStatus(this.loadMoreStatus || _status.LOADMORESTATUS.PULL);
	            // 重置加载更多
	            this.refreshLoadMore();

	            this.resetPosition();
	            this.scrollTo(this.props.contentOffset.x, this.props.contentOffset.y);
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            this.resetProps(nextProps, true);
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProp, prevState) {
	            if (prevProp.contentOffset.x !== this.props.contentOffset.x || prevProp.contentOffset.y !== this.props.contentOffset.y) {
	                this.scrollTo(this.props.contentOffset.x, this.props.contentOffset.y);
	            }

	            if (this.props.autoRefresh) this.refresh();

	            this.refreshSticky();
	            if (this.stickyHeaders.length) this.useTransition = false;

	            // 重置 pullRefresh 和 loadMore
	            if (prevState.usePullRefresh !== this.state.usePullRefresh) {
	                this.setRefreshStatus(_status.REFRESHSTATUS.PULL);
	            }
	            if (prevState.useLoadMore !== this.state.useLoadMore) {
	                this.setLoadMoreStatus(this.loadMoreStatus || _status.LOADMORESTATUS.PULL);
	                this.refreshLoadMore();
	            }
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this.initEvent(true);
	        }

	        /**
	         * 设置下拉刷新的状态
	         * @param status [Number] 下拉刷新的状态
	         * @param callback [Function] 修改完状态后的执行的回调函数
	         * */

	    }, {
	        key: 'setRefreshStatus',
	        value: function setRefreshStatus(status) {
	            if (!this.state.usePullRefresh) return;

	            // 保存之前的状态
	            this.prevRefreshState = this.pullRefreshStatus;
	            this.pullRefreshStatus = status;

	            var iconEl = this.loadTipElCache.querySelector('i');
	            var textEl = this.loadTipElCache.querySelector('div');
	            var cssText = '';

	            switch (status) {
	                case _status.REFRESHSTATUS.PULL:
	                    textEl.innerHTML = this.lang.pullDownToRefresh;
	                    if (this.prevRefreshState === _status.REFRESHSTATUS.RELEASE) {
	                        iconEl.innerHTML = _icons2.default.upArrow;
	                        cssText = 'transform: rotate(-180deg); -webkit-transform: rotate(-180deg);';
	                    } else {
	                        iconEl.innerHTML = _icons2.default.downArrow;
	                    }
	                    break;
	                case _status.REFRESHSTATUS.RELEASE:
	                    textEl.innerHTML = this.lang.releaseToLoadMore;
	                    if (this.prevRefreshState === _status.REFRESHSTATUS.PULL) {
	                        iconEl.innerHTML = _icons2.default.downArrow;
	                        cssText = 'transform: rotate(180deg); -webkit-transform: rotate(180deg);';
	                    } else {
	                        iconEl.innerHTML = _icons2.default.upArrow;
	                    }
	                    break;
	                case _status.REFRESHSTATUS.LOAD:
	                    textEl.innerHTML = this.lang.loading;
	                    iconEl.innerHTML = _icons2.default.loading;
	                    cssText = 'animation: rotate 1s linear infinite; -webkit-animation: rotate 1s linear infinite';
	                    break;
	                case _status.REFRESHSTATUS.SUCCESS:
	                    textEl.innerHTML = this.lang.refreshSuccess;
	                    iconEl.innerHTML = _icons2.default.success;
	                    break;
	                case _status.REFRESHSTATUS.FAIL:
	                    textEl.innerHTML = this.lang.refreshFailed;
	                    iconEl.innerHTML = _icons2.default.error;
	                    break;
	                default:
	                    console.warn('Unsupported state!');
	                    break;
	            }

	            this.pullRefreshEl.replaceChild(this.loadTipElCache.cloneNode(true), this.pullRefreshEl.childNodes[0]);

	            var icon = this.pullRefreshEl.querySelector('i');
	            setTimeout(function () {
	                icon.style.cssText = cssText;
	            }, 0);
	        }

	        /**
	         * 设置上拉加载更多的状态
	         * @param status [Number] 上拉加载更多的状态
	         * @param callback [Function] 修改完状态后的执行的回调函数
	         * */

	    }, {
	        key: 'setLoadMoreStatus',
	        value: function setLoadMoreStatus(status) {
	            if (!this.state.useLoadMore) return;

	            // 保存之前的状态
	            this.prevLoadState = this.loadMoreStatus;
	            this.loadMoreStatus = status;

	            var iconEl = this.loadTipElCache.querySelector('i');
	            var textEl = this.loadTipElCache.querySelector('div');
	            var cssText = '';

	            switch (status) {
	                case _status.LOADMORESTATUS.PULL:
	                    textEl.innerHTML = this.lang.pullupToLoadMore;
	                    if (this.prevLoadState === _status.LOADMORESTATUS.RELEASE) {
	                        iconEl.innerHTML = _icons2.default.downArrow;
	                        cssText = 'transform: rotate(180deg); -webkit-transform: rotate(180deg);';
	                    } else {
	                        iconEl.innerHTML = _icons2.default.upArrow;
	                    }
	                    break;
	                case _status.LOADMORESTATUS.RELEASE:
	                    textEl.innerHTML = this.lang.releaseToLoadMore;
	                    if (this.prevLoadState === _status.LOADMORESTATUS.PULL) {
	                        iconEl.innerHTML = _icons2.default.upArrow;
	                        cssText = 'transform: rotate(-180deg); -webkit-transform: rotate(-180deg);';
	                    } else {
	                        iconEl.innerHTML = _icons2.default.downArrow;
	                    }
	                    break;
	                case _status.LOADMORESTATUS.LOAD:
	                    textEl.innerHTML = this.lang.loading;
	                    iconEl.innerHTML = _icons2.default.loading;
	                    cssText = 'animation: rotate 1s linear infinite; -webkit-animation: rotate 1s linear infinite';
	                    break;
	                case _status.LOADMORESTATUS.NOMORE:
	                    textEl.innerHTML = this.lang.noMoreData;
	                    iconEl.innerHTML = '';
	                    break;
	                default:
	                    console.warn('Unsupported state!');
	                    break;
	            }

	            this.loadMoreEl.replaceChild(this.loadTipElCache.cloneNode(true), this.loadMoreEl.firstChild);

	            var icon = this.loadMoreEl.querySelector('i');
	            setTimeout(function () {
	                icon.style.cssText = cssText;
	            }, 0);
	        }

	        /**
	         * 获取loadTip的DOM缓存
	         * */

	    }, {
	        key: 'getLoadTipElCache',
	        value: function getLoadTipElCache() {
	            var dom = document.createElement('div');

	            dom.className = 'silk-listcontrol-loadtip';
	            dom.innerHTML = '<i class="silk-listcontrol-icon"></i><div class="silk-listcontrol-text"></div>';

	            return dom;
	        }

	        /**
	         * 获取当前的置顶块
	         * */

	    }, {
	        key: 'getCurrentSticky',
	        value: function getCurrentSticky() {
	            var ret = null;
	            if (this.y < 0) {
	                var absY = Math.abs(this.y);
	                var wrapperTop = this.wrapperOffsetTop;
	                var upperHeaders = this.stickyHeaders.filter(function (header) {
	                    return header.offsetTop - wrapperTop <= absY;
	                });

	                if (upperHeaders.length) {
	                    var currentHeader = upperHeaders[upperHeaders.length - 1];
	                    var nextHeader = this.stickyHeaders[upperHeaders.length];
	                    var index = upperHeaders.length - 1;
	                    if (nextHeader) {
	                        var distToNext = nextHeader.offsetTop - wrapperTop - absY;
	                        var adjustOffset = distToNext > currentHeader.height ? 0 : -(currentHeader.height - distToNext);
	                        ret = { currentHeader: currentHeader, adjustOffset: adjustOffset, index: index };
	                    } else {
	                        ret = { currentHeader: currentHeader, adjustOffset: 0, index: index };
	                    }
	                } else {
	                    ret = null;
	                }
	            } else {
	                ret = null;
	            }
	            return ret;
	        }

	        /**
	         * 获取计算样式
	         * */

	    }, {
	        key: 'getComputedPosition',
	        value: function getComputedPosition() {
	            var matrix = window.getComputedStyle(this.scroller, null);
	            var x = void 0;
	            var y = void 0;

	            if (this.useTransform) {
	                matrix = matrix[_utils2.default.style.transform].split(')')[0].split(', ');
	                x = +(matrix[12] || matrix[4]);
	                y = +(matrix[13] || matrix[5]);
	            } else {
	                x = +matrix.left.replace(/[^-\d.]/g, '');
	                y = +matrix.top.replace(/[^-\d.]/g, '');
	            }

	            return { x: x, y: y };
	        }

	        /**
	         * 刷新置顶块
	         * */

	    }, {
	        key: 'refreshSticky',
	        value: function refreshSticky(forceRefresh) {
	            if (this.stickyHeaders.length) {
	                var currentSticky = this.getCurrentSticky();
	                var stickyNode = this.stickyNode;

	                if (currentSticky) {
	                    var currentHeader = currentSticky.currentHeader,
	                        adjustOffset = currentSticky.adjustOffset;


	                    if (currentSticky.index !== this.stickyIndex || currentSticky.adjustOffset !== this.stickyOffset || forceRefresh) {
	                        var transform = 'translate(0px,' + adjustOffset + 'px) translateZ(0px)';
	                        stickyNode.style.transform = transform;
	                        stickyNode.style.WebkitTransform = transform;
	                        stickyNode.style.display = 'block';
	                        stickyNode.className = currentHeader.stickyExtraClass;
	                        _reactDom2.default.render(_react2.default.cloneElement(currentHeader.onlyChild), stickyNode);

	                        this.stickyIndex = currentSticky.index;
	                        this.stickyOffset = currentSticky.adjustOffset;
	                    }
	                } else {
	                    this.stickyIndex = null;
	                    this.stickyOffset = null;
	                    stickyNode.style.display = 'none';
	                }
	            }
	        }

	        /**
	         * touchStart事件处理器
	         * @param e [Event] 事件对象
	         * */

	    }, {
	        key: 'touchStart',
	        value: function touchStart(e) {
	            if (this.disabled || this.initiated && _utils2.default.eventType[e.type] !== this.initiated) return;

	            if (this.preventDefault && !_utils2.default.isBadAndroid && !_utils2.default.preventDefaultException(e.target, this.props.preventDefaultException)) {
	                e.preventDefault();
	            }

	            var point = e.touches ? e.touches[0] : e;
	            var pos = void 0;

	            this.initiated = _utils2.default.eventType[e.type];
	            this.moved = false;
	            this.distX = 0;
	            this.distY = 0;
	            this.directionX = 0;
	            this.directionY = 0;
	            this.directionLocked = 0;

	            // 取得touchStart的时间
	            this.startTime = _utils2.default.getTime();

	            // 如果支持transition并且正在执行transition动画
	            if (this.useTransition && this.isInTransition) {
	                // 将动画暂停
	                this.transitionTime();
	                // 将IScroll的状态修改一下
	                this.isInTransition = false;
	                // 得到计算的位置
	                pos = this.getComputedPosition();
	                this.translate(Math.round(pos.x), Math.round(pos.y));
	                // 停止滚动
	                this.execEvent('onScrollEnd');
	            } else if (!this.useTransition && this.isAnimating) {
	                // 设置为false后  requestAnimationFrame不会在执行
	                this.isAnimating = false;
	                this.execEvent('onScrollEnd');
	            }

	            // 将当前位置设置为开始滚动的初始位置
	            this.startX = this.x;
	            this.startY = this.y;
	            this.absStartX = this.x;
	            this.absStartY = this.y;
	            // 手指的位置
	            this.pointX = point.pageX;
	            this.pointY = point.pageY;
	            // 触发钩子  beforeScrollStart
	            this.execEvent('onBeforeScrollStart');
	        }

	        /**
	         * touchMove事件处理器
	         * @param e [Event] 事件对象
	         * */

	    }, {
	        key: 'touchMove',
	        value: function touchMove(e) {
	            if (this.disabled || _utils2.default.eventType[e.type] !== this.initiated) return;

	            if (this.preventDefault) e.preventDefault();

	            var point = e.touches ? e.touches[0] : e;
	            var timestamp = _utils2.default.getTime();
	            // 手指在X／Y轴上的增量
	            var deltaX = point.pageX - this.pointX;
	            var deltaY = point.pageY - this.pointY;
	            var newX = void 0;
	            var newY = void 0;

	            // 更新pointX 和 pointY
	            this.pointX = point.pageX;
	            this.pointY = point.pageY;

	            this.distX += deltaX;
	            this.distY += deltaY;
	            var absDistX = Math.abs(this.distX);
	            var absDistY = Math.abs(this.distY);

	            // 如果时间间隔相差300ms 并且 实际滚动的距离小于10像素
	            if (timestamp - this.endTime > 300 && absDistX < 10 && absDistY < 10) return;

	            // 只让其在一个方向上滚动  directionLocked 初始值为0  directionLockThreshold = 5
	            if (!this.directionLocked && !this.freeScroll) {
	                // 如果水平方向移动的绝对值 > 垂直方向移动的绝对值 + 5 则直接锁定运动方向为水平方向
	                if (absDistX > absDistY + this.directionLockThreshold) {
	                    this.directionLocked = 'h'; // 锁住水平方向的滚动
	                } else if (absDistY >= absDistX + this.directionLockThreshold) {
	                    this.directionLocked = 'v'; // 锁住垂直方向的滚动
	                } else {
	                    this.directionLocked = 'n'; // 不锁
	                }
	            }

	            // 有些时候你想保留原生纵向的滚动条但想为横向滚动条增加iScroll功能（比如走马灯）。
	            // 设置这个属性为true并且iScroll区域只将影响横向滚动，纵向滚动将滚动整个页面。
	            if (this.directionLocked === 'h') {
	                // 水平方向滚动时 锁住 全局垂直滚动
	                if (this.eventPassthrough === 'vertical') {
	                    e.preventDefault();
	                } else if (this.eventPassthrough === 'horizontal') {
	                    this.initiated = false;
	                    // 若为是水平方向的eventPassthrough，将启动设置为false 则永远不会执行_move函数
	                    return;
	                }
	                // 始终将Y方向的位移设置为0
	                deltaY = 0;
	            } else if (this.directionLocked === 'v') {
	                if (this.eventPassthrough === 'horizontal') {
	                    e.preventDefault();
	                } else if (this.eventPassthrough === 'vertical') {
	                    this.initiated = false;
	                    return;
	                }
	                deltaX = 0;
	            }

	            // 允许垂直或者水平滚动时 才会将deltaX deltaY赋值 否则为0
	            deltaX = this.hasHorizontalScroll ? deltaX : 0;
	            deltaY = this.hasVerticalScroll ? deltaY : 0;

	            // 新的位置
	            newX = this.x + deltaX;
	            newY = this.y + deltaY;

	            // 如果超出了边界则放慢速度
	            if (newX > 0 || newX < this.maxScrollX) {
	                newX = this.props.bounce ? // eslint-disable-line no-nested-ternary
	                this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX;
	            }
	            // 大于0  则说明拉到下边位置了  或者已经超出了顶端
	            if (newY > 0 || newY < this.maxScrollY) {
	                newY = this.props.bounce ? // eslint-disable-line no-nested-ternary
	                this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY;
	            }

	            // 设置方向 若 deltaX大于0  说明是在向下滑动  小于0 向上滑动  等于0 不动
	            this.directionX = deltaX > 0 ? // eslint-disable-line no-nested-ternary
	            -1 : deltaX < 0 ? 1 : 0;
	            this.directionY = deltaY > 0 ? // eslint-disable-line no-nested-ternary
	            -1 : deltaY < 0 ? 1 : 0;

	            // 如果现在还没动 就执行钩子函数  scrollStart
	            if (!this.moved) {
	                this.execEvent('onScrollStart');
	            }

	            // 将其设置为true
	            this.moved = true;

	            // 运动到新的位置
	            this.translate(newX, newY);

	            // 如果propbeType = 1 最少大于300ms执行一次scroll事件
	            if (timestamp - this.startTime > 300) {
	                // 更新开始时间
	                this.startTime = timestamp;
	                // 更新起始位置
	                this.startX = this.x;
	                this.startY = this.y;
	            }

	            this.execEvent('onScroll');
	        }

	        /**
	         * touchEnd事件处理器
	         * @param e [Event] 事件对象
	         * */

	    }, {
	        key: 'touchEnd',
	        value: function touchEnd(e) {
	            if (this.disabled || _utils2.default.eventType[e.type] !== this.initiated) return;

	            if (this.preventDefault && !_utils2.default.preventDefaultException(e.target, this.props.preventDefaultException)) {
	                e.preventDefault();
	            }

	            var momentumX = void 0;
	            var momentumY = void 0;
	            var duration = _utils2.default.getTime() - this.startTime;
	            var newX = Math.round(this.x);
	            var newY = Math.round(this.y);
	            var time = 0;
	            var easing = void 0;

	            this.isInTransition = 0;
	            this.initiated = 0;
	            this.endTime = _utils2.default.getTime();

	            if (!this.moved) {
	                this.execEvent('onScrollCancel');
	                return;
	            }

	            // 设置下拉刷新
	            if (this.state.usePullRefresh && this.y >= this.pullRefreshOffsetHeight) {
	                if (this.pullRefreshStatus === _status.REFRESHSTATUS.LOAD) {
	                    this.scrollTo(this.x, this.pullRefreshOffsetHeight, 200);
	                } else {
	                    this.setRefreshStatus(_status.REFRESHSTATUS.LOAD);
	                    this.scrollTo(this.x, this.pullRefreshOffsetHeight, 300);
	                    this.loadData('refresh');
	                }
	                return;
	            }

	            // 设置加载更多
	            if (this.state.useLoadMore && this.y < this.maxScrollY) {
	                if (this.loadMoreStatus !== _status.LOADMORESTATUS.NOMORE && this.loadMoreStatus !== _status.LOADMORESTATUS.LOAD && !this.props.noMoreData) {
	                    this.setLoadMoreStatus(_status.LOADMORESTATUS.LOAD);
	                    this.loadData('load');
	                }
	            }

	            // 如果超出边界 需要重置
	            if (this.resetPosition(this.props.bounceTime)) return;

	            this.scrollTo(newX, newY);

	            // 如果需要的话开始动量动画
	            if (this.props.momentum && duration < 300) {
	                momentumX = this.hasHorizontalScroll ? _utils2.default.momentum(this.x, this.startX, duration, this.maxScrollX, this.props.bounce ? this.wrapperWidth : 0, this.props.deceleration) : { destination: newX, duration: 0 };
	                momentumY = this.hasVerticalScroll ? _utils2.default.momentum(this.y, this.startY, duration, this.maxScrollY, this.props.bounce ? this.wrapperHeight : 0, this.props.deceleration) : { destination: newY, duration: 0 };

	                newX = momentumX.destination;
	                newY = momentumY.destination;
	                time = Math.max(momentumX.duration, momentumY.duration);
	                this.isInTransition = 1;
	            }

	            if (newX !== this.x || newY !== this.y) {
	                // 当超出边界时 改变缓动函数
	                if (newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY) {
	                    easing = _utils2.default.ease.quadratic;
	                }

	                this.scrollTo(newX, newY, time, easing);
	                return;
	            }

	            this.execEvent('onScrollEnd');
	        }

	        /**
	         * transitionEnd事件处理器
	         * @param e [Event] 事件对象
	         * */

	    }, {
	        key: 'transitionEnd',
	        value: function transitionEnd(e) {
	            if (e.target !== this.scroller || !this.isInTransition) return;

	            this.transitionTime();

	            // resetPosition 位置没变  返回false  变了返回true
	            if (!this.resetPosition(this.props.bounceTime)) {
	                this.isInTransition = false;
	                this.execEvent('onScrollEnd');
	            }
	        }

	        /**
	         * 绑定/删除事件
	         * @param flag [boolean] 标识是添加事件还是删除事件
	         * */

	    }, {
	        key: 'initEvent',
	        value: function initEvent(flag) {
	            var eventType = flag ? _utils2.default.removeEvent : _utils2.default.addEvent;

	            if (_utils2.default.hasTouch) {
	                eventType(this.wrapper, 'touchstart', this);
	                eventType(window, 'touchmove', this);
	                eventType(window, 'touchend', this);
	                eventType(window, 'touchcancel', this);
	                eventType(this.scroller, _utils2.default.prefixStyle('transitionend'), this);
	            } else {
	                console.warn('your device did not support touch event!');
	            }
	        }

	        /**
	         * 执行绑定的事件
	         * @param eventType [String] 需要执行的事件名称
	         * @param param [Object] 执行事件处理函数传入的参数
	         * */

	    }, {
	        key: 'execEvent',
	        value: function execEvent(eventType, param) {
	            if (eventType === 'onScrollStart') {
	                this.isScrolling = true;
	            }
	            if (eventType === 'onScroll') {
	                this.refreshSticky();
	                if (this.pullRefreshStatus === _status.REFRESHSTATUS.PULL || this.pullRefreshStatus === _status.REFRESHSTATUS.RELEASE) {
	                    this.hasVerticalScroll = true;
	                } else if ((this.pullRefreshStatus === _status.REFRESHSTATUS.SUCCESS || this.pullRefreshStatus === _status.REFRESHSTATUS.FAIL) && this.y > 0) {
	                    this.hasVerticalScroll = false;
	                }

	                if (this.isIphone && (this.scrollY && (this.pointY < boundaryThreshold || this.pointY > document.documentElement.clientHeight - boundaryThreshold) || this.scrollX && (this.pointX < boundaryThreshold || this.pointX > document.documentElement.clientWidth - boundaryThreshold))) {
	                    var ev = document.createEvent('Event');
	                    ev.initEvent('touchend', true, true);
	                    document.dispatchEvent(ev);
	                }
	            }
	            if (eventType === 'onScrollEnd') {
	                this.refreshSticky();
	                this.isScrolling = false;
	                this.hasVerticalScroll = this.props.scrollY && this.maxScrollY < 0;
	            }
	            if (this.props[eventType]) {
	                this.props[eventType].apply(this, [{
	                    contentOffset: {
	                        x: this.x,
	                        y: this.y
	                    },
	                    param: param
	                }]);
	            }
	        }

	        /**
	         * 重置滑块的位置
	         * @param time [Number] 重置位置所需要的时间，单位ms
	         * */

	    }, {
	        key: 'resetPosition',
	        value: function resetPosition() {
	            var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

	            var x = this.x;
	            var y = this.y;

	            if (this.pullRefreshStatus === _status.REFRESHSTATUS.LOAD && this.y === this.pullRefreshOffsetHeight) {
	                return false;
	            }

	            if (!this.hasHorizontalScroll || this.x > 0) {
	                x = 0;
	            } else if (this.x < this.maxScrollX) {
	                x = this.maxScrollX;
	            }

	            if (!this.hasVerticalScroll || this.y > 0) {
	                y = 0;
	            } else if (this.y < this.maxScrollY) {
	                y = this.maxScrollY;
	            }

	            // 做一层优化，如果没动，直接返回
	            if (x === this.x && y === this.y) {
	                return false;
	            }

	            this.scrollTo(x, y, time, this.props.bounceEasing);

	            return true;
	        }

	        /**
	         * 滚动到某个位置
	         * @param x [Number] 沿X轴滚动的位置
	         * @param y [Number] 沿Y轴滚动的位置
	         * @param time [Number] 滚动到具体的位置所需要的时间
	         * @param easing [Object] 滚动的缓动函数
	         * */

	    }, {
	        key: 'scrollTo',
	        value: function scrollTo() {
	            var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.x;
	            var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.y;
	            var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	            var easing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _utils2.default.ease.circular;

	            // 判断组件是不是处于transition状态
	            this.isInTransition = this.useTransition && time > 0;
	            var transitionType = this.useTransition && easing.style;

	            if (!time || transitionType) {
	                if (transitionType) {
	                    this.transitionTimingFunction(easing.style);
	                    this.transitionTime(time);
	                }
	                this.translate(x, y);
	            } else {
	                this.animate(x, y, time, easing.fn);
	            }
	        }

	        /**
	         * 滚动动画的时间函数
	         * @param easing [Object] 缓动函数
	         * */

	    }, {
	        key: 'transitionTimingFunction',
	        value: function transitionTimingFunction(easing) {
	            this.scrollerStyle[_utils2.default.style.transitionTimingFunction] = easing;
	        }

	        /**
	         * 滚动到具体位置所需要的时间
	         * @param time [Number] 滚动时间
	         * */

	    }, {
	        key: 'transitionTime',
	        value: function transitionTime() {
	            var _this2 = this;

	            var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

	            if (!this.useTransition) return;

	            var durationProp = _utils2.default.style.transitionDuration;
	            if (!durationProp) return;

	            // 滑块的样式  将滑块的transitionDuration样式属性设置一下，如果时间为0 则瞬间停止
	            this.scrollerStyle[durationProp] = time + 'ms';

	            // time为0 并且是不支持的安卓
	            if (!time && _utils2.default.isBadAndroid) {
	                // 则将transitionDuration属性设置为极短
	                this.scrollerStyle[durationProp] = '0.0001ms';
	                _utils2.default.requestAnimationFrame.call(window, function () {
	                    if (_this2.scrollerStyle[durationProp] === '0.0001ms') {
	                        _this2.scrollerStyle[durationProp] = '0s';
	                    }
	                });
	            }
	        }

	        /**
	         * 位移函数
	         * @param x [Number] x轴方向的位移
	         * @param y [Number] y轴方向的位移
	         * */

	    }, {
	        key: 'translate',
	        value: function translate(x, y) {
	            x = Math.round(x); // eslint-disable-line no-param-reassign
	            y = Math.round(y); // eslint-disable-line no-param-reassign

	            // 如果支持transform这使用，不支持就使用left top
	            if (this.useTransform) {
	                this.scrollerStyle[_utils2.default.style.transform] = 'translate(' + x + 'px, ' + y + 'px) ' + this.translateZ;
	            } else {
	                this.scrollerStyle.left = x + 'px';
	                this.scrollerStyle.top = y + 'px';
	            }

	            // 重置x,y的值
	            this.x = x;
	            this.y = y;

	            if (this.state.usePullRefresh) {
	                if (y >= this.pullRefreshOffsetHeight && this.pullRefreshStatus === _status.REFRESHSTATUS.PULL) {
	                    this.setRefreshStatus(_status.REFRESHSTATUS.RELEASE);
	                } else if (y < this.pullRefreshOffsetHeight && this.pullRefreshStatus === _status.REFRESHSTATUS.RELEASE) {
	                    this.setRefreshStatus(_status.REFRESHSTATUS.PULL);
	                }
	            }

	            if (this.state.useLoadMore) {
	                if (y < this.maxScrollY && this.loadMoreStatus === _status.LOADMORESTATUS.PULL) {
	                    if (this.props.autoLoad) {
	                        // 取消动画,执行加载过程
	                        if (this.useTransition && this.isInTransition) {
	                            // 将动画暂停
	                            this.transitionTime();
	                            // 将IScroll的状态修改一下
	                            this.isInTransition = false;
	                            // 得到计算的位置
	                            var pos = this.getComputedPosition();
	                            this.translate(Math.round(pos.x), Math.round(pos.y));
	                            // 停止滚动
	                            this.execEvent('onScrollEnd');
	                        } else if (!this.useTransition && this.isAnimating) {
	                            // 设置为false后  requestAnimationFrame不会在执行
	                            this.isAnimating = false;
	                            this.execEvent('onScrollEnd');
	                        }
	                        // 设置加载更多
	                        if (this.state.useLoadMore && this.y < this.maxScrollY) {
	                            if (this.loadMoreStatus !== _status.LOADMORESTATUS.NOMORE && this.loadMoreStatus !== _status.LOADMORESTATUS.LOAD && !this.props.noMoreData) {
	                                this.setLoadMoreStatus(_status.LOADMORESTATUS.LOAD);
	                                this.loadData('load');
	                            }
	                        }

	                        // 如果超出边界 需要重置
	                        this.resetPosition(this.props.bounceTime);
	                    } else {
	                        this.setLoadMoreStatus(_status.LOADMORESTATUS.RELEASE);
	                    }
	                } else if (y >= this.maxScrollY && this.loadMoreStatus === _status.LOADMORESTATUS.RELEASE) {
	                    this.setLoadMoreStatus(_status.LOADMORESTATUS.PULL);
	                }
	            }
	        }

	        /**
	         * 模拟下拉刷新
	         * @param time [Number] 滚动时间
	         * */

	    }, {
	        key: 'simulatePullRefresh',
	        value: function simulatePullRefresh() {
	            var _this3 = this;

	            var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 300;

	            if (this.state.usePullRefresh && this.prevRefreshState !== _status.REFRESHSTATUS.LOAD) {
	                this.scrollTo(this.x, this.pullRefreshOffsetHeight, time);
	                setTimeout(function () {
	                    _this3.setRefreshStatus(_status.REFRESHSTATUS.LOAD);
	                    _this3.loadData('refresh');
	                }, time);
	            }
	        }

	        /**
	         * 加载数据
	         * @param type [String] 是上拉还是下拉加载数据
	         * */

	    }, {
	        key: 'loadData',
	        value: function loadData(type) {
	            var _this4 = this;

	            // pullRefreshAction, loadMoreAction
	            var promise = new _promise2.default(function (resolve, reject) {
	                if (type === 'refresh') {
	                    _this4.props.pullRefreshAction(resolve, reject);
	                } else {
	                    _this4.props.loadMoreAction(resolve, reject);
	                }
	            });

	            promise.then(function () {
	                _this4.loadDataHandle(type, 3);
	            }).catch(function () {
	                _this4.loadDataHandle(type, 4);
	            });
	        }

	        /**
	         * 数据加载完成后执行的操作
	         * @param type [String] 是上拉还是下拉加载数据
	         * @param code [Number] 请求状态，标识成功还是失败
	         * */

	    }, {
	        key: 'loadDataHandle',
	        value: function loadDataHandle(type, code) {
	            var _this5 = this;

	            if (type === 'refresh') {
	                this.setRefreshStatus(this.pullRefreshStatus = code);
	                setTimeout(function () {
	                    _this5.setRefreshStatus(_this5.pullRefreshStatus = _status.REFRESHSTATUS.PULL);
	                    _this5.scrollTo(0, 0, 400);
	                    _this5.refresh();
	                }, 400);
	            } else {
	                this.loadMoreStatus = this.props.noMoreData ? _status.LOADMORESTATUS.NOMORE : _status.LOADMORESTATUS.PULL;
	                this.setLoadMoreStatus(this.loadMoreStatus);
	                this.refresh();
	            }
	        }

	        /**
	         * 刷新
	         * @param refreshOption [Object]
	         *     wrapperWidth: 容器的宽度
	         *     wrapperHeight: 容器的高度
	         *     scrollerWidth: 滑块的宽度
	         * */

	    }, {
	        key: 'refresh',
	        value: function refresh() {
	            var refreshOption = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	            // 容器的宽高
	            this.wrapperWidth = refreshOption.wrapperWidth ? refreshOption.wrapperWidth : this.wrapper.clientWidth;
	            this.wrapperHeight = refreshOption.wrapperHeight ? refreshOption.wrapperHeight : this.wrapper.clientHeight;
	            // 容器上边缘到顶部的距离
	            this.wrapperOffsetTop = -_utils2.default.offset(this.wrapper).top;

	            // 滑块的宽高
	            this.scrollerWidth = refreshOption.scrollerWidth ? refreshOption.scrollerWidth : this.scroller.offsetWidth;
	            this.scrollerHeight = refreshOption.scrollerHeight ? refreshOption.scrollerHeight : this.scroller.offsetHeight;

	            // 如果有加载更多，设置加载更多的位置，重置加载更多滑块的位置
	            if (this.state.useLoadMore && this.loadMoreEl) {
	                this.loadMoreEl.style.visibility = this.scrollerHeight > this.wrapperWidth ? 'visible' : 'hidden';
	                this.loadMoreEl.style.top = this.scrollerHeight + 'px';
	                this.scrollerHeight += this.loadMoreOffsetHeight;
	            }

	            // 可滑动的最大宽高
	            this.maxScrollX = this.wrapperWidth - this.scrollerWidth;
	            this.maxScrollY = this.wrapperHeight - this.scrollerHeight;

	            // 是否可以水平、垂直滚动
	            this.hasHorizontalScroll = this.props.scrollX && this.maxScrollX < 0;
	            this.hasVerticalScroll = this.props.scrollY && this.maxScrollY < 0;

	            if (!this.hasHorizontalScroll) {
	                this.maxScrollX = 0;
	                this.scrollerWidth = this.wrapperWidth;
	            }

	            if (!this.hasVerticalScroll) {
	                this.maxScrollY = 0;
	                this.scrollerHeight = this.wrapperHeight;
	            }

	            // 初始化终止时间，当滚动的时候需要
	            this.endTime = 0;
	            this.directionX = 0;
	            this.directionY = 0;

	            // 触发用户自定义的刷新事件
	            this.execEvent('onRefresh');
	        }

	        /**
	         * 动画函数
	         * @param destX [Number] 目的地X方向位置
	         * @param destY [Number] 目的地Y方向位置
	         * @param duration [Number] 持续时间
	         * @param easingFn [Function] 缓动函数
	         * */

	    }, {
	        key: 'animate',
	        value: function animate(destX, destY, duration, easingFn) {
	            var self = this;
	            var startX = this.x;
	            var startY = this.y;
	            var startTime = _utils2.default.getTime();
	            var destTime = startTime + duration;

	            function step() {
	                var now = _utils2.default.getTime();

	                // 如果当前时间大于持续时间，则结束动画
	                if (now >= destTime) {
	                    self.isAnimating = false;
	                    self.translate(destX, destY);

	                    if (!self.resetPosition(self.props.bounceTime)) {
	                        self.execEvent('onScrollEnd');
	                    }
	                    return;
	                }

	                now = (now - startTime) / duration;
	                var easing = easingFn(now);
	                var newX = (destX - startX) * easing + startX;
	                var newY = (destY - startY) * easing + startY;

	                self.translate(newX, newY);

	                if (self.isAnimating) {
	                    _utils2.default.requestAnimationFrame.call(window, step);
	                }

	                self.execEvent('onScroll');
	            }

	            this.isAnimating = true;
	            step();
	        }

	        /**
	         * addEventListener() 方法是将指定的事件监听器注册到目标对象上，当该对象触发指定的事件时，指定的回调函数就会被执行。
	         * 第二个参数除传入的是函数外，还可以传入对象，但是该对象中必须有 handleEvent函数，函数中的this指向该对象
	         * 可以动态切换绑定事件的处理函数，而不需要remove之前的事件。
	         * */

	    }, {
	        key: 'handleEvent',
	        value: function handleEvent(e) {
	            switch (e.type) {
	                case 'touchstart':
	                    this.touchStart(e);
	                    break;
	                case 'touchmove':
	                    this.touchMove(e);
	                    break;
	                case 'touchend':
	                case 'touchcancel':
	                    this.touchEnd(e);
	                    break;
	                case 'transitionend':
	                case 'webkitTransitionEnd':
	                case 'oTransitionEnd':
	                case 'MSTransitionEnd':
	                    this.transitionEnd(e);
	                    break;
	                default:
	                    console.warn('no match event type!');
	                    break;
	            }
	        }
	    }, {
	        key: 'refreshLoadMore',
	        value: function refreshLoadMore() {
	            if (!this.state.useLoadMore) {
	                this.resetPosition();
	            } else if (this.loadMoreEl) {
	                this.loadMoreEl.style.top = this.scrollerHeight - this.loadMoreOffsetHeight + 'px';
	            }
	        }

	        /**
	         * 重置属性
	         * @param props [Object] 需要重置的样式的对象
	         * @param isInit [Boolean] 重置样式时是组件是否已经初始化
	         * */

	    }, {
	        key: 'resetProps',
	        value: function resetProps() {
	            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
	            var isInit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	            // 根据设备的支持情况，重置下面属性
	            this.translateZ = props.HWCompositing && _utils2.default.hasPerspective ? ' translateZ(0)' : '';
	            this.useTransition = _utils2.default.hasTransition && props.useTransition;
	            this.useTransform = _utils2.default.hasTransform && props.useTransform;

	            // 是否允许垂直或者水平方向原生的滚动
	            this.eventPassthrough = props.eventPassthrough === true ? 'vertical' : props.eventPassthrough;
	            // 是否组织默认事件
	            this.preventDefault = !this.eventPassthrough && props.preventDefault;
	            // 是否允许自由滚动
	            this.freeScroll = props.freeScroll && !this.eventPassthrough;
	            // 方向锁阈值
	            this.directionLockThreshold = this.eventPassthrough ? 0 : props.directionLockThreshold;
	            // 是否允许在X轴或者Y轴方向滚动
	            this.scrollX = this.eventPassthrough === 'horizontal' ? false : props.scrollX;
	            this.scrollY = this.eventPassthrough === 'vertical' ? false : props.scrollY;

	            // 禁用开关
	            this.disabled = this.props.disabled;

	            this.bounceEasing = typeof bounceEasing === 'string' ? _utils2.default.ease[this.props.bounceEasing] || _utils2.default.ease.circular : this.props.bounceEasing;

	            if (this.props.onScroll) {
	                this.useTransition = false;
	            }

	            // 重置 下拉刷新 和 加载更多
	            var isUsePullRefresh = this.scrollY && !this.scrollX && this.props.usePullRefresh;
	            var isUseLoadMore = this.scrollY && !this.scrollX && this.props.useLoadMore;

	            var loadMoreStatus = void 0;

	            if (isUseLoadMore && props.noMoreData) {
	                loadMoreStatus = _status.LOADMORESTATUS.NOMORE;
	            } else {
	                loadMoreStatus = _status.LOADMORESTATUS.PULL;
	            }

	            if (isInit) {
	                this.setState({
	                    usePullRefresh: isUsePullRefresh,
	                    useLoadMore: isUseLoadMore
	                });
	                this.pullRefreshStatus = isUsePullRefresh ? this.pullRefreshStatus : 0;
	                this.loadMoreStatus = loadMoreStatus;
	            } else {
	                this.state = {
	                    usePullRefresh: isUsePullRefresh,
	                    useLoadMore: isUseLoadMore
	                };
	                this.pullRefreshStatus = _status.REFRESHSTATUS.PULL;
	                this.loadMoreStatus = loadMoreStatus;
	            }
	        }

	        /**
	         * 滑块左上角顶点的坐标
	         * */


	        /**
	         * 滑块滑动的方向
	         * */


	        /**
	         * 滑块的样式缓存，用于提高效率
	         * */


	        /**
	         * 放置置顶元素的数组
	         * */


	        /**
	         * 当前显示的置顶元素的索引值
	         * */


	        /**
	         * 置顶元素的偏移
	         * */


	        /**
	         * 容器的偏移
	         * */

	    }, {
	        key: 'render',


	        /**
	         * 渲染函数
	         * */
	        value: function render() {
	            var _this6 = this;

	            var _props = this.props,
	                usePullRefresh = _props.usePullRefresh,
	                useLoadMore = _props.useLoadMore;


	            return _react2.default.createElement(
	                'div',
	                {
	                    className: (0, _classnames2.default)('silk-listcontrol-wrapper', {
	                        'silk-listcontrol-wrapper-default': this.scrollY && !this.props.containerClass
	                    }, this.props.containerClass),
	                    style: this.props.containerStyle,
	                    ref: function ref(_ref5) {
	                        _this6.wrapper = _ref5;
	                    }
	                },
	                this.props.useSticky ? _react2.default.createElement('div', {
	                    ref: function ref(_ref) {
	                        _this6.stickyNode = _ref;
	                    },
	                    style: { position: 'absolute', top: 0, left: 0, right: 0, zIndex: 9999 },
	                    className: 'silk-sticky'
	                }) : null,
	                _react2.default.createElement(
	                    'div',
	                    {
	                        className: (0, _classnames2.default)('silk-listcontrol-scroller', {
	                            'silk-listcontrol-scroller-horizontal': this.scrollX,
	                            'silk-listcontrol-scroller-vertical': this.scrollY
	                        }, this.props.scrollerClass),
	                        style: this.props.scrollerStyle,
	                        ref: function ref(_ref4) {
	                            _this6.scroller = _ref4;
	                        }
	                    },
	                    usePullRefresh ? _react2.default.createElement(
	                        'div',
	                        {
	                            ref: function ref(_ref2) {
	                                _this6.pullRefreshEl = _ref2;
	                            },
	                            className: 'silk-listcontrol-loadwrapper silk-listcontrol-loadwrapper-up'
	                        },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'silk-listcontrol-loadtip' },
	                            _react2.default.createElement('i', { className: 'silk-listcontrol-icon' }),
	                            _react2.default.createElement('div', { className: 'silk-listcontrol-text' })
	                        )
	                    ) : null,
	                    this.props.children,
	                    useLoadMore ? _react2.default.createElement(
	                        'div',
	                        {
	                            ref: function ref(_ref3) {
	                                _this6.loadMoreEl = _ref3;
	                            },
	                            className: 'silk-listcontrol-loadwrapper'
	                        },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'silk-listcontrol-loadtip' },
	                            _react2.default.createElement('i', { className: 'silk-listcontrol-icon' }),
	                            _react2.default.createElement('div', { className: 'silk-listcontrol-text' })
	                        )
	                    ) : null
	                )
	            );
	        }
	    }]);
	    return Scroller;
	}(_react.Component), _class.propTypes = {
	    /**
	     * 是否开启自动刷新属性
	     * */
	    autoRefresh: _react.PropTypes.bool,
	    /**
	     * 是否开启滑动到底部自动加载
	     * */
	    autoLoad: _react.PropTypes.bool,
	    /**
	     * 是否开启弹性滚动
	     * */
	    bounce: _react.PropTypes.bool,
	    /**
	     * 自定义的弹性动画
	     * */
	    bounceEasing: _react.PropTypes.shape({
	        style: _react.PropTypes.string.isRequired,
	        fn: _react.PropTypes.func.isRequired
	    }),
	    /**
	     * 缓动时间
	     * */
	    bounceTime: _react.PropTypes.number,
	    /**
	     * 内容偏移量
	     * */
	    contentOffset: _react.PropTypes.shape({
	        x: _react.PropTypes.number,
	        y: _react.PropTypes.number
	    }),
	    /**
	     * 阻尼系数
	     * */
	    deceleration: _react.PropTypes.number,
	    /**
	     * 是否禁用
	     * */
	    disabled: _react.PropTypes.bool,
	    /**
	     * 有时想要保留原生的垂直滚动，但是想要添加一个水平滚动的IScroll(例如：carousel), 可以把这个值设置为true，这样就可以响应
	     * 水平方向的`swiper`，垂直滚动会滚动整个页面，同时也可以设置为`horizontal`或者`vertical`
	     * */
	    eventPassthrough: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.string]),
	    /**
	     * 方向锁定阈值
	     * */
	    directionLockThreshold: _react.PropTypes.number,
	    /**
	     * 是否开启自由滚动，当设置为`false`时，只能响应一个方向的滚动，当设置为true时，可以同时横向和纵向滚动（`scrollX`和`scrollY`
	     * 必须同时为true）
	     * */
	    freeScroll: _react.PropTypes.bool,
	    /**
	     * 当在屏幕上轻弹（flicks）时，是否开启动量
	     * */
	    momentum: _react.PropTypes.bool,
	    /**
	     * 是否开启硬件加速
	     * */
	    HWCompositing: _react.PropTypes.bool,
	    /**
	     * 是否阻止触发默认事件
	     * */
	    preventDefault: _react.PropTypes.bool,
	    /**
	     * 阻止除了该类事件的默认事件
	     * */
	    preventDefaultException: _react.PropTypes.shape({
	        className: _react.PropTypes.instanceOf(RegExp),
	        tagName: _react.PropTypes.instanceOf(RegExp)
	    }),
	    /**
	     * 是否开启X轴滚动
	     * */
	    scrollX: _react.PropTypes.bool,
	    /**
	     * 是否开启Y轴滚动
	     * */
	    scrollY: _react.PropTypes.bool,
	    /**
	     * 是否使用transform
	     * */
	    useTransform: _react.PropTypes.bool,
	    /**
	     * 是否使用transition
	     * */
	    useTransition: _react.PropTypes.bool,
	    /**
	     * 开始滚动前的回调
	     * */
	    onBeforeScrollStart: _react.PropTypes.func,
	    /**
	     * 开始滚动回调
	     * */
	    onScrollStart: _react.PropTypes.func,
	    /**
	     * 滚动回调
	     * */
	    onScroll: _react.PropTypes.func,
	    /**
	     * 滚动结束回调
	     * */
	    onScrollEnd: _react.PropTypes.func,
	    /**
	     * 取消滚动回调
	     * */
	    onScrollCancel: _react.PropTypes.func,
	    /**
	     * 刷新回调
	     * */
	    onRefresh: _react.PropTypes.func,
	    children: _react.PropTypes.oneOfType([_react.PropTypes.node, _react.PropTypes.element]).isRequired,
	    /**
	     * 是否开启下拉刷新
	     * */
	    usePullRefresh: _react.PropTypes.bool,
	    /**
	     * 是否开启上拉加载更多
	     * */
	    useLoadMore: _react.PropTypes.bool,
	    /**
	     * 是否启用吸顶功能
	     * */
	    useSticky: _react.PropTypes.bool,
	    /**
	     * 下拉刷新函数
	     * */
	    pullRefreshAction: _react.PropTypes.func,
	    /**
	     * 上拉加载更多函数
	     * */
	    loadMoreAction: _react.PropTypes.func,
	    /**
	     * 下拉刷新提示区域的渲染函数，允许用户自定义下拉刷新区域
	     * */
	    renderPullRefresh: _react.PropTypes.func,
	    /**
	     * 上拉加载更多区域的渲染函数, 允许用户自定义上拉加载更多区域
	     * */
	    renderLoadMore: _react.PropTypes.func,
	    /**
	     * 多语言
	     * */
	    lang: _react.PropTypes.string,
	    /**
	     * 容器额外class 用于用户自定义容器样式
	     * */
	    containerClass: _react.PropTypes.string,
	    /**
	     * 容器额外style 用于用户自定义容器样式
	     * */
	    containerStyle: _react.PropTypes.shape({}),
	    /**
	     * 滑块额外class 用于用户自定义滑块的样式
	     * */
	    scrollerClass: _react.PropTypes.string,
	    /**
	     * 滑块额外style 用于用户自定义滑块的样式
	     * */
	    scrollerStyle: _react.PropTypes.shape({}),
	    /**
	     * 是否还有更多数据
	     * */
	    noMoreData: _react.PropTypes.bool
	}, _class.defaultProps = {
	    autoRefresh: true,
	    autoLoad: true,
	    bounce: true,
	    bounceEasing: _utils2.default.ease.circular,
	    bounceTime: 600,
	    contentOffset: { x: 0, y: 0 },
	    deceleration: 0.0024,
	    disabled: false,
	    directionLockThreshold: 0,
	    freeScroll: false,
	    momentum: true,
	    HWCompositing: true,
	    preventDefault: true,
	    preventDefaultException: {
	        tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
	    },
	    scrollX: false,
	    scrollY: true,
	    containerStyle: {},
	    scrollerStyle: {},
	    containerClass: '',
	    scrollerClass: '',
	    useTransform: true,
	    useTransition: true,
	    usePullRefresh: false,
	    useLoadMore: false,
	    useSticky: false,
	    lang: 'zh_CN'
	}, _class.childContextTypes = {
	    scroller: _react.PropTypes.object
	}, _temp);
	exports.default = Scroller;

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(268), __esModule: true };

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(76);
	__webpack_require__(36);
	__webpack_require__(58);
	__webpack_require__(269);
	module.exports = __webpack_require__(14).Promise;

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(40)
	  , global             = __webpack_require__(10)
	  , ctx                = __webpack_require__(15)
	  , classof            = __webpack_require__(270)
	  , $export            = __webpack_require__(13)
	  , isObject           = __webpack_require__(20)
	  , aFunction          = __webpack_require__(16)
	  , anInstance         = __webpack_require__(271)
	  , forOf              = __webpack_require__(272)
	  , speciesConstructor = __webpack_require__(276)
	  , task               = __webpack_require__(277).set
	  , microtask          = __webpack_require__(279)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;

	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(57)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();

	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};

	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(280)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(56)($Promise, PROMISE);
	__webpack_require__(281)(PROMISE);
	Wrapper = __webpack_require__(14)[PROMISE];

	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(282)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(50)
	  , TAG = __webpack_require__(57)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ }),
/* 271 */
/***/ (function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(15)
	  , call        = __webpack_require__(273)
	  , isArrayIter = __webpack_require__(274)
	  , anObject    = __webpack_require__(19)
	  , toLength    = __webpack_require__(52)
	  , getIterFn   = __webpack_require__(275)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(19);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(42)
	  , ITERATOR   = __webpack_require__(57)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(270)
	  , ITERATOR  = __webpack_require__(57)('iterator')
	  , Iterators = __webpack_require__(42);
	module.exports = __webpack_require__(14).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(19)
	  , aFunction = __webpack_require__(16)
	  , SPECIES   = __webpack_require__(57)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(15)
	  , invoke             = __webpack_require__(278)
	  , html               = __webpack_require__(55)
	  , cel                = __webpack_require__(24)
	  , global             = __webpack_require__(10)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(50)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ }),
/* 278 */
/***/ (function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(10)
	  , macrotask = __webpack_require__(277).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(50)(process) == 'process';

	module.exports = function(){
	  var head, last, notify;

	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };

	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }

	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(17);
	module.exports = function(target, src, safe){
	  for(var key in src){
	    if(safe && target[key])target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};

/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(10)
	  , core        = __webpack_require__(14)
	  , dP          = __webpack_require__(18)
	  , DESCRIPTORS = __webpack_require__(22)
	  , SPECIES     = __webpack_require__(57)('species');

	module.exports = function(KEY){
	  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(57)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof2 = __webpack_require__(33);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @file utils.js
	 * @author liyang@jingoal.com
	 * @desc
	 *
	 *      工具函数
	 * */

	/**
	 * 针对不同内核的浏览器对requestAnimationFrane做兼容处理
	 * */
	var requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
	    return window.setTimeout(callback, 1000 / 60);
	};

	/**
	 * 缓存DIV元素的默认样式，为之后的兼容处理做准备
	 * */
	var elementStyle = document.createElement('div').style;

	/**
	 * 获取厂商前缀
	 * */
	var vendor = function () {
	    var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'];
	    var len = vendors.length;

	    var transform = void 0;
	    var i = 0;

	    for (; i < len; i++) {
	        transform = vendors[i] + 'ransform';

	        if (transform in elementStyle) {
	            return vendors[i].substr(0, vendors[i].length - 1);
	        }
	    }

	    return false;
	}();

	/**
	 * 判断是否为坏的安卓手机
	 * */
	var isBadAndroid = function () {
	    var appVersion = window.navigator.appVersion;

	    if (/Android/.test(appVersion) && !/Chrome\/\d/.test(appVersion)) {
	        var safariVersion = appVersion.match(/Safari\/(\d+.\d)/);
	        if (safariVersion && (typeof safariVersion === 'undefined' ? 'undefined' : (0, _typeof3.default)(safariVersion)) === 'object' && safariVersion.length >= 2) {
	            return parseFloat(safariVersion[1]) < 535.19;
	        }
	        return true;
	    }
	    return false;
	}();

	/**
	 * 对transition、translate等属性做兼容处理
	 * */
	function prefixStyle(style) {
	    if (vendor === false) return false;
	    if (vendor === '') return style;
	    return vendor + style.charAt(0).toUpperCase() + style.substr(1);
	}

	var transform = prefixStyle('transform');

	/**
	 * 绑定事件的函数
	 *
	 * @param
	 *      el - DOM元素
	 *      type - 事件类型
	 *      fn - 事件处理器
	 *      capture - 捕获开关
	 */
	function addEvent(el, type, fn, capture) {
	    el.addEventListener(type, fn, !!capture);
	}

	/**
	 * 删除事件的函数
	 *
	 * @param
	 *      el - DOM元素
	 *      type - 事件类型
	 *      fn - 事件处理器
	 *      capture - 捕获开关
	 * */
	function removeEvent(el, type, fn, capture) {
	    el.removeEventListener(type, fn, !!capture);
	}

	/**
	 * 动量函数
	 *
	 * @param
	 *      current - 当前位置
	 *      start -  起始位置
	 *      time - 持续事件
	 *      lowerMargin - 滑块长度
	 *      wrapperSize - 容器长度
	 *      deceleration - 阻尼系数
	 *
	 * @return
	 *      destination - 终点位置
	 *      duration - 持续时间
	 * */
	function momentum(current, start, time, lowerMargin, wrapperSize) {
	    var deceleration = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0.0006;

	    var distance = current - start;
	    var destination = void 0;
	    var duration = void 0;

	    var speed = Math.abs(distance) / time;

	    destination = current + speed * speed / (2 * deceleration) * (distance < 0 ? -1 : 1);
	    duration = speed / deceleration;

	    if (destination < lowerMargin) {
	        destination = wrapperSize ? lowerMargin - wrapperSize / 2.5 * (speed / 8) : lowerMargin;
	        distance = Math.abs(destination - current);
	        duration = distance / speed;
	    } else if (destination > 0) {
	        destination = wrapperSize ? wrapperSize / 2.5 * (speed / 8) : 0;
	        distance = Math.abs(current) + destination;
	        duration = distance / speed;
	    }

	    return {
	        destination: Math.round(destination),
	        duration: duration
	    };
	}

	var getTime = Date.now || function () {
	    return new Date().getTime();
	};

	/**
	 * 计算偏移
	 * */
	function offset(el) {
	    var left = -el.offsetLeft;
	    var top = -el.offsetTop;

	    while (el = el.offsetParent) {
	        // eslint-disable-line no-cond-assign, no-param-reassign
	        left -= el.offsetLeft;
	        top -= el.offsetTop;
	    }

	    return { left: left, top: top };
	}

	function preventDefaultException(el, exceptions) {
	    for (var i in exceptions) {
	        // eslint-disable-line no-restricted-syntax
	        if (exceptions[i].test(el[i])) {
	            return true;
	        }
	    }

	    return false;
	}

	var style = {
	    transform: transform,
	    transitionTimingFunction: prefixStyle('transitionTimingFunction'),
	    transitionDuration: prefixStyle('transitionDuration'),
	    transitionDelay: prefixStyle('transitionDelay'),
	    transformOrigin: prefixStyle('transformOrigin')
	};

	var eventType = {
	    touchstart: 1,
	    touchmove: 1,
	    touchend: 1
	};

	/**
	 * 动画
	 * */
	/* eslint-disable */
	var ease = {
	    quadratic: {
	        style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
	        fn: function fn(k) {
	            return k * (2 - k);
	        }
	    },
	    circular: {
	        style: 'cubic-bezier(0.1, 0.57, 0.1, 1)',
	        fn: function fn(k) {
	            return Math.sqrt(1 - --k * k);
	        }
	    },
	    back: {
	        style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
	        fn: function fn(k) {
	            var b = 4;
	            return (k = k - 1) * k * ((b + 1) * k + b) + 1;
	        }
	    },
	    bounce: {
	        style: '',
	        fn: function fn(k) {
	            if ((k /= 1) < 1 / 2.75) {
	                return 7.5625 * k * k;
	            } else if (k < 2 / 2.75) {
	                return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
	            } else if (k < 2.5 / 2.75) {
	                return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
	            } else {
	                return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
	            }
	        }
	    },
	    elastic: {
	        style: '',
	        fn: function fn(k) {
	            var f = 0.22,
	                e = 0.4;

	            if (k === 0) {
	                return 0;
	            }
	            if (k == 1) {
	                return 1;
	            }

	            return e * Math.pow(2, -10 * k) * Math.sin((k - f / 4) * (2 * Math.PI) / f) + 1;
	        }
	    }
	};
	/* eslint-enable */

	var utils = {
	    hasTransform: transform !== false,
	    hasPerspective: prefixStyle('perspective') in elementStyle,
	    hasTouch: 'ontouchstart' in window,
	    hasTransition: prefixStyle('transition') in elementStyle,
	    prefixStyle: prefixStyle,
	    addEvent: addEvent,
	    removeEvent: removeEvent,
	    getTime: getTime,
	    style: style,
	    isBadAndroid: isBadAndroid,
	    offset: offset,
	    momentum: momentum,
	    preventDefaultException: preventDefaultException,
	    eventType: eventType,
	    ease: ease,
	    requestAnimationFrame: requestAnimationFrame
	};

	exports.default = utils;

/***/ }),
/* 285 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @file icons.js
	 * @author liyang@jingoal.com
	 *
	 * 图标
	 * */

	var icons = {
	  downArrow: '&#xe601;',
	  upArrow: '&#xe609;',
	  loading: '&#xe602;',
	  success: '&#xe62e;',
	  error: '&#xe697;'
	};

	exports.default = icons;

/***/ }),
/* 286 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * @file status.js
	 * @author liyang@jingoal.com
	 *
	 * 下拉刷新和上拉加载更多的状态
	 * */

	var REFRESHSTATUS = {
	    PULL: 0,
	    RELEASE: 1,
	    LOAD: 2,
	    SUCCESS: 3,
	    FAIL: 4
	};

	var LOADMORESTATUS = {
	    PULL: 0,
	    RELEASE: 1,
	    LOAD: 2,
	    NOMORE: 3
	};

	exports.REFRESHSTATUS = REFRESHSTATUS;
	exports.LOADMORESTATUS = LOADMORESTATUS;

/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getMessage = getMessage;
	exports.getLocale = getLocale;

	var _zh_CN = __webpack_require__(288);

	var _zh_CN2 = _interopRequireDefault(_zh_CN);

	var _zh_TW = __webpack_require__(289);

	var _zh_TW2 = _interopRequireDefault(_zh_TW);

	var _en_US = __webpack_require__(290);

	var _en_US2 = _interopRequireDefault(_en_US);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var LANGUAGE = 'zh'; /**
	                      * @file index.js
	                      * @author houyl@jingoal.com
	                      *
	                      * 多语言处理
	                      */

	/* eslint-disable camelcase */
	function getMessage(key) {
	    var lang = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : LANGUAGE;

	    if (lang === 'zh' || lang === 'zh_CN') {
	        return key ? _zh_CN2.default[key] : _zh_CN2.default;
	    } else if (lang === 'zh-Hant' || lang === 'zh_TW') {
	        return key ? _zh_TW2.default[key] : _zh_TW2.default;
	    } else if (lang === 'en' || lang === 'en_US') {
	        return key ? _en_US2.default[key] : _en_US2.default;
	    }
	    return null;
	}

	function getLocale(key) {
	    var lang = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : LANGUAGE;

	    if (lang === 'zh' || lang === 'zh_CN') {
	        return {
	            lang: 'zh',
	            messages: key ? _zh_CN2.default[key] : _zh_CN2.default
	        };
	    } else if (lang === 'zh-Hant' || lang === 'zh_TW') {
	        return {
	            lang: 'zh-Hant',
	            messages: key ? _zh_TW2.default[key] : _zh_TW2.default
	        };
	    } else if (lang === 'en' || lang === 'en_US') {
	        return {
	            lang: 'en',
	            messages: key ? _en_US2.default[key] : _en_US2.default
	        };
	    }
	    return null;
	}

/***/ }),
/* 288 */
/***/ (function(module, exports) {

	module.exports = {
		"Greeting": {
			"content": "自由工作,今目标"
		},
		"Loading": {
			"loading": "加载中...",
			"text": "今"
		},
		"ScrollControl": {
			"pullDownToRefresh": "下拉刷新",
			"releaseToRefresh": "松开刷新",
			"refreshSuccess": "刷新成功",
			"refreshFailed": "刷新失败",
			"pullupToLoadMore": "上拉加载更多",
			"releaseToLoadMore": "松开加载更多",
			"loadMoreSuccess": "加载成功",
			"loadMoreFailed": "加载失败",
			"noMoreData": "没有更多数据了",
			"pushNoticy": "有新的变更，请下拉刷新",
			"loading": "加载中..."
		},
		"DatePicker": {
			"yearSuffix": "年",
			"monthSuffix": "月",
			"daySuffix": "日",
			"hourSuffix": "时",
			"minuteSuffix": "分",
			"secondSuffix": "秒"
		},
		"MemberPicker": {
			"search": "搜索",
			"cancel": "取消",
			"company": "企",
			"friend": "友",
			"user": "人员",
			"dept": "部门",
			"jobs": "职务",
			"group": "组织架构",
			"customGroup": "自定义组",
			"partner": "合作伙伴",
			"friendcompany": "合作伙伴",
			"chooseMember": "选人员",
			"chooseJob": "选职务",
			"chooseDepartment": "选部门",
			"searchTip": "请输入姓名、字母、手机号",
			"emptySearchTip": "抱歉，暂无匹配结果",
			"freeze": "[冻结]",
			"usersTip": "暂无人员",
			"deptsTip": "暂无部门",
			"customGroupTip": "暂无自定义组",
			"partnerTip": "暂无合作伙伴",
			"unExpectedTip": "获取数据失败",
			"unExpectedHandleText": "点击空白处刷新"
		},
		"alertify": {
			"ok": "确定",
			"cancel": "取消",
			"enterFont": "输入文字"
		},
		"Upload": {
			"ok": "确定",
			"cancel": "取消",
			"localFile": "本地文件",
			"netDisk": "企业网盘",
			"albumFile": "相册",
			"cameraFile": "拍照",
			"pause": "已暂停",
			"retry": "上传失败，点击重试",
			"lackSpack": "企业空间不足",
			"overRun": "文件大小超过限制",
			"deleteConfirm": "确定要删除此附件？",
			"maxLimit": "附件个数达到上限",
			"pauseFaild": "暂停附件失败",
			"resumeFaild": "续传附件失败",
			"deleteFaild": "删除附件失败",
			"operateError": "操作遇到问题",
			"noNetwork": "网络不可用"
		},
		"download": {
			"processOld": "下载中，网盘查看",
			"typeError": "文件类型不可预览",
			"pause": "暂停下载",
			"done": "已下载到: 我 - 企业文件",
			"normal": "正常",
			"error": "文件下载异常",
			"fail": "文件下载失败",
			"networkError": "暂无网络，请稍后再试",
			"preview": "预览"
		},
		"search": {
			"placeHolder": "搜索",
			"cancel": "取消"
		},
		"ActionSheet": {
			"cancel": "取消"
		},
		"upgrade": {
			"cancel": "取消",
			"download": "下载",
			"defaultUpgradeContent": "您的客户端版本过低，请升级到最新版本"
		},
		"error": {
			"10005": "重复请求"
		}
	};

/***/ }),
/* 289 */
/***/ (function(module, exports) {

	module.exports = {
		"Greeting": {
			"content": "自由工作,今目標"
		},
		"Loading": {
			"loading": "加載中...",
			"text": "今"
		},
		"ScrollControl": {
			"pullDownToRefresh": "下拉刷新",
			"releaseToRefresh": "松開刷新",
			"refreshSuccess": "刷新成功",
			"refreshFailed": "刷新失敗",
			"pullupToLoadMore": "上拉加載更多",
			"releaseToLoadMore": "松開加載更多",
			"loadMoreSuccess": "加載成功",
			"loadMoreFailed": "加載失敗",
			"noMoreData": "沒有更多數據了",
			"pushNoticy": "有新的變更，請下拉刷新",
			"loading": "加載中..."
		},
		"DatePicker": {
			"yearSuffix": "年",
			"monthSuffix": "月",
			"daySuffix": "日",
			"hourSuffix": "時",
			"minuteSuffix": "分",
			"secondSuffix": "秒"
		},
		"MemberPicker": {
			"search": "搜索",
			"cancel": "取消",
			"company": "企",
			"friend": "友",
			"user": "人員",
			"dept": "部門",
			"jobs": "職務",
			"group": "組織架構",
			"customGroup": "自定義組",
			"partner": "合作夥伴",
			"friendcompany": "合作夥伴",
			"chooseMember": "選人員",
			"chooseJob": "選職務",
			"chooseDepartment": "選部門",
			"searchTip": "請輸入姓名、字母、手機號",
			"emptySearchTip": "抱歉，暫無匹配結果",
			"freeze": "[凍結]",
			"usersTip": "暫無人員",
			"deptsTip": "暫無部門",
			"customGroupTip": "暫無自定義組",
			"partnerTip": "暫無合作夥伴",
			"unExpectedTip": "獲取數據失敗",
			"unExpectedHandleText": "點擊空白處刷新"
		},
		"alertify": {
			"ok": "確定",
			"cancel": "取消",
			"enterFont": "輸入文字"
		},
		"Upload": {
			"ok": "確定",
			"cancel": "取消",
			"localFile": "本地文件",
			"netDisk": "企業網盤",
			"albumFile": "相冊",
			"cameraFile": "拍照",
			"pause": "已暫停",
			"retry": "上傳失敗，點擊重試",
			"lackSpack": "企業空間不足",
			"overRun": "文件大小超過限制",
			"deleteConfirm": "確定要刪除此附件？",
			"maxLimit": "附件個數達到上限",
			"pauseFaild": "暫停附件失敗",
			"resumeFaild": "續傳附件失敗",
			"deleteFaild": "刪除附件失敗",
			"operateError": "操作遇到問題",
			"noNetwork": "網絡不可用"
		},
		"download": {
			"processOld": "下載中，網盤查看",
			"typeError": "檔案類型不可預覽",
			"pause": "暫停下載",
			"done": "已下載到: 我-企業檔案",
			"normal": "正常",
			"error": "文件下載异常",
			"fail": "文件下載失敗",
			"networkError": "暫無網絡，請稍後再試",
			"preview": "預覽"
		},
		"search": {
			"placeHolder": "蒐索",
			"cancel": "取消"
		},
		"ActionSheet": {
			"cancel": "取消"
		},
		"upgrade": {
			"cancel": "取消",
			"download": "下載",
			"defaultUpgradeContent": "您的客戶端版本過低，請升級到最新版本"
		},
		"error": {
			"10005": "重複請求"
		}
	};

/***/ }),
/* 290 */
/***/ (function(module, exports) {

	module.exports = {
		"Greeting": {
			"content": "Free work, this goal"
		},
		"Loading": {
			"loading": "Loading",
			"title": "now"
		},
		"ScrollControl": {
			"pullDownToRefresh": "Pull down to refresh",
			"releaseToRefresh": "Refresh release",
			"refreshSuccess": "Refresh success",
			"refreshFailed": "Refresh failed",
			"pullupToLoadMore": "Upload more on LAC",
			"releaseToLoadMore": "Loosen Load more",
			"loadMoreSuccess": "Loading success",
			"loadMoreFailed": "Failed to load",
			"noMoreData": "No more of the data",
			"pushNoticy": "New changes, please refresh the drop-down",
			"loading": "Loading"
		},
		"DatePicker": {
			"yearSuffix": "year",
			"monthSuffix": "month",
			"daySuffix": "day",
			"hourSuffix": "Time",
			"minuteSuffix": "Minute",
			"secondSuffix": "second"
		},
		"MemberPicker": {
			"search": "search for",
			"cancel": "cancel",
			"company": "Enterprises",
			"friend": "Friendly",
			"user": "User",
			"dept": "Dept",
			"jobs": "Job",
			"group": "Department",
			"customGroup": "CustomGroup",
			"partner": "Partner",
			"friendcompany": "Partner",
			"chooseMember": "Member",
			"chooseJob": "Job",
			"chooseDepartment": "Department",
			"searchTip": "Enter Username/Character/PhoneNumber",
			"emptySearchTip": "Sorry，No matching results",
			"freeze": "freezed",
			"usersTip": "No personnel",
			"deptsTip": "No departments",
			"customGroupTip": "No custom group",
			"partnerTip": "No partner",
			"unExpectedTip": "Get data failed",
			"unExpectedHandleText": "Click on the blank to refresh"
		},
		"alertify": {
			"ok": "determine",
			"cancel": "cancel",
			"enterFont": "Enter text"
		},
		"Upload": {
			"ok": "ok",
			"cancel": "cancel",
			"localFile": "local file",
			"netDisk": "Enterprise network disk",
			"albumFile": "Album",
			"cameraFile": "Photograph",
			"pause": "Paused",
			"retry": "Upload failed，click retry",
			"lackSpack": "Enterprise space is insufficient",
			"overRun": "The file size exceeds the limit",
			"deleteConfirm": "Are you sure you want to delete this attachment?",
			"maxLimit": "The maximum number of attachments has been reached",
			"pauseFaild": "Paused attachment failed",
			"resumeFaild": "Failed to attach attachment",
			"deleteFaild": "Failed to delete attachments",
			"operateError": "Operation encountered a problem",
			"noNetwork": "The network is unavailable"
		},
		"download": {
			"processOld": "download, SkyDrive view",
			"typeError": "file type cannot be previewed",
			"pause": "pause",
			"done": "done: I - enterprise file",
			"normal": "normal",
			"error": "error",
			"fail": "fail",
			"networkError": "network error",
			"preview": "preview"
		},
		"search": {
			"placeHolder": "Search",
			"cancel": "Cancel"
		},
		"Upgrade": {
			"Cancel": "cancel",
			"Download": "download",
			"DefaultUpgradeContent": "Your client version is too low, please upgrade to the latest version"
		},
		"ActionSheet": {
			"cancel": "cancel"
		}
	};

/***/ }),
/* 291 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _getPrototypeOf = __webpack_require__(1);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(27);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(28);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(32);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(79);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class, _temp; /**
	                    * @file Sticky.jsx
	                    * @author liyang@jingoal.com
	                    * @desc
	                    *      吸顶效果
	                    * */

	var _react = __webpack_require__(87);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(117);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _utils = __webpack_require__(284);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Sticky = (_temp = _class = function (_Component) {
	    (0, _inherits3.default)(Sticky, _Component);

	    function Sticky() {
	        (0, _classCallCheck3.default)(this, Sticky);

	        var _this = (0, _possibleConstructorReturn3.default)(this, (Sticky.__proto__ || (0, _getPrototypeOf2.default)(Sticky)).call(this));

	        _this.domNode = null;
	        _this.height = null;
	        _this.offsetTop = null;
	        _this.className = null;
	        return _this;
	    }

	    (0, _createClass3.default)(Sticky, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.scroller = this.context.scroller;

	            if (this.scroller) {
	                this.initialize();
	                this.scroller.stickyHeaders.push(this);
	            }
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            this.initialize();
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            var _this2 = this;

	            if (this.scroller) {
	                this.scroller.stickyHeaders = this.scroller.stickyHeaders.filter(function (header) {
	                    return header !== _this2;
	                });
	            }
	        }
	    }, {
	        key: 'initialize',
	        value: function initialize() {
	            this.domNode = _reactDom2.default.findDOMNode(this); // eslint-disable-line react/no-find-dom-node
	            this.height = this.domNode.offsetHeight;
	            this.offsetTop = -_utils2.default.offset(this.domNode).top;
	            this.className = this.domNode.className;
	            this.onlyChild = _react2.default.Children.only(this.props.children);
	            this.stickyExtraClass = this.props.stickyExtraClass;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.Children.only(this.props.children);
	        }
	    }]);
	    return Sticky;
	}(_react.Component), _class.propTypes = {
	    stickyExtraClass: _react.PropTypes.string,
	    children: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.object, _react.PropTypes.string])
	}, _class.defaultProps = {
	    stickyExtraClass: ''
	}, _class.contextTypes = {
	    scroller: _react.PropTypes.object
	}, _temp);
	exports.default = Sticky;

/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(1);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(27);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(28);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(32);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(79);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class, _class2, _temp; /**
	                             * @file GroupView.jsx
	                             * @author houyl@jingoal.com yanwx@jingoal.com
	                             *
	                             * 滚动拆分分组
	                             * 实际监听滚动的组件，用来将子组件进行虚拟化
	                             */


	var _react = __webpack_require__(87);

	var _react2 = _interopRequireDefault(_react);

	var _mobxReact = __webpack_require__(263);

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

/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _defineProperty = __webpack_require__(29);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	var _getOwnPropertyDescriptor = __webpack_require__(302);

	var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

	var _assign = __webpack_require__(258);

	var _assign2 = _interopRequireDefault(_assign);

	var _classCallCheck2 = __webpack_require__(27);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(28);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _desc, _value, _class, _descriptor; /**
	                                         * @file DateSource.js
	                                         * @author houyl@jingoal.com
	                                         *
	                                         * 长列表数据模型(mobx)
	                                         */


	var _mobx = __webpack_require__(264);

	var _GroupState = __webpack_require__(305);

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

/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(303), __esModule: true };

/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(304);
	var $Object = __webpack_require__(14).Object;
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $Object.getOwnPropertyDescriptor(it, key);
	};

/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject                 = __webpack_require__(48)
	  , $getOwnPropertyDescriptor = __webpack_require__(75).f;

	__webpack_require__(12)('getOwnPropertyDescriptor', function(){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _defineProperty = __webpack_require__(29);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	var _getOwnPropertyDescriptor = __webpack_require__(302);

	var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

	var _assign = __webpack_require__(258);

	var _assign2 = _interopRequireDefault(_assign);

	var _classCallCheck2 = __webpack_require__(27);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(28);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

	var _mobx = __webpack_require__(264);

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

/***/ }),
/* 306 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })
]);