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
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Long$Companion$MIN_VALUE = Kotlin.Long.MIN_VALUE;
  var Long$Companion$MAX_VALUE = Kotlin.Long.MAX_VALUE;
  var isFinite = Kotlin.kotlin.isFinite_yrwdxr$;
  var roundToLong = Kotlin.kotlin.math.roundToLong_yrwdxr$;
  var abs = Kotlin.kotlin.math.abs_s8cxhz$;
  var roundToInt = Kotlin.kotlin.math.roundToInt_yrwdxr$;
  var toString = Kotlin.kotlin.text.toString_dqglrj$;
  var Error_init = Kotlin.kotlin.Error_init_pdl1vj$;
  var kotlin_js_internal_DoubleCompanionObject = Kotlin.kotlin.js.internal.DoubleCompanionObject;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Throwable = Error;
  var SerialClassDescImpl = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.SerialClassDescImpl;
  var UnknownFieldException = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.UnknownFieldException;
  var internal = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal;
  var GeneratedSerializer = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.GeneratedSerializer;
  var MissingFieldException = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.MissingFieldException;
  var Math_0 = Math;
  var abs_0 = Kotlin.kotlin.math.abs_za3lpa$;
  var Pair = Kotlin.kotlin.Pair;
  var equals = Kotlin.equals;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Iterator = Kotlin.kotlin.collections.Iterator;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var numberToInt = Kotlin.numberToInt;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var L_9223372036854775807 = new Kotlin.Long(1, -2147483648);
  var throwCCE = Kotlin.throwCCE;
  var hashCode = Kotlin.hashCode;
  var L0 = Kotlin.Long.ZERO;
  Axis3d.prototype = Object.create(Enum.prototype);
  Axis3d.prototype.constructor = Axis3d;
  Axis3i.prototype = Object.create(Enum.prototype);
  Axis3i.prototype.constructor = Axis3i;
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
    var hex = toString(roundToInt(value * 255.0), 16);
    while (hex.length < 2) {
      hex = '0' + hex;
    }
    return hex;
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
  Vector2d.prototype.greater_bz62pc$ = function (other) {
    return this.x > other.x && this.y > other.y;
  };
  Vector2d.prototype.greaterOrEq_bz62pc$ = function (other) {
    return this.x >= other.x && this.y >= other.y;
  };
  Vector2d.prototype.less_bz62pc$ = function (other) {
    return this.x < other.x && this.y < other.y;
  };
  Vector2d.prototype.lessOrEq_bz62pc$ = function (other) {
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
  }
  Vector4d$Companion.prototype.mono_14dthe$ = function (value) {
    return new Vector4d(value, value, value, value);
  };
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
  function AABBox2i(position, size) {
    this.position = position;
    this.size = size;
  }
  AABBox2i.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AABBox2i',
    interfaces: []
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
    return new AABBoxIterator(this);
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
  function AABBoxIterator(source) {
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
  AABBoxIterator.prototype.next = function () {
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
  AABBoxIterator.prototype.hasNext = function () {
    return this.next_0 != null;
  };
  AABBoxIterator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AABBoxIterator',
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
  var package$casper = _.casper || (_.casper = {});
  var package$core = package$casper.core || (package$casper.core = {});
  package$core.Disposable = Disposable;
  package$core.getDisposable_7uhc0p$ = getDisposable;
  var package$format = package$casper.format || (package$casper.format = {});
  package$format.toPrecision_j6vyb1$ = toPrecision;
  package$format.toHexString_g4o0je$ = toHexString;
  package$format.toHexString_g4o1a3$ = toHexString_0;
  package$format.getColorComponentToHex_14dthe$ = getColorComponentToHex;
  var package$geometry = package$casper.geometry || (package$casper.geometry = {});
  package$geometry.extrapolateVector3d_ppr5tq$ = extrapolateVector3d;
  package$geometry.scaleTriangle3d_otly2k$ = scaleTriangle3d;
  package$geometry.scaleLine3d_fpbbko$ = scaleLine3d;
  package$geometry.scaleQuad3d_sy2cjf$ = scaleQuad3d;
  package$geometry.pow_dqglrj$ = pow;
  package$geometry.clamp_e4yvb3$ = clamp;
  package$geometry.clamp_ekzx8g$ = clamp_0;
  package$geometry.clamp_nig4hr$ = clamp_1;
  package$geometry.powInt_vux9f0$ = powInt;
  package$geometry.clampInt_qt1dr2$ = clampInt;
  package$geometry.clampLong_b9bd0d$ = clampLong;
  package$geometry.clampDouble_yvo9jy$ = clampDouble;
  package$geometry.normal_dqglrj$ = normal;
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
  package$geometry.Vector2d = Vector2d;
  Object.defineProperty(Vector2i, 'Companion', {
    get: Vector2i$Companion_getInstance
  });
  Object.defineProperty(Vector2i, '$serializer', {
    get: Vector2i$$serializer_getInstance
  });
  package$geometry.Vector2i_init_y4apw$ = Vector2i_init;
  package$geometry.Vector2i = Vector2i;
  Object.defineProperty(Vector3d, 'Companion', {
    get: Vector3d$Companion_getInstance
  });
  Object.defineProperty(Vector3d, '$serializer', {
    get: Vector3d$$serializer_getInstance
  });
  package$geometry.Vector3d_init_50q2a6$ = Vector3d_init;
  package$geometry.Vector3d = Vector3d;
  Object.defineProperty(Vector3i, 'Companion', {
    get: Vector3i$Companion_getInstance
  });
  Object.defineProperty(Vector3i, '$serializer', {
    get: Vector3i$$serializer_getInstance
  });
  package$geometry.Vector3i_init_ies85i$ = Vector3i_init;
  package$geometry.Vector3i = Vector3i;
  Object.defineProperty(Vector4d, 'Companion', {
    get: Vector4d$Companion_getInstance
  });
  Object.defineProperty(Vector4d, '$serializer', {
    get: Vector4d$$serializer_getInstance
  });
  package$geometry.Vector4d_init_wtkrek$ = Vector4d_init;
  package$geometry.Vector4d = Vector4d;
  var package$aabb = package$geometry.aabb || (package$geometry.aabb = {});
  package$aabb.AABBox2i = AABBox2i;
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
  package$aabb.AABBoxIterator = AABBoxIterator;
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
