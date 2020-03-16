(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlinx-serialization-kotlinx-serialization-runtime', 'typesKt'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlinx-serialization-kotlinx-serialization-runtime'), require('typesKt'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'signalKt'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'signalKt'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-runtime'] === 'undefined') {
      throw new Error("Error loading module 'signalKt'. Its dependency 'kotlinx-serialization-kotlinx-serialization-runtime' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-runtime' is loaded prior to 'signalKt'.");
    }
    if (typeof typesKt === 'undefined') {
      throw new Error("Error loading module 'signalKt'. Its dependency 'typesKt' was not found. Please, check whether 'typesKt' is loaded prior to 'signalKt'.");
    }
    root.signalKt = factory(typeof signalKt === 'undefined' ? {} : signalKt, kotlin, this['kotlinx-serialization-kotlinx-serialization-runtime'], typesKt);
  }
}(this, function (_, Kotlin, $module$kotlinx_serialization_kotlinx_serialization_runtime, $module$typesKt) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Pair = Kotlin.kotlin.Pair;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Collection = Kotlin.kotlin.collections.Collection;
  var Error_init = Kotlin.kotlin.Error_init_pdl1vj$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var SerialClassDescImpl = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.SerialClassDescImpl;
  var ArrayListSerializer = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.ArrayListSerializer;
  var equals = Kotlin.equals;
  var UnknownFieldException = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.UnknownFieldException;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var GeneratedSerializer = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.GeneratedSerializer;
  var MutableCollection = Kotlin.kotlin.collections.MutableCollection;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var MapEntry = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.MapEntry;
  var MutableMap = Kotlin.kotlin.collections.MutableMap;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var LinkedHashSetSerializer = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.LinkedHashSetSerializer;
  var MutableSet = Kotlin.kotlin.collections.MutableSet;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var addAll = Kotlin.kotlin.collections.addAll_ye1y7v$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_73mtqc$;
  var getCallableRef = Kotlin.getCallableRef;
  var Unit = Kotlin.kotlin.Unit;
  var Disposable = $module$typesKt.casper.core.Disposable;
  Left.prototype = Object.create(Either.prototype);
  Left.prototype.constructor = Left;
  Right.prototype = Object.create(Either.prototype);
  Right.prototype.constructor = Right;
  function ObservableCollection() {
  }
  ObservableCollection.prototype.then_uc1utc$ = function (addListener, removeListener) {
    return new Pair(this.addFuture().then_qlkmfe$(addListener), this.removeFuture().then_qlkmfe$(removeListener));
  };
  ObservableCollection.prototype.cancel_7im85o$ = function (forAdd, forRemove) {
    if (forAdd != null) {
      this.addFuture().cancel_vasy06$(forAdd);
    }
    if (forRemove != null) {
      this.removeFuture().cancel_vasy06$(forRemove);
    }
  };
  ObservableCollection.prototype.thenAdd_qlkmfe$ = function (listener) {
    return this.addFuture().then_qlkmfe$(listener);
  };
  ObservableCollection.prototype.thenRemove_qlkmfe$ = function (listener) {
    return this.removeFuture().then_qlkmfe$(listener);
  };
  ObservableCollection.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ObservableCollection',
    interfaces: [Collection]
  };
  function ObservableMap() {
  }
  ObservableMap.prototype.then_4eanvs$ = function (addListener, removeListener) {
    return new Pair(this.addFuture().then_qlkmfe$(addListener), this.removeFuture().then_qlkmfe$(removeListener));
  };
  ObservableMap.prototype.cancel_7im85o$ = function (forAdd, forRemove) {
    if (forAdd != null) {
      this.addFuture().cancel_vasy06$(forAdd);
    }
    if (forRemove != null) {
      this.removeFuture().cancel_vasy06$(forRemove);
    }
  };
  ObservableMap.prototype.thenAdd_by9f6q$ = function (listener) {
    return this.addFuture().then_qlkmfe$(listener);
  };
  ObservableMap.prototype.thenRemove_by9f6q$ = function (listener) {
    return this.removeFuture().then_qlkmfe$(listener);
  };
  ObservableMap.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ObservableMap',
    interfaces: []
  };
  function ObservableMutableList() {
    ObservableMutableList$Companion_getInstance();
    this.items_0 = ArrayList_init();
    this.addSignal_0 = new Signal();
    this.removeSignal_0 = new Signal();
  }
  ObservableMutableList.prototype.addFuture = function () {
    return this.addSignal_0;
  };
  ObservableMutableList.prototype.removeFuture = function () {
    return this.removeSignal_0;
  };
  ObservableMutableList.prototype.add_11rb$ = function (element) {
    if (this.items_0.add_11rb$(element)) {
      this.addSignal_0.set_11rb$(element);
      return true;
    }
    return false;
  };
  ObservableMutableList.prototype.remove_11rb$ = function (element) {
    if (this.items_0.remove_11rb$(element)) {
      this.removeSignal_0.set_11rb$(element);
      return true;
    }
    return false;
  };
  ObservableMutableList.prototype.addAll_brywnq$ = function (elements) {
    var tmp$;
    var result = false;
    tmp$ = elements.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var next = this.add_11rb$(element);
      result = result || next;
    }
    return result;
  };
  ObservableMutableList.prototype.clear = function () {
    this.removeAll_brywnq$(this.items_0);
  };
  ObservableMutableList.prototype.iterator = function () {
    return this.items_0.iterator();
  };
  ObservableMutableList.prototype.removeAll_brywnq$ = function (elements) {
    var tmp$;
    var result = false;
    tmp$ = elements.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var next = this.remove_11rb$(element);
      result = result || next;
    }
    return result;
  };
  ObservableMutableList.prototype.retainAll_brywnq$ = function (elements) {
    throw Error_init('No implementation');
  };
  Object.defineProperty(ObservableMutableList.prototype, 'size', {
    get: function () {
      return this.items_0.size;
    }
  });
  ObservableMutableList.prototype.contains_11rb$ = function (element) {
    return this.items_0.contains_11rb$(element);
  };
  ObservableMutableList.prototype.containsAll_brywnq$ = function (elements) {
    return this.items_0.containsAll_brywnq$(elements);
  };
  ObservableMutableList.prototype.isEmpty = function () {
    return this.items_0.isEmpty();
  };
  function ObservableMutableList$Companion() {
    ObservableMutableList$Companion_instance = this;
  }
  ObservableMutableList$Companion.prototype.serializer_swdriu$ = function (typeSerial0) {
    return ObservableMutableList$ObservableMutableList$$serializer_init(typeSerial0);
  };
  ObservableMutableList$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ObservableMutableList$Companion_instance = null;
  function ObservableMutableList$Companion_getInstance() {
    if (ObservableMutableList$Companion_instance === null) {
      new ObservableMutableList$Companion();
    }
    return ObservableMutableList$Companion_instance;
  }
  function ObservableMutableList$$serializer() {
    this.descriptor_smiw1o$_0 = new SerialClassDescImpl('casper.collection.ObservableMutableList', this);
    this.descriptor.addElement_ivxn3r$('items', true);
  }
  Object.defineProperty(ObservableMutableList$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_smiw1o$_0;
    }
  });
  ObservableMutableList$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, [this.typeSerial0]);
    if (!equals(obj.items_0, ArrayList_init()) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 0))
      output.encodeSerializableElement_blecud$(this.descriptor, 0, new ArrayListSerializer(this.typeSerial0), obj.items_0);
    output.endStructure_qatsm0$(this.descriptor);
  };
  ObservableMutableList$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, [this.typeSerial0]);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 0, new ArrayListSerializer(this.typeSerial0)) : input.updateSerializableElement_ehubvl$(this.descriptor, 0, new ArrayListSerializer(this.typeSerial0), local0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return ObservableMutableList_init(bitMask0, local0, null);
  };
  ObservableMutableList$$serializer.prototype.childSerializers = function () {
    return [new ArrayListSerializer(this.typeSerial0)];
  };
  function ObservableMutableList$ObservableMutableList$$serializer_init(typeSerial0) {
    var $this = new ObservableMutableList$$serializer();
    $this.typeSerial0 = typeSerial0;
    return $this;
  }
  ObservableMutableList$$serializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  function ObservableMutableList_init(seen1, items, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(ObservableMutableList.prototype);
    if ((seen1 & 1) === 0) {
      $this.items_0 = ArrayList_init();
    }
     else
      $this.items_0 = items;
    $this.addSignal_0 = new Signal();
    $this.removeSignal_0 = new Signal();
    return $this;
  }
  ObservableMutableList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ObservableMutableList',
    interfaces: [ObservableCollection, MutableCollection]
  };
  function ObservableMutableMap() {
    this.map_0 = LinkedHashMap_init();
    this.addSignal_0 = new Signal();
    this.removeSignal_0 = new Signal();
  }
  ObservableMutableMap.prototype.addFuture = function () {
    return this.addSignal_0;
  };
  ObservableMutableMap.prototype.removeFuture = function () {
    return this.removeSignal_0;
  };
  ObservableMutableMap.prototype.get_11rb$ = function (key) {
    return this.map_0.get_11rb$(key);
  };
  ObservableMutableMap.prototype.remove_11rb$ = function (key) {
    var tmp$;
    tmp$ = this.map_0.remove_11rb$(key);
    if (tmp$ == null) {
      return null;
    }
    var element = tmp$;
    this.removeSignal_0.set_11rb$(new MapEntry(key, element));
    return element;
  };
  Object.defineProperty(ObservableMutableMap.prototype, 'entries', {
    get: function () {
      return this.map_0.entries;
    }
  });
  Object.defineProperty(ObservableMutableMap.prototype, 'keys', {
    get: function () {
      return this.map_0.keys;
    }
  });
  Object.defineProperty(ObservableMutableMap.prototype, 'values', {
    get: function () {
      return this.map_0.values;
    }
  });
  ObservableMutableMap.prototype.containsKey_11rb$ = function (key) {
    return this.map_0.containsKey_11rb$(key);
  };
  ObservableMutableMap.prototype.containsValue_11rc$ = function (value) {
    return this.map_0.containsValue_11rc$(value);
  };
  ObservableMutableMap.prototype.isEmpty = function () {
    return this.map_0.isEmpty();
  };
  Object.defineProperty(ObservableMutableMap.prototype, 'size', {
    get: function () {
      return this.map_0.size;
    }
  });
  ObservableMutableMap.prototype.clear = function () {
    var tmp$;
    tmp$ = this.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.removeSignal_0.set_11rb$(element);
    }
    this.map_0.clear();
  };
  ObservableMutableMap.prototype.put_xwzc9p$ = function (key, value) {
    if (this.map_0.containsKey_11rb$(key))
      return null;
    this.map_0.put_xwzc9p$(key, value);
    this.addSignal_0.set_11rb$(new MapEntry(key, value));
    return value;
  };
  ObservableMutableMap.prototype.putAll_a2k3zr$ = function (from) {
    var tmp$;
    tmp$ = from.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.put_xwzc9p$(element.key, element.value);
    }
  };
  ObservableMutableMap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ObservableMutableMap',
    interfaces: [ObservableMap, MutableMap]
  };
  function ObservableMutableSet() {
    ObservableMutableSet$Companion_getInstance();
    this.items_0 = LinkedHashSet_init();
    this.addSignal_0 = new Signal();
    this.removeSignal_0 = new Signal();
  }
  ObservableMutableSet.prototype.addFuture = function () {
    return this.addSignal_0;
  };
  ObservableMutableSet.prototype.removeFuture = function () {
    return this.removeSignal_0;
  };
  ObservableMutableSet.prototype.add_11rb$ = function (element) {
    if (this.items_0.add_11rb$(element)) {
      this.addSignal_0.set_11rb$(element);
      return true;
    }
    return false;
  };
  ObservableMutableSet.prototype.remove_11rb$ = function (element) {
    if (this.items_0.remove_11rb$(element)) {
      this.removeSignal_0.set_11rb$(element);
      return true;
    }
    return false;
  };
  ObservableMutableSet.prototype.addAll_brywnq$ = function (elements) {
    var tmp$;
    var result = false;
    tmp$ = elements.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var next = this.add_11rb$(element);
      result = result || next;
    }
    return result;
  };
  ObservableMutableSet.prototype.clear = function () {
    this.removeAll_brywnq$(this.items_0);
  };
  ObservableMutableSet.prototype.iterator = function () {
    return this.items_0.iterator();
  };
  ObservableMutableSet.prototype.removeAll_brywnq$ = function (elements) {
    var tmp$;
    var result = false;
    tmp$ = elements.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var next = this.remove_11rb$(element);
      result = result || next;
    }
    return result;
  };
  ObservableMutableSet.prototype.retainAll_brywnq$ = function (elements) {
    throw Error_init('No implementation');
  };
  Object.defineProperty(ObservableMutableSet.prototype, 'size', {
    get: function () {
      return this.items_0.size;
    }
  });
  ObservableMutableSet.prototype.contains_11rb$ = function (element) {
    return this.items_0.contains_11rb$(element);
  };
  ObservableMutableSet.prototype.containsAll_brywnq$ = function (elements) {
    return this.items_0.containsAll_brywnq$(elements);
  };
  ObservableMutableSet.prototype.isEmpty = function () {
    return this.items_0.isEmpty();
  };
  function ObservableMutableSet$Companion() {
    ObservableMutableSet$Companion_instance = this;
  }
  ObservableMutableSet$Companion.prototype.serializer_swdriu$ = function (typeSerial0) {
    return ObservableMutableSet$ObservableMutableSet$$serializer_init(typeSerial0);
  };
  ObservableMutableSet$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ObservableMutableSet$Companion_instance = null;
  function ObservableMutableSet$Companion_getInstance() {
    if (ObservableMutableSet$Companion_instance === null) {
      new ObservableMutableSet$Companion();
    }
    return ObservableMutableSet$Companion_instance;
  }
  function ObservableMutableSet$$serializer() {
    this.descriptor_cmvsj2$_0 = new SerialClassDescImpl('casper.collection.ObservableMutableSet', this);
    this.descriptor.addElement_ivxn3r$('items', true);
  }
  Object.defineProperty(ObservableMutableSet$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_cmvsj2$_0;
    }
  });
  ObservableMutableSet$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, [this.typeSerial0]);
    if (!equals(obj.items_0, LinkedHashSet_init()) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 0))
      output.encodeSerializableElement_blecud$(this.descriptor, 0, new LinkedHashSetSerializer(this.typeSerial0), obj.items_0);
    output.endStructure_qatsm0$(this.descriptor);
  };
  ObservableMutableSet$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, [this.typeSerial0]);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 0, new LinkedHashSetSerializer(this.typeSerial0)) : input.updateSerializableElement_ehubvl$(this.descriptor, 0, new LinkedHashSetSerializer(this.typeSerial0), local0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return ObservableMutableSet_init(bitMask0, local0, null);
  };
  ObservableMutableSet$$serializer.prototype.childSerializers = function () {
    return [new LinkedHashSetSerializer(this.typeSerial0)];
  };
  function ObservableMutableSet$ObservableMutableSet$$serializer_init(typeSerial0) {
    var $this = new ObservableMutableSet$$serializer();
    $this.typeSerial0 = typeSerial0;
    return $this;
  }
  ObservableMutableSet$$serializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  function ObservableMutableSet_init(seen1, items, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(ObservableMutableSet.prototype);
    if ((seen1 & 1) === 0) {
      $this.items_0 = LinkedHashSet_init();
    }
     else
      $this.items_0 = items;
    $this.addSignal_0 = new Signal();
    $this.removeSignal_0 = new Signal();
    return $this;
  }
  ObservableMutableSet.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ObservableMutableSet',
    interfaces: [ObservableCollection, MutableSet]
  };
  function observableListOf(items) {
    var result = new ObservableMutableList();
    addAll(result, items);
    return result;
  }
  function observableSetOf(items) {
    var result = new ObservableMutableSet();
    addAll(result, items);
    return result;
  }
  function observableMapOf(pairs) {
    var result = new ObservableMutableMap();
    var tmp$;
    for (tmp$ = 0; tmp$ !== pairs.length; ++tmp$) {
      var element = pairs[tmp$];
      result.put_xwzc9p$(element.first, element.second);
    }
    return result;
  }
  function Either() {
  }
  Either.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Either',
    interfaces: []
  };
  function Left(value) {
    Either.call(this);
    this.value = value;
  }
  Left.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Left',
    interfaces: [Either]
  };
  Left.prototype.component1 = function () {
    return this.value;
  };
  Left.prototype.copy_11rb$ = function (value) {
    return new Left(value === void 0 ? this.value : value);
  };
  Left.prototype.toString = function () {
    return 'Left(value=' + Kotlin.toString(this.value) + ')';
  };
  Left.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  Left.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function Right(value) {
    Either.call(this);
    this.value = value;
  }
  Right.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Right',
    interfaces: [Either]
  };
  Right.prototype.component1 = function () {
    return this.value;
  };
  Right.prototype.copy_11rb$ = function (value) {
    return new Right(value === void 0 ? this.value : value);
  };
  Right.prototype.toString = function () {
    return 'Right(value=' + Kotlin.toString(this.value) + ')';
  };
  Right.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  Right.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  var fold = defineInlineFunction('signalKt.casper.signal.fold_g6qgph$', wrapFunction(function () {
    var Left = _.casper.signal.Left;
    var Right = _.casper.signal.Right;
    return function ($receiver, left, right) {
      if (Kotlin.isType($receiver, Left))
        return left($receiver.value);
      else if (Kotlin.isType($receiver, Right))
        return right($receiver.value);
      else
        return Kotlin.noWhenBranchMatched();
    };
  }));
  var flatMap = defineInlineFunction('signalKt.casper.signal.flatMap_lv0puu$', wrapFunction(function () {
    var Left = _.casper.signal.Left;
    var throwCCE = Kotlin.throwCCE;
    var Right = _.casper.signal.Right;
    return function ($receiver, f) {
      var fold$result;
      if (Kotlin.isType($receiver, Left)) {
        var tmp$;
        fold$result = Kotlin.isType(tmp$ = $receiver, Left) ? tmp$ : throwCCE();
      }
       else if (Kotlin.isType($receiver, Right)) {
        fold$result = f($receiver.value);
      }
       else {
        fold$result = Kotlin.noWhenBranchMatched();
      }
      return fold$result;
    };
  }));
  var map = defineInlineFunction('signalKt.casper.signal.map_wnijeh$', wrapFunction(function () {
    var Right_init = _.casper.signal.Right;
    var Left = _.casper.signal.Left;
    var throwCCE = Kotlin.throwCCE;
    return function ($receiver, f) {
      var fold$result;
      if (Kotlin.isType($receiver, Left)) {
        var tmp$;
        fold$result = Kotlin.isType(tmp$ = $receiver, Left) ? tmp$ : throwCCE();
      }
       else if (Kotlin.isType($receiver, Right_init)) {
        fold$result = new Right_init(f($receiver.value));
      }
       else {
        fold$result = Kotlin.noWhenBranchMatched();
      }
      return fold$result;
    };
  }));
  function EmptySignal() {
    this.slots_0 = LinkedHashMap_init();
    this.onCancel_0 = getCallableRef('cancel', function ($receiver, observer) {
      return $receiver.cancel_vasy06$(observer);
    }.bind(null, this));
  }
  EmptySignal.prototype.set = function () {
    var tmp$;
    tmp$ = LinkedHashMap_init_0(this.slots_0).entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.value();
    }
  };
  EmptySignal.prototype.clear = function () {
    this.slots_0.clear();
  };
  EmptySignal.prototype.cancel_vasy06$ = function (observer) {
    return this.slots_0.remove_11rb$(observer) != null;
  };
  EmptySignal.prototype.then_o14v8n$ = function (listener) {
    var slot = new Observer(this.onCancel_0);
    this.slots_0.put_xwzc9p$(slot, listener);
    return slot;
  };
  EmptySignal.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EmptySignal',
    interfaces: []
  };
  function NullableObservableValue(first) {
    if (first === void 0)
      first = null;
    this.result_0 = first;
    this.signal_0 = new Signal();
  }
  NullableObservableValue.prototype.set_11rb$ = function (value) {
    if (equals(this.result_0, value))
      return;
    this.result_0 = value;
    this.signal_0.set_11rb$(value);
  };
  NullableObservableValue.prototype.clear = function () {
    this.signal_0.clear();
  };
  NullableObservableValue.prototype.cancel_vasy06$ = function (observer) {
    return this.signal_0.cancel_vasy06$(observer);
  };
  NullableObservableValue.prototype.then_qlkmfe$ = function (listener) {
    var value = this.result_0;
    if (value != null) {
      listener(value);
    }
    return this.signal_0.then_qlkmfe$(listener);
  };
  NullableObservableValue.prototype.get = function () {
    return this.result_0;
  };
  NullableObservableValue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NullableObservableValue',
    interfaces: [FutureWritable]
  };
  function ObservableValue(value, ignoreEqual) {
    if (ignoreEqual === void 0)
      ignoreEqual = true;
    this.ignoreEqual = ignoreEqual;
    this.result_0 = value;
    this.signals_0 = new Signal();
  }
  ObservableValue.prototype.set_11rb$ = function (value) {
    if (this.ignoreEqual && equals(this.result_0, value))
      return;
    this.result_0 = value;
    this.signals_0.set_11rb$(value);
  };
  ObservableValue.prototype.clear = function () {
    this.signals_0.clear();
  };
  ObservableValue.prototype.cancel_vasy06$ = function (observer) {
    return this.signals_0.cancel_vasy06$(observer);
  };
  ObservableValue.prototype.then_qlkmfe$ = function (listener) {
    listener(this.result_0);
    return this.signals_0.then_qlkmfe$(listener);
  };
  ObservableValue.prototype.get = function () {
    return this.result_0;
  };
  ObservableValue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ObservableValue',
    interfaces: [FutureReadable, FutureWritable]
  };
  function switch_0($receiver) {
    $receiver.set_11rb$(!$receiver.get());
  }
  function Promise() {
  }
  Promise.prototype.then_fri4qn$ = function (accept, reject) {
    return new Pair(this.acceptFuture().then_qlkmfe$(accept), this.rejectFuture().then_qlkmfe$(reject));
  };
  Promise.prototype.cancel_7im85o$ = function (forAccept, forReject) {
    if (forAccept != null) {
      this.acceptFuture().cancel_vasy06$(forAccept);
    }
    if (forReject != null) {
      this.rejectFuture().cancel_vasy06$(forReject);
    }
  };
  Promise.prototype.thenAccept_qlkmfe$ = function (accept) {
    return this.acceptFuture().then_qlkmfe$(accept);
  };
  Promise.prototype.thenReject_1o0k09$ = function (reject) {
    return this.rejectFuture().then_qlkmfe$(reject);
  };
  Promise.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Promise',
    interfaces: []
  };
  function PromiseSignal() {
    this.onAccept_0 = new Signal();
    this.onReject_0 = new Signal();
  }
  PromiseSignal.prototype.acceptFuture = function () {
    return this.onAccept_0;
  };
  PromiseSignal.prototype.isCompleted = function () {
    return false;
  };
  PromiseSignal.prototype.rejectFuture = function () {
    return this.onReject_0;
  };
  PromiseSignal.prototype.accept_11rb$ = function (value) {
    this.onAccept_0.set_11rb$(value);
  };
  PromiseSignal.prototype.reject_11rc$ = function (value) {
    this.onReject_0.set_11rb$(value);
  };
  PromiseSignal.prototype.clear = function () {
    this.onAccept_0.clear();
    this.onReject_0.clear();
  };
  PromiseSignal.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PromiseSignal',
    interfaces: [PromiseWritable]
  };
  function PromiseUnion(promiseList) {
    this.block_0 = true;
    this.amount_0 = 0;
    this.common_0 = new SinglePromiseSignal();
    this.acceptList_0 = ArrayList_init();
    this.rejectList_0 = ArrayList_init();
    var tmp$;
    for (tmp$ = 0; tmp$ !== promiseList.length; ++tmp$) {
      var element = promiseList[tmp$];
      this.add_1m5ium$(element);
    }
    this.block_0 = false;
    this.check_0();
  }
  PromiseUnion.prototype.add_1m5ium$ = function (promise) {
    this.amount_0 = this.amount_0 + 1 | 0;
    promise.then_fri4qn$(getCallableRef('onAccept', function ($receiver, accept) {
      return $receiver.onAccept_11rb$(accept), Unit;
    }.bind(null, this)), getCallableRef('onReject', function ($receiver, reject) {
      return $receiver.onReject_11rc$(reject), Unit;
    }.bind(null, this)));
  };
  PromiseUnion.prototype.onAccept_11rb$ = function (accept) {
    this.acceptList_0.add_11rb$(accept);
    this.check_0();
  };
  PromiseUnion.prototype.onReject_11rc$ = function (reject) {
    this.rejectList_0.add_11rb$(reject);
    this.check_0();
  };
  PromiseUnion.prototype.check_0 = function () {
    if (!this.block_0 && (this.acceptList_0.size + this.rejectList_0.size | 0) === this.amount_0) {
      this.complete_0();
    }
  };
  PromiseUnion.prototype.complete_0 = function () {
    if (!this.rejectList_0.isEmpty()) {
      this.common_0.reject_11rc$(this.rejectList_0);
    }
     else {
      this.common_0.accept_11rb$(this.acceptList_0);
    }
  };
  PromiseUnion.prototype.acceptFuture = function () {
    return this.common_0.acceptFuture();
  };
  PromiseUnion.prototype.rejectFuture = function () {
    return this.common_0.rejectFuture();
  };
  PromiseUnion.prototype.isCompleted = function () {
    return this.common_0.isCompleted();
  };
  PromiseUnion.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PromiseUnion',
    interfaces: [Promise]
  };
  function Signal() {
    this.slots_0 = LinkedHashMap_init();
    this.onCancel_0 = getCallableRef('cancel', function ($receiver, observer) {
      return $receiver.cancel_vasy06$(observer);
    }.bind(null, this));
  }
  Signal.prototype.set_11rb$ = function (value) {
    var tmp$;
    tmp$ = LinkedHashMap_init_0(this.slots_0).entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.value(value);
    }
  };
  Signal.prototype.clear = function () {
    this.slots_0.clear();
  };
  Signal.prototype.cancel_vasy06$ = function (observer) {
    return this.slots_0.remove_11rb$(observer) != null;
  };
  Signal.prototype.then_qlkmfe$ = function (listener) {
    var slot = new Observer(this.onCancel_0);
    this.slots_0.put_xwzc9p$(slot, listener);
    return slot;
  };
  Signal.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Signal',
    interfaces: [FutureWritable]
  };
  function Future() {
  }
  Future.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Future',
    interfaces: []
  };
  function Supplier() {
  }
  Supplier.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Supplier',
    interfaces: []
  };
  function FutureWritable() {
  }
  FutureWritable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'FutureWritable',
    interfaces: [Future]
  };
  function FutureReadable() {
  }
  FutureReadable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'FutureReadable',
    interfaces: [Future]
  };
  function PromiseWritable() {
  }
  PromiseWritable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'PromiseWritable',
    interfaces: [Promise]
  };
  function proxy$lambda(closure$output, closure$valueConverter) {
    return function (it) {
      closure$output.set_11rb$(closure$valueConverter(it));
      return Unit;
    };
  }
  function proxy($receiver, valueConverter) {
    var output = new Signal();
    $receiver.then_qlkmfe$(proxy$lambda(output, valueConverter));
    return output;
  }
  function SinglePromiseSignal() {
    SinglePromiseSignal$Companion_getInstance();
    this.onAccept_0 = new SingleSignal();
    this.onReject_0 = new SingleSignal();
  }
  SinglePromiseSignal.prototype.acceptFuture = function () {
    return this.onAccept_0;
  };
  SinglePromiseSignal.prototype.rejectFuture = function () {
    return this.onReject_0;
  };
  SinglePromiseSignal.prototype.acceptValue = function () {
    return this.onAccept_0.get();
  };
  SinglePromiseSignal.prototype.rejectValue = function () {
    return this.onReject_0.get();
  };
  SinglePromiseSignal.prototype.isCompleted = function () {
    return this.onAccept_0.isCompleted() || this.onReject_0.isCompleted();
  };
  SinglePromiseSignal.prototype.accept_11rb$ = function (value) {
    if (this.isCompleted())
      return;
    this.onAccept_0.set_11rb$(value);
    this.onReject_0.clear();
  };
  SinglePromiseSignal.prototype.reject_11rc$ = function (value) {
    if (this.isCompleted())
      return;
    this.onReject_0.set_11rb$(value);
    this.onAccept_0.clear();
  };
  SinglePromiseSignal.prototype.close = function () {
    this.onAccept_0.clear();
    this.onReject_0.clear();
  };
  function SinglePromiseSignal$Companion() {
    SinglePromiseSignal$Companion_instance = this;
  }
  SinglePromiseSignal$Companion.prototype.accepted_lk9rat$ = function (value) {
    var promise = new SinglePromiseSignal();
    promise.accept_11rb$(value);
    return promise;
  };
  SinglePromiseSignal$Companion.prototype.rejected_jkq9vw$ = function (value) {
    var promise = new SinglePromiseSignal();
    promise.reject_11rc$(value);
    return promise;
  };
  SinglePromiseSignal$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SinglePromiseSignal$Companion_instance = null;
  function SinglePromiseSignal$Companion_getInstance() {
    if (SinglePromiseSignal$Companion_instance === null) {
      new SinglePromiseSignal$Companion();
    }
    return SinglePromiseSignal$Companion_instance;
  }
  SinglePromiseSignal.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SinglePromiseSignal',
    interfaces: [PromiseWritable]
  };
  function SingleSignal() {
    this.result_0 = null;
    this.signal_0 = new Signal();
  }
  SingleSignal.prototype.set_11rb$ = function (value) {
    if (this.result_0 != null)
      return;
    this.result_0 = value;
    this.signal_0.set_11rb$(value);
    this.signal_0.clear();
  };
  SingleSignal.prototype.clear = function () {
    this.signal_0.clear();
  };
  SingleSignal.prototype.isCompleted = function () {
    return this.result_0 != null;
  };
  SingleSignal.prototype.cancel_vasy06$ = function (observer) {
    return this.signal_0.cancel_vasy06$(observer);
  };
  SingleSignal.prototype.then_qlkmfe$ = function (listener) {
    var value = this.result_0;
    if (value != null) {
      listener(value);
      return null;
    }
     else {
      return this.signal_0.then_qlkmfe$(listener);
    }
  };
  SingleSignal.prototype.get = function () {
    return this.result_0;
  };
  SingleSignal.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SingleSignal',
    interfaces: [Supplier, FutureWritable]
  };
  function Observer(onCancel) {
    this.onCancel = onCancel;
  }
  Observer.prototype.dispose = function () {
    this.onCancel(this);
  };
  Observer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Observer',
    interfaces: [Disposable]
  };
  function then($receiver, holder, listener) {
    var tmp$;
    if ((tmp$ = $receiver.then_qlkmfe$(listener)) != null) {
      holder.add_emx09j$(tmp$);
      return true;
    }
    return false;
  }
  function then_0($receiver, holder, forAdd, forRemove) {
    var tmp$, tmp$_0;
    if ((tmp$ = $receiver.thenAdd_qlkmfe$(forAdd)) != null) {
      holder.add_emx09j$(tmp$);
    }
    if ((tmp$_0 = $receiver.thenRemove_qlkmfe$(forRemove)) != null) {
      holder.add_emx09j$(tmp$_0);
    }
  }
  function then_1($receiver, holder, onAccept, onReject) {
    var tmp$, tmp$_0;
    if ((tmp$ = $receiver.thenAccept_qlkmfe$(onAccept)) != null) {
      holder.add_emx09j$(tmp$);
    }
    if ((tmp$_0 = $receiver.thenReject_1o0k09$(onReject)) != null) {
      holder.add_emx09j$(tmp$_0);
    }
  }
  function thenAccept($receiver, holder, onAccept) {
    var tmp$;
    if ((tmp$ = $receiver.thenAccept_qlkmfe$(onAccept)) != null) {
      holder.add_emx09j$(tmp$);
    }
  }
  function thenReject($receiver, holder, onReject) {
    var tmp$;
    if ((tmp$ = $receiver.thenReject_1o0k09$(onReject)) != null) {
      holder.add_emx09j$(tmp$);
    }
  }
  var package$casper = _.casper || (_.casper = {});
  var package$collection = package$casper.collection || (package$casper.collection = {});
  package$collection.ObservableCollection = ObservableCollection;
  package$collection.ObservableMap = ObservableMap;
  Object.defineProperty(ObservableMutableList, 'Companion', {
    get: ObservableMutableList$Companion_getInstance
  });
  ObservableMutableList.$serializer_init_swdriu$ = ObservableMutableList$ObservableMutableList$$serializer_init;
  ObservableMutableList.$serializer = ObservableMutableList$$serializer;
  package$collection.ObservableMutableList_init_w63dmx$ = ObservableMutableList_init;
  package$collection.ObservableMutableList = ObservableMutableList;
  package$collection.ObservableMutableMap = ObservableMutableMap;
  Object.defineProperty(ObservableMutableSet, 'Companion', {
    get: ObservableMutableSet$Companion_getInstance
  });
  ObservableMutableSet.$serializer_init_swdriu$ = ObservableMutableSet$ObservableMutableSet$$serializer_init;
  ObservableMutableSet.$serializer = ObservableMutableSet$$serializer;
  package$collection.ObservableMutableSet_init_k1svdz$ = ObservableMutableSet_init;
  package$collection.ObservableMutableSet = ObservableMutableSet;
  package$collection.observableListOf_i5x0yv$ = observableListOf;
  package$collection.observableSetOf_i5x0yv$ = observableSetOf;
  package$collection.observableMapOf_qfcya0$ = observableMapOf;
  var package$signal = package$casper.signal || (package$casper.signal = {});
  package$signal.Either = Either;
  package$signal.Left = Left;
  package$signal.Right = Right;
  $$importsForInline$$.signalKt = _;
  package$signal.fold_g6qgph$ = fold;
  package$signal.flatMap_lv0puu$ = flatMap;
  package$signal.map_wnijeh$ = map;
  package$signal.EmptySignal = EmptySignal;
  package$signal.NullableObservableValue = NullableObservableValue;
  package$signal.ObservableValue = ObservableValue;
  package$signal.switch_m9jv22$ = switch_0;
  package$signal.Promise = Promise;
  package$signal.PromiseSignal = PromiseSignal;
  package$signal.PromiseUnion = PromiseUnion;
  package$signal.Signal = Signal;
  package$signal.Future = Future;
  package$signal.Supplier = Supplier;
  package$signal.FutureWritable = FutureWritable;
  package$signal.FutureReadable = FutureReadable;
  package$signal.PromiseWritable = PromiseWritable;
  package$signal.proxy_vkleoq$ = proxy;
  Object.defineProperty(SinglePromiseSignal, 'Companion', {
    get: SinglePromiseSignal$Companion_getInstance
  });
  package$signal.SinglePromiseSignal = SinglePromiseSignal;
  package$signal.SingleSignal = SingleSignal;
  var package$slot = package$signal.slot || (package$signal.slot = {});
  package$slot.Observer = Observer;
  package$slot.then_jw5g2i$ = then;
  package$slot.then_gb8wsp$ = then_0;
  package$slot.then_th5uma$ = then_1;
  package$slot.thenAccept_jhdqno$ = thenAccept;
  package$slot.thenReject_uymowb$ = thenReject;
  ObservableMutableList$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  ObservableMutableList.prototype.then_uc1utc$ = ObservableCollection.prototype.then_uc1utc$;
  ObservableMutableList.prototype.cancel_7im85o$ = ObservableCollection.prototype.cancel_7im85o$;
  ObservableMutableList.prototype.thenAdd_qlkmfe$ = ObservableCollection.prototype.thenAdd_qlkmfe$;
  ObservableMutableList.prototype.thenRemove_qlkmfe$ = ObservableCollection.prototype.thenRemove_qlkmfe$;
  ObservableMutableMap.prototype.then_4eanvs$ = ObservableMap.prototype.then_4eanvs$;
  ObservableMutableMap.prototype.cancel_7im85o$ = ObservableMap.prototype.cancel_7im85o$;
  ObservableMutableMap.prototype.thenAdd_by9f6q$ = ObservableMap.prototype.thenAdd_by9f6q$;
  ObservableMutableMap.prototype.thenRemove_by9f6q$ = ObservableMap.prototype.thenRemove_by9f6q$;
  ObservableMutableSet$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  ObservableMutableSet.prototype.then_uc1utc$ = ObservableCollection.prototype.then_uc1utc$;
  ObservableMutableSet.prototype.cancel_7im85o$ = ObservableCollection.prototype.cancel_7im85o$;
  ObservableMutableSet.prototype.thenAdd_qlkmfe$ = ObservableCollection.prototype.thenAdd_qlkmfe$;
  ObservableMutableSet.prototype.thenRemove_qlkmfe$ = ObservableCollection.prototype.thenRemove_qlkmfe$;
  PromiseWritable.prototype.then_fri4qn$ = Promise.prototype.then_fri4qn$;
  PromiseWritable.prototype.cancel_7im85o$ = Promise.prototype.cancel_7im85o$;
  PromiseWritable.prototype.thenAccept_qlkmfe$ = Promise.prototype.thenAccept_qlkmfe$;
  PromiseWritable.prototype.thenReject_1o0k09$ = Promise.prototype.thenReject_1o0k09$;
  PromiseSignal.prototype.then_fri4qn$ = PromiseWritable.prototype.then_fri4qn$;
  PromiseSignal.prototype.cancel_7im85o$ = PromiseWritable.prototype.cancel_7im85o$;
  PromiseSignal.prototype.thenAccept_qlkmfe$ = PromiseWritable.prototype.thenAccept_qlkmfe$;
  PromiseSignal.prototype.thenReject_1o0k09$ = PromiseWritable.prototype.thenReject_1o0k09$;
  PromiseUnion.prototype.then_fri4qn$ = Promise.prototype.then_fri4qn$;
  PromiseUnion.prototype.cancel_7im85o$ = Promise.prototype.cancel_7im85o$;
  PromiseUnion.prototype.thenAccept_qlkmfe$ = Promise.prototype.thenAccept_qlkmfe$;
  PromiseUnion.prototype.thenReject_1o0k09$ = Promise.prototype.thenReject_1o0k09$;
  SinglePromiseSignal.prototype.then_fri4qn$ = PromiseWritable.prototype.then_fri4qn$;
  SinglePromiseSignal.prototype.cancel_7im85o$ = PromiseWritable.prototype.cancel_7im85o$;
  SinglePromiseSignal.prototype.thenAccept_qlkmfe$ = PromiseWritable.prototype.thenAccept_qlkmfe$;
  SinglePromiseSignal.prototype.thenReject_1o0k09$ = PromiseWritable.prototype.thenReject_1o0k09$;
  Kotlin.defineModule('signalKt', _);
  return _;
}));

//# sourceMappingURL=signalKt.js.map
