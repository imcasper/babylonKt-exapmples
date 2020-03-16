(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlinx-serialization-kotlinx-serialization-runtime'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlinx-serialization-kotlinx-serialization-runtime'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'typesKt'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'typesKt'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-runtime'] === 'undefined') {
      throw new Error("Error loading module 'typesKt'. Its dependency 'kotlinx-serialization-kotlinx-serialization-runtime' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-runtime' is loaded prior to 'typesKt'.");
    }
    root.typesKt = factory(typeof typesKt === 'undefined' ? {} : typesKt, kotlin, this['kotlinx-serialization-kotlinx-serialization-runtime']);
  }
}(this, function (_, Kotlin, $module$kotlinx_serialization_kotlinx_serialization_runtime) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Error_init = Kotlin.kotlin.Error_init_pdl1vj$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var Long$Companion$MIN_VALUE = Kotlin.Long.MIN_VALUE;
  var Long$Companion$MAX_VALUE = Kotlin.Long.MAX_VALUE;
  var isFinite = Kotlin.kotlin.isFinite_yrwdxr$;
  var roundToLong = Kotlin.kotlin.math.roundToLong_yrwdxr$;
  var abs = Kotlin.kotlin.math.abs_s8cxhz$;
  var roundToInt = Kotlin.kotlin.math.roundToInt_yrwdxr$;
  var toString = Kotlin.kotlin.text.toString_dqglrj$;
  var kotlin_js_internal_DoubleCompanionObject = Kotlin.kotlin.js.internal.DoubleCompanionObject;
  var Throwable = Error;
  var SerialClassDescImpl = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.SerialClassDescImpl;
  var UnknownFieldException = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.UnknownFieldException;
  var internal = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal;
  var GeneratedSerializer = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.GeneratedSerializer;
  var MissingFieldException = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.MissingFieldException;
  var Math_0 = Math;
  var abs_0 = Kotlin.kotlin.math.abs_za3lpa$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Iterator = Kotlin.kotlin.collections.Iterator;
  var Pair = Kotlin.kotlin.Pair;
  var equals = Kotlin.equals;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var numberToInt = Kotlin.numberToInt;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var math = Kotlin.kotlin.math;
  var Array_0 = Array;
  var L_9223372036854775807 = new Kotlin.Long(1, -2147483648);
  var throwCCE = Kotlin.throwCCE;
  var hashCode = Kotlin.hashCode;
  var L0 = Kotlin.Long.ZERO;
  Axis3d.prototype = Object.create(Enum.prototype);
  Axis3d.prototype.constructor = Axis3d;
  Axis3i.prototype = Object.create(Enum.prototype);
  Axis3i.prototype.constructor = Axis3i;
  function Map2D(dimension, array) {
    Map2D$Companion_getInstance();
    this.dimension = dimension;
    this.array_0 = array;
    if (this.array_0.length !== Kotlin.imul(this.dimension.x, this.dimension.y))
      throw Error_init('Invalid array size. Need: ' + Kotlin.imul(this.dimension.x, this.dimension.y));
  }
  function Map2D$Companion() {
    Map2D$Companion_instance = this;
  }
  Map2D$Companion.prototype.create_82l4xo$ = defineInlineFunction('typesKt.casper.collection.map.Map2D.Companion.create_82l4xo$', wrapFunction(function () {
    var Map2D_init = _.casper.collection.map.Map2D;
    var Array_0 = Array;
    return function (T_0, isT, dimension, builder) {
      var array = Array_0(Kotlin.imul(dimension.x, dimension.y));
      var tmp$;
      tmp$ = array.length - 1 | 0;
      for (var i = 0; i <= tmp$; i++) {
        array[i] = builder(i);
      }
      return new Map2D_init(dimension, array);
    };
  }));
  Map2D$Companion.prototype.positionFromIndex_40acdi$ = function (index, dimension) {
    var x = index % dimension.x;
    var y = index / dimension.x | 0;
    return new Vector2i(x, y);
  };
  Map2D$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Map2D$Companion_instance = null;
  function Map2D$Companion_getInstance() {
    if (Map2D$Companion_instance === null) {
      new Map2D$Companion();
    }
    return Map2D$Companion_instance;
  }
  Map2D.prototype.isOutside_bz62pc$ = function (position) {
    return !position.greaterOrEq_bz62pc$(Vector2i$Companion_getInstance().ZERO) || !position.less_bz62pc$(this.dimension);
  };
  Map2D.prototype.isInside_bz62pc$ = function (position) {
    return position.greaterOrEq_bz62pc$(Vector2i$Companion_getInstance().ZERO) && position.less_bz62pc$(this.dimension);
  };
  Map2D.prototype.set_52kd3f$ = function (position, value) {
    this.array_0[this.indexFromPosition_bz62pc$(position)] = value;
  };
  Map2D.prototype.get_bz62pc$ = function (position) {
    return this.array_0[this.indexFromPosition_bz62pc$(position)];
  };
  Map2D.prototype.set_vq7693$ = function (x, y, value) {
    this.array_0[this.indexFromPosition_vux9f0$(x, y)] = value;
  };
  Map2D.prototype.setByIndex_wxm5ur$ = function (index, value) {
    this.array_0[index] = value;
  };
  Map2D.prototype.getByIndex_za3lpa$ = function (index) {
    return this.array_0[index];
  };
  Map2D.prototype.get_vux9f0$ = function (x, y) {
    return this.array_0[this.indexFromPosition_vux9f0$(x, y)];
  };
  Map2D.prototype.indexFromPosition_bz62pc$ = function (pos) {
    return pos.x + Kotlin.imul(this.dimension.x, pos.y) | 0;
  };
  Map2D.prototype.positionFromIndex_za3lpa$ = function (index) {
    var x = index % this.dimension.x;
    var y = index / this.dimension.x | 0;
    return new Vector2i(x, y);
  };
  Map2D.prototype.indexFromPosition_vux9f0$ = function (x, y) {
    return x + Kotlin.imul(this.dimension.x, y) | 0;
  };
  Map2D.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Map2D',
    interfaces: []
  };
  function Map3D(dimension, array) {
    Map3D$Companion_getInstance();
    this.dimension = dimension;
    this.array_0 = array;
    if (this.array_0.length !== Kotlin.imul(this.dimension.x, this.dimension.y))
      throw Error_init('Invalid array size. Need: ' + Kotlin.imul(Kotlin.imul(this.dimension.x, this.dimension.y), this.dimension.z));
  }
  function Map3D$Companion() {
    Map3D$Companion_instance = this;
  }
  Map3D$Companion.prototype.create_rb2iop$ = defineInlineFunction('typesKt.casper.collection.map.Map3D.Companion.create_rb2iop$', wrapFunction(function () {
    var Map3D_init = _.casper.collection.map.Map3D;
    var Array_0 = Array;
    return function (T_0, isT, dimension, builder) {
      var array = Array_0(Kotlin.imul(Kotlin.imul(dimension.x, dimension.y), dimension.z));
      var tmp$;
      tmp$ = array.length - 1 | 0;
      for (var i = 0; i <= tmp$; i++) {
        array[i] = builder();
      }
      return new Map3D_init(dimension, array);
    };
  }));
  Map3D$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Map3D$Companion_instance = null;
  function Map3D$Companion_getInstance() {
    if (Map3D$Companion_instance === null) {
      new Map3D$Companion();
    }
    return Map3D$Companion_instance;
  }
  Map3D.prototype.isOutside_bz62oh$ = function (position) {
    return !position.greaterOrEq_bz62oh$(Vector3i$Companion_getInstance().ZERO) || !position.less_bz62oh$(this.dimension);
  };
  Map3D.prototype.isInside_bz62oh$ = function (position) {
    return position.greaterOrEq_bz62oh$(Vector3i$Companion_getInstance().ZERO) && position.less_bz62oh$(this.dimension);
  };
  Map3D.prototype.set_5jlzhm$ = function (position, value) {
    this.array_0[this.getPositionIndex_0(position)] = value;
  };
  Map3D.prototype.get_bz62oh$ = function (position) {
    return this.array_0[this.getPositionIndex_0(position)];
  };
  Map3D.prototype.getPositionIndex_0 = function (pos) {
    return pos.x + Kotlin.imul(this.dimension.x, pos.y + Kotlin.imul(this.dimension.y, pos.z) | 0) | 0;
  };
  Map3D.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Map3D',
    interfaces: []
  };
  function Disposable() {
  }
  Disposable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Disposable',
    interfaces: []
  };
  function getDisposable$ObjectLiteral(closure$onDispose, closure$item) {
    this.closure$onDispose = closure$onDispose;
    this.closure$item = closure$item;
  }
  getDisposable$ObjectLiteral.prototype.dispose = function () {
    this.closure$onDispose(this.closure$item);
  };
  getDisposable$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Disposable]
  };
  function getDisposable(item, onDispose) {
    return new getDisposable$ObjectLiteral(onDispose, item);
  }
  function DisposableHolder() {
    this.items_dsnsb7$_0 = ArrayList_init();
  }
  DisposableHolder.prototype.dispose = function () {
    this.clear();
  };
  DisposableHolder.prototype.clear = function () {
    var tmp$;
    tmp$ = this.items_dsnsb7$_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.dispose();
    }
    this.items_dsnsb7$_0.clear();
  };
  DisposableHolder.prototype.add_emx09j$ = function (disposable) {
    this.items_dsnsb7$_0.add_11rb$(disposable);
  };
  DisposableHolder.prototype.remove_emx09j$ = function (disposable) {
    this.items_dsnsb7$_0.remove_11rb$(disposable);
  };
  DisposableHolder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DisposableHolder',
    interfaces: [Disposable]
  };
  function toPrecision($receiver, precision) {
    var precisionFactor = pow(10, precision);
    var normal = $receiver * precisionFactor;
    if (normal < Long$Companion$MIN_VALUE.toNumber() || normal > Long$Companion$MAX_VALUE.toNumber() || !isFinite(normal))
      return normal.toString();
    var value = roundToLong(normal);
    var absValue = abs(value);
    var sign = value.toNumber() < 0 ? '-' : '';
    if (precision === 0) {
      return sign + absValue.div(Kotlin.Long.fromInt(precisionFactor)).toString();
    }
    var remain = absValue.modulo(Kotlin.Long.fromInt(precisionFactor)).toString();
    while (remain.length < precision) {
      remain = '0' + remain;
    }
    return sign + absValue.div(Kotlin.Long.fromInt(precisionFactor)).toString() + '.' + remain;
  }
  function toHexString($receiver) {
    return getColorComponentToHex($receiver.x) + getColorComponentToHex($receiver.y) + getColorComponentToHex($receiver.z) + getColorComponentToHex($receiver.w);
  }
  function toHexString_0($receiver) {
    return getColorComponentToHex($receiver.x) + getColorComponentToHex($receiver.y) + getColorComponentToHex($receiver.z);
  }
  function getColorComponentToHex(value) {
    var max = 255.0;
    var hex = toString(roundToInt(clamp_1(value * max, 0.0, max)), 16);
    while (hex.length < 2) {
      hex = '0' + hex;
    }
    return hex;
  }
  function Matrix23d(m0, m1) {
    this.m0 = m0;
    this.m1 = m1;
  }
  Matrix23d.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Matrix23d',
    interfaces: []
  };
  Matrix23d.prototype.component1 = function () {
    return this.m0;
  };
  Matrix23d.prototype.component2 = function () {
    return this.m1;
  };
  Matrix23d.prototype.copy_p4ip2k$ = function (m0, m1) {
    return new Matrix23d(m0 === void 0 ? this.m0 : m0, m1 === void 0 ? this.m1 : m1);
  };
  Matrix23d.prototype.toString = function () {
    return 'Matrix23d(m0=' + Kotlin.toString(this.m0) + (', m1=' + Kotlin.toString(this.m1)) + ')';
  };
  Matrix23d.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.m0) | 0;
    result = result * 31 + Kotlin.hashCode(this.m1) | 0;
    return result;
  };
  Matrix23d.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.m0, other.m0) && Kotlin.equals(this.m1, other.m1)))));
  };
  function Matrix33d(m0, m1, m2) {
    this.m0 = m0;
    this.m1 = m1;
    this.m2 = m2;
  }
  Matrix33d.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Matrix33d',
    interfaces: []
  };
  Matrix33d.prototype.component1 = function () {
    return this.m0;
  };
  Matrix33d.prototype.component2 = function () {
    return this.m1;
  };
  Matrix33d.prototype.component3 = function () {
    return this.m2;
  };
  Matrix33d.prototype.copy_xdm3fa$ = function (m0, m1, m2) {
    return new Matrix33d(m0 === void 0 ? this.m0 : m0, m1 === void 0 ? this.m1 : m1, m2 === void 0 ? this.m2 : m2);
  };
  Matrix33d.prototype.toString = function () {
    return 'Matrix33d(m0=' + Kotlin.toString(this.m0) + (', m1=' + Kotlin.toString(this.m1)) + (', m2=' + Kotlin.toString(this.m2)) + ')';
  };
  Matrix33d.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.m0) | 0;
    result = result * 31 + Kotlin.hashCode(this.m1) | 0;
    result = result * 31 + Kotlin.hashCode(this.m2) | 0;
    return result;
  };
  Matrix33d.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.m0, other.m0) && Kotlin.equals(this.m1, other.m1) && Kotlin.equals(this.m2, other.m2)))));
  };
  function Matrix43d(m0, m1, m2, m3) {
    this.m0 = m0;
    this.m1 = m1;
    this.m2 = m2;
    this.m3 = m3;
  }
  Matrix43d.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Matrix43d',
    interfaces: []
  };
  Matrix43d.prototype.component1 = function () {
    return this.m0;
  };
  Matrix43d.prototype.component2 = function () {
    return this.m1;
  };
  Matrix43d.prototype.component3 = function () {
    return this.m2;
  };
  Matrix43d.prototype.component4 = function () {
    return this.m3;
  };
  Matrix43d.prototype.copy_wnl63w$ = function (m0, m1, m2, m3) {
    return new Matrix43d(m0 === void 0 ? this.m0 : m0, m1 === void 0 ? this.m1 : m1, m2 === void 0 ? this.m2 : m2, m3 === void 0 ? this.m3 : m3);
  };
  Matrix43d.prototype.toString = function () {
    return 'Matrix43d(m0=' + Kotlin.toString(this.m0) + (', m1=' + Kotlin.toString(this.m1)) + (', m2=' + Kotlin.toString(this.m2)) + (', m3=' + Kotlin.toString(this.m3)) + ')';
  };
  Matrix43d.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.m0) | 0;
    result = result * 31 + Kotlin.hashCode(this.m1) | 0;
    result = result * 31 + Kotlin.hashCode(this.m2) | 0;
    result = result * 31 + Kotlin.hashCode(this.m3) | 0;
    return result;
  };
  Matrix43d.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.m0, other.m0) && Kotlin.equals(this.m1, other.m1) && Kotlin.equals(this.m2, other.m2) && Kotlin.equals(this.m3, other.m3)))));
  };
  function Matrix24d(m0, m1) {
    this.m0 = m0;
    this.m1 = m1;
  }
  Matrix24d.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Matrix24d',
    interfaces: []
  };
  Matrix24d.prototype.component1 = function () {
    return this.m0;
  };
  Matrix24d.prototype.component2 = function () {
    return this.m1;
  };
  Matrix24d.prototype.copy_u02mr8$ = function (m0, m1) {
    return new Matrix24d(m0 === void 0 ? this.m0 : m0, m1 === void 0 ? this.m1 : m1);
  };
  Matrix24d.prototype.toString = function () {
    return 'Matrix24d(m0=' + Kotlin.toString(this.m0) + (', m1=' + Kotlin.toString(this.m1)) + ')';
  };
  Matrix24d.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.m0) | 0;
    result = result * 31 + Kotlin.hashCode(this.m1) | 0;
    return result;
  };
  Matrix24d.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.m0, other.m0) && Kotlin.equals(this.m1, other.m1)))));
  };
  function Matrix34d(m0, m1, m2) {
    this.m0 = m0;
    this.m1 = m1;
    this.m2 = m2;
  }
  Matrix34d.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Matrix34d',
    interfaces: []
  };
  Matrix34d.prototype.component1 = function () {
    return this.m0;
  };
  Matrix34d.prototype.component2 = function () {
    return this.m1;
  };
  Matrix34d.prototype.component3 = function () {
    return this.m2;
  };
  Matrix34d.prototype.copy_4r5dw7$ = function (m0, m1, m2) {
    return new Matrix34d(m0 === void 0 ? this.m0 : m0, m1 === void 0 ? this.m1 : m1, m2 === void 0 ? this.m2 : m2);
  };
  Matrix34d.prototype.toString = function () {
    return 'Matrix34d(m0=' + Kotlin.toString(this.m0) + (', m1=' + Kotlin.toString(this.m1)) + (', m2=' + Kotlin.toString(this.m2)) + ')';
  };
  Matrix34d.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.m0) | 0;
    result = result * 31 + Kotlin.hashCode(this.m1) | 0;
    result = result * 31 + Kotlin.hashCode(this.m2) | 0;
    return result;
  };
  Matrix34d.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.m0, other.m0) && Kotlin.equals(this.m1, other.m1) && Kotlin.equals(this.m2, other.m2)))));
  };
  function Matrix44d(m0, m1, m2, m3) {
    this.m0 = m0;
    this.m1 = m1;
    this.m2 = m2;
    this.m3 = m3;
  }
  Matrix44d.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Matrix44d',
    interfaces: []
  };
  Matrix44d.prototype.component1 = function () {
    return this.m0;
  };
  Matrix44d.prototype.component2 = function () {
    return this.m1;
  };
  Matrix44d.prototype.component3 = function () {
    return this.m2;
  };
  Matrix44d.prototype.component4 = function () {
    return this.m3;
  };
  Matrix44d.prototype.copy_9j04d0$ = function (m0, m1, m2, m3) {
    return new Matrix44d(m0 === void 0 ? this.m0 : m0, m1 === void 0 ? this.m1 : m1, m2 === void 0 ? this.m2 : m2, m3 === void 0 ? this.m3 : m3);
  };
  Matrix44d.prototype.toString = function () {
    return 'Matrix44d(m0=' + Kotlin.toString(this.m0) + (', m1=' + Kotlin.toString(this.m1)) + (', m2=' + Kotlin.toString(this.m2)) + (', m3=' + Kotlin.toString(this.m3)) + ')';
  };
  Matrix44d.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.m0) | 0;
    result = result * 31 + Kotlin.hashCode(this.m1) | 0;
    result = result * 31 + Kotlin.hashCode(this.m2) | 0;
    result = result * 31 + Kotlin.hashCode(this.m3) | 0;
    return result;
  };
  Matrix44d.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.m0, other.m0) && Kotlin.equals(this.m1, other.m1) && Kotlin.equals(this.m2, other.m2) && Kotlin.equals(this.m3, other.m3)))));
  };
  function Matrix83d(m0, m1, m2, m3, m4, m5, m6, m7) {
    this.m0 = m0;
    this.m1 = m1;
    this.m2 = m2;
    this.m3 = m3;
    this.m4 = m4;
    this.m5 = m5;
    this.m6 = m6;
    this.m7 = m7;
  }
  Matrix83d.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Matrix83d',
    interfaces: []
  };
  Matrix83d.prototype.component1 = function () {
    return this.m0;
  };
  Matrix83d.prototype.component2 = function () {
    return this.m1;
  };
  Matrix83d.prototype.component3 = function () {
    return this.m2;
  };
  Matrix83d.prototype.component4 = function () {
    return this.m3;
  };
  Matrix83d.prototype.component5 = function () {
    return this.m4;
  };
  Matrix83d.prototype.component6 = function () {
    return this.m5;
  };
  Matrix83d.prototype.component7 = function () {
    return this.m6;
  };
  Matrix83d.prototype.component8 = function () {
    return this.m7;
  };
  Matrix83d.prototype.copy_2ykzvw$ = function (m0, m1, m2, m3, m4, m5, m6, m7) {
    return new Matrix83d(m0 === void 0 ? this.m0 : m0, m1 === void 0 ? this.m1 : m1, m2 === void 0 ? this.m2 : m2, m3 === void 0 ? this.m3 : m3, m4 === void 0 ? this.m4 : m4, m5 === void 0 ? this.m5 : m5, m6 === void 0 ? this.m6 : m6, m7 === void 0 ? this.m7 : m7);
  };
  Matrix83d.prototype.toString = function () {
    return 'Matrix83d(m0=' + Kotlin.toString(this.m0) + (', m1=' + Kotlin.toString(this.m1)) + (', m2=' + Kotlin.toString(this.m2)) + (', m3=' + Kotlin.toString(this.m3)) + (', m4=' + Kotlin.toString(this.m4)) + (', m5=' + Kotlin.toString(this.m5)) + (', m6=' + Kotlin.toString(this.m6)) + (', m7=' + Kotlin.toString(this.m7)) + ')';
  };
  Matrix83d.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.m0) | 0;
    result = result * 31 + Kotlin.hashCode(this.m1) | 0;
    result = result * 31 + Kotlin.hashCode(this.m2) | 0;
    result = result * 31 + Kotlin.hashCode(this.m3) | 0;
    result = result * 31 + Kotlin.hashCode(this.m4) | 0;
    result = result * 31 + Kotlin.hashCode(this.m5) | 0;
    result = result * 31 + Kotlin.hashCode(this.m6) | 0;
    result = result * 31 + Kotlin.hashCode(this.m7) | 0;
    return result;
  };
  Matrix83d.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.m0, other.m0) && Kotlin.equals(this.m1, other.m1) && Kotlin.equals(this.m2, other.m2) && Kotlin.equals(this.m3, other.m3) && Kotlin.equals(this.m4, other.m4) && Kotlin.equals(this.m5, other.m5) && Kotlin.equals(this.m6, other.m6) && Kotlin.equals(this.m7, other.m7)))));
  };
  function Vector2d(x, y) {
    Vector2d$Companion_getInstance();
    this.x = x;
    this.y = y;
  }
  function Vector2d$Companion() {
    Vector2d$Companion_instance = this;
    this.NAN = new Vector2d(kotlin_js_internal_DoubleCompanionObject.NaN, kotlin_js_internal_DoubleCompanionObject.NaN);
    this.ZERO = new Vector2d(0.0, 0.0);
    this.X = new Vector2d(1.0, 0.0);
    this.Y = new Vector2d(0.0, 1.0);
    this.XY = new Vector2d(1.0, 1.0);
    this.ONE = this.XY;
  }
  Vector2d$Companion.prototype.serializer = function () {
    return Vector2d$$serializer_getInstance();
  };
  Vector2d$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Vector2d$Companion_instance = null;
  function Vector2d$Companion_getInstance() {
    if (Vector2d$Companion_instance === null) {
      new Vector2d$Companion();
    }
    return Vector2d$Companion_instance;
  }
  Vector2d.prototype.toVector2i = function () {
    try {
      return new Vector2i(roundToInt(this.x), roundToInt(this.y));
    }
     catch (t) {
      if (Kotlin.isType(t, Throwable)) {
        return null;
      }
       else
        throw t;
    }
  };
  Vector2d.prototype.setZ_14dthe$ = function (z) {
    if (z === void 0)
      z = 0.0;
    return new Vector3d(this.x, this.y, z);
  };
  Vector2d.prototype.normalize = function () {
    var len = this.length();
    return new Vector2d(this.x / len, this.y / len);
  };
  Vector2d.prototype.length = function () {
    var x = this.x * this.x + this.y * this.y;
    return Math_0.sqrt(x);
  };
  Vector2d.prototype.toString = function () {
    return 'V2d(x=' + this.x + ', y=' + this.y + ')';
  };
  Vector2d.prototype.plus_bz62ph$ = function (position) {
    return new Vector2d(this.x + position.x, this.y + position.y);
  };
  Vector2d.prototype.minus_bz62ph$ = function (position) {
    return new Vector2d(this.x - position.x, this.y - position.y);
  };
  Vector2d.prototype.div_14dthe$ = function (value) {
    return new Vector2d(this.x / value, this.y / value);
  };
  Vector2d.prototype.dot_bz62ph$ = function (value) {
    return this.x * value.x + this.y * value.y;
  };
  Vector2d.prototype.times_14dthe$ = function (value) {
    return new Vector2d(this.x * value, this.y * value);
  };
  Vector2d.prototype.times_bz62ph$ = function (value) {
    return new Vector2d(this.x * value.x, this.y * value.y);
  };
  Vector2d.prototype.div_bz62ph$ = function (value) {
    return new Vector2d(this.x / value.x, this.y / value.y);
  };
  Vector2d.prototype.sign = function () {
    var $receiver = this.x;
    var tmp$ = Math_0.sign($receiver);
    var $receiver_0 = this.y;
    return new Vector2d(tmp$, Math_0.sign($receiver_0));
  };
  Vector2d.prototype.manhattan = function () {
    var x = this.x;
    var tmp$ = Math_0.abs(x);
    var x_0 = this.y;
    return tmp$ + Math_0.abs(x_0);
  };
  Vector2d.prototype.lengthByInf = function () {
    var x = this.x;
    var tmp$ = Math_0.abs(x);
    var x_0 = this.y;
    var b = Math_0.abs(x_0);
    return Math_0.max(tmp$, b);
  };
  Vector2d.prototype.upper_bz62ph$ = function (other) {
    var a = this.x;
    var b = other.x;
    var tmp$ = Math_0.max(a, b);
    var a_0 = this.y;
    var b_0 = other.y;
    return new Vector2d(tmp$, Math_0.max(a_0, b_0));
  };
  Vector2d.prototype.lower_bz62ph$ = function (other) {
    var a = this.x;
    var b = other.x;
    var tmp$ = Math_0.min(a, b);
    var a_0 = this.y;
    var b_0 = other.y;
    return new Vector2d(tmp$, Math_0.min(a_0, b_0));
  };
  Vector2d.prototype.greater_bz62ph$ = function (other) {
    return this.x > other.x && this.y > other.y;
  };
  Vector2d.prototype.greaterOrEq_bz62ph$ = function (other) {
    return this.x >= other.x && this.y >= other.y;
  };
  Vector2d.prototype.less_bz62ph$ = function (other) {
    return this.x < other.x && this.y < other.y;
  };
  Vector2d.prototype.lessOrEq_bz62ph$ = function (other) {
    return this.x <= other.x && this.y <= other.y;
  };
  Vector2d.prototype.unaryMinus = function () {
    return new Vector2d(-this.x, -this.y);
  };
  function Vector2d$$serializer() {
    this.descriptor_8emes0$_0 = new SerialClassDescImpl('casper.geometry.Vector2d', this);
    this.descriptor.addElement_ivxn3r$('x', false);
    this.descriptor.addElement_ivxn3r$('y', false);
    Vector2d$$serializer_instance = this;
  }
  Object.defineProperty(Vector2d$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_8emes0$_0;
    }
  });
  Vector2d$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeDoubleElement_imzr5k$(this.descriptor, 0, obj.x);
    output.encodeDoubleElement_imzr5k$(this.descriptor, 1, obj.y);
    output.endStructure_qatsm0$(this.descriptor);
  };
  Vector2d$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeDoubleElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = input.decodeDoubleElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return Vector2d_init(bitMask0, local0, local1, null);
  };
  Vector2d$$serializer.prototype.childSerializers = function () {
    return [internal.DoubleSerializer, internal.DoubleSerializer];
  };
  Vector2d$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Vector2d$$serializer_instance = null;
  function Vector2d$$serializer_getInstance() {
    if (Vector2d$$serializer_instance === null) {
      new Vector2d$$serializer();
    }
    return Vector2d$$serializer_instance;
  }
  function Vector2d_init(seen1, x, y, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Vector2d.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('x');
    else
      $this.x = x;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('y');
    else
      $this.y = y;
    return $this;
  }
  Vector2d.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Vector2d',
    interfaces: []
  };
  function Vector2d_init_0(i, $this) {
    $this = $this || Object.create(Vector2d.prototype);
    Vector2d.call($this, i, i);
    return $this;
  }
  Vector2d.prototype.component1 = function () {
    return this.x;
  };
  Vector2d.prototype.component2 = function () {
    return this.y;
  };
  Vector2d.prototype.copy_lu1900$ = function (x, y) {
    return new Vector2d(x === void 0 ? this.x : x, y === void 0 ? this.y : y);
  };
  Vector2d.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    return result;
  };
  Vector2d.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
  };
  function Vector2i(x, y) {
    Vector2i$Companion_getInstance();
    this.x = x;
    this.y = y;
  }
  function Vector2i$Companion() {
    Vector2i$Companion_instance = this;
    this.ZERO = new Vector2i(0, 0);
    this.X = new Vector2i(1, 0);
    this.Y = new Vector2i(0, 1);
    this.XY = new Vector2i(1, 1);
    this.ONE = this.XY;
    this.BASIS = [this.ZERO, this.Y, this.X, this.XY];
  }
  Vector2i$Companion.prototype.serializer = function () {
    return Vector2i$$serializer_getInstance();
  };
  Vector2i$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Vector2i$Companion_instance = null;
  function Vector2i$Companion_getInstance() {
    if (Vector2i$Companion_instance === null) {
      new Vector2i$Companion();
    }
    return Vector2i$Companion_instance;
  }
  Vector2i.prototype.setZ_za3lpa$ = function (z) {
    if (z === void 0)
      z = 0;
    return new Vector3i(this.x, this.y, z);
  };
  Vector2i.prototype.subtract_bz62pc$ = function (position) {
    return new Vector2i(this.x - position.x | 0, this.y - position.y | 0);
  };
  Vector2i.prototype.add_bz62pc$ = function (position) {
    return new Vector2i(this.x + position.x | 0, this.y + position.y | 0);
  };
  Vector2i.prototype.length = function () {
    var x = this.x * this.x + this.y * this.y;
    return Math_0.sqrt(x);
  };
  Vector2i.prototype.scale_za3lpa$ = function (value) {
    return new Vector2i(Kotlin.imul(this.x, value), Kotlin.imul(this.y, value));
  };
  Vector2i.prototype.toString = function () {
    return 'V2i(x=' + this.x + ', y=' + this.y + ')';
  };
  Vector2i.prototype.toVector2d = function () {
    return new Vector2d(this.x, this.y);
  };
  Vector2i.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!Kotlin.isType(other, Vector2i))
      return false;
    if (this.x !== other.x)
      return false;
    if (this.y !== other.y)
      return false;
    return true;
  };
  Vector2i.prototype.hashCode = function () {
    var result = this.x;
    result = (31 * result | 0) + this.y | 0;
    return result;
  };
  Vector2i.prototype.times_za3lpa$ = function (value) {
    return new Vector2i(Kotlin.imul(this.x, value), Kotlin.imul(this.y, value));
  };
  Vector2i.prototype.times_bz62pc$ = function (value) {
    return new Vector2i(Kotlin.imul(this.x, value.x), Kotlin.imul(this.y, value.y));
  };
  Vector2i.prototype.plus_bz62pc$ = function (position) {
    return new Vector2i(this.x + position.x | 0, this.y + position.y | 0);
  };
  Vector2i.prototype.minus_bz62pc$ = function (position) {
    return new Vector2i(this.x - position.x | 0, this.y - position.y | 0);
  };
  Vector2i.prototype.manhattan = function () {
    return abs_0(this.x) + abs_0(this.y) | 0;
  };
  Vector2i.prototype.upper_bz62pc$ = function (other) {
    var a = this.x;
    var b = other.x;
    var tmp$ = Math_0.max(a, b);
    var a_0 = this.y;
    var b_0 = other.y;
    return new Vector2i(tmp$, Math_0.max(a_0, b_0));
  };
  Vector2i.prototype.lower_bz62pc$ = function (other) {
    var a = this.x;
    var b = other.x;
    var tmp$ = Math_0.min(a, b);
    var a_0 = this.y;
    var b_0 = other.y;
    return new Vector2i(tmp$, Math_0.min(a_0, b_0));
  };
  Vector2i.prototype.greater_bz62pc$ = function (other) {
    return this.x > other.x && this.y > other.y;
  };
  Vector2i.prototype.greaterOrEq_bz62pc$ = function (other) {
    return this.x >= other.x && this.y >= other.y;
  };
  Vector2i.prototype.less_bz62pc$ = function (other) {
    return this.x < other.x && this.y < other.y;
  };
  Vector2i.prototype.lessOrEq_bz62pc$ = function (other) {
    return this.x <= other.x && this.y <= other.y;
  };
  function Vector2i$$serializer() {
    this.descriptor_laqi7f$_0 = new SerialClassDescImpl('casper.geometry.Vector2i', this);
    this.descriptor.addElement_ivxn3r$('x', false);
    this.descriptor.addElement_ivxn3r$('y', false);
    Vector2i$$serializer_instance = this;
  }
  Object.defineProperty(Vector2i$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_laqi7f$_0;
    }
  });
  Vector2i$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeIntElement_4wpqag$(this.descriptor, 0, obj.x);
    output.encodeIntElement_4wpqag$(this.descriptor, 1, obj.y);
    output.endStructure_qatsm0$(this.descriptor);
  };
  Vector2i$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeIntElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = input.decodeIntElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return Vector2i_init(bitMask0, local0, local1, null);
  };
  Vector2i$$serializer.prototype.childSerializers = function () {
    return [internal.IntSerializer, internal.IntSerializer];
  };
  Vector2i$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Vector2i$$serializer_instance = null;
  function Vector2i$$serializer_getInstance() {
    if (Vector2i$$serializer_instance === null) {
      new Vector2i$$serializer();
    }
    return Vector2i$$serializer_instance;
  }
  function Vector2i_init(seen1, x, y, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Vector2i.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('x');
    else
      $this.x = x;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('y');
    else
      $this.y = y;
    return $this;
  }
  Vector2i.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Vector2i',
    interfaces: []
  };
  function Vector2i_init_0(i, $this) {
    $this = $this || Object.create(Vector2i.prototype);
    Vector2i.call($this, i, i);
    return $this;
  }
  Vector2i.prototype.component1 = function () {
    return this.x;
  };
  Vector2i.prototype.component2 = function () {
    return this.y;
  };
  Vector2i.prototype.copy_vux9f0$ = function (x, y) {
    return new Vector2i(x === void 0 ? this.x : x, y === void 0 ? this.y : y);
  };
  function Vector3d(x, y, z) {
    Vector3d$Companion_getInstance();
    this.x = x;
    this.y = y;
    this.z = z;
  }
  function Vector3d$Companion() {
    Vector3d$Companion_instance = this;
    this.NAN = new Vector3d(kotlin_js_internal_DoubleCompanionObject.NaN, kotlin_js_internal_DoubleCompanionObject.NaN, kotlin_js_internal_DoubleCompanionObject.NaN);
    this.ZERO = new Vector3d(0.0, 0.0, 0.0);
    this.X = new Vector3d(1.0, 0.0, 0.0);
    this.Y = new Vector3d(0.0, 1.0, 0.0);
    this.Z = new Vector3d(0.0, 0.0, 1.0);
    this.YZ = new Vector3d(0.0, 1.0, 1.0);
    this.XZ = new Vector3d(1.0, 0.0, 1.0);
    this.XY = new Vector3d(1.0, 1.0, 0.0);
    this.XYZ = new Vector3d(1.0, 1.0, 1.0);
    this.ONE = this.XYZ;
  }
  Vector3d$Companion.prototype.mono_14dthe$ = function (value) {
    return new Vector3d(value, value, value);
  };
  Vector3d$Companion.prototype.serializer = function () {
    return Vector3d$$serializer_getInstance();
  };
  Vector3d$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Vector3d$Companion_instance = null;
  function Vector3d$Companion_getInstance() {
    if (Vector3d$Companion_instance === null) {
      new Vector3d$Companion();
    }
    return Vector3d$Companion_instance;
  }
  Vector3d.prototype.getXY = function () {
    return new Vector2d(this.x, this.y);
  };
  Vector3d.prototype.getXZ = function () {
    return new Vector2d(this.x, this.z);
  };
  Vector3d.prototype.getYZ = function () {
    return new Vector2d(this.y, this.z);
  };
  Vector3d.prototype.toVector3i = function () {
    try {
      return new Vector3i(roundToInt(this.x), roundToInt(this.y), roundToInt(this.z));
    }
     catch (t) {
      if (Kotlin.isType(t, Throwable)) {
        return null;
      }
       else
        throw t;
    }
  };
  Vector3d.prototype.unaryMinus = function () {
    return this.times_14dthe$(-1.0);
  };
  Vector3d.prototype.plus_bz62om$ = function (position) {
    return new Vector3d(this.x + position.x, this.y + position.y, this.z + position.z);
  };
  Vector3d.prototype.minus_bz62om$ = function (position) {
    return new Vector3d(this.x - position.x, this.y - position.y, this.z - position.z);
  };
  Vector3d.prototype.div_14dthe$ = function (value) {
    return new Vector3d(this.x / value, this.y / value, this.z / value);
  };
  Vector3d.prototype.div_bz62om$ = function (value) {
    return new Vector3d(this.x / value.x, this.y / value.y, this.z / value.z);
  };
  Vector3d.prototype.times_14dthe$ = function (value) {
    return new Vector3d(this.x * value, this.y * value, this.z * value);
  };
  Vector3d.prototype.times_bz62om$ = function (value) {
    return new Vector3d(this.x * value.x, this.y * value.y, this.z * value.z);
  };
  Vector3d.prototype.normalize = function () {
    var len = this.length();
    return new Vector3d(this.x / len, this.y / len, this.z / len);
  };
  Vector3d.prototype.length = function () {
    var x = this.x * this.x + this.y * this.y + this.z * this.z;
    return Math_0.sqrt(x);
  };
  Vector3d.prototype.cross_bz62om$ = function (value) {
    return new Vector3d(this.y * value.z - this.z * value.y, this.z * value.x - this.x * value.z, this.x * value.y - this.y * value.x);
  };
  Vector3d.prototype.dot_bz62om$ = function (value) {
    return this.x * value.x + this.y * value.y + this.z * value.z;
  };
  Vector3d.prototype.toString = function () {
    return 'V3d(x=' + toPrecision(this.x, 2) + ', y=' + toPrecision(this.y, 2) + ', z=' + toPrecision(this.z, 2) + ')';
  };
  Vector3d.prototype.toPrecision_za3lpa$ = function (precision) {
    return toPrecision(this.x, precision) + '; ' + toPrecision(this.y, precision) + '; ' + toPrecision(this.z, precision);
  };
  Vector3d.prototype.clamp_p4ip2k$ = function (min, max) {
    return new Vector3d(clamp_1(this.x, min.x, max.x), clamp_1(this.y, min.y, max.y), clamp_1(this.z, min.z, max.z));
  };
  Vector3d.prototype.sign = function () {
    var $receiver = this.x;
    var tmp$ = Math_0.sign($receiver);
    var $receiver_0 = this.y;
    var tmp$_0 = Math_0.sign($receiver_0);
    var $receiver_1 = this.z;
    return new Vector3d(tmp$, tmp$_0, Math_0.sign($receiver_1));
  };
  Vector3d.prototype.lengthByInf = function () {
    var x = this.x;
    var tmp$ = Math_0.abs(x);
    var x_0 = this.y;
    var tmp$_0 = Math_0.abs(x_0);
    var x_1 = this.z;
    var b = Math_0.abs(x_1);
    var b_0 = Math_0.max(tmp$_0, b);
    return Math_0.max(tmp$, b_0);
  };
  Vector3d.prototype.manhattan = function () {
    var x = this.x;
    var tmp$ = Math_0.abs(x);
    var x_0 = this.y;
    var tmp$_0 = tmp$ + Math_0.abs(x_0);
    var x_1 = this.z;
    return tmp$_0 + Math_0.abs(x_1);
  };
  Vector3d.prototype.upper_bz62om$ = function (other) {
    var a = this.x;
    var b = other.x;
    var tmp$ = Math_0.max(a, b);
    var a_0 = this.y;
    var b_0 = other.y;
    var tmp$_0 = Math_0.max(a_0, b_0);
    var a_1 = this.z;
    var b_1 = other.z;
    return new Vector3d(tmp$, tmp$_0, Math_0.max(a_1, b_1));
  };
  Vector3d.prototype.lower_bz62om$ = function (other) {
    var a = this.x;
    var b = other.x;
    var tmp$ = Math_0.min(a, b);
    var a_0 = this.y;
    var b_0 = other.y;
    var tmp$_0 = Math_0.min(a_0, b_0);
    var a_1 = this.z;
    var b_1 = other.z;
    return new Vector3d(tmp$, tmp$_0, Math_0.min(a_1, b_1));
  };
  Vector3d.prototype.extrapolate_ppr5tq$ = function (A, B, weightA) {
    var weight = clamp_1(weightA, 0.0, 1.0);
    return A.times_14dthe$(weight).plus_bz62om$(B.times_14dthe$(1.0 - weight));
  };
  Vector3d.prototype.greater_bz62om$ = function (other) {
    return this.x > other.x && this.y > other.y && this.z > other.z;
  };
  Vector3d.prototype.greaterOrEq_bz62om$ = function (other) {
    return this.x >= other.x && this.y >= other.y && this.z >= other.z;
  };
  Vector3d.prototype.less_bz62om$ = function (other) {
    return this.x < other.x && this.y < other.y && this.z < other.z;
  };
  Vector3d.prototype.lessOrEq_bz62om$ = function (other) {
    return this.x <= other.x && this.y <= other.y && this.z <= other.z;
  };
  Vector3d.prototype.toShortString = function () {
    return toPrecision(this.x, 2) + ';' + toPrecision(this.y, 2) + ';' + toPrecision(this.z, 2);
  };
  function Vector3d$$serializer() {
    this.descriptor_8x39tb$_0 = new SerialClassDescImpl('casper.geometry.Vector3d', this);
    this.descriptor.addElement_ivxn3r$('x', false);
    this.descriptor.addElement_ivxn3r$('y', false);
    this.descriptor.addElement_ivxn3r$('z', false);
    Vector3d$$serializer_instance = this;
  }
  Object.defineProperty(Vector3d$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_8x39tb$_0;
    }
  });
  Vector3d$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeDoubleElement_imzr5k$(this.descriptor, 0, obj.x);
    output.encodeDoubleElement_imzr5k$(this.descriptor, 1, obj.y);
    output.encodeDoubleElement_imzr5k$(this.descriptor, 2, obj.z);
    output.endStructure_qatsm0$(this.descriptor);
  };
  Vector3d$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeDoubleElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = input.decodeDoubleElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = input.decodeDoubleElement_3zr2iy$(this.descriptor, 2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return Vector3d_init(bitMask0, local0, local1, local2, null);
  };
  Vector3d$$serializer.prototype.childSerializers = function () {
    return [internal.DoubleSerializer, internal.DoubleSerializer, internal.DoubleSerializer];
  };
  Vector3d$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Vector3d$$serializer_instance = null;
  function Vector3d$$serializer_getInstance() {
    if (Vector3d$$serializer_instance === null) {
      new Vector3d$$serializer();
    }
    return Vector3d$$serializer_instance;
  }
  function Vector3d_init(seen1, x, y, z, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Vector3d.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('x');
    else
      $this.x = x;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('y');
    else
      $this.y = y;
    if ((seen1 & 4) === 0)
      throw new MissingFieldException('z');
    else
      $this.z = z;
    return $this;
  }
  Vector3d.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Vector3d',
    interfaces: []
  };
  function Vector3d_init_0(i, $this) {
    $this = $this || Object.create(Vector3d.prototype);
    Vector3d.call($this, i, i, i);
    return $this;
  }
  Vector3d.prototype.component1 = function () {
    return this.x;
  };
  Vector3d.prototype.component2 = function () {
    return this.y;
  };
  Vector3d.prototype.component3 = function () {
    return this.z;
  };
  Vector3d.prototype.copy_yvo9jy$ = function (x, y, z) {
    return new Vector3d(x === void 0 ? this.x : x, y === void 0 ? this.y : y, z === void 0 ? this.z : z);
  };
  Vector3d.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.z) | 0;
    return result;
  };
  Vector3d.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.z, other.z)))));
  };
  function Vector3i(x, y, z) {
    Vector3i$Companion_getInstance();
    this.x = x;
    this.y = y;
    this.z = z;
  }
  function Vector3i$Companion() {
    Vector3i$Companion_instance = this;
    this.MAX_VALUE = new Vector3i(2147483647, 2147483647, 2147483647);
    this.ZERO = new Vector3i(0, 0, 0);
    this.X = new Vector3i(1, 0, 0);
    this.Y = new Vector3i(0, 1, 0);
    this.Z = new Vector3i(0, 0, 1);
    this.YZ = new Vector3i(0, 1, 1);
    this.XZ = new Vector3i(1, 0, 1);
    this.XY = new Vector3i(1, 1, 0);
    this.XYZ = new Vector3i(1, 1, 1);
    this.ONE = this.XYZ;
    this.BASIS = [this.ZERO, this.Z, this.Y, this.YZ, this.X, this.XZ, this.XY, this.XYZ];
  }
  Vector3i$Companion.prototype.serializer = function () {
    return Vector3i$$serializer_getInstance();
  };
  Vector3i$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Vector3i$Companion_instance = null;
  function Vector3i$Companion_getInstance() {
    if (Vector3i$Companion_instance === null) {
      new Vector3i$Companion();
    }
    return Vector3i$Companion_instance;
  }
  Vector3i.prototype.getXY = function () {
    return new Vector2i(this.x, this.y);
  };
  Vector3i.prototype.getXZ = function () {
    return new Vector2i(this.x, this.z);
  };
  Vector3i.prototype.getYZ = function () {
    return new Vector2i(this.y, this.z);
  };
  Vector3i.prototype.toVector3d = function () {
    return new Vector3d(this.x, this.y, this.z);
  };
  Vector3i.prototype.unaryMinus = function () {
    return this.times_za3lpa$(-1);
  };
  Vector3i.prototype.plus_bz62oh$ = function (position) {
    return new Vector3i(this.x + position.x | 0, this.y + position.y | 0, this.z + position.z | 0);
  };
  Vector3i.prototype.minus_bz62oh$ = function (position) {
    return new Vector3i(this.x - position.x | 0, this.y - position.y | 0, this.z - position.z | 0);
  };
  Vector3i.prototype.div_za3lpa$ = function (value) {
    return new Vector3i(this.x / value | 0, this.y / value | 0, this.z / value | 0);
  };
  Vector3i.prototype.div_14dthe$ = function (value) {
    return new Vector3d(this.x / value, this.y / value, this.z / value);
  };
  Vector3i.prototype.times_14dthe$ = function (value) {
    return new Vector3d(this.x * value, this.y * value, this.z * value);
  };
  Vector3i.prototype.times_za3lpa$ = function (value) {
    return new Vector3i(Kotlin.imul(this.x, value), Kotlin.imul(this.y, value), Kotlin.imul(this.z, value));
  };
  Vector3i.prototype.times_bz62oh$ = function (value) {
    return new Vector3i(Kotlin.imul(this.x, value.x), Kotlin.imul(this.y, value.y), Kotlin.imul(this.z, value.z));
  };
  Vector3i.prototype.length = function () {
    var x = Kotlin.imul(this.x, this.x) + Kotlin.imul(this.y, this.y) + Kotlin.imul(this.z, this.z) | 0;
    return Math_0.sqrt(x);
  };
  Vector3i.prototype.manhattan = function () {
    return abs_0(this.x) + abs_0(this.y) + abs_0(this.z) | 0;
  };
  Vector3i.prototype.maximum = function () {
    var tmp$ = abs_0(this.x);
    var a = abs_0(this.y);
    var b = abs_0(this.z);
    var b_0 = Math_0.max(a, b);
    return Math_0.max(tmp$, b_0);
  };
  Vector3i.prototype.scale_za3lpa$ = function (value) {
    return new Vector3i(Kotlin.imul(this.x, value), Kotlin.imul(this.y, value), Kotlin.imul(this.z, value));
  };
  Vector3i.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!Kotlin.isType(other, Vector3i))
      return false;
    if (this.x !== other.x)
      return false;
    if (this.y !== other.y)
      return false;
    if (this.z !== other.z)
      return false;
    return true;
  };
  Vector3i.prototype.equalsFast_bz62oh$ = function (other) {
    return this.x === other.x && this.y === other.y && this.z === other.z;
  };
  Vector3i.prototype.toString = function () {
    return 'V3i(x=' + this.x + ', y=' + this.y + ', z=' + this.z + ')';
  };
  Vector3i.prototype.toShortString = function () {
    return '(' + this.x + ', ' + this.y + ', ' + this.z + ')';
  };
  Vector3i.prototype.hashCode = function () {
    var result = this.x;
    result = (31 * result | 0) + this.y | 0;
    result = (31 * result | 0) + this.z | 0;
    return result;
  };
  Vector3i.prototype.upper_bz62oh$ = function (other) {
    var a = this.x;
    var b = other.x;
    var tmp$ = Math_0.max(a, b);
    var a_0 = this.y;
    var b_0 = other.y;
    var tmp$_0 = Math_0.max(a_0, b_0);
    var a_1 = this.z;
    var b_1 = other.z;
    return new Vector3i(tmp$, tmp$_0, Math_0.max(a_1, b_1));
  };
  Vector3i.prototype.lower_bz62oh$ = function (other) {
    var a = this.x;
    var b = other.x;
    var tmp$ = Math_0.min(a, b);
    var a_0 = this.y;
    var b_0 = other.y;
    var tmp$_0 = Math_0.min(a_0, b_0);
    var a_1 = this.z;
    var b_1 = other.z;
    return new Vector3i(tmp$, tmp$_0, Math_0.min(a_1, b_1));
  };
  Vector3i.prototype.greater_bz62oh$ = function (other) {
    return this.x > other.x && this.y > other.y && this.z > other.z;
  };
  Vector3i.prototype.greaterOrEq_bz62oh$ = function (other) {
    return this.x >= other.x && this.y >= other.y && this.z >= other.z;
  };
  Vector3i.prototype.less_bz62oh$ = function (other) {
    return this.x < other.x && this.y < other.y && this.z < other.z;
  };
  Vector3i.prototype.lessOrEq_bz62oh$ = function (other) {
    return this.x <= other.x && this.y <= other.y && this.z <= other.z;
  };
  function Vector3i$$serializer() {
    this.descriptor_ks9n64$_0 = new SerialClassDescImpl('casper.geometry.Vector3i', this);
    this.descriptor.addElement_ivxn3r$('x', false);
    this.descriptor.addElement_ivxn3r$('y', false);
    this.descriptor.addElement_ivxn3r$('z', false);
    Vector3i$$serializer_instance = this;
  }
  Object.defineProperty(Vector3i$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_ks9n64$_0;
    }
  });
  Vector3i$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeIntElement_4wpqag$(this.descriptor, 0, obj.x);
    output.encodeIntElement_4wpqag$(this.descriptor, 1, obj.y);
    output.encodeIntElement_4wpqag$(this.descriptor, 2, obj.z);
    output.endStructure_qatsm0$(this.descriptor);
  };
  Vector3i$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeIntElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = input.decodeIntElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = input.decodeIntElement_3zr2iy$(this.descriptor, 2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return Vector3i_init(bitMask0, local0, local1, local2, null);
  };
  Vector3i$$serializer.prototype.childSerializers = function () {
    return [internal.IntSerializer, internal.IntSerializer, internal.IntSerializer];
  };
  Vector3i$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Vector3i$$serializer_instance = null;
  function Vector3i$$serializer_getInstance() {
    if (Vector3i$$serializer_instance === null) {
      new Vector3i$$serializer();
    }
    return Vector3i$$serializer_instance;
  }
  function Vector3i_init(seen1, x, y, z, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Vector3i.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('x');
    else
      $this.x = x;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('y');
    else
      $this.y = y;
    if ((seen1 & 4) === 0)
      throw new MissingFieldException('z');
    else
      $this.z = z;
    return $this;
  }
  Vector3i.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Vector3i',
    interfaces: []
  };
  function Vector3i_init_0(i, $this) {
    $this = $this || Object.create(Vector3i.prototype);
    Vector3i.call($this, i, i, i);
    return $this;
  }
  Vector3i.prototype.component1 = function () {
    return this.x;
  };
  Vector3i.prototype.component2 = function () {
    return this.y;
  };
  Vector3i.prototype.component3 = function () {
    return this.z;
  };
  Vector3i.prototype.copy_qt1dr2$ = function (x, y, z) {
    return new Vector3i(x === void 0 ? this.x : x, y === void 0 ? this.y : y, z === void 0 ? this.z : z);
  };
  function Vector4d(x, y, z, w) {
    Vector4d$Companion_getInstance();
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }
  function Vector4d$Companion() {
    Vector4d$Companion_instance = this;
    this.ZERO = new Vector4d(0.0, 0.0, 0.0, 0.0);
    this.XYZW = new Vector4d(1.0, 1.0, 1.0, 1.0);
    this.ONE = this.XYZW;
  }
  Vector4d$Companion.prototype.serializer = function () {
    return Vector4d$$serializer_getInstance();
  };
  Vector4d$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Vector4d$Companion_instance = null;
  function Vector4d$Companion_getInstance() {
    if (Vector4d$Companion_instance === null) {
      new Vector4d$Companion();
    }
    return Vector4d$Companion_instance;
  }
  Vector4d.prototype.unaryMinus = function () {
    return this.times_14dthe$(-1.0);
  };
  Vector4d.prototype.plus_bz62nr$ = function (position) {
    return new Vector4d(this.x + position.x, this.y + position.y, this.z + position.z, this.w + position.w);
  };
  Vector4d.prototype.minus_bz62nr$ = function (position) {
    return new Vector4d(this.x - position.x, this.y - position.y, this.z - position.z, this.w - position.w);
  };
  Vector4d.prototype.div_14dthe$ = function (value) {
    return new Vector4d(this.x / value, this.y / value, this.z / value, this.w / value);
  };
  Vector4d.prototype.div_bz62nr$ = function (value) {
    return new Vector4d(this.x / value.x, this.y / value.y, this.z / value.z, this.w / value.w);
  };
  Vector4d.prototype.times_14dthe$ = function (value) {
    return new Vector4d(this.x * value, this.y * value, this.z * value, this.w * value);
  };
  Vector4d.prototype.times_bz62nr$ = function (value) {
    return new Vector4d(this.x * value.x, this.y * value.y, this.z * value.z, this.w * value.z);
  };
  Vector4d.prototype.normalize = function () {
    var len = this.length();
    return new Vector4d(this.x / len, this.y / len, this.z / len, this.w / len);
  };
  Vector4d.prototype.length = function () {
    var x = this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
    return Math_0.sqrt(x);
  };
  Vector4d.prototype.toString = function () {
    return 'Vector4d(x=' + this.x + ', y=' + this.y + ', z=' + this.z + ', w=' + this.w + ')';
  };
  Vector4d.prototype.toShortString = function () {
    return toPrecision(this.x, 2) + ';' + toPrecision(this.y, 2) + ';' + toPrecision(this.z, 2) + ';' + toPrecision(this.w, 2);
  };
  function Vector4d$$serializer() {
    this.descriptor_9fk4um$_0 = new SerialClassDescImpl('casper.geometry.Vector4d', this);
    this.descriptor.addElement_ivxn3r$('x', false);
    this.descriptor.addElement_ivxn3r$('y', false);
    this.descriptor.addElement_ivxn3r$('z', false);
    this.descriptor.addElement_ivxn3r$('w', false);
    Vector4d$$serializer_instance = this;
  }
  Object.defineProperty(Vector4d$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_9fk4um$_0;
    }
  });
  Vector4d$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeDoubleElement_imzr5k$(this.descriptor, 0, obj.x);
    output.encodeDoubleElement_imzr5k$(this.descriptor, 1, obj.y);
    output.encodeDoubleElement_imzr5k$(this.descriptor, 2, obj.z);
    output.encodeDoubleElement_imzr5k$(this.descriptor, 3, obj.w);
    output.endStructure_qatsm0$(this.descriptor);
  };
  Vector4d$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeDoubleElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = input.decodeDoubleElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = input.decodeDoubleElement_3zr2iy$(this.descriptor, 2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          local3 = input.decodeDoubleElement_3zr2iy$(this.descriptor, 3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return Vector4d_init(bitMask0, local0, local1, local2, local3, null);
  };
  Vector4d$$serializer.prototype.childSerializers = function () {
    return [internal.DoubleSerializer, internal.DoubleSerializer, internal.DoubleSerializer, internal.DoubleSerializer];
  };
  Vector4d$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Vector4d$$serializer_instance = null;
  function Vector4d$$serializer_getInstance() {
    if (Vector4d$$serializer_instance === null) {
      new Vector4d$$serializer();
    }
    return Vector4d$$serializer_instance;
  }
  function Vector4d_init(seen1, x, y, z, w, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Vector4d.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('x');
    else
      $this.x = x;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('y');
    else
      $this.y = y;
    if ((seen1 & 4) === 0)
      throw new MissingFieldException('z');
    else
      $this.z = z;
    if ((seen1 & 8) === 0)
      throw new MissingFieldException('w');
    else
      $this.w = w;
    return $this;
  }
  Vector4d.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Vector4d',
    interfaces: []
  };
  function Vector4d_init_0(i, $this) {
    $this = $this || Object.create(Vector4d.prototype);
    Vector4d.call($this, i, i, i, i);
    return $this;
  }
  Vector4d.prototype.component1 = function () {
    return this.x;
  };
  Vector4d.prototype.component2 = function () {
    return this.y;
  };
  Vector4d.prototype.component3 = function () {
    return this.z;
  };
  Vector4d.prototype.component4 = function () {
    return this.w;
  };
  Vector4d.prototype.copy_6y0v78$ = function (x, y, z, w) {
    return new Vector4d(x === void 0 ? this.x : x, y === void 0 ? this.y : y, z === void 0 ? this.z : z, w === void 0 ? this.w : w);
  };
  Vector4d.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.z) | 0;
    result = result * 31 + Kotlin.hashCode(this.w) | 0;
    return result;
  };
  Vector4d.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.z, other.z) && Kotlin.equals(this.w, other.w)))));
  };
  function AABBox2Iterator(source) {
    this.source = source;
    this.x_0 = 0;
    this.y_0 = 0;
    this.next_0 = null;
    this.x_0 = this.source.min.x;
    this.y_0 = this.source.min.y;
    this.next_0 = new Vector2i(this.x_0, this.y_0);
  }
  AABBox2Iterator.prototype.next = function () {
    var result = ensureNotNull(this.next_0);
    if ((this.x_0 = this.x_0 + 1 | 0, this.x_0) > this.source.max.x) {
      this.x_0 = this.source.min.x;
      if ((this.y_0 = this.y_0 + 1 | 0, this.y_0) > this.source.max.y) {
        this.y_0 = this.source.min.y;
        this.next_0 = null;
        return result;
      }
    }
    this.next_0 = new Vector2i(this.x_0, this.y_0);
    return result;
  };
  AABBox2Iterator.prototype.hasNext = function () {
    return this.next_0 != null;
  };
  AABBox2Iterator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AABBox2Iterator',
    interfaces: [Iterator]
  };
  function AABBox2d(position, dimension) {
    this.position = position;
    this.dimension = dimension;
    this.min = this.position;
    this.max = this.position.plus_bz62ph$(this.dimension).minus_bz62ph$(Vector2d$Companion_getInstance().ONE);
    if (!this.dimension.greaterOrEq_bz62ph$(Vector2d$Companion_getInstance().ZERO))
      throw Error_init('Invalid box dimension ' + this.dimension);
  }
  AABBox2d.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AABBox2d',
    interfaces: []
  };
  AABBox2d.prototype.component1 = function () {
    return this.position;
  };
  AABBox2d.prototype.component2 = function () {
    return this.dimension;
  };
  AABBox2d.prototype.copy_97zyx8$ = function (position, dimension) {
    return new AABBox2d(position === void 0 ? this.position : position, dimension === void 0 ? this.dimension : dimension);
  };
  AABBox2d.prototype.toString = function () {
    return 'AABBox2d(position=' + Kotlin.toString(this.position) + (', dimension=' + Kotlin.toString(this.dimension)) + ')';
  };
  AABBox2d.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.position) | 0;
    result = result * 31 + Kotlin.hashCode(this.dimension) | 0;
    return result;
  };
  AABBox2d.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.position, other.position) && Kotlin.equals(this.dimension, other.dimension)))));
  };
  function AABBox2i(position, dimension) {
    this.position = position;
    this.dimension = dimension;
    this.min = this.position;
    this.max = this.position.plus_bz62pc$(this.dimension).minus_bz62pc$(Vector2i$Companion_getInstance().ONE);
    if (!this.dimension.greaterOrEq_bz62pc$(Vector2i$Companion_getInstance().ZERO))
      throw Error_init('Invalid box dimension ' + this.dimension);
  }
  AABBox2i.prototype.iterator = function () {
    return new AABBox2Iterator(this);
  };
  AABBox2i.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AABBox2i',
    interfaces: []
  };
  AABBox2i.prototype.component1 = function () {
    return this.position;
  };
  AABBox2i.prototype.component2 = function () {
    return this.dimension;
  };
  AABBox2i.prototype.copy_bsca3w$ = function (position, dimension) {
    return new AABBox2i(position === void 0 ? this.position : position, dimension === void 0 ? this.dimension : dimension);
  };
  AABBox2i.prototype.toString = function () {
    return 'AABBox2i(position=' + Kotlin.toString(this.position) + (', dimension=' + Kotlin.toString(this.dimension)) + ')';
  };
  AABBox2i.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.position) | 0;
    result = result * 31 + Kotlin.hashCode(this.dimension) | 0;
    return result;
  };
  AABBox2i.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.position, other.position) && Kotlin.equals(this.dimension, other.dimension)))));
  };
  function AABBox3Iterator(source) {
    this.source = source;
    this.x_0 = 0;
    this.y_0 = 0;
    this.z_0 = 0;
    this.next_0 = null;
    this.x_0 = this.source.min.x;
    this.y_0 = this.source.min.y;
    this.z_0 = this.source.min.z;
    this.next_0 = new Vector3i(this.x_0, this.y_0, this.z_0);
  }
  AABBox3Iterator.prototype.next = function () {
    var result = ensureNotNull(this.next_0);
    if ((this.x_0 = this.x_0 + 1 | 0, this.x_0) > this.source.max.x) {
      this.x_0 = this.source.min.x;
      if ((this.y_0 = this.y_0 + 1 | 0, this.y_0) > this.source.max.y) {
        this.y_0 = this.source.min.y;
        if ((this.z_0 = this.z_0 + 1 | 0, this.z_0) > this.source.max.z) {
          this.next_0 = null;
          return result;
        }
      }
    }
    this.next_0 = new Vector3i(this.x_0, this.y_0, this.z_0);
    return result;
  };
  AABBox3Iterator.prototype.hasNext = function () {
    return this.next_0 != null;
  };
  AABBox3Iterator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AABBox3Iterator',
    interfaces: [Iterator]
  };
  function AABBox3d(min, max) {
    AABBox3d$Companion_getInstance();
    this.min = min;
    this.max = max;
    if (!this.min.lessOrEq_bz62om$(this.max))
      throw Error_init(this.min.toString() + ' > ' + this.max + ' mst be valid for ' + AABBox3d$Companion_getInstance());
  }
  function AABBox3d$Companion() {
    AABBox3d$Companion_instance = this;
  }
  AABBox3d$Companion.prototype.byRadius_p4ip2k$ = function (center, radius) {
    return new AABBox3d(center.minus_bz62om$(radius), center.plus_bz62om$(radius));
  };
  AABBox3d$Companion.prototype.byDimension_p4ip2k$ = function (start, dimension) {
    return new AABBox3d(start, start.plus_bz62om$(dimension));
  };
  AABBox3d$Companion.prototype.serializer = function () {
    return AABBox3d$$serializer_getInstance();
  };
  AABBox3d$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AABBox3d$Companion_instance = null;
  function AABBox3d$Companion_getInstance() {
    if (AABBox3d$Companion_instance === null) {
      new AABBox3d$Companion();
    }
    return AABBox3d$Companion_instance;
  }
  AABBox3d.prototype.getVertex_za3lpa$ = function (index) {
    var tmp$;
    switch (index) {
      case 0:
        tmp$ = new Vector3d(this.min.x, this.min.y, this.min.z);
        break;
      case 1:
        tmp$ = new Vector3d(this.min.x, this.min.y, this.max.z);
        break;
      case 2:
        tmp$ = new Vector3d(this.min.x, this.max.y, this.min.z);
        break;
      case 3:
        tmp$ = new Vector3d(this.min.x, this.max.y, this.max.z);
        break;
      case 4:
        tmp$ = new Vector3d(this.max.x, this.min.y, this.min.z);
        break;
      case 5:
        tmp$ = new Vector3d(this.max.x, this.min.y, this.max.z);
        break;
      case 6:
        tmp$ = new Vector3d(this.max.x, this.max.y, this.min.z);
        break;
      case 7:
        tmp$ = new Vector3d(this.max.x, this.max.y, this.max.z);
        break;
      default:throw Error_init('Invalid index');
    }
    return tmp$;
  };
  AABBox3d.prototype.isInside_bz62om$ = function (value) {
    return this.min.x <= value.x && value.x <= this.max.x && this.min.y <= value.y && value.y <= this.max.y && this.min.z <= value.z && value.z <= this.max.z;
  };
  AABBox3d.prototype.getFace_j3qxht$ = function (side) {
    var tmp$;
    switch (side.name) {
      case 'NEGATIVE_X':
        tmp$ = new Quad(this.getVertex_za3lpa$(0), this.getVertex_za3lpa$(2), this.getVertex_za3lpa$(3), this.getVertex_za3lpa$(1));
        break;
      case 'POSITIVE_X':
        tmp$ = new Quad(this.getVertex_za3lpa$(4), this.getVertex_za3lpa$(5), this.getVertex_za3lpa$(7), this.getVertex_za3lpa$(6));
        break;
      case 'NEGATIVE_Y':
        tmp$ = new Quad(this.getVertex_za3lpa$(0), this.getVertex_za3lpa$(1), this.getVertex_za3lpa$(5), this.getVertex_za3lpa$(4));
        break;
      case 'POSITIVE_Y':
        tmp$ = new Quad(this.getVertex_za3lpa$(2), this.getVertex_za3lpa$(6), this.getVertex_za3lpa$(7), this.getVertex_za3lpa$(3));
        break;
      case 'NEGATIVE_Z':
        tmp$ = new Quad(this.getVertex_za3lpa$(0), this.getVertex_za3lpa$(4), this.getVertex_za3lpa$(6), this.getVertex_za3lpa$(2));
        break;
      case 'POSITIVE_Z':
        tmp$ = new Quad(this.getVertex_za3lpa$(1), this.getVertex_za3lpa$(3), this.getVertex_za3lpa$(7), this.getVertex_za3lpa$(5));
        break;
      default:tmp$ = Kotlin.noWhenBranchMatched();
        break;
    }
    return tmp$;
  };
  function AABBox3d$$serializer() {
    this.descriptor_427cvr$_0 = new SerialClassDescImpl('casper.geometry.aabb.AABBox3d', this);
    this.descriptor.addElement_ivxn3r$('min', false);
    this.descriptor.addElement_ivxn3r$('max', false);
    AABBox3d$$serializer_instance = this;
  }
  Object.defineProperty(AABBox3d$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_427cvr$_0;
    }
  });
  AABBox3d$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeSerializableElement_blecud$(this.descriptor, 0, Vector3d$$serializer_getInstance(), obj.min);
    output.encodeSerializableElement_blecud$(this.descriptor, 1, Vector3d$$serializer_getInstance(), obj.max);
    output.endStructure_qatsm0$(this.descriptor);
  };
  AABBox3d$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 0, Vector3d$$serializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 0, Vector3d$$serializer_getInstance(), local0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = (bitMask0 & 2) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 1, Vector3d$$serializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 1, Vector3d$$serializer_getInstance(), local1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return AABBox3d_init(bitMask0, local0, local1, null);
  };
  AABBox3d$$serializer.prototype.childSerializers = function () {
    return [Vector3d$$serializer_getInstance(), Vector3d$$serializer_getInstance()];
  };
  AABBox3d$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var AABBox3d$$serializer_instance = null;
  function AABBox3d$$serializer_getInstance() {
    if (AABBox3d$$serializer_instance === null) {
      new AABBox3d$$serializer();
    }
    return AABBox3d$$serializer_instance;
  }
  function AABBox3d_init(seen1, min, max, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(AABBox3d.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('min');
    else
      $this.min = min;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('max');
    else
      $this.max = max;
    if (!$this.min.lessOrEq_bz62om$($this.max))
      throw Error_init($this.min.toString() + ' > ' + $this.max + ' mst be valid for ' + AABBox3d$Companion_getInstance());
    return $this;
  }
  AABBox3d.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AABBox3d',
    interfaces: []
  };
  AABBox3d.prototype.component1 = function () {
    return this.min;
  };
  AABBox3d.prototype.component2 = function () {
    return this.max;
  };
  AABBox3d.prototype.copy_p4ip2k$ = function (min, max) {
    return new AABBox3d(min === void 0 ? this.min : min, max === void 0 ? this.max : max);
  };
  AABBox3d.prototype.toString = function () {
    return 'AABBox3d(min=' + Kotlin.toString(this.min) + (', max=' + Kotlin.toString(this.max)) + ')';
  };
  AABBox3d.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.min) | 0;
    result = result * 31 + Kotlin.hashCode(this.max) | 0;
    return result;
  };
  AABBox3d.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.min, other.min) && Kotlin.equals(this.max, other.max)))));
  };
  function AABBox3i(min, max) {
    AABBox3i$Companion_getInstance();
    this.min = min;
    this.max = max;
    this.center = this.max.plus_bz62oh$(this.min).div_za3lpa$(2);
    this.dimension = Vector3i$Companion_getInstance().XYZ.plus_bz62oh$(this.max).minus_bz62oh$(this.min);
    if (!this.dimension.greaterOrEq_bz62oh$(Vector3i$Companion_getInstance().ZERO))
      throw Error_init('Invalid box dimension ' + this.dimension);
  }
  function AABBox3i$Companion() {
    AABBox3i$Companion_instance = this;
  }
  AABBox3i$Companion.prototype.fromCenter_rov098$ = function (center, size) {
    return new AABBox3i(center.minus_bz62oh$(size.div_za3lpa$(2)), center.plus_bz62oh$(size.div_za3lpa$(2)));
  };
  AABBox3i$Companion.prototype.fromDimension_rov098$ = function (pos, size) {
    return new AABBox3i(pos, pos.plus_bz62oh$(size).plus_bz62oh$(Vector3i$Companion_getInstance().XYZ));
  };
  AABBox3i$Companion.prototype.serializer = function () {
    return AABBox3i$$serializer_getInstance();
  };
  AABBox3i$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AABBox3i$Companion_instance = null;
  function AABBox3i$Companion_getInstance() {
    if (AABBox3i$Companion_instance === null) {
      new AABBox3i$Companion();
    }
    return AABBox3i$Companion_instance;
  }
  AABBox3i.prototype.isOutside_bz62oh$ = function (pos) {
    return !pos.greaterOrEq_bz62oh$(this.min) || !pos.lessOrEq_bz62oh$(this.max);
  };
  AABBox3i.prototype.isSide_bz62oh$ = function (pos) {
    return pos.x === this.min.x || pos.x === this.max.x || pos.y === this.min.y || pos.y === this.max.y || pos.z === this.min.z || pos.z === this.max.z;
  };
  AABBox3i.prototype.subdivide = function () {
    var next = this.max.plus_bz62oh$(Vector3i$Companion_getInstance().XYZ).minus_bz62oh$(this.min).div_za3lpa$(2);
    if (!this.min.less_bz62oh$(next) || !next.less_bz62oh$(this.max))
      return null;
    var xRanges = [new Pair(this.min.x, next.x - 1 | 0), new Pair(next.x, this.max.x)];
    var yRanges = [new Pair(this.min.y, next.y - 1 | 0), new Pair(next.y, this.max.y)];
    var zRanges = [new Pair(this.min.z, next.z - 1 | 0), new Pair(next.z, this.max.z)];
    var result = ArrayList_init();
    for (var x = 0; x <= 1; x++) {
      for (var y = 0; y <= 1; y++) {
        for (var z = 0; z <= 1; z++) {
          var xRange = xRanges[x];
          var yRange = yRanges[y];
          var zRange = zRanges[z];
          result.add_11rb$(new AABBox3i(new Vector3i(xRange.first, yRange.first, zRange.first), new Vector3i(xRange.second, yRange.second, zRange.second)));
        }
      }
    }
    return result;
  };
  AABBox3i.prototype.iterator = function () {
    return new AABBox3Iterator(this);
  };
  AABBox3i.prototype.toString = function () {
    return 'AABBox3i(min=' + this.min + ', max=' + this.max + ')';
  };
  AABBox3i.prototype.intersection_75xg21$ = function (other) {
    var nextMin = this.min.upper_bz62oh$(other.min);
    var nextMax = this.max.lower_bz62oh$(other.max);
    if (nextMin.lessOrEq_bz62oh$(nextMax)) {
      return new AABBox3i(nextMin, nextMax);
    }
    return null;
  };
  function AABBox3i$$serializer() {
    this.descriptor_pn5k3o$_0 = new SerialClassDescImpl('casper.geometry.aabb.AABBox3i', this);
    this.descriptor.addElement_ivxn3r$('min', false);
    this.descriptor.addElement_ivxn3r$('max', false);
    this.descriptor.addElement_ivxn3r$('center', true);
    this.descriptor.addElement_ivxn3r$('dimension', true);
    AABBox3i$$serializer_instance = this;
  }
  Object.defineProperty(AABBox3i$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_pn5k3o$_0;
    }
  });
  AABBox3i$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeSerializableElement_blecud$(this.descriptor, 0, Vector3i$$serializer_getInstance(), obj.min);
    output.encodeSerializableElement_blecud$(this.descriptor, 1, Vector3i$$serializer_getInstance(), obj.max);
    if (!equals(obj.center, this.max.plus_bz62oh$(this.min).div_za3lpa$(2)) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 2))
      output.encodeSerializableElement_blecud$(this.descriptor, 2, Vector3i$$serializer_getInstance(), obj.center);
    if (!equals(obj.dimension, Vector3i$Companion_getInstance().XYZ.plus_bz62oh$(this.max).minus_bz62oh$(this.min)) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 3))
      output.encodeSerializableElement_blecud$(this.descriptor, 3, Vector3i$$serializer_getInstance(), obj.dimension);
    output.endStructure_qatsm0$(this.descriptor);
  };
  AABBox3i$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 0, Vector3i$$serializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 0, Vector3i$$serializer_getInstance(), local0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = (bitMask0 & 2) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 1, Vector3i$$serializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 1, Vector3i$$serializer_getInstance(), local1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = (bitMask0 & 4) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 2, Vector3i$$serializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 2, Vector3i$$serializer_getInstance(), local2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          local3 = (bitMask0 & 8) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 3, Vector3i$$serializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 3, Vector3i$$serializer_getInstance(), local3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return AABBox3i_init(bitMask0, local0, local1, local2, local3, null);
  };
  AABBox3i$$serializer.prototype.childSerializers = function () {
    return [Vector3i$$serializer_getInstance(), Vector3i$$serializer_getInstance(), Vector3i$$serializer_getInstance(), Vector3i$$serializer_getInstance()];
  };
  AABBox3i$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var AABBox3i$$serializer_instance = null;
  function AABBox3i$$serializer_getInstance() {
    if (AABBox3i$$serializer_instance === null) {
      new AABBox3i$$serializer();
    }
    return AABBox3i$$serializer_instance;
  }
  function AABBox3i_init(seen1, min, max, center, dimension, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(AABBox3i.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('min');
    else
      $this.min = min;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('max');
    else
      $this.max = max;
    if ((seen1 & 4) === 0)
      $this.center = $this.max.plus_bz62oh$($this.min).div_za3lpa$(2);
    else
      $this.center = center;
    if ((seen1 & 8) === 0)
      $this.dimension = Vector3i$Companion_getInstance().XYZ.plus_bz62oh$($this.max).minus_bz62oh$($this.min);
    else
      $this.dimension = dimension;
    if (!$this.dimension.greaterOrEq_bz62oh$(Vector3i$Companion_getInstance().ZERO))
      throw Error_init('Invalid box dimension ' + $this.dimension);
    return $this;
  }
  AABBox3i.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AABBox3i',
    interfaces: []
  };
  AABBox3i.prototype.component1 = function () {
    return this.min;
  };
  AABBox3i.prototype.component2 = function () {
    return this.max;
  };
  AABBox3i.prototype.copy_rov098$ = function (min, max) {
    return new AABBox3i(min === void 0 ? this.min : min, max === void 0 ? this.max : max);
  };
  AABBox3i.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.min) | 0;
    result = result * 31 + Kotlin.hashCode(this.max) | 0;
    return result;
  };
  AABBox3i.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.min, other.min) && Kotlin.equals(this.max, other.max)))));
  };
  function AABBoxFaceIterator(source) {
    this.source = source;
    this.x_0 = 0;
    this.y_0 = 0;
    this.z_0 = 0;
    this.next_0 = null;
    this.x_0 = this.source.min.x;
    this.y_0 = this.source.min.y;
    this.z_0 = this.source.min.z;
    this.next_0 = new Vector3i(this.x_0, this.y_0, this.z_0);
  }
  AABBoxFaceIterator.prototype.next = function () {
    var result = ensureNotNull(this.next_0);
    while (true) {
      if ((this.x_0 = this.x_0 + 1 | 0, this.x_0) > this.source.max.x) {
        this.x_0 = this.source.min.x;
        if ((this.y_0 = this.y_0 + 1 | 0, this.y_0) > this.source.max.y) {
          this.y_0 = this.source.min.y;
          if ((this.z_0 = this.z_0 + 1 | 0, this.z_0) > this.source.max.z) {
            this.next_0 = null;
            return result;
          }
        }
      }
      var pos = new Vector3i(this.x_0, this.y_0, this.z_0);
      if (this.source.isSide_bz62oh$(pos)) {
        this.next_0 = pos;
        return result;
      }
    }
  };
  AABBoxFaceIterator.prototype.hasNext = function () {
    return this.next_0 != null;
  };
  AABBoxFaceIterator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AABBoxFaceIterator',
    interfaces: [Iterator]
  };
  function Axis3d(name, ordinal, index, value) {
    Enum.call(this);
    this.index = index;
    this.value = value;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Axis3d_initFields() {
    Axis3d_initFields = function () {
    };
    Axis3d$NEGATIVE_X_instance = new Axis3d('NEGATIVE_X', 0, 0, Vector3d$Companion_getInstance().X.unaryMinus());
    Axis3d$POSITIVE_X_instance = new Axis3d('POSITIVE_X', 1, 1, Vector3d$Companion_getInstance().X);
    Axis3d$NEGATIVE_Y_instance = new Axis3d('NEGATIVE_Y', 2, 2, Vector3d$Companion_getInstance().Y.unaryMinus());
    Axis3d$POSITIVE_Y_instance = new Axis3d('POSITIVE_Y', 3, 3, Vector3d$Companion_getInstance().Y);
    Axis3d$NEGATIVE_Z_instance = new Axis3d('NEGATIVE_Z', 4, 4, Vector3d$Companion_getInstance().Z.unaryMinus());
    Axis3d$POSITIVE_Z_instance = new Axis3d('POSITIVE_Z', 5, 5, Vector3d$Companion_getInstance().Z);
  }
  var Axis3d$NEGATIVE_X_instance;
  function Axis3d$NEGATIVE_X_getInstance() {
    Axis3d_initFields();
    return Axis3d$NEGATIVE_X_instance;
  }
  var Axis3d$POSITIVE_X_instance;
  function Axis3d$POSITIVE_X_getInstance() {
    Axis3d_initFields();
    return Axis3d$POSITIVE_X_instance;
  }
  var Axis3d$NEGATIVE_Y_instance;
  function Axis3d$NEGATIVE_Y_getInstance() {
    Axis3d_initFields();
    return Axis3d$NEGATIVE_Y_instance;
  }
  var Axis3d$POSITIVE_Y_instance;
  function Axis3d$POSITIVE_Y_getInstance() {
    Axis3d_initFields();
    return Axis3d$POSITIVE_Y_instance;
  }
  var Axis3d$NEGATIVE_Z_instance;
  function Axis3d$NEGATIVE_Z_getInstance() {
    Axis3d_initFields();
    return Axis3d$NEGATIVE_Z_instance;
  }
  var Axis3d$POSITIVE_Z_instance;
  function Axis3d$POSITIVE_Z_getInstance() {
    Axis3d_initFields();
    return Axis3d$POSITIVE_Z_instance;
  }
  Axis3d.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Axis3d',
    interfaces: [Enum]
  };
  function Axis3d$values() {
    return [Axis3d$NEGATIVE_X_getInstance(), Axis3d$POSITIVE_X_getInstance(), Axis3d$NEGATIVE_Y_getInstance(), Axis3d$POSITIVE_Y_getInstance(), Axis3d$NEGATIVE_Z_getInstance(), Axis3d$POSITIVE_Z_getInstance()];
  }
  Axis3d.values = Axis3d$values;
  function Axis3d$valueOf(name) {
    switch (name) {
      case 'NEGATIVE_X':
        return Axis3d$NEGATIVE_X_getInstance();
      case 'POSITIVE_X':
        return Axis3d$POSITIVE_X_getInstance();
      case 'NEGATIVE_Y':
        return Axis3d$NEGATIVE_Y_getInstance();
      case 'POSITIVE_Y':
        return Axis3d$POSITIVE_Y_getInstance();
      case 'NEGATIVE_Z':
        return Axis3d$NEGATIVE_Z_getInstance();
      case 'POSITIVE_Z':
        return Axis3d$POSITIVE_Z_getInstance();
      default:throwISE('No enum constant casper.geometry.aabb.Axis3d.' + name);
    }
  }
  Axis3d.valueOf_61zpoe$ = Axis3d$valueOf;
  function Axis3i(name, ordinal, index, value) {
    Enum.call(this);
    this.index = index;
    this.value = value;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Axis3i_initFields() {
    Axis3i_initFields = function () {
    };
    Axis3i$NEGATIVE_X_instance = new Axis3i('NEGATIVE_X', 0, 0, Vector3i$Companion_getInstance().X.unaryMinus());
    Axis3i$POSITIVE_X_instance = new Axis3i('POSITIVE_X', 1, 1, Vector3i$Companion_getInstance().X);
    Axis3i$NEGATIVE_Y_instance = new Axis3i('NEGATIVE_Y', 2, 2, Vector3i$Companion_getInstance().Y.unaryMinus());
    Axis3i$POSITIVE_Y_instance = new Axis3i('POSITIVE_Y', 3, 3, Vector3i$Companion_getInstance().Y);
    Axis3i$NEGATIVE_Z_instance = new Axis3i('NEGATIVE_Z', 4, 4, Vector3i$Companion_getInstance().Z.unaryMinus());
    Axis3i$POSITIVE_Z_instance = new Axis3i('POSITIVE_Z', 5, 5, Vector3i$Companion_getInstance().Z);
  }
  var Axis3i$NEGATIVE_X_instance;
  function Axis3i$NEGATIVE_X_getInstance() {
    Axis3i_initFields();
    return Axis3i$NEGATIVE_X_instance;
  }
  var Axis3i$POSITIVE_X_instance;
  function Axis3i$POSITIVE_X_getInstance() {
    Axis3i_initFields();
    return Axis3i$POSITIVE_X_instance;
  }
  var Axis3i$NEGATIVE_Y_instance;
  function Axis3i$NEGATIVE_Y_getInstance() {
    Axis3i_initFields();
    return Axis3i$NEGATIVE_Y_instance;
  }
  var Axis3i$POSITIVE_Y_instance;
  function Axis3i$POSITIVE_Y_getInstance() {
    Axis3i_initFields();
    return Axis3i$POSITIVE_Y_instance;
  }
  var Axis3i$NEGATIVE_Z_instance;
  function Axis3i$NEGATIVE_Z_getInstance() {
    Axis3i_initFields();
    return Axis3i$NEGATIVE_Z_instance;
  }
  var Axis3i$POSITIVE_Z_instance;
  function Axis3i$POSITIVE_Z_getInstance() {
    Axis3i_initFields();
    return Axis3i$POSITIVE_Z_instance;
  }
  Axis3i.prototype.invert = function () {
    var tmp$;
    switch (this.name) {
      case 'NEGATIVE_Z':
        tmp$ = Axis3i$POSITIVE_Z_getInstance();
        break;
      case 'POSITIVE_Z':
        tmp$ = Axis3i$NEGATIVE_Z_getInstance();
        break;
      case 'NEGATIVE_Y':
        tmp$ = Axis3i$POSITIVE_Y_getInstance();
        break;
      case 'POSITIVE_Y':
        tmp$ = Axis3i$NEGATIVE_Y_getInstance();
        break;
      case 'NEGATIVE_X':
        tmp$ = Axis3i$POSITIVE_X_getInstance();
        break;
      case 'POSITIVE_X':
        tmp$ = Axis3i$NEGATIVE_X_getInstance();
        break;
      default:tmp$ = Kotlin.noWhenBranchMatched();
        break;
    }
    return tmp$;
  };
  Axis3i.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Axis3i',
    interfaces: [Enum]
  };
  function Axis3i$values() {
    return [Axis3i$NEGATIVE_X_getInstance(), Axis3i$POSITIVE_X_getInstance(), Axis3i$NEGATIVE_Y_getInstance(), Axis3i$POSITIVE_Y_getInstance(), Axis3i$NEGATIVE_Z_getInstance(), Axis3i$POSITIVE_Z_getInstance()];
  }
  Axis3i.values = Axis3i$values;
  function Axis3i$valueOf(name) {
    switch (name) {
      case 'NEGATIVE_X':
        return Axis3i$NEGATIVE_X_getInstance();
      case 'POSITIVE_X':
        return Axis3i$POSITIVE_X_getInstance();
      case 'NEGATIVE_Y':
        return Axis3i$NEGATIVE_Y_getInstance();
      case 'POSITIVE_Y':
        return Axis3i$POSITIVE_Y_getInstance();
      case 'NEGATIVE_Z':
        return Axis3i$NEGATIVE_Z_getInstance();
      case 'POSITIVE_Z':
        return Axis3i$POSITIVE_Z_getInstance();
      default:throwISE('No enum constant casper.geometry.aabb.Axis3i.' + name);
    }
  }
  Axis3i.valueOf_61zpoe$ = Axis3i$valueOf;
  function FromCenterIterator(center, maxRadius) {
    this.center = center;
    this.maxRadius = maxRadius;
    this.position = null;
    this.lastRadius = -1;
    this.iterator = null;
    if (this.maxRadius < 0)
      throw Error_init('Radius must be positive (now: ' + this.maxRadius + ')');
    this.nextIterator_0();
    this.position = this.getNext_0();
  }
  FromCenterIterator.prototype.nextIterator_0 = function () {
    if ((this.lastRadius = this.lastRadius + 1 | 0, this.lastRadius) <= this.maxRadius) {
      this.iterator = new AABBoxFaceIterator(AABBox3i$Companion_getInstance().fromCenter_rov098$(this.center, new Vector3i(this.lastRadius * 2 | 0, this.lastRadius * 2 | 0, this.lastRadius * 2 | 0)));
    }
     else {
      this.iterator = null;
    }
  };
  FromCenterIterator.prototype.getNext_0 = function () {
    var tmp$;
    while (true) {
      tmp$ = this.iterator;
      if (tmp$ == null) {
        return null;
      }
      var iterator = tmp$;
      if (iterator.hasNext()) {
        return iterator.next();
      }
       else {
        this.nextIterator_0();
      }
    }
  };
  FromCenterIterator.prototype.next = function () {
    var tmp$;
    tmp$ = this.position;
    if (tmp$ == null) {
      throw Error_init('Invalid next. You must check hasNext first');
    }
    var last = tmp$;
    this.position = this.getNext_0();
    return last;
  };
  FromCenterIterator.prototype.hasNext = function () {
    return this.position != null;
  };
  FromCenterIterator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FromCenterIterator',
    interfaces: [Iterator]
  };
  function Line(v0, v1) {
    this.v0 = v0;
    this.v1 = v1;
  }
  Line.prototype.getVertex_za3lpa$ = function (index) {
    var tmp$;
    switch (index) {
      case 0:
        tmp$ = this.v0;
        break;
      case 1:
        tmp$ = this.v1;
        break;
      default:throw Error_init('Invalid vertex index');
    }
    return tmp$;
  };
  Line.prototype.getVertexAmount = function () {
    return 2;
  };
  Line.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Line',
    interfaces: [Polygon]
  };
  function direction($receiver) {
    return $receiver.v1.minus_bz62om$($receiver.v0);
  }
  function direction_0($receiver) {
    return $receiver.v1.minus_bz62ph$($receiver.v0);
  }
  function setZ($receiver, z0, z1) {
    return new Line($receiver.v0.setZ_14dthe$(z0), $receiver.v1.setZ_14dthe$(z1));
  }
  function intersectionWithTriangle(ray, triangle) {
    var edge1 = triangle.v1.minus_bz62om$(triangle.v0);
    var edge2 = triangle.v2.minus_bz62om$(triangle.v0);
    var direction_0 = direction(ray);
    var pVec = direction_0.cross_bz62om$(edge2);
    var determinant = edge1.dot_bz62om$(pVec);
    if (determinant === 0.0) {
      return null;
    }
    var tVec = ray.v0.minus_bz62om$(triangle.v0);
    var bv = tVec.dot_bz62om$(pVec) / determinant;
    if (bv < 0 || bv > 1.0) {
      return null;
    }
    var qVec = tVec.cross_bz62om$(edge1);
    var bw = direction_0.dot_bz62om$(qVec) / determinant;
    if (bw < 0 || bv + bw > 1.0) {
      return null;
    }
    var distance = edge2.dot_bz62om$(qVec) / determinant;
    if (0.0 > distance || distance > 1.0 || !isFinite(distance)) {
      return null;
    }
    return ray.v0.plus_bz62om$(direction_0.times_14dthe$(distance));
  }
  function intersectionWithQuad(ray, quad) {
    for (var partId = 0; partId <= 1; partId++) {
      var part = intersectionWithTriangle(ray, quad.getFace_za3lpa$(partId));
      if (part != null)
        return part;
    }
    return null;
  }
  function FaceIntersection(side, point) {
    this.side = side;
    this.point = point;
  }
  FaceIntersection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FaceIntersection',
    interfaces: []
  };
  FaceIntersection.prototype.component1 = function () {
    return this.side;
  };
  FaceIntersection.prototype.component2 = function () {
    return this.point;
  };
  FaceIntersection.prototype.copy_n2jxtz$ = function (side, point) {
    return new FaceIntersection(side === void 0 ? this.side : side, point === void 0 ? this.point : point);
  };
  FaceIntersection.prototype.toString = function () {
    return 'FaceIntersection(side=' + Kotlin.toString(this.side) + (', point=' + Kotlin.toString(this.point)) + ')';
  };
  FaceIntersection.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.side) | 0;
    result = result * 31 + Kotlin.hashCode(this.point) | 0;
    return result;
  };
  FaceIntersection.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.side, other.side) && Kotlin.equals(this.point, other.point)))));
  };
  function BoxIntersection(line, faces) {
    this.line = line;
    this.faces = faces;
  }
  BoxIntersection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BoxIntersection',
    interfaces: []
  };
  function intersectionWithBox(ray, box) {
    var tmp$, tmp$_0;
    var isFirstInside = box.isInside_bz62om$(ray.v0);
    var isLastInside = box.isInside_bz62om$(ray.v1);
    var faces = ArrayList_init();
    if (isFirstInside && isLastInside)
      return new BoxIntersection(ray, faces);
    var maxIntersectionAmount = isFirstInside !== isLastInside ? 1 : 2;
    var list = ArrayList_init();
    tmp$ = Axis3i$values();
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var faceId = tmp$[tmp$_0];
      var intersection = intersectionWithQuad(ray, box.getFace_j3qxht$(faceId));
      if (intersection != null) {
        list.add_11rb$(intersection);
        faces.add_11rb$(new FaceIntersection(faceId, intersection));
        if (list.size === maxIntersectionAmount) {
          break;
        }
      }
    }
    var intersectionCount = list.size;
    if (maxIntersectionAmount === 1 && intersectionCount !== 1 || intersectionCount > 2) {
      throw Error_init('Invalid intersection count: ' + intersectionCount + '; must be not bigger than: ' + maxIntersectionAmount);
    }
    if (intersectionCount === 0) {
      return null;
    }
     else if (intersectionCount === 1) {
      if (isFirstInside) {
        return new BoxIntersection(new Line(ray.v0, list.get_za3lpa$(0)), faces);
      }
       else if (isLastInside) {
        return new BoxIntersection(new Line(ray.v1, list.get_za3lpa$(0)), faces);
      }
       else {
        return new BoxIntersection(new Line(list.get_za3lpa$(0), list.get_za3lpa$(0)), faces);
      }
    }
    return new BoxIntersection(new Line(list.get_za3lpa$(0), list.get_za3lpa$(1)), faces);
  }
  function iterateLine2n(line, onStep) {
    var tmp$, tmp$_0;
    var halfPixel = Vector2d$Companion_getInstance().XY.times_14dthe$(0.5);
    tmp$ = line.v0.minus_bz62ph$(halfPixel).toVector2i();
    if (tmp$ == null) {
      return null;
    }
    var nextStep = tmp$;
    tmp$_0 = line.v1.minus_bz62ph$(halfPixel).toVector2i();
    if (tmp$_0 == null) {
      return null;
    }
    var lastStep = tmp$_0;
    var steps = 1 + lastStep.minus_bz62pc$(nextStep).manhattan() | 0;
    var ray = line.v1.minus_bz62ph$(line.v0);
    var length = ray.length();
    var normal = ray.normalize();
    var signVec = normal.sign().toVector2i();
    var tmp$_1 = signVec == null;
    if (!tmp$_1) {
      tmp$_1 = Math_0.abs(length) <= kotlin_js_internal_DoubleCompanionObject.MIN_VALUE;
    }
    if (tmp$_1) {
      if (onStep(nextStep))
        return nextStep;
      return null;
    }
    while ((steps = steps - 1 | 0, steps) >= 0) {
      if (onStep(nextStep))
        return nextStep;
      var targetX = new Vector2i(nextStep.x + signVec.x | 0, nextStep.y);
      var targetY = new Vector2i(nextStep.x, nextStep.y + signVec.y | 0);
      var pixelCenterX = targetX.toVector2d().plus_bz62ph$(halfPixel).minus_bz62ph$(line.v0);
      var pixelCenterY = targetY.toVector2d().plus_bz62ph$(halfPixel).minus_bz62ph$(line.v0);
      var distX = distance2d(signVec.x, pixelCenterX, normal);
      var distY = distance2d(signVec.y, pixelCenterY, normal);
      if (distX < distY) {
        nextStep = targetX;
      }
       else {
        nextStep = targetY;
      }
    }
    return null;
  }
  function distance2d(signFlag, position, normal) {
    if (signFlag === 0)
      return kotlin_js_internal_DoubleCompanionObject.MAX_VALUE;
    var projection = position.dot_bz62ph$(normal);
    var dest = normal.times_14dthe$(projection).minus_bz62ph$(position);
    return dest.lengthByInf();
  }
  function iterateLine3n(line, onStep) {
    var tmp$, tmp$_0;
    var halfPixel = Vector3d$Companion_getInstance().XYZ.times_14dthe$(0.5);
    tmp$ = line.v0.minus_bz62om$(halfPixel).toVector3i();
    if (tmp$ == null) {
      return null;
    }
    var nextStep = tmp$;
    tmp$_0 = line.v1.minus_bz62om$(halfPixel).toVector3i();
    if (tmp$_0 == null) {
      return null;
    }
    var lastStep = tmp$_0;
    var steps = 1 + lastStep.minus_bz62oh$(nextStep).manhattan() | 0;
    var ray = line.v1.minus_bz62om$(line.v0);
    var length = ray.length();
    var lineDirection = ray.normalize();
    var signVec = lineDirection.sign().toVector3i();
    var tmp$_1 = signVec == null;
    if (!tmp$_1) {
      tmp$_1 = Math_0.abs(length) <= kotlin_js_internal_DoubleCompanionObject.MIN_VALUE;
    }
    if (tmp$_1) {
      if (onStep(nextStep))
        return nextStep;
      return null;
    }
    while ((steps = steps - 1 | 0, steps) > 0) {
      if (onStep(nextStep))
        return nextStep;
      var nextX = new Vector3i(nextStep.x + signVec.x | 0, nextStep.y, nextStep.z);
      var nextY = new Vector3i(nextStep.x, nextStep.y + signVec.y | 0, nextStep.z);
      var nextZ = new Vector3i(nextStep.x, nextStep.y, nextStep.z + signVec.z | 0);
      var testX = intersectionWithBox(line, AABBox3d$Companion_getInstance().byDimension_p4ip2k$(nextX.toVector3d(), Vector3d$Companion_getInstance().XYZ));
      var testY = intersectionWithBox(line, AABBox3d$Companion_getInstance().byDimension_p4ip2k$(nextY.toVector3d(), Vector3d$Companion_getInstance().XYZ));
      var testZ = intersectionWithBox(line, AABBox3d$Companion_getInstance().byDimension_p4ip2k$(nextZ.toVector3d(), Vector3d$Companion_getInstance().XYZ));
      var distX = testX == null || signVec.x === 0 ? 1.0 : 0.0;
      var distY = testY == null || signVec.y === 0 ? 1.0 : 0.0;
      var distZ = testZ == null || signVec.z === 0 ? 1.0 : 0.0;
      if (distX <= distY && distX <= distZ) {
        nextStep = nextX;
      }
       else if (distY <= distX && distY <= distZ) {
        nextStep = nextY;
      }
       else if (distZ <= distX && distZ <= distY) {
        nextStep = nextZ;
      }
       else {
        throw Error_init('Invalid state');
      }
    }
    if (onStep(lastStep))
      return lastStep;
    return null;
  }
  function distance3d(dir, point, rayDirection) {
    if (dir === 0)
      return kotlin_js_internal_DoubleCompanionObject.MAX_VALUE;
    var projection = point.dot_bz62om$(rayDirection);
    var dest = rayDirection.times_14dthe$(projection).minus_bz62om$(point);
    return dest.lengthByInf();
  }
  function iterateLineBresenhamDirect(x0, y0, x1, y1, onStep) {
    var tmp$, tmp$_0;
    var error = 0.0;
    var x = (y1 - y0) / (x1 - x0);
    var deltaError = Math_0.abs(x);
    var iy = roundToInt(y0);
    var dY = roundToInt(y1 - y0);
    var dirY = dY > 0 ? 1 : dY < 0 ? -1 : 0;
    var dX = roundToInt(x0) <= roundToInt(x1) ? 1 : -1;
    tmp$ = roundToInt(x0);
    tmp$_0 = roundToInt(x1);
    for (var ix = tmp$; ix <= tmp$_0; ix += dX) {
      if (onStep(new Vector2i(ix, iy)))
        return;
      error += deltaError;
      if (error > 0.5) {
        iy = iy + dirY | 0;
        if (onStep(new Vector2i(ix, iy)))
          return;
        error -= 1.0;
      }
    }
  }
  function iterateLineBresenham8o$lambda(closure$onStep) {
    return function (p) {
      return closure$onStep(new Vector2i(p.y, p.x));
    };
  }
  function iterateLineBresenham8o$lambda_0(closure$onStep) {
    return function (p) {
      return closure$onStep(p);
    };
  }
  function iterateLineBresenham8o(v0, v1, onStep) {
    var x0 = v0.x - 0.5;
    var y0 = v0.y - 0.5;
    var x1 = v1.x - 0.5;
    var y1 = v1.y - 0.5;
    var x = x1 - x0;
    var deltaX = roundToInt(Math_0.abs(x));
    var x_0 = y1 - y0;
    var deltaY = roundToInt(Math_0.abs(x_0));
    if (deltaY > deltaX) {
      iterateLineBresenhamDirect(y0, x0, y1, x1, iterateLineBresenham8o$lambda(onStep));
    }
     else {
      iterateLineBresenhamDirect(x0, y0, x1, y1, iterateLineBresenham8o$lambda_0(onStep));
    }
  }
  function iterateLineBresenham4o(v0, v1, onStep) {
    var tmp$;
    var x = v0.x;
    var x0 = numberToInt(Math_0.floor(x));
    var x_0 = v0.y;
    var y0 = numberToInt(Math_0.floor(x_0));
    var x_1 = v1.x;
    var x1 = numberToInt(Math_0.floor(x_1));
    var x_2 = v1.y;
    var y1 = numberToInt(Math_0.floor(x_2));
    var deltaX = v1.x - v0.x;
    var deltaY = v1.y - v0.y;
    var deltaXAbs = Math_0.abs(deltaX);
    var deltaYAbs = Math_0.abs(deltaY);
    var idX = abs_0(x1 - x0 | 0);
    var idY = abs_0(y1 - y0 | 0);
    var signX = v0.x < v1.x ? 1 : -1;
    var signY = v0.y < v1.y ? 1 : -1;
    var fractionalX = v0.x - x0 - 0.5;
    var fractionalY = v0.y - y0 - 0.5;
    var lastError = fractionalY * deltaXAbs * signY - fractionalX * deltaYAbs * signX;
    println('error: ' + lastError);
    var x_3 = x0;
    var y = y0;
    tmp$ = idX + idY | 0;
    for (var i = 0; i <= tmp$; i++) {
      if (onStep(new Vector2i(x_3, y)))
        return;
      var eX = lastError - deltaXAbs;
      var eY = lastError + deltaYAbs;
      if (Math_0.abs(eY) < Math_0.abs(eX)) {
        x_3 = x_3 + signX | 0;
        lastError = eY;
      }
       else {
        y = y + signY | 0;
        lastError = eX;
      }
    }
  }
  function iterateLineDDA(v1, v2, onStep) {
    var start = new Vector2i(roundToInt(v1.x), roundToInt(v1.y));
    var end = new Vector2i(roundToInt(v2.x), roundToInt(v2.y));
    var a = abs_0(end.x - start.x | 0);
    var b = abs_0(end.y - start.y | 0);
    var L = 1 + Math_0.max(a, b) | 0;
    var x = v1.x;
    var y = v1.y;
    var dx = (end.x - start.x | 0) / L;
    var dy = (end.y - start.y | 0) / L;
    for (var step = 1; step <= L; step++) {
      var currentX = numberToInt(Math_0.floor(x));
      var currentY = numberToInt(Math_0.floor(y));
      if (onStep(new Vector2i(currentX, currentY)))
        return;
      x += dx;
      y += dy;
    }
  }
  function iterateLineDDA_0(v1, v2, onStep) {
    var tmp$, tmp$_0;
    tmp$ = v1.minus_bz62om$(Vector3d$Companion_getInstance().XYZ.times_14dthe$(0.5)).toVector3i();
    if (tmp$ == null) {
      return null;
    }
    var start = tmp$;
    tmp$_0 = v2.minus_bz62om$(Vector3d$Companion_getInstance().XYZ.times_14dthe$(0.5)).toVector3i();
    if (tmp$_0 == null) {
      return null;
    }
    var end = tmp$_0;
    var a = abs_0(end.x - start.x | 0);
    var b = abs_0(end.y - start.y | 0);
    var a_0 = Math_0.max(a, b);
    var b_0 = abs_0(end.z - start.z | 0);
    var L = 1 + Math_0.max(a_0, b_0) | 0;
    var fx = v1.x - 0.5;
    var fy = v1.y - 0.5;
    var fz = v1.z - 0.5;
    var dx = (end.x - start.x | 0) / L;
    var dy = (end.y - start.y | 0) / L;
    var dz = (end.z - start.z | 0) / L;
    var first = Vector3i$Companion_getInstance().ZERO;
    var last = Vector3i$Companion_getInstance().ZERO;
    for (var step = 0; step < L; step++) {
      var currentX = roundToInt(fx + step * dx);
      var currentY = roundToInt(fy + step * dy);
      var currentZ = roundToInt(fz + step * dz);
      var next = new Vector3i(currentX, currentY, currentZ);
      if (step === 0) {
        first = next;
      }
      if (step === (L - 1 | 0)) {
        last = next;
      }
      if (onStep(next))
        return next;
    }
    println('from ' + first + ' to ' + last);
    return null;
  }
  function Octagon(v0, v1, v2, v3, v4, v5, v6, v7) {
    this.v0 = v0;
    this.v1 = v1;
    this.v2 = v2;
    this.v3 = v3;
    this.v4 = v4;
    this.v5 = v5;
    this.v6 = v6;
    this.v7 = v7;
  }
  Octagon.prototype.getVertexAmount = function () {
    return 8;
  };
  Octagon.prototype.getFaceAmount = function () {
    return 6;
  };
  Octagon.prototype.getVertex_za3lpa$ = function (index) {
    var tmp$;
    switch (index) {
      case 0:
        tmp$ = this.v0;
        break;
      case 1:
        tmp$ = this.v1;
        break;
      case 2:
        tmp$ = this.v2;
        break;
      case 3:
        tmp$ = this.v3;
        break;
      case 4:
        tmp$ = this.v4;
        break;
      case 5:
        tmp$ = this.v5;
        break;
      case 6:
        tmp$ = this.v6;
        break;
      case 7:
        tmp$ = this.v7;
        break;
      default:throw Error_init('Invalid index');
    }
    return tmp$;
  };
  Octagon.prototype.getFace_za3lpa$ = function (index) {
    var tmp$;
    switch (index) {
      case 0:
        tmp$ = new Quad(this.v0, this.v2, this.v3, this.v1);
        break;
      case 1:
        tmp$ = new Quad(this.v4, this.v5, this.v7, this.v6);
        break;
      case 2:
        tmp$ = new Quad(this.v0, this.v1, this.v5, this.v4);
        break;
      case 3:
        tmp$ = new Quad(this.v2, this.v6, this.v7, this.v3);
        break;
      case 4:
        tmp$ = new Quad(this.v0, this.v4, this.v6, this.v2);
        break;
      case 5:
        tmp$ = new Quad(this.v1, this.v3, this.v7, this.v5);
        break;
      default:throw Error_init('Invalid index');
    }
    return tmp$;
  };
  Octagon.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Octagon',
    interfaces: [Polygon]
  };
  function Octagon3d(start, dimension) {
    return new Octagon(start, start.plus_bz62om$(dimension.times_bz62om$(Vector3d$Companion_getInstance().Z)), start.plus_bz62om$(dimension.times_bz62om$(Vector3d$Companion_getInstance().Y)), start.plus_bz62om$(dimension.times_bz62om$(Vector3d$Companion_getInstance().YZ)), start.plus_bz62om$(dimension.times_bz62om$(Vector3d$Companion_getInstance().X)), start.plus_bz62om$(dimension.times_bz62om$(Vector3d$Companion_getInstance().XZ)), start.plus_bz62om$(dimension.times_bz62om$(Vector3d$Companion_getInstance().XY)), start.plus_bz62om$(dimension.times_bz62om$(Vector3d$Companion_getInstance().XYZ)));
  }
  function Polygon() {
  }
  Polygon.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Polygon',
    interfaces: []
  };
  function Quad(v0, v1, v2, v3) {
    this.v0 = v0;
    this.v1 = v1;
    this.v2 = v2;
    this.v3 = v3;
  }
  Quad.prototype.getFace_za3lpa$ = function (index) {
    var tmp$;
    switch (index) {
      case 0:
        tmp$ = new Triangle(this.v0, this.v1, this.v2);
        break;
      case 1:
        tmp$ = new Triangle(this.v2, this.v3, this.v0);
        break;
      default:throw Error_init('Invalid index');
    }
    return tmp$;
  };
  Quad.prototype.getVertexAmount = function () {
    return 4;
  };
  Quad.prototype.getVertex_za3lpa$ = function (index) {
    var tmp$;
    switch (index) {
      case 0:
        tmp$ = this.v0;
        break;
      case 1:
        tmp$ = this.v1;
        break;
      case 2:
        tmp$ = this.v2;
        break;
      case 3:
        tmp$ = this.v3;
        break;
      default:throw Error_init('Invalid index');
    }
    return tmp$;
  };
  Quad.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Quad',
    interfaces: [Polygon]
  };
  function Triangle(v0, v1, v2) {
    this.v0 = v0;
    this.v1 = v1;
    this.v2 = v2;
  }
  Triangle.prototype.getVertexAmount = function () {
    return 3;
  };
  Triangle.prototype.getVertex_za3lpa$ = function (index) {
    var tmp$;
    switch (index) {
      case 0:
        tmp$ = this.v0;
        break;
      case 1:
        tmp$ = this.v1;
        break;
      case 2:
        tmp$ = this.v2;
        break;
      default:throw Error_init('Invalid index');
    }
    return tmp$;
  };
  Triangle.prototype.toString = function () {
    return 'Tri(v0=' + this.v0 + ', v1=' + this.v1 + ', v2=' + this.v2 + ')';
  };
  Triangle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Triangle',
    interfaces: [Polygon]
  };
  function getTriangleNormal(v0, v1, v2) {
    return v2.minus_bz62om$(v0).cross_bz62om$(v1.minus_bz62om$(v0)).normalize();
  }
  function extrapolateVector3d(A, B, weightA) {
    if (weightA < 0 || weightA > 1)
      throw Error_init('weight must be in interval [0..1]');
    var weightB = 1 - weightA;
    return new Vector3d(A.x * weightA + B.x * weightB, A.y * weightA + B.y * weightB, A.z * weightA + B.z * weightB);
  }
  function scaleTriangle3d(source, scale) {
    var center = source.v0.plus_bz62om$(source.v1).plus_bz62om$(source.v2).div_14dthe$(3.0);
    return new Triangle(center.plus_bz62om$(source.v0.minus_bz62om$(center).times_14dthe$(scale)), center.plus_bz62om$(source.v1.minus_bz62om$(center).times_14dthe$(scale)), center.plus_bz62om$(source.v2.minus_bz62om$(center).times_14dthe$(scale)));
  }
  function scaleLine3d(source, scale) {
    var center = source.v0.plus_bz62om$(source.v1).div_14dthe$(2.0);
    return new Line(center.plus_bz62om$(source.v0.minus_bz62om$(center).times_14dthe$(scale)), center.plus_bz62om$(source.v1.minus_bz62om$(center).times_14dthe$(scale)));
  }
  function scaleQuad3d(source, scale) {
    var center = source.v0.plus_bz62om$(source.v1).plus_bz62om$(source.v2).plus_bz62om$(source.v3).div_14dthe$(4.0);
    return new Quad(center.plus_bz62om$(source.v0.minus_bz62om$(center).times_14dthe$(scale)), center.plus_bz62om$(source.v1.minus_bz62om$(center).times_14dthe$(scale)), center.plus_bz62om$(source.v2.minus_bz62om$(center).times_14dthe$(scale)), center.plus_bz62om$(source.v3.minus_bz62om$(center).times_14dthe$(scale)));
  }
  function pow($receiver, x) {
    return powInt($receiver, x);
  }
  function clamp($receiver, min, max) {
    return clampInt($receiver, min, max);
  }
  function clamp_0($receiver, min, max) {
    return clampLong($receiver, min, max);
  }
  function clamp_1($receiver, min, max) {
    return clampDouble($receiver, min, max);
  }
  function powInt(b, e) {
    if (e < 0) {
      return 1 / powInt(b, -e | 0) | 0;
    }
    var base = b;
    var exp = e;
    var result = 1;
    while (true) {
      if ((exp & 1) === 1) {
        result = Kotlin.imul(result, base);
      }
      exp = exp >> 1;
      if (exp === 0) {
        break;
      }
      base = Kotlin.imul(base, base);
    }
    return result;
  }
  function clampInt(value, min, max) {
    if (max <= min)
      throw Error_init('Invalid interval ' + min + ' - ' + max);
    if (value < min)
      return min;
    if (value >= max)
      return max - 1 | 0;
    return value;
  }
  function clampLong(value, min, max) {
    if (max.compareTo_11rb$(min) <= 0)
      throw Error_init('Invalid interval ' + min.toString() + ' - ' + max.toString());
    if (value.compareTo_11rb$(min) < 0)
      return min;
    if (value.compareTo_11rb$(max) >= 0)
      return max.subtract(Kotlin.Long.fromInt(1));
    return value;
  }
  function clampDouble(value, min, max) {
    if (max < min)
      throw Error_init('Invalid interval ' + min + ' - ' + max);
    if (value < min)
      return min;
    if (value >= max)
      return max;
    return value;
  }
  function normal($receiver, dest) {
    var result = $receiver % dest;
    if (dest > 0) {
      if (result < 0) {
        return result + dest | 0;
      }
       else {
        return result;
      }
    }
     else {
      if (result > 0) {
        return result + dest | 0;
      }
       else {
        return result;
      }
    }
  }
  function linearInterpolate$lambda(a, b, x) {
    return a * (1.0 - x) + b * x;
  }
  var linearInterpolate;
  function cosineInterpolate$lambda(a, b, x) {
    var ft = x * math.PI;
    var f = (1.0 - Math_0.cos(ft)) * 0.5;
    return a * (1.0 - f) + b * f;
  }
  var cosineInterpolate;
  function FunctionCache(source, cache) {
    this.source = source;
    this.cache = cache;
    this.get = FunctionCache$get$lambda(this);
  }
  function FunctionCache$get$lambda(this$FunctionCache) {
    return function (x, y) {
      var value = this$FunctionCache.source(x, y);
      var pos = new Vector2i(roundToInt(x), roundToInt(y));
      if (this$FunctionCache.cache.isInside_bz62pc$(pos)) {
        this$FunctionCache.cache.set_52kd3f$(pos, value);
      }
      return value;
    };
  }
  FunctionCache.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FunctionCache',
    interfaces: []
  };
  function FunctionStatistic() {
    FunctionStatistic$Companion_getInstance();
    this.valueAccumulated_0 = 0.0;
    this.values_0 = ArrayList_init();
    this.minValue_etvucv$_0 = kotlin_js_internal_DoubleCompanionObject.MAX_VALUE;
    this.maxValue_21yy2p$_0 = kotlin_js_internal_DoubleCompanionObject.MIN_VALUE;
  }
  Object.defineProperty(FunctionStatistic.prototype, 'size', {
    get: function () {
      return this.values_0.size;
    }
  });
  Object.defineProperty(FunctionStatistic.prototype, 'minValue', {
    get: function () {
      return this.minValue_etvucv$_0;
    },
    set: function (minValue) {
      this.minValue_etvucv$_0 = minValue;
    }
  });
  Object.defineProperty(FunctionStatistic.prototype, 'maxValue', {
    get: function () {
      return this.maxValue_21yy2p$_0;
    },
    set: function (maxValue) {
      this.maxValue_21yy2p$_0 = maxValue;
    }
  });
  Object.defineProperty(FunctionStatistic.prototype, 'average', {
    get: function () {
      return this.valueAccumulated_0 / this.values_0.size;
    }
  });
  Object.defineProperty(FunctionStatistic.prototype, 'dispersion', {
    get: function () {
      if (this.values_0.isEmpty())
        return kotlin_js_internal_DoubleCompanionObject.NaN;
      var average = this.average;
      var D = {v: 0.0};
      var tmp$;
      tmp$ = this.values_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var $receiver = average - element;
        D.v += Math_0.pow($receiver, 2);
      }
      D.v /= this.size;
      return D.v;
    }
  });
  Object.defineProperty(FunctionStatistic.prototype, 'standardDeviation', {
    get: function () {
      var x = this.dispersion;
      return Math_0.sqrt(x);
    }
  });
  FunctionStatistic.prototype.add_14dthe$ = function (value) {
    this.values_0.add_11rb$(value);
    var a = this.minValue;
    this.minValue = Math_0.min(a, value);
    var a_0 = this.maxValue;
    this.maxValue = Math_0.max(a_0, value);
    this.valueAccumulated_0 += value;
  };
  function FunctionStatistic$Companion() {
    FunctionStatistic$Companion_instance = this;
  }
  FunctionStatistic$Companion.prototype.calculate_kk19x4$ = function (input, area) {
    var tmp$;
    var statistic = new FunctionStatistic();
    tmp$ = area.iterator();
    while (tmp$.hasNext()) {
      var pos = tmp$.next();
      var value = input(pos.x, pos.y);
      statistic.add_14dthe$(value);
    }
    return statistic;
  };
  FunctionStatistic$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var FunctionStatistic$Companion_instance = null;
  function FunctionStatistic$Companion_getInstance() {
    if (FunctionStatistic$Companion_instance === null) {
      new FunctionStatistic$Companion();
    }
    return FunctionStatistic$Companion_instance;
  }
  FunctionStatistic.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FunctionStatistic',
    interfaces: []
  };
  function addModifier$lambda(closure$modifier, this$addModifier) {
    return function (x, y) {
      return closure$modifier(this$addModifier(x, y));
    };
  }
  function addModifier($receiver, modifier) {
    return addModifier$lambda(modifier, $receiver);
  }
  function addModifier$lambda_0(closure$modifier, this$addModifier) {
    return function (x, y) {
      return closure$modifier(this$addModifier, x, y);
    };
  }
  function addModifier_0($receiver, modifier) {
    return addModifier$lambda_0(modifier, $receiver);
  }
  function clamp$lambda(this$clamp, closure$min, closure$max) {
    return function (x, y) {
      return clamp_1(this$clamp(x, y), closure$min, closure$max);
    };
  }
  function clamp_2($receiver, min, max) {
    return clamp$lambda($receiver, min, max);
  }
  function plus($receiver, modifier) {
    return addModifier_0($receiver, modifier);
  }
  function plus_0($receiver, modifier) {
    return addModifier($receiver, modifier);
  }
  function plus$lambda(closure$value, this$plus) {
    return function (x, y) {
      return closure$value + this$plus(x, y);
    };
  }
  function plus_1($receiver, value) {
    return plus$lambda(value, $receiver);
  }
  function times$lambda(closure$value, this$times) {
    return function (x, y) {
      return closure$value * this$times(x, y);
    };
  }
  function times($receiver, value) {
    return times$lambda(value, $receiver);
  }
  function scaleArguments$lambda(closure$scale) {
    return function (source, x, y) {
      return source(x * closure$scale.x, y * closure$scale.y);
    };
  }
  function scaleArguments(scale) {
    return scaleArguments$lambda(scale);
  }
  function translateArguments$lambda(closure$offset) {
    return function (source, x, y) {
      return source(x + closure$offset.x, y + closure$offset.y);
    };
  }
  function translateArguments(offset) {
    return translateArguments$lambda(offset);
  }
  function scaleAndTranslateArguments$lambda(closure$scale, closure$translate) {
    return function (source, x, y) {
      return source(x * closure$scale.x + closure$translate.x, y * closure$scale.y + closure$translate.y);
    };
  }
  function scaleAndTranslateArguments(scale, translate) {
    return scaleAndTranslateArguments$lambda(scale, translate);
  }
  function PerlinNoise1d(persistence, octaves, interpolateFunction) {
    if (persistence === void 0)
      persistence = 0.5;
    if (octaves === void 0)
      octaves = 8;
    if (interpolateFunction === void 0)
      interpolateFunction = cosineInterpolate;
    this.persistence = persistence;
    this.octaves = octaves;
    this.interpolateFunction = interpolateFunction;
    this.output = PerlinNoise1d$output$lambda(this);
  }
  PerlinNoise1d.prototype.smoothNoise1d_0 = function (x, noise) {
    return noise(x) / 2.0 + noise(x - 1 | 0) / 4.0 + noise(x + 1 | 0) / 4.0;
  };
  PerlinNoise1d.prototype.interpolate1d_0 = function (x, noise1dFunction) {
    var integer_X = roundToInt(Math_0.floor(x));
    var fractional_X = x - integer_X;
    var v1 = this.smoothNoise1d_0(integer_X, noise1dFunction);
    var v2 = this.smoothNoise1d_0(integer_X + 1 | 0, noise1dFunction);
    return this.interpolateFunction(v1, v2, fractional_X);
  };
  function PerlinNoise1d$output$lambda(this$PerlinNoise1d) {
    return function (x) {
      var tmp$;
      var total = 0.0;
      tmp$ = this$PerlinNoise1d.octaves;
      for (var i = 0; i < tmp$; i++) {
        var frequency = pow(2, i);
        var $receiver = this$PerlinNoise1d.persistence;
        var amplitude = Math_0.pow($receiver, i);
        total += this$PerlinNoise1d.interpolate1d_0(x * frequency, random1dFunctions[i % 8]) * amplitude;
      }
      return total;
    };
  }
  PerlinNoise1d.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PerlinNoise1d',
    interfaces: []
  };
  function PerlinNoise2d(persistence, octaveAmount, interpolateFunction, smoothed) {
    if (persistence === void 0)
      persistence = 0.5;
    if (octaveAmount === void 0)
      octaveAmount = 8;
    if (interpolateFunction === void 0)
      interpolateFunction = cosineInterpolate;
    if (smoothed === void 0)
      smoothed = true;
    this.persistence = persistence;
    this.octaveAmount = octaveAmount;
    this.interpolateFunction = interpolateFunction;
    this.smoothed = smoothed;
    this.normalizer_0 = 0;
    this.octaves_0 = null;
    this.randomWithFactor_0 = PerlinNoise2d$randomWithFactor$lambda;
    if (this.octaveAmount < 1)
      throw Error_init('Octave amount must be positive (now: ' + this.octaveAmount + ')');
    var array = Array_0(this.octaveAmount);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      var frequency = pow(2, i);
      var $receiver = this.persistence;
      var amplitude = Math_0.pow($receiver, i);
      var simpleNumber = simpleNumberList[(i + 128 | 0) % simpleNumberList.length];
      array[i] = new PerlinNoise2d$OctaveCache(frequency, amplitude, simpleNumber, random2dFunctions[i % random2dFunctions.length]);
    }
    this.octaves_0 = array;
    var amplitude_0 = {v: 0.0};
    var $receiver_0 = this.octaves_0;
    var tmp$_0;
    for (tmp$_0 = 0; tmp$_0 !== $receiver_0.length; ++tmp$_0) {
      var element = $receiver_0[tmp$_0];
      amplitude_0.v += element.amplitude;
    }
    this.normalizer_0 = (this.smoothed ? 2.0 : 1.0) / amplitude_0.v;
    this.output = PerlinNoise2d$output$lambda(this);
  }
  function PerlinNoise2d$OctaveCache(frequency, amplitude, simpleNumber, randomFunction) {
    this.frequency = frequency;
    this.amplitude = amplitude;
    this.simpleNumber = simpleNumber;
    this.randomFunction = randomFunction;
  }
  PerlinNoise2d$OctaveCache.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OctaveCache',
    interfaces: []
  };
  PerlinNoise2d.prototype.getSmoothed_lu1900$ = function (x, y) {
    var tmp$, tmp$_0;
    var total = 0.0;
    tmp$ = this.octaves_0;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var octave = tmp$[tmp$_0];
      total += this.interpolate2dSmooth_0(x * octave.frequency, y * octave.frequency, octave.randomFunction) * octave.amplitude;
    }
    return total * this.normalizer_0;
  };
  PerlinNoise2d.prototype.smoothNoise2d_0 = function (x, y, noise) {
    var corners = (noise(x - 1 | 0, y - 1 | 0) + noise(x + 1 | 0, y - 1 | 0) + noise(x - 1 | 0, y + 1 | 0) + noise(x + 1 | 0, y + 1 | 0)) / 16;
    var sides = (noise(x - 1 | 0, y) + noise(x + 1 | 0, y) + noise(x, y - 1 | 0) + noise(x, y + 1 | 0)) / 8;
    var center = noise(x, y) / 4;
    return corners + sides + center;
  };
  PerlinNoise2d.prototype.interpolate2dFlat_0 = function (x, y, randomFactor) {
    var baseX = numberToInt(x);
    var fractionalX = x - baseX;
    var baseY = numberToInt(y);
    var fractionalY = y - baseY;
    var v1 = this.randomWithFactor_0(baseX, baseY, randomFactor);
    var v2 = this.randomWithFactor_0(baseX + 1 | 0, baseY, randomFactor);
    var v3 = this.randomWithFactor_0(baseX, baseY + 1 | 0, randomFactor);
    var v4 = this.randomWithFactor_0(baseX + 1 | 0, baseY + 1 | 0, randomFactor);
    var i1 = this.interpolateFunction(v1, v2, fractionalX);
    var i2 = this.interpolateFunction(v3, v4, fractionalX);
    return this.interpolateFunction(i1, i2, fractionalY);
  };
  PerlinNoise2d.prototype.interpolate2dSmooth_0 = function (x, y, randomFunction) {
    var baseX = numberToInt(x);
    var fractionalX = x - baseX;
    var baseY = numberToInt(y);
    var fractionalY = y - baseY;
    var v1 = this.smoothNoise2d_0(baseX, baseY, randomFunction);
    var v2 = this.smoothNoise2d_0(baseX + 1 | 0, baseY, randomFunction);
    var v3 = this.smoothNoise2d_0(baseX, baseY + 1 | 0, randomFunction);
    var v4 = this.smoothNoise2d_0(baseX + 1 | 0, baseY + 1 | 0, randomFunction);
    var i1 = this.interpolateFunction(v1, v2, fractionalX);
    var i2 = this.interpolateFunction(v3, v4, fractionalX);
    return this.interpolateFunction(i1, i2, fractionalY);
  };
  function PerlinNoise2d$randomWithFactor$lambda(x, y, factor) {
    var it = x + Kotlin.imul(y, factor) | 0;
    var n = it << 13 ^ it;
    return 1.0 - (Kotlin.imul(n, (Kotlin.imul(n, n) * 15731 | 0) + 789221 | 0) + 1376312589 & 2147483647) / 1.073741824E9;
  }
  function PerlinNoise2d$output$lambda(this$PerlinNoise2d) {
    return function (x, y) {
      var tmp$, tmp$_0;
      var total = 0.0;
      tmp$ = this$PerlinNoise2d.octaves_0;
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var octave = tmp$[tmp$_0];
        total += this$PerlinNoise2d.interpolate2dFlat_0(x * octave.frequency, y * octave.frequency, octave.simpleNumber) * octave.amplitude;
      }
      return total * this$PerlinNoise2d.normalizer_0;
    };
  }
  PerlinNoise2d.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PerlinNoise2d',
    interfaces: []
  };
  var simpleNumberList;
  function random1dFunctions$lambda(it) {
    var n = it << 13 ^ it;
    return 1.0 - (Kotlin.imul(n, (Kotlin.imul(n, n) * 15731 | 0) + 789221 | 0) + 1376312589 & 2147483647) / 1.073741824E9;
  }
  function random1dFunctions$lambda_0(it) {
    var n = it << 13 ^ it;
    return 1.0 - (Kotlin.imul(n, (Kotlin.imul(n, n) * 10909 | 0) + 745027 | 0) + 1376312589 & 2147483647) / 1.073741824E9;
  }
  function random1dFunctions$lambda_1(it) {
    var n = it << 13 ^ it;
    return 1.0 - (Kotlin.imul(n, (Kotlin.imul(n, n) * 11699 | 0) + 806453 | 0) + 2147483647 & 2147483647) / 1.073741824E9;
  }
  function random1dFunctions$lambda_2(it) {
    var n = it << 13 ^ it;
    return 1.0 - (Kotlin.imul(n, (Kotlin.imul(n, n) * 12347 | 0) + 886381 | 0) + 2147483647 & 2147483647) / 1.073741824E9;
  }
  function random1dFunctions$lambda_3(it) {
    var n = it << 13 ^ it;
    return 1.0 - (Kotlin.imul(n, (Kotlin.imul(n, n) * 13613 | 0) + 918763 | 0) + 1073676287 & 2147483647) / 1.073741824E9;
  }
  function random1dFunctions$lambda_4(it) {
    var n = it << 13 ^ it;
    return 1.0 - (Kotlin.imul(n, (Kotlin.imul(n, n) * 14867 | 0) + 994579 | 0) + 1073676287 & 2147483647) / 1.073741824E9;
  }
  function random1dFunctions$lambda_5(it) {
    var n = it << 13 ^ it;
    return 1.0 - (Kotlin.imul(n, (Kotlin.imul(n, n) * 15731 | 0) + 789221 | 0) + 433494437 & 2147483647) / 1.073741824E9;
  }
  function random1dFunctions$lambda_6(it) {
    var n = it << 13 ^ it;
    return 1.0 - (Kotlin.imul(n, (Kotlin.imul(n, n) * 15731 | 0) + 789221 | 0) + 433494437 & 2147483647) / 1.073741824E9;
  }
  var random1dFunctions;
  function random2dFunctions$lambda(x, y) {
    var it = x + (y * 53 | 0) | 0;
    var n = it << 13 ^ it;
    return 1.0 - (Kotlin.imul(n, (Kotlin.imul(n, n) * 15731 | 0) + 789221 | 0) + 1376312589 & 2147483647) / 1.073741824E9;
  }
  function random2dFunctions$lambda_0(x, y) {
    var it = x + (y * 101 | 0) | 0;
    var n = it << 13 ^ it;
    return 1.0 - (Kotlin.imul(n, (Kotlin.imul(n, n) * 10909 | 0) + 745027 | 0) + 1376312589 & 2147483647) / 1.073741824E9;
  }
  function random2dFunctions$lambda_1(x, y) {
    var it = x + (y * 151 | 0) | 0;
    var n = it << 13 ^ it;
    return 1.0 - (Kotlin.imul(n, (Kotlin.imul(n, n) * 11699 | 0) + 806453 | 0) + 2147483647 & 2147483647) / 1.073741824E9;
  }
  function random2dFunctions$lambda_2(x, y) {
    var it = x + (y * 199 | 0) | 0;
    var n = it << 13 ^ it;
    return 1.0 - (Kotlin.imul(n, (Kotlin.imul(n, n) * 12347 | 0) + 886381 | 0) + 2147483647 & 2147483647) / 1.073741824E9;
  }
  function random2dFunctions$lambda_3(x, y) {
    var it = x + (y * 263 | 0) | 0;
    var n = it << 13 ^ it;
    return 1.0 - (Kotlin.imul(n, (Kotlin.imul(n, n) * 13613 | 0) + 918763 | 0) + 1073676287 & 2147483647) / 1.073741824E9;
  }
  function random2dFunctions$lambda_4(x, y) {
    var it = x + (y * 317 | 0) | 0;
    var n = it << 13 ^ it;
    return 1.0 - (Kotlin.imul(n, (Kotlin.imul(n, n) * 14867 | 0) + 994579 | 0) + 1073676287 & 2147483647) / 1.073741824E9;
  }
  function random2dFunctions$lambda_5(x, y) {
    var it = x + (y * 383 | 0) | 0;
    var n = it << 13 ^ it;
    return 1.0 - (Kotlin.imul(n, (Kotlin.imul(n, n) * 15731 | 0) + 789221 | 0) + 433494437 & 2147483647) / 1.073741824E9;
  }
  function random2dFunctions$lambda_6(x, y) {
    var it = x + (y * 443 | 0) | 0;
    var n = it << 13 ^ it;
    return 1.0 - (Kotlin.imul(n, (Kotlin.imul(n, n) * 15731 | 0) + 789221 | 0) + 433494437 & 2147483647) / 1.073741824E9;
  }
  var random2dFunctions;
  var BLACK;
  var SILVER;
  var GRAY;
  var WHITE;
  var MAROON;
  var RED;
  var PURPLE;
  var FUCHSIA;
  var GREEN;
  var LIME;
  var OLIVE;
  var YELLOW;
  var NAVY;
  var BLUE;
  var TEAL;
  var CYAN;
  function setAlpha($receiver, value) {
    return new Vector4d($receiver.x, $receiver.y, $receiver.z, value);
  }
  function setAlpha_0($receiver, value) {
    return new Vector4d($receiver.x, $receiver.y, $receiver.z, value);
  }
  function colorFromBytes(red, green, blue) {
    return new Vector3d(red / 255.0, green / 255.0, blue / 255.0);
  }
  function SafeNumber() {
    SafeNumber$Companion_getInstance();
    this.raw_0 = L0;
  }
  function SafeNumber$Companion() {
    SafeNumber$Companion_instance = this;
    this.SCALE_0 = 0.001;
    this.ZERO = SafeNumber_init_0(0.0);
    this.MIN_VALUE = SafeNumber_init_0(L_9223372036854775807.toNumber() * this.SCALE_0);
    this.MAX_VALUE = SafeNumber_init_0(Long$Companion$MAX_VALUE.toNumber() * this.SCALE_0);
    this.INVALID_VALUE = SafeNumber_init_0(kotlin_js_internal_DoubleCompanionObject.MAX_VALUE);
  }
  SafeNumber$Companion.prototype.min_k82uk6$ = function (A, B) {
    if (A.raw_0.compareTo_11rb$(B.raw_0) <= 0)
      return A;
    return B;
  };
  SafeNumber$Companion.prototype.max_k82uk6$ = function (A, B) {
    if (A.raw_0.compareTo_11rb$(B.raw_0) > 0)
      return A;
    return B;
  };
  SafeNumber$Companion.prototype.serializer = function () {
    return SafeNumber$$serializer_getInstance();
  };
  SafeNumber$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SafeNumber$Companion_instance = null;
  function SafeNumber$Companion_getInstance() {
    if (SafeNumber$Companion_instance === null) {
      new SafeNumber$Companion();
    }
    return SafeNumber$Companion_instance;
  }
  SafeNumber.prototype.plus_c25te7$ = function (other) {
    return SafeNumber_init_0(this.toDouble() + other.toDouble());
  };
  SafeNumber.prototype.minus_c25te7$ = function (other) {
    return SafeNumber_init_0(this.toDouble() - other.toDouble());
  };
  SafeNumber.prototype.times_c25te7$ = function (other) {
    return SafeNumber_init_0(this.toDouble() * other.toDouble());
  };
  SafeNumber.prototype.times_14dthe$ = function (other) {
    return SafeNumber_init_0(this.toDouble() * other);
  };
  SafeNumber.prototype.clamp_k82uk6$ = function (min, max) {
    if (this.compareTo_c25te7$(min) < 0)
      return min;
    if (this.compareTo_c25te7$(max) > 0)
      return max;
    return this;
  };
  SafeNumber.prototype.div_c25te7$ = function (other) {
    return SafeNumber_init_0(this.toDouble() / other.toDouble());
  };
  SafeNumber.prototype.equals = function (other) {
    var tmp$, tmp$_0;
    if (this === other)
      return true;
    if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null))
      return false;
    Kotlin.isType(tmp$_0 = other, SafeNumber) ? tmp$_0 : throwCCE();
    if (!equals(this.raw_0, other.raw_0))
      return false;
    return true;
  };
  SafeNumber.prototype.hashCode = function () {
    return hashCode(this.raw_0);
  };
  SafeNumber.prototype.toDouble = function () {
    return this.raw_0.toNumber() * SafeNumber$Companion_getInstance().SCALE_0;
  };
  SafeNumber.prototype.compareTo_c25te7$ = function (other) {
    return this.raw_0.compareTo_11rb$(other.raw_0);
  };
  SafeNumber.prototype.toString = function () {
    return toPrecision(this.toDouble(), 3);
  };
  SafeNumber.prototype.unaryMinus = function () {
    return SafeNumber_init_0(-this.toDouble());
  };
  SafeNumber.prototype.rangeTo_c25te7$ = function (other) {
    return this.raw_0.rangeTo(other.raw_0);
  };
  SafeNumber.prototype.abs = function () {
    if (this.compareTo_c25te7$(SafeNumber$Companion_getInstance().ZERO) < 0)
      return this.unaryMinus();
    return this;
  };
  function SafeNumber$$serializer() {
    this.descriptor_5ti6q2$_0 = new SerialClassDescImpl('casper.types.SafeNumber', this);
    this.descriptor.addElement_ivxn3r$('raw', true);
    SafeNumber$$serializer_instance = this;
  }
  Object.defineProperty(SafeNumber$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_5ti6q2$_0;
    }
  });
  SafeNumber$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    if (!equals(obj.raw_0, L0) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 0))
      output.encodeLongElement_a3zgoj$(this.descriptor, 0, obj.raw_0);
    output.endStructure_qatsm0$(this.descriptor);
  };
  SafeNumber$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeLongElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return SafeNumber_init(bitMask0, local0, null);
  };
  SafeNumber$$serializer.prototype.childSerializers = function () {
    return [internal.LongSerializer];
  };
  SafeNumber$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var SafeNumber$$serializer_instance = null;
  function SafeNumber$$serializer_getInstance() {
    if (SafeNumber$$serializer_instance === null) {
      new SafeNumber$$serializer();
    }
    return SafeNumber$$serializer_instance;
  }
  function SafeNumber_init(seen1, raw, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(SafeNumber.prototype);
    if ((seen1 & 1) === 0)
      $this.raw_0 = L0;
    else
      $this.raw_0 = raw;
    return $this;
  }
  SafeNumber.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SafeNumber',
    interfaces: []
  };
  function SafeNumber_init_0(double, $this) {
    $this = $this || Object.create(SafeNumber.prototype);
    SafeNumber.call($this);
    var result = double / SafeNumber$Companion_getInstance().SCALE_0;
    if (result > Long$Companion$MIN_VALUE.toNumber() && result <= Long$Companion$MAX_VALUE.toNumber()) {
      $this.raw_0 = roundToLong(result);
    }
     else {
      $this.raw_0 = Long$Companion$MIN_VALUE;
    }
    return $this;
  }
  function SafeNumber_init_1(long, $this) {
    $this = $this || Object.create(SafeNumber.prototype);
    SafeNumber_init_0(long.toNumber(), $this);
    return $this;
  }
  function SafeNumber_init_2(int, $this) {
    $this = $this || Object.create(SafeNumber.prototype);
    SafeNumber_init_0(int, $this);
    return $this;
  }
  $$importsForInline$$.typesKt = _;
  Object.defineProperty(Map2D, 'Companion', {
    get: Map2D$Companion_getInstance
  });
  var package$casper = _.casper || (_.casper = {});
  var package$collection = package$casper.collection || (package$casper.collection = {});
  var package$map = package$collection.map || (package$collection.map = {});
  package$map.Map2D = Map2D;
  Object.defineProperty(Map3D, 'Companion', {
    get: Map3D$Companion_getInstance
  });
  package$map.Map3D = Map3D;
  var package$core = package$casper.core || (package$casper.core = {});
  package$core.Disposable = Disposable;
  package$core.getDisposable_7uhc0p$ = getDisposable;
  package$core.DisposableHolder = DisposableHolder;
  var package$format = package$casper.format || (package$casper.format = {});
  package$format.toPrecision_j6vyb1$ = toPrecision;
  package$format.toHexString_g4o0je$ = toHexString;
  package$format.toHexString_g4o1a3$ = toHexString_0;
  package$format.getColorComponentToHex_14dthe$ = getColorComponentToHex;
  var package$geometry = package$casper.geometry || (package$casper.geometry = {});
  package$geometry.Matrix23d = Matrix23d;
  package$geometry.Matrix33d = Matrix33d;
  package$geometry.Matrix43d = Matrix43d;
  package$geometry.Matrix24d = Matrix24d;
  package$geometry.Matrix34d = Matrix34d;
  package$geometry.Matrix44d = Matrix44d;
  package$geometry.Matrix83d = Matrix83d;
  Object.defineProperty(Vector2d, 'Companion', {
    get: Vector2d$Companion_getInstance
  });
  Object.defineProperty(Vector2d, '$serializer', {
    get: Vector2d$$serializer_getInstance
  });
  package$geometry.Vector2d_init_rzesio$ = Vector2d_init;
  package$geometry.Vector2d_init_14dthe$ = Vector2d_init_0;
  package$geometry.Vector2d = Vector2d;
  Object.defineProperty(Vector2i, 'Companion', {
    get: Vector2i$Companion_getInstance
  });
  Object.defineProperty(Vector2i, '$serializer', {
    get: Vector2i$$serializer_getInstance
  });
  package$geometry.Vector2i_init_y4apw$ = Vector2i_init;
  package$geometry.Vector2i_init_za3lpa$ = Vector2i_init_0;
  package$geometry.Vector2i = Vector2i;
  Object.defineProperty(Vector3d, 'Companion', {
    get: Vector3d$Companion_getInstance
  });
  Object.defineProperty(Vector3d, '$serializer', {
    get: Vector3d$$serializer_getInstance
  });
  package$geometry.Vector3d_init_50q2a6$ = Vector3d_init;
  package$geometry.Vector3d_init_14dthe$ = Vector3d_init_0;
  package$geometry.Vector3d = Vector3d;
  Object.defineProperty(Vector3i, 'Companion', {
    get: Vector3i$Companion_getInstance
  });
  Object.defineProperty(Vector3i, '$serializer', {
    get: Vector3i$$serializer_getInstance
  });
  package$geometry.Vector3i_init_ies85i$ = Vector3i_init;
  package$geometry.Vector3i_init_za3lpa$ = Vector3i_init_0;
  package$geometry.Vector3i = Vector3i;
  Object.defineProperty(Vector4d, 'Companion', {
    get: Vector4d$Companion_getInstance
  });
  Object.defineProperty(Vector4d, '$serializer', {
    get: Vector4d$$serializer_getInstance
  });
  package$geometry.Vector4d_init_wtkrek$ = Vector4d_init;
  package$geometry.Vector4d_init_14dthe$ = Vector4d_init_0;
  package$geometry.Vector4d = Vector4d;
  var package$aabb = package$geometry.aabb || (package$geometry.aabb = {});
  package$aabb.AABBox2Iterator = AABBox2Iterator;
  package$aabb.AABBox2d = AABBox2d;
  package$aabb.AABBox2i = AABBox2i;
  package$aabb.AABBox3Iterator = AABBox3Iterator;
  Object.defineProperty(AABBox3d, 'Companion', {
    get: AABBox3d$Companion_getInstance
  });
  Object.defineProperty(AABBox3d, '$serializer', {
    get: AABBox3d$$serializer_getInstance
  });
  package$aabb.AABBox3d_init_txaz1u$ = AABBox3d_init;
  package$aabb.AABBox3d = AABBox3d;
  Object.defineProperty(AABBox3i, 'Companion', {
    get: AABBox3i$Companion_getInstance
  });
  Object.defineProperty(AABBox3i, '$serializer', {
    get: AABBox3i$$serializer_getInstance
  });
  package$aabb.AABBox3i_init_tpbzec$ = AABBox3i_init;
  package$aabb.AABBox3i = AABBox3i;
  package$aabb.AABBoxFaceIterator = AABBoxFaceIterator;
  Object.defineProperty(Axis3d, 'NEGATIVE_X', {
    get: Axis3d$NEGATIVE_X_getInstance
  });
  Object.defineProperty(Axis3d, 'POSITIVE_X', {
    get: Axis3d$POSITIVE_X_getInstance
  });
  Object.defineProperty(Axis3d, 'NEGATIVE_Y', {
    get: Axis3d$NEGATIVE_Y_getInstance
  });
  Object.defineProperty(Axis3d, 'POSITIVE_Y', {
    get: Axis3d$POSITIVE_Y_getInstance
  });
  Object.defineProperty(Axis3d, 'NEGATIVE_Z', {
    get: Axis3d$NEGATIVE_Z_getInstance
  });
  Object.defineProperty(Axis3d, 'POSITIVE_Z', {
    get: Axis3d$POSITIVE_Z_getInstance
  });
  package$aabb.Axis3d = Axis3d;
  Object.defineProperty(Axis3i, 'NEGATIVE_X', {
    get: Axis3i$NEGATIVE_X_getInstance
  });
  Object.defineProperty(Axis3i, 'POSITIVE_X', {
    get: Axis3i$POSITIVE_X_getInstance
  });
  Object.defineProperty(Axis3i, 'NEGATIVE_Y', {
    get: Axis3i$NEGATIVE_Y_getInstance
  });
  Object.defineProperty(Axis3i, 'POSITIVE_Y', {
    get: Axis3i$POSITIVE_Y_getInstance
  });
  Object.defineProperty(Axis3i, 'NEGATIVE_Z', {
    get: Axis3i$NEGATIVE_Z_getInstance
  });
  Object.defineProperty(Axis3i, 'POSITIVE_Z', {
    get: Axis3i$POSITIVE_Z_getInstance
  });
  package$aabb.Axis3i = Axis3i;
  var package$iterator = package$geometry.iterator || (package$geometry.iterator = {});
  package$iterator.FromCenterIterator = FromCenterIterator;
  var package$polygon = package$geometry.polygon || (package$geometry.polygon = {});
  package$polygon.Line = Line;
  package$polygon.direction_3otpcp$ = direction;
  package$polygon.direction_3ot2d6$ = direction_0;
  package$polygon.setZ_pi0v56$ = setZ;
  package$polygon.intersectionWithTriangle_4lzqtc$ = intersectionWithTriangle;
  package$polygon.intersectionWithQuad_529729$ = intersectionWithQuad;
  package$polygon.FaceIntersection = FaceIntersection;
  package$polygon.BoxIntersection = BoxIntersection;
  package$polygon.intersectionWithBox_1xiag4$ = intersectionWithBox;
  package$polygon.iterateLine2n_6b4g4g$ = iterateLine2n;
  package$polygon.distance2d_o51t8e$ = distance2d;
  package$polygon.iterateLine3n_nq5jfi$ = iterateLine3n;
  package$polygon.distance3d_88j332$ = distance3d;
  package$polygon.iterateLineBresenham8o_h5im21$ = iterateLineBresenham8o;
  package$polygon.iterateLineBresenham4o_h5im21$ = iterateLineBresenham4o;
  package$polygon.iterateLineDDA_h5im21$ = iterateLineDDA;
  package$polygon.iterateLineDDA_uclymg$ = iterateLineDDA_0;
  package$polygon.Octagon = Octagon;
  package$polygon.Octagon3d_p4ip2k$ = Octagon3d;
  package$polygon.Polygon = Polygon;
  package$polygon.Quad = Quad;
  package$polygon.Triangle = Triangle;
  package$polygon.getTriangleNormal_xdm3fa$ = getTriangleNormal;
  var package$math = package$casper.math || (package$casper.math = {});
  package$math.extrapolateVector3d_ppr5tq$ = extrapolateVector3d;
  package$math.scaleTriangle3d_otly2k$ = scaleTriangle3d;
  package$math.scaleLine3d_fpbbko$ = scaleLine3d;
  package$math.scaleQuad3d_sy2cjf$ = scaleQuad3d;
  package$math.pow_dqglrj$ = pow;
  package$math.clamp_e4yvb3$ = clamp;
  package$math.clamp_ekzx8g$ = clamp_0;
  package$math.clamp_nig4hr$ = clamp_1;
  package$math.powInt_vux9f0$ = powInt;
  package$math.clampInt_qt1dr2$ = clampInt;
  package$math.clampLong_b9bd0d$ = clampLong;
  package$math.clampDouble_yvo9jy$ = clampDouble;
  package$math.normal_dqglrj$ = normal;
  var package$function = package$math.function || (package$math.function = {});
  Object.defineProperty(package$function, 'linearInterpolate', {
    get: function () {
      return linearInterpolate;
    }
  });
  Object.defineProperty(package$function, 'cosineInterpolate', {
    get: function () {
      return cosineInterpolate;
    }
  });
  package$function.FunctionCache = FunctionCache;
  Object.defineProperty(FunctionStatistic, 'Companion', {
    get: FunctionStatistic$Companion_getInstance
  });
  package$function.FunctionStatistic = FunctionStatistic;
  package$function.addModifier_apjkfh$ = addModifier;
  package$function.addModifier_3eyu8d$ = addModifier_0;
  package$function.clamp_x0to83$ = clamp_2;
  package$function.plus_3eyu8d$ = plus;
  package$function.plus_apjkfh$ = plus_0;
  package$function.plus_dlq3jp$ = plus_1;
  package$function.times_dlq3jp$ = times;
  package$function.scaleArguments_bz62ph$ = scaleArguments;
  package$function.translateArguments_bz62ph$ = translateArguments;
  package$function.scaleAndTranslateArguments_97zyx8$ = scaleAndTranslateArguments;
  var package$perlin = package$math.perlin || (package$math.perlin = {});
  package$perlin.PerlinNoise1d = PerlinNoise1d;
  PerlinNoise2d.OctaveCache = PerlinNoise2d$OctaveCache;
  package$perlin.PerlinNoise2d = PerlinNoise2d;
  var package$random = package$math.random || (package$math.random = {});
  Object.defineProperty(package$random, 'simpleNumberList', {
    get: function () {
      return simpleNumberList;
    }
  });
  Object.defineProperty(package$random, 'random1dFunctions', {
    get: function () {
      return random1dFunctions;
    },
    set: function (value) {
      random1dFunctions = value;
    }
  });
  Object.defineProperty(package$random, 'random2dFunctions', {
    get: function () {
      return random2dFunctions;
    },
    set: function (value) {
      random2dFunctions = value;
    }
  });
  var package$types = package$casper.types || (package$casper.types = {});
  Object.defineProperty(package$types, 'BLACK', {
    get: function () {
      return BLACK;
    }
  });
  Object.defineProperty(package$types, 'SILVER', {
    get: function () {
      return SILVER;
    }
  });
  Object.defineProperty(package$types, 'GRAY', {
    get: function () {
      return GRAY;
    }
  });
  Object.defineProperty(package$types, 'WHITE', {
    get: function () {
      return WHITE;
    }
  });
  Object.defineProperty(package$types, 'MAROON', {
    get: function () {
      return MAROON;
    }
  });
  Object.defineProperty(package$types, 'RED', {
    get: function () {
      return RED;
    }
  });
  Object.defineProperty(package$types, 'PURPLE', {
    get: function () {
      return PURPLE;
    }
  });
  Object.defineProperty(package$types, 'FUCHSIA', {
    get: function () {
      return FUCHSIA;
    }
  });
  Object.defineProperty(package$types, 'GREEN', {
    get: function () {
      return GREEN;
    }
  });
  Object.defineProperty(package$types, 'LIME', {
    get: function () {
      return LIME;
    }
  });
  Object.defineProperty(package$types, 'OLIVE', {
    get: function () {
      return OLIVE;
    }
  });
  Object.defineProperty(package$types, 'YELLOW', {
    get: function () {
      return YELLOW;
    }
  });
  Object.defineProperty(package$types, 'NAVY', {
    get: function () {
      return NAVY;
    }
  });
  Object.defineProperty(package$types, 'BLUE', {
    get: function () {
      return BLUE;
    }
  });
  Object.defineProperty(package$types, 'TEAL', {
    get: function () {
      return TEAL;
    }
  });
  Object.defineProperty(package$types, 'CYAN', {
    get: function () {
      return CYAN;
    }
  });
  package$types.setAlpha_ivqh2w$ = setAlpha;
  package$types.setAlpha_rbozrt$ = setAlpha_0;
  package$types.colorFromBytes_qt1dr2$ = colorFromBytes;
  Object.defineProperty(SafeNumber, 'Companion', {
    get: SafeNumber$Companion_getInstance
  });
  Object.defineProperty(SafeNumber, '$serializer', {
    get: SafeNumber$$serializer_getInstance
  });
  package$types.SafeNumber_init_s7yfif$ = SafeNumber_init;
  package$types.SafeNumber_init_14dthe$ = SafeNumber_init_0;
  package$types.SafeNumber_init_s8cxhz$ = SafeNumber_init_1;
  package$types.SafeNumber_init_za3lpa$ = SafeNumber_init_2;
  package$types.SafeNumber = SafeNumber;
  Vector2d$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  Vector2i$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  Vector3d$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  Vector3i$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  Vector4d$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  AABBox3d$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  AABBox3i$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  SafeNumber$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  linearInterpolate = linearInterpolate$lambda;
  cosineInterpolate = cosineInterpolate$lambda;
  simpleNumberList = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997, 1009, 1013, 1019, 1021, 1031, 1033, 1039, 1049, 1051, 1061, 1063, 1069, 1087, 1091, 1093, 1097, 1103, 1109, 1117, 1123, 1129, 1151, 1153, 1163, 1171, 1181, 1187, 1193, 1201, 1213, 1217, 1223, 1229, 1231, 1237, 1249, 1259, 1277, 1279, 1283, 1289, 1291, 1297, 1301, 1303, 1307, 1319, 1321, 1327, 1361, 1367, 1373, 1381, 1399, 1409, 1423, 1427, 1429, 1433, 1439, 1447, 1451, 1453, 1459, 1471, 1481, 1483, 1487, 1489, 1493, 1499, 1511, 1523, 1531, 1543, 1549, 1553, 1559, 1567, 1571, 1579, 1583, 1597, 1601, 1607, 1609, 1613, 1619, 1621, 1627, 1637, 1657, 1663, 1667, 1669, 1693, 1697, 1699, 1709, 1721, 1723, 1733, 1741, 1747, 1753, 1759, 1777, 1783, 1787, 1789, 1801, 1811, 1823, 1831, 1847, 1861, 1867, 1871, 1873, 1877, 1879, 1889, 1901, 1907, 1913, 1931, 1933, 1949, 1951, 1973, 1979, 1987, 1993, 1997, 1999, 2003, 2011, 2017, 2027, 2029, 2039, 2053, 2063, 2069, 2081, 2083, 2087, 2089, 2099, 2111, 2113, 2129, 2131, 2137, 2141, 2143, 2153, 2161, 2179, 2203, 2207, 2213, 2221, 2237, 2239, 2243, 2251, 2267, 2269, 2273, 2281, 2287, 2293, 2297, 2309, 2311, 2333, 2339, 2341, 2347, 2351, 2357, 2371, 2377, 2381, 2383, 2389, 2393, 2399, 2411, 2417, 2423, 2437, 2441, 2447, 2459, 2467, 2473, 2477, 2503, 2521, 2531, 2539, 2543, 2549, 2551, 2557, 2579, 2591, 2593, 2609, 2617, 2621, 2633, 2647, 2657, 2659, 2663, 2671, 2677, 2683, 2687, 2689, 2693, 2699, 2707, 2711, 2713, 2719, 2729, 2731, 2741, 2749, 2753, 2767, 2777, 2789, 2791, 2797, 2801, 2803, 2819, 2833, 2837, 2843, 2851, 2857, 2861, 2879, 2887, 2897, 2903, 2909, 2917, 2927, 2939, 2953, 2957, 2963, 2969, 2971, 2999, 3001, 3011, 3019, 3023, 3037, 3041, 3049, 3061, 3067, 3079, 3083, 3089, 3109, 3119, 3121, 3137, 3163, 3167, 3169, 3181, 3187, 3191, 3203, 3209, 3217, 3221, 3229, 3251, 3253, 3257, 3259, 3271, 3299, 3301, 3307, 3313, 3319, 3323, 3329, 3331, 3343, 3347, 3359, 3361, 3371, 3373, 3389, 3391, 3407, 3413, 3433, 3449, 3457, 3461, 3463, 3467, 3469, 3491, 3499, 3511, 3517, 3527, 3529, 3533, 3539, 3541, 3547, 3557, 3559, 3571];
  random1dFunctions = [random1dFunctions$lambda, random1dFunctions$lambda_0, random1dFunctions$lambda_1, random1dFunctions$lambda_2, random1dFunctions$lambda_3, random1dFunctions$lambda_4, random1dFunctions$lambda_5, random1dFunctions$lambda_6];
  random2dFunctions = [random2dFunctions$lambda, random2dFunctions$lambda_0, random2dFunctions$lambda_1, random2dFunctions$lambda_2, random2dFunctions$lambda_3, random2dFunctions$lambda_4, random2dFunctions$lambda_5, random2dFunctions$lambda_6];
  BLACK = colorFromBytes(0, 0, 0);
  SILVER = colorFromBytes(192, 192, 192);
  GRAY = colorFromBytes(128, 128, 128);
  WHITE = colorFromBytes(255, 255, 255);
  MAROON = colorFromBytes(128, 0, 0);
  RED = colorFromBytes(255, 0, 0);
  PURPLE = colorFromBytes(128, 0, 128);
  FUCHSIA = colorFromBytes(255, 0, 255);
  GREEN = colorFromBytes(0, 128, 0);
  LIME = colorFromBytes(0, 255, 0);
  OLIVE = colorFromBytes(128, 128, 0);
  YELLOW = colorFromBytes(255, 255, 0);
  NAVY = colorFromBytes(0, 0, 128);
  BLUE = colorFromBytes(0, 0, 255);
  TEAL = colorFromBytes(0, 128, 128);
  CYAN = colorFromBytes(0, 255, 255);
  Kotlin.defineModule('typesKt', _);
  return _;
}));

//# sourceMappingURL=typesKt.js.map
