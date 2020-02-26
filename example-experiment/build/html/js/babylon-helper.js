define(['exports', 'kotlin', 'signalKt', 'babylonjs', 'typesKt', 'babylonjs-gui'], function (_, Kotlin, $module$signalKt, $module$babylonjs, $module$typesKt, $module$babylonjs_gui) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var observableMapOf = $module$signalKt.casper.collection.observableMapOf_qfcya0$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Unit = Kotlin.kotlin.Unit;
  var SinglePromiseSignal = $module$signalKt.casper.signal.SinglePromiseSignal;
  var SceneLoader$Companion = $module$babylonjs.SceneLoader;
  var AssetsManager = $module$babylonjs.AssetsManager;
  var TextureAssetTask = $module$babylonjs.TextureAssetTask;
  var throwCCE = Kotlin.throwCCE;
  var Mesh = $module$babylonjs.Mesh;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var toString = Kotlin.toString;
  var PBRMaterial = $module$babylonjs.PBRMaterial;
  var VertexBuffer$Companion = $module$babylonjs.VertexBuffer;
  var mutableListOf = Kotlin.kotlin.collections.mutableListOf_i5x0yv$;
  var AssetContainer = $module$babylonjs.AssetContainer;
  var plus = Kotlin.kotlin.collections.plus_b32j0n$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var indexOf = Kotlin.kotlin.collections.indexOf_mjy6jw$;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_8ujjk8$;
  var Error_init = Kotlin.kotlin.Error_init_pdl1vj$;
  var TransformNode = $module$babylonjs.TransformNode;
  var contains = Kotlin.kotlin.collections.contains_mjy6jw$;
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  var contains_0 = Kotlin.kotlin.collections.contains_2ws7j4$;
  var Texture = $module$babylonjs.Texture;
  var equals = Kotlin.equals;
  var Vector2 = $module$babylonjs.Vector2;
  var Pair = Kotlin.kotlin.Pair;
  var Map = Kotlin.kotlin.collections.Map;
  var numberToInt = Kotlin.numberToInt;
  var toPrecision = $module$typesKt.casper.format.toPrecision_j6vyb1$;
  var EngineInstrumentation = $module$babylonjs.EngineInstrumentation;
  var TextBlock = $module$babylonjs_gui.TextBlock;
  var AdvancedDynamicTexture$Companion = $module$babylonjs_gui.AdvancedDynamicTexture;
  var AbstractMesh = $module$babylonjs.AbstractMesh;
  var InstancedMesh = $module$babylonjs.InstancedMesh;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var Vector2i = $module$typesKt.casper.geometry.Vector2i;
  var Throwable = Error;
  var AABBox2i = $module$typesKt.casper.geometry.aabb.AABBox2i;
  var removePrefix = Kotlin.kotlin.text.removePrefix_gsj5wt$;
  var removeSuffix = Kotlin.kotlin.text.removeSuffix_gsj5wt$;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_4c7yge$;
  var indexOf_0 = Kotlin.kotlin.text.indexOf_l5u8uk$;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var XMLHttpRequest_init = XMLHttpRequest;
  var toShort = Kotlin.toShort;
  var String_0 = String;
  function AssetGroupLoadManager(createAssetLoader) {
    this.createAssetLoader = createAssetLoader;
    this.map = observableMapOf([]);
  }
  AssetGroupLoadManager.prototype.isLoading = function () {
    var tmp$;
    tmp$ = this.map.values.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (!element.isCompleted())
        return true;
    }
    return false;
  };
  AssetGroupLoadManager.prototype.get_ivxn3r$ = function (fileUrl, reload) {
    if (reload === void 0)
      reload = false;
    var loader = this.map.get_11rb$(fileUrl);
    if (loader == null || reload) {
      loader = this.createAssetLoader(fileUrl);
      this.map.put_xwzc9p$(fileUrl, loader);
    }
    return loader;
  };
  AssetGroupLoadManager.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AssetGroupLoadManager',
    interfaces: []
  };
  function AssetGroupManager(loadManager) {
    this.loadManager = loadManager;
    this.values = observableMapOf([]);
    this.loadManager.map.thenAdd_qlkmfe$(AssetGroupManager_init$lambda(this));
  }
  AssetGroupManager.prototype.loader_61zpoe$ = function (fileName) {
    return this.loadManager.get_ivxn3r$(fileName);
  };
  AssetGroupManager.prototype.get_61zpoe$ = function (fileName) {
    return this.values.get_11rb$(fileName);
  };
  AssetGroupManager.prototype.set_yuqcw7$ = function (fileName, value) {
    this.values.put_xwzc9p$(fileName, value);
  };
  AssetGroupManager.prototype.remove_61zpoe$ = function (fileName) {
    this.values.remove_11rb$(fileName);
  };
  function AssetGroupManager_init$lambda$lambda(this$AssetGroupManager, closure$name) {
    return function (data) {
      this$AssetGroupManager.values.put_xwzc9p$(closure$name, data);
      return Unit;
    };
  }
  function AssetGroupManager_init$lambda(this$AssetGroupManager) {
    return function (loaderEntry) {
      var name = loaderEntry.key;
      var loader = loaderEntry.value;
      loader.thenAccept_qlkmfe$(AssetGroupManager_init$lambda$lambda(this$AssetGroupManager, name));
      return Unit;
    };
  }
  AssetGroupManager.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AssetGroupManager',
    interfaces: []
  };
  function AssetManager(scene) {
    this.scene = scene;
    this.models = new AssetGroupManager(new AssetGroupLoadManager(AssetManager$models$lambda(this)));
    this.textures = new AssetGroupManager(new AssetGroupLoadManager(AssetManager$textures$lambda(this)));
    this.atlases = new AssetGroupManager(new AssetGroupLoadManager(AssetManager$atlases$lambda(this)));
  }
  AssetManager.prototype.loadModel_61zpoe$ = function (fileName) {
    return this.models.loader_61zpoe$(fileName);
  };
  AssetManager.prototype.loadTexture_61zpoe$ = function (fileName) {
    return this.textures.loader_61zpoe$(fileName);
  };
  AssetManager.prototype.loadAtlas_61zpoe$ = function (fileName) {
    return this.atlases.loader_61zpoe$(fileName);
  };
  AssetManager.prototype.getModel_61zpoe$ = function (name) {
    return this.models.get_61zpoe$(name);
  };
  AssetManager.prototype.getTexture_61zpoe$ = function (name) {
    return this.textures.get_61zpoe$(name);
  };
  AssetManager.prototype.getAtlas_61zpoe$ = function (name) {
    return this.atlases.get_61zpoe$(name);
  };
  function AssetManager$models$lambda(this$AssetManager) {
    return function (fileName) {
      return createModelLoader(this$AssetManager.scene, fileName);
    };
  }
  function AssetManager$textures$lambda(this$AssetManager) {
    return function (fileName) {
      return createTextureLoader(this$AssetManager.scene, fileName);
    };
  }
  function AssetManager$atlases$lambda(this$AssetManager) {
    return function (fileName) {
      return createAtlasLoader(this$AssetManager.scene, fileName);
    };
  }
  AssetManager.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AssetManager',
    interfaces: []
  };
  function createModelLoader$lambda(closure$scene, closure$fileUrl, closure$loader) {
    return function (it) {
      var modelData = ModelFactory$Companion_getInstance().createModelData_greupd$(closure$scene, closure$fileUrl, it);
      closure$loader.accept_11rb$(modelData);
      return Unit;
    };
  }
  function createModelLoader$lambda_0(it) {
    return Unit;
  }
  function createModelLoader$lambda_1(closure$loader) {
    return function (f, message, f_0) {
      closure$loader.reject_11rc$(message);
      return Unit;
    };
  }
  function createModelLoader(scene, fileUrl) {
    var loader = new SinglePromiseSignal();
    SceneLoader$Companion.LoadAssetContainer(fileUrl, '', scene, createModelLoader$lambda(scene, fileUrl, loader), createModelLoader$lambda_0, createModelLoader$lambda_1(loader));
    return loader;
  }
  function createTextureLoader$lambda(closure$loader) {
    return function (it) {
      var tmp$;
      Kotlin.isType(tmp$ = it, TextureAssetTask) ? tmp$ : throwCCE();
      closure$loader.accept_11rb$(it.texture);
      return Unit;
    };
  }
  function createTextureLoader$lambda_0(closure$loader) {
    return function (it) {
      var tmp$;
      Kotlin.isType(tmp$ = it, TextureAssetTask) ? tmp$ : throwCCE();
      closure$loader.reject_11rc$('');
      return Unit;
    };
  }
  function createTextureLoader(scene, file) {
    var loader = new SinglePromiseSignal();
    var manager = new AssetsManager(scene);
    manager.addTextureTask(file, file);
    manager.onTaskSuccess = createTextureLoader$lambda(loader);
    manager.onTaskError = createTextureLoader$lambda_0(loader);
    manager.load();
    return loader;
  }
  function AtlasHelper() {
    AtlasHelper$Companion_getInstance();
  }
  function AtlasHelper$Companion() {
    AtlasHelper$Companion_instance = this;
  }
  AtlasHelper$Companion.prototype.replace_rrtv59$ = function (data, sourceTextureName, atlas, imageName) {
    var tmp$ = UVReplacer$Companion_getInstance().create_av1frg$(atlas, imageName);
    var page = tmp$.component1()
    , converter = tmp$.component2();
    var mapOfChanges = TextureReplacer$Companion_getInstance().replace_gil0ll$(data, sourceTextureName, page.info.name);
    var geometries = LinkedHashSet_init();
    var $receiver = data.assetContainer.meshes;
    var tmp$_0;
    for (tmp$_0 = 0; tmp$_0 !== $receiver.length; ++tmp$_0) {
      var element = $receiver[tmp$_0];
      var tmp$_1;
      if ((tmp$_1 = element.material) != null) {
        var tmp$_2;
        if ((tmp$_2 = mapOfChanges.get_11rb$(tmp$_1)) != null) {
          var tmp$_3;
          tmp$_3 = tmp$_2.iterator();
          while (tmp$_3.hasNext()) {
            var element_0 = tmp$_3.next();
            var tmp$_4;
            if (Kotlin.isType(element, Mesh)) {
              if ((tmp$_4 = element.geometry) != null) {
                if (geometries.add_11rb$(tmp$_4)) {
                  UVReplacer$Companion_getInstance().convertUV_581ort$(tmp$_4, element_0.coordinatesIndex, converter);
                }
              }
            }
          }
        }
      }
    }
    return true;
  };
  AtlasHelper$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AtlasHelper$Companion_instance = null;
  function AtlasHelper$Companion_getInstance() {
    if (AtlasHelper$Companion_instance === null) {
      new AtlasHelper$Companion();
    }
    return AtlasHelper$Companion_instance;
  }
  AtlasHelper.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AtlasHelper',
    interfaces: []
  };
  function MaterialReplacer() {
    MaterialReplacer$Companion_getInstance();
  }
  function MaterialReplacer$Companion() {
    MaterialReplacer$Companion_instance = this;
  }
  MaterialReplacer$Companion.prototype.replace_klijsx$ = function (data, replacer) {
    var map = LinkedHashMap_init();
    var $receiver = data.assetContainer.materials;
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      var next = replacer(element);
      if (next != null) {
        map.put_xwzc9p$(element, next);
      }
    }
    data.assetContainer.materials = copyToArray(map.values);
    var $receiver_0 = data.assetContainer.meshes;
    var tmp$_0;
    for (tmp$_0 = 0; tmp$_0 !== $receiver_0.length; ++tmp$_0) {
      var element_0 = $receiver_0[tmp$_0];
      if (Kotlin.isType(element_0, Mesh)) {
        var last = element_0.material;
        if (last != null) {
          var next_0 = map.get_11rb$(last);
          if (next_0 != null) {
            element_0.material = next_0;
          }
        }
      }
    }
    return map.values;
  };
  MaterialReplacer$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MaterialReplacer$Companion_instance = null;
  function MaterialReplacer$Companion_getInstance() {
    if (MaterialReplacer$Companion_instance === null) {
      new MaterialReplacer$Companion();
    }
    return MaterialReplacer$Companion_instance;
  }
  MaterialReplacer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MaterialReplacer',
    interfaces: []
  };
  function MaterialKey(key) {
    MaterialKey$Companion_getInstance();
    this.key = key;
  }
  function MaterialKey$Companion() {
    MaterialKey$Companion_instance = this;
  }
  function MaterialKey$Companion$create$lambda(closure$key) {
    return function (it) {
      closure$key.v += 'color: ' + toString(it) + ';';
      return Unit;
    };
  }
  function MaterialKey$Companion$create$lambda_0(closure$key) {
    return function (it) {
      closure$key.v += 'texture: ' + toString(it) + ';';
      return Unit;
    };
  }
  MaterialKey$Companion.prototype.create_p9m0mg$ = function (material, ignoreName) {
    if (ignoreName === void 0)
      ignoreName = true;
    if (material == null)
      return new MaterialKey('');
    var key = {v: ''};
    forEachColor(material, MaterialKey$Companion$create$lambda(key));
    forEachTexture(material, MaterialKey$Companion$create$lambda_0(key));
    if (Kotlin.isType(material, PBRMaterial)) {
      key.v += 'rough:' + toString(material.roughness) + ';';
      key.v += 'metallic:' + toString(material.metallic) + ';';
      key.v += 'specularIntensity:' + toString(material.specularIntensity) + ';';
    }
    return new MaterialKey(key.v);
  };
  MaterialKey$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MaterialKey$Companion_instance = null;
  function MaterialKey$Companion_getInstance() {
    if (MaterialKey$Companion_instance === null) {
      new MaterialKey$Companion();
    }
    return MaterialKey$Companion_instance;
  }
  MaterialKey.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MaterialKey',
    interfaces: []
  };
  MaterialKey.prototype.component1 = function () {
    return this.key;
  };
  MaterialKey.prototype.copy_61zpoe$ = function (key) {
    return new MaterialKey(key === void 0 ? this.key : key);
  };
  MaterialKey.prototype.toString = function () {
    return 'MaterialKey(key=' + Kotlin.toString(this.key) + ')';
  };
  MaterialKey.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.key) | 0;
    return result;
  };
  MaterialKey.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.key, other.key))));
  };
  function MeshKey(materialKey, animationKey, ColorKind, TangentKind, PositionKind, NormalKind, UVKind, UV2Kind, UV3Kind, UV4Kind, UV5Kind, UV6Kind) {
    MeshKey$Companion_getInstance();
    this.materialKey = materialKey;
    this.animationKey = animationKey;
    this.ColorKind = ColorKind;
    this.TangentKind = TangentKind;
    this.PositionKind = PositionKind;
    this.NormalKind = NormalKind;
    this.UVKind = UVKind;
    this.UV2Kind = UV2Kind;
    this.UV3Kind = UV3Kind;
    this.UV4Kind = UV4Kind;
    this.UV5Kind = UV5Kind;
    this.UV6Kind = UV6Kind;
  }
  function MeshKey$Companion() {
    MeshKey$Companion_instance = this;
    this.uniqueId_0 = 0;
  }
  MeshKey$Companion.prototype.create_7nk35k$ = function (mesh) {
    var animationKey = !(mesh.animations.length === 0) ? (this.uniqueId_0 = this.uniqueId_0 + 1 | 0, this.uniqueId_0).toString() : '';
    return new MeshKey(MaterialKey$Companion_getInstance().create_p9m0mg$(mesh.material), animationKey, mesh.isVerticesDataPresent(VertexBuffer$Companion.ColorKind), mesh.isVerticesDataPresent(VertexBuffer$Companion.TangentKind), mesh.isVerticesDataPresent(VertexBuffer$Companion.PositionKind), mesh.isVerticesDataPresent(VertexBuffer$Companion.NormalKind), mesh.isVerticesDataPresent(VertexBuffer$Companion.UVKind), mesh.isVerticesDataPresent(VertexBuffer$Companion.UV2Kind), mesh.isVerticesDataPresent(VertexBuffer$Companion.UV3Kind), mesh.isVerticesDataPresent(VertexBuffer$Companion.UV4Kind), mesh.isVerticesDataPresent(VertexBuffer$Companion.UV5Kind), mesh.isVerticesDataPresent(VertexBuffer$Companion.UV6Kind));
  };
  MeshKey$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MeshKey$Companion_instance = null;
  function MeshKey$Companion_getInstance() {
    if (MeshKey$Companion_instance === null) {
      new MeshKey$Companion();
    }
    return MeshKey$Companion_instance;
  }
  MeshKey.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MeshKey',
    interfaces: []
  };
  MeshKey.prototype.component1 = function () {
    return this.materialKey;
  };
  MeshKey.prototype.component2 = function () {
    return this.animationKey;
  };
  MeshKey.prototype.component3 = function () {
    return this.ColorKind;
  };
  MeshKey.prototype.component4 = function () {
    return this.TangentKind;
  };
  MeshKey.prototype.component5 = function () {
    return this.PositionKind;
  };
  MeshKey.prototype.component6 = function () {
    return this.NormalKind;
  };
  MeshKey.prototype.component7 = function () {
    return this.UVKind;
  };
  MeshKey.prototype.component8 = function () {
    return this.UV2Kind;
  };
  MeshKey.prototype.component9 = function () {
    return this.UV3Kind;
  };
  MeshKey.prototype.component10 = function () {
    return this.UV4Kind;
  };
  MeshKey.prototype.component11 = function () {
    return this.UV5Kind;
  };
  MeshKey.prototype.component12 = function () {
    return this.UV6Kind;
  };
  MeshKey.prototype.copy_mpndc1$ = function (materialKey, animationKey, ColorKind, TangentKind, PositionKind, NormalKind, UVKind, UV2Kind, UV3Kind, UV4Kind, UV5Kind, UV6Kind) {
    return new MeshKey(materialKey === void 0 ? this.materialKey : materialKey, animationKey === void 0 ? this.animationKey : animationKey, ColorKind === void 0 ? this.ColorKind : ColorKind, TangentKind === void 0 ? this.TangentKind : TangentKind, PositionKind === void 0 ? this.PositionKind : PositionKind, NormalKind === void 0 ? this.NormalKind : NormalKind, UVKind === void 0 ? this.UVKind : UVKind, UV2Kind === void 0 ? this.UV2Kind : UV2Kind, UV3Kind === void 0 ? this.UV3Kind : UV3Kind, UV4Kind === void 0 ? this.UV4Kind : UV4Kind, UV5Kind === void 0 ? this.UV5Kind : UV5Kind, UV6Kind === void 0 ? this.UV6Kind : UV6Kind);
  };
  MeshKey.prototype.toString = function () {
    return 'MeshKey(materialKey=' + Kotlin.toString(this.materialKey) + (', animationKey=' + Kotlin.toString(this.animationKey)) + (', ColorKind=' + Kotlin.toString(this.ColorKind)) + (', TangentKind=' + Kotlin.toString(this.TangentKind)) + (', PositionKind=' + Kotlin.toString(this.PositionKind)) + (', NormalKind=' + Kotlin.toString(this.NormalKind)) + (', UVKind=' + Kotlin.toString(this.UVKind)) + (', UV2Kind=' + Kotlin.toString(this.UV2Kind)) + (', UV3Kind=' + Kotlin.toString(this.UV3Kind)) + (', UV4Kind=' + Kotlin.toString(this.UV4Kind)) + (', UV5Kind=' + Kotlin.toString(this.UV5Kind)) + (', UV6Kind=' + Kotlin.toString(this.UV6Kind)) + ')';
  };
  MeshKey.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.materialKey) | 0;
    result = result * 31 + Kotlin.hashCode(this.animationKey) | 0;
    result = result * 31 + Kotlin.hashCode(this.ColorKind) | 0;
    result = result * 31 + Kotlin.hashCode(this.TangentKind) | 0;
    result = result * 31 + Kotlin.hashCode(this.PositionKind) | 0;
    result = result * 31 + Kotlin.hashCode(this.NormalKind) | 0;
    result = result * 31 + Kotlin.hashCode(this.UVKind) | 0;
    result = result * 31 + Kotlin.hashCode(this.UV2Kind) | 0;
    result = result * 31 + Kotlin.hashCode(this.UV3Kind) | 0;
    result = result * 31 + Kotlin.hashCode(this.UV4Kind) | 0;
    result = result * 31 + Kotlin.hashCode(this.UV5Kind) | 0;
    result = result * 31 + Kotlin.hashCode(this.UV6Kind) | 0;
    return result;
  };
  MeshKey.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.materialKey, other.materialKey) && Kotlin.equals(this.animationKey, other.animationKey) && Kotlin.equals(this.ColorKind, other.ColorKind) && Kotlin.equals(this.TangentKind, other.TangentKind) && Kotlin.equals(this.PositionKind, other.PositionKind) && Kotlin.equals(this.NormalKind, other.NormalKind) && Kotlin.equals(this.UVKind, other.UVKind) && Kotlin.equals(this.UV2Kind, other.UV2Kind) && Kotlin.equals(this.UV3Kind, other.UV3Kind) && Kotlin.equals(this.UV4Kind, other.UV4Kind) && Kotlin.equals(this.UV5Kind, other.UV5Kind) && Kotlin.equals(this.UV6Kind, other.UV6Kind)))));
  };
  function MeshMerger() {
    MeshMerger$Companion_getInstance();
  }
  function MeshMerger$Companion() {
    MeshMerger$Companion_instance = this;
  }
  MeshMerger$Companion.prototype.createMeshMap_0 = function (data) {
    var scene = data.scene;
    var meshMap = LinkedHashMap_init();
    var tmp$;
    tmp$ = data.instances.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var mesh = element.sourceMesh.clone();
      scene.removeMesh(mesh);
      copyMeshState(element, mesh);
      var key = MeshKey$Companion_getInstance().create_7nk35k$(mesh);
      var meshList = meshMap.get_11rb$(key);
      if (meshList == null) {
        var value = mutableListOf([mesh]);
        meshMap.put_xwzc9p$(key, value);
      }
       else {
        meshList.add_11rb$(mesh);
      }
    }
    return meshMap;
  };
  MeshMerger$Companion.prototype.canMerge_0 = function (meshList) {
    var tmp$;
    tmp$ = meshList.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (!(element.animations.length === 0))
        return false;
    }
    return true;
  };
  function MeshMerger$Companion$merge$lambda$lambda$lambda(closure$container) {
    return function (it) {
      closure$container.textures = closure$container.textures.concat([it]);
      return Unit;
    };
  }
  MeshMerger$Companion.prototype.merge_uw5ica$ = function (data, name) {
    var scene = data.scene;
    var meshMap = this.createMeshMap_0(data);
    var meshes = ArrayList_init();
    var tmp$;
    tmp$ = meshMap.values.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var mergeResult = null;
      if (this.canMerge_0(element)) {
        mergeResult = Mesh.MergeMeshes(copyToArray(element));
      }
      if (mergeResult == null) {
        meshes.addAll_brywnq$(element);
      }
       else {
        scene.removeMesh(mergeResult);
        meshes.add_11rb$(mergeResult);
      }
    }
    if (meshes.size === 0)
      return null;
    var container = new AssetContainer(scene);
    container.meshes = plus(container.meshes, meshes);
    var tmp$_0;
    tmp$_0 = meshes.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      var tmp$_1, tmp$_2;
      if ((tmp$_1 = element_0.geometry) != null) {
        container.geometries = container.geometries.concat([tmp$_1]);
      }
      if ((tmp$_2 = element_0.material) != null) {
        container.materials = container.materials.concat([tmp$_2]);
        forEachTexture(tmp$_2, MeshMerger$Companion$merge$lambda$lambda$lambda(container));
      }
    }
    return ModelFactory$Companion_getInstance().createModelData_greupd$(scene, name, clone(container));
  };
  MeshMerger$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MeshMerger$Companion_instance = null;
  function MeshMerger$Companion_getInstance() {
    if (MeshMerger$Companion_instance === null) {
      new MeshMerger$Companion();
    }
    return MeshMerger$Companion_instance;
  }
  MeshMerger.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MeshMerger',
    interfaces: []
  };
  function Model(data, instances) {
    this.data = data;
    this.instances = instances;
  }
  Model.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Model',
    interfaces: []
  };
  function ModelData(name, scene, assetContainer, instances) {
    this.name = name;
    this.scene = scene;
    this.assetContainer = assetContainer;
    this.instances = instances;
  }
  ModelData.prototype.clone_61zpoe$ = function (name) {
    var lastContainer = this.assetContainer;
    var nextContainer = clone(this.assetContainer);
    var instances = ArrayList_init();
    var tmp$;
    tmp$ = this.instances.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0, tmp$_1;
      tmp$_0 = getOrNull(nextContainer.meshes, indexOf(lastContainer.meshes, element.sourceMesh));
      if (tmp$_0 == null) {
        throw Error_init('Not found source mesh');
      }
      var sourceMesh = tmp$_0;
      if ((Kotlin.isType(tmp$_1 = sourceMesh, Mesh) ? tmp$_1 : null) == null)
        throw Error_init('Invalid mesh format');
      var nextMesh = sourceMesh.createInstance(sourceMesh.name);
      this.scene.removeMesh(nextMesh);
      instances.add_11rb$(nextMesh);
      copyMeshState(element, nextMesh);
    }
    return new ModelData(name, this.scene, nextContainer, instances);
  };
  ModelData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ModelData',
    interfaces: []
  };
  function ModelCreateOptions(ignoreCameras, ignoresLights, isPickable, cullingStrategy) {
    if (ignoreCameras === void 0)
      ignoreCameras = true;
    if (ignoresLights === void 0)
      ignoresLights = true;
    if (isPickable === void 0)
      isPickable = null;
    if (cullingStrategy === void 0)
      cullingStrategy = null;
    this.ignoreCameras = ignoreCameras;
    this.ignoresLights = ignoresLights;
    this.isPickable = isPickable;
    this.cullingStrategy = cullingStrategy;
  }
  ModelCreateOptions.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ModelCreateOptions',
    interfaces: []
  };
  function ModelFactory() {
    ModelFactory$Companion_getInstance();
  }
  function ModelFactory$Companion() {
    ModelFactory$Companion_instance = this;
  }
  ModelFactory$Companion.prototype.createAndPlace_urgq93$ = function (data, root, options) {
    if (root === void 0)
      root = null;
    if (options === void 0)
      options = null;
    var main = this.create_53ia2n$(data, options);
    addMeshToScene(main);
    if (root != null) {
      main.parent = root;
    }
    return main;
  };
  ModelFactory$Companion.prototype.create_53ia2n$ = function (data, options) {
    if (options === void 0)
      options = null;
    var options_0 = options != null ? options : new ModelCreateOptions();
    return this.wrapTransformNode_0(this.createModel_0(data, options_0), options_0);
  };
  ModelFactory$Companion.prototype.createModel_0 = function (data, options) {
    var instances = ArrayList_init();
    var tmp$;
    tmp$ = data.instances.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var instance = this.createInstance_0(element);
      if (options.isPickable != null) {
        instance.isPickable = options.isPickable;
      }
      if (options.cullingStrategy != null) {
        instance.cullingStrategy = options.cullingStrategy;
      }
      instances.add_11rb$(instance);
    }
    return new Model(data, instances);
  };
  ModelFactory$Companion.prototype.createInstance_0 = function (source) {
    var scene = source.getScene();
    var target = source.sourceMesh.createInstance(source.name);
    copyMeshState(source, target);
    scene.removeMesh(target);
    return target;
  };
  ModelFactory$Companion.prototype.wrapTransformNode_0 = function (model, options) {
    var scene = model.data.scene;
    var node = new TransformNode('', null);
    var tmp$;
    tmp$ = model.instances.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.parent = node;
    }
    if (!options.ignoresLights) {
      var $receiver = model.data.assetContainer.lights;
      var tmp$_0;
      for (tmp$_0 = 0; tmp$_0 !== $receiver.length; ++tmp$_0) {
        var element_0 = $receiver[tmp$_0];
        element_0.clone(element_0.name);
      }
    }
    if (!options.ignoreCameras) {
      var $receiver_0 = model.data.assetContainer.cameras;
      var tmp$_1;
      for (tmp$_1 = 0; tmp$_1 !== $receiver_0.length; ++tmp$_1) {
        var element_1 = $receiver_0[tmp$_1];
        element_1.clone(element_1.name);
      }
    }
    return node;
  };
  ModelFactory$Companion.prototype.createModelData_greupd$ = function (scene, name, container) {
    var tmp$, tmp$_0, tmp$_1;
    var instances = ArrayList_init();
    tmp$ = container.meshes;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var originalMesh = tmp$[tmp$_0];
      if (Kotlin.isType(originalMesh, Mesh)) {
        addAll(instances, this.createMeshInstances_0(originalMesh));
        if ((tmp$_1 = originalMesh.geometry) != null) {
          if (!contains(container.geometries, tmp$_1)) {
            container.geometries = container.geometries.concat([tmp$_1]);
          }
        }
      }
    }
    return new ModelData(name, scene, container, instances);
  };
  ModelFactory$Companion.prototype.createMeshInstances_0 = function (originalMesh) {
    var instances = ArrayList_init();
    var scene = originalMesh.getScene();
    originalMesh.convertToUnIndexedMesh();
    scene.removeMesh(originalMesh);
    var originalMeshInstances = originalMesh.instances.slice();
    var mainInstance = originalMesh.createInstance(originalMesh.name);
    scene.removeMesh(mainInstance);
    instances.add_11rb$(mainInstance);
    var tmp$;
    for (tmp$ = 0; tmp$ !== originalMeshInstances.length; ++tmp$) {
      var element = originalMeshInstances[tmp$];
      scene.removeMesh(element);
      instances.add_11rb$(element);
    }
    return instances;
  };
  ModelFactory$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ModelFactory$Companion_instance = null;
  function ModelFactory$Companion_getInstance() {
    if (ModelFactory$Companion_instance === null) {
      new ModelFactory$Companion();
    }
    return ModelFactory$Companion_instance;
  }
  ModelFactory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ModelFactory',
    interfaces: []
  };
  function createInstance($receiver, options) {
    if (options === void 0)
      options = null;
    return ModelFactory$Companion_getInstance().create_53ia2n$($receiver, options);
  }
  function createAndPlaceInstance($receiver, root, options) {
    if (root === void 0)
      root = null;
    if (options === void 0)
      options = null;
    return ModelFactory$Companion_getInstance().createAndPlace_urgq93$($receiver, root, options);
  }
  function TextureReplacer() {
    TextureReplacer$Companion_getInstance();
  }
  function TextureReplacer$Companion() {
    TextureReplacer$Companion_instance = this;
  }
  function TextureReplacer$Companion$replace$lambda$lambda(closure$sourceTextureName, closure$targetTextureUrl, this$TextureReplacer$, closure$textures, closure$map, closure$material) {
    return function (texture) {
      if (this$TextureReplacer$.replaceTexture_0(texture, closure$sourceTextureName, closure$targetTextureUrl)) {
        closure$textures.add_11rb$(texture);
        closure$map.put_xwzc9p$(closure$material, closure$textures);
      }
      return Unit;
    };
  }
  TextureReplacer$Companion.prototype.replace_gil0ll$ = function (data, sourceTextureName, targetTextureUrl) {
    var map = LinkedHashMap_init();
    var $receiver = data.assetContainer.materials;
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      var textures = ArrayList_init();
      forEachTexture(element, TextureReplacer$Companion$replace$lambda$lambda(sourceTextureName, targetTextureUrl, this, textures, map, element));
    }
    return map;
  };
  TextureReplacer$Companion.prototype.meshesByMaterials_pukwic$ = function (source, materials) {
    var target = ArrayList_init();
    var tmp$;
    tmp$ = source.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (contains_0(materials, element.material)) {
        if (Kotlin.isType(element, Mesh)) {
          target.add_11rb$(element);
        }
      }
    }
    return target;
  };
  TextureReplacer$Companion.prototype.replaceTexture_0 = function (base, sourceTextureName, targetTextureUrl) {
    var tmp$, tmp$_0;
    if ((tmp$_0 = Kotlin.isType(tmp$ = base, Texture) ? tmp$ : null) != null) {
      if (sourceTextureName == null || equals(tmp$_0.name, sourceTextureName)) {
        tmp$_0.updateURL(targetTextureUrl);
        return true;
      }
    }
    return false;
  };
  TextureReplacer$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TextureReplacer$Companion_instance = null;
  function TextureReplacer$Companion_getInstance() {
    if (TextureReplacer$Companion_instance === null) {
      new TextureReplacer$Companion();
    }
    return TextureReplacer$Companion_instance;
  }
  TextureReplacer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextureReplacer',
    interfaces: []
  };
  function UVReplacer() {
    UVReplacer$Companion_getInstance();
  }
  function UVReplacer$Companion() {
    UVReplacer$Companion_instance = this;
  }
  function UVReplacer$Companion$create$lambda(closure$regionX, closure$regionWidth, closure$atlasWidth, closure$regionY, closure$regionHeight, closure$atlasHeight) {
    return function (it) {
      return new Vector2((closure$regionX + it.x * closure$regionWidth) / closure$atlasWidth, (closure$regionY + it.y * closure$regionHeight) / closure$atlasHeight);
    };
  }
  UVReplacer$Companion.prototype.create_av1frg$ = function (atlas, imageName) {
    var tmp$;
    tmp$ = atlas.getRegion_61zpoe$(imageName);
    if (tmp$ == null) {
      throw Error_init('Undefined region: ' + imageName + ' in ' + atlas);
    }
    var page = tmp$.component1()
    , region = tmp$.component2();
    var pageSize = page.info.size;
    var box = region.box;
    var atlasWidth = pageSize.x;
    var atlasHeight = pageSize.y;
    var regionX = box.position.x;
    var regionY = pageSize.y - box.size.y - box.position.y | 0;
    var regionWidth = box.size.x;
    var regionHeight = box.size.y;
    var calculator = UVReplacer$Companion$create$lambda(regionX, regionWidth, atlasWidth, regionY, regionHeight, atlasHeight);
    return new Pair(page, calculator);
  };
  UVReplacer$Companion.prototype.cloneUV_1lscmn$ = function (geometry, sourceKind, targetKind) {
    var tmp$;
    if (!geometry.isVerticesDataPresent(sourceKind))
      return false;
    var original = Kotlin.isArray(tmp$ = geometry.getVerticesData(sourceKind)) ? tmp$ : throwCCE();
    geometry.setVerticesData(targetKind, original.slice(), false);
    return true;
  };
  UVReplacer$Companion.prototype.convertUV_581ort$ = function (geometry, sourceKind, converter) {
    var tmp$;
    var kind = this.getKindByIndex_0(sourceKind);
    if (!geometry.isVerticesDataPresent(kind))
      return false;
    var data = Kotlin.isArray(tmp$ = geometry.getVerticesData(kind)) ? tmp$ : throwCCE();
    var max = data.length / 2 | 0;
    for (var i = 0; i < max; i++) {
      var x = data[i * 2 | 0];
      var y = data[(i * 2 | 0) + 1 | 0];
      var uv = converter(new Vector2(x, y));
      data[i * 2 | 0] = uv.x;
      data[(i * 2 | 0) + 1 | 0] = uv.y;
    }
    geometry.setVerticesData(kind, data, false);
    return true;
  };
  UVReplacer$Companion.prototype.getKindByIndex_0 = function (coordinatesIndex) {
    var tmp$;
    switch (coordinatesIndex) {
      case 0:
        tmp$ = VertexBuffer$Companion.UVKind;
        break;
      case 1:
        tmp$ = VertexBuffer$Companion.UV2Kind;
        break;
      case 2:
        tmp$ = VertexBuffer$Companion.UV3Kind;
        break;
      case 3:
        tmp$ = VertexBuffer$Companion.UV4Kind;
        break;
      case 4:
        tmp$ = VertexBuffer$Companion.UV5Kind;
        break;
      case 5:
        tmp$ = VertexBuffer$Companion.UV6Kind;
        break;
      default:throw Error_init('Supported coordinatesIndex from 0 to 5');
    }
    return tmp$;
  };
  UVReplacer$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var UVReplacer$Companion_instance = null;
  function UVReplacer$Companion_getInstance() {
    if (UVReplacer$Companion_instance === null) {
      new UVReplacer$Companion();
    }
    return UVReplacer$Companion_instance;
  }
  UVReplacer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UVReplacer',
    interfaces: []
  };
  function copyMeshState(source, target) {
    target.position = source.position;
    target.rotation = source.rotation;
    target.scaling = source.scaling;
    target.rotationQuaternion = source.rotationQuaternion;
    target.setPivotMatrix(source.getPivotMatrix());
  }
  function clone($receiver) {
    var textureMap = LinkedHashMap_init();
    var materialMap = LinkedHashMap_init();
    var meshMap = LinkedHashMap_init();
    var geometryMap = LinkedHashMap_init();
    var $receiver_0 = $receiver.textures;
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
      var element = $receiver_0[tmp$];
      var copy = element.clone();
      if (copy == null) {
        textureMap.put_xwzc9p$(element, element);
      }
       else {
        textureMap.put_xwzc9p$(element, copy);
      }
    }
    var $receiver_1 = $receiver.materials;
    var tmp$_0;
    for (tmp$_0 = 0; tmp$_0 !== $receiver_1.length; ++tmp$_0) {
      var element_0 = $receiver_1[tmp$_0];
      var tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10;
      var copy_0 = element_0.clone(element_0.name);
      if (copy_0 == null) {
        materialMap.put_xwzc9p$(element_0, element_0);
      }
       else {
        materialMap.put_xwzc9p$(element_0, copy_0);
        if (Kotlin.isType(copy_0, PBRMaterial) && Kotlin.isType(element_0, PBRMaterial)) {
          var key = element_0.albedoTexture;
          var tmp$_11;
          if ((tmp$_1 = (Kotlin.isType(tmp$_11 = textureMap, Map) ? tmp$_11 : throwCCE()).get_11rb$(key)) != null) {
            copy_0.albedoTexture = tmp$_1;
          }
          var key_0 = element_0.ambientTexture;
          var tmp$_12;
          if ((tmp$_2 = (Kotlin.isType(tmp$_12 = textureMap, Map) ? tmp$_12 : throwCCE()).get_11rb$(key_0)) != null) {
            copy_0.ambientTexture = tmp$_2;
          }
          var key_1 = element_0.bumpTexture;
          var tmp$_13;
          if ((tmp$_3 = (Kotlin.isType(tmp$_13 = textureMap, Map) ? tmp$_13 : throwCCE()).get_11rb$(key_1)) != null) {
            copy_0.bumpTexture = tmp$_3;
          }
          var key_2 = element_0.emissiveTexture;
          var tmp$_14;
          if ((tmp$_4 = (Kotlin.isType(tmp$_14 = textureMap, Map) ? tmp$_14 : throwCCE()).get_11rb$(key_2)) != null) {
            copy_0.emissiveTexture = tmp$_4;
          }
          var key_3 = element_0.lightmapTexture;
          var tmp$_15;
          if ((tmp$_5 = (Kotlin.isType(tmp$_15 = textureMap, Map) ? tmp$_15 : throwCCE()).get_11rb$(key_3)) != null) {
            copy_0.lightmapTexture = tmp$_5;
          }
          var key_4 = element_0.metallicTexture;
          var tmp$_16;
          if ((tmp$_6 = (Kotlin.isType(tmp$_16 = textureMap, Map) ? tmp$_16 : throwCCE()).get_11rb$(key_4)) != null) {
            copy_0.metallicTexture = tmp$_6;
          }
          var key_5 = element_0.microSurfaceTexture;
          var tmp$_17;
          if ((tmp$_7 = (Kotlin.isType(tmp$_17 = textureMap, Map) ? tmp$_17 : throwCCE()).get_11rb$(key_5)) != null) {
            copy_0.microSurfaceTexture = tmp$_7;
          }
          var key_6 = element_0.opacityTexture;
          var tmp$_18;
          if ((tmp$_8 = (Kotlin.isType(tmp$_18 = textureMap, Map) ? tmp$_18 : throwCCE()).get_11rb$(key_6)) != null) {
            copy_0.opacityTexture = tmp$_8;
          }
          var key_7 = element_0.reflectivityTexture;
          var tmp$_19;
          if ((tmp$_9 = (Kotlin.isType(tmp$_19 = textureMap, Map) ? tmp$_19 : throwCCE()).get_11rb$(key_7)) != null) {
            copy_0.reflectivityTexture = tmp$_9;
          }
          var key_8 = element_0.reflectionTexture;
          var tmp$_20;
          if ((tmp$_10 = (Kotlin.isType(tmp$_20 = textureMap, Map) ? tmp$_20 : throwCCE()).get_11rb$(key_8)) != null) {
            copy_0.reflectionTexture = tmp$_10;
          }
        }
      }
    }
    var $receiver_2 = $receiver.geometries;
    var tmp$_21;
    for (tmp$_21 = 0; tmp$_21 !== $receiver_2.length; ++tmp$_21) {
      var element_1 = $receiver_2[tmp$_21];
      var copy_1 = element_1.copy(element_1.id);
      geometryMap.put_xwzc9p$(element_1, copy_1);
    }
    var $receiver_3 = $receiver.meshes;
    var tmp$_22;
    for (tmp$_22 = 0; tmp$_22 !== $receiver_3.length; ++tmp$_22) {
      var element_2 = $receiver_3[tmp$_22];
      var tmp$_23;
      var copy_2 = element_2.clone(element_2.name, element_2.parent);
      if (Kotlin.isType(copy_2, Mesh)) {
        $receiver.scene.removeMesh(copy_2);
      }
      if (copy_2 == null) {
        meshMap.put_xwzc9p$(element_2, element_2);
      }
       else {
        meshMap.put_xwzc9p$(element_2, copy_2);
        if (Kotlin.isType(element_2, Mesh) && Kotlin.isType(copy_2, Mesh)) {
          var key_9 = element_2.geometry;
          var tmp$_24;
          (tmp$_23 = (Kotlin.isType(tmp$_24 = geometryMap, Map) ? tmp$_24 : throwCCE()).get_11rb$(key_9)) != null ? (tmp$_23.applyToMesh(copy_2), Unit) : null;
        }
        var key_10 = element_2.material;
        var tmp$_25;
        copy_2.material = (Kotlin.isType(tmp$_25 = materialMap, Map) ? tmp$_25 : throwCCE()).get_11rb$(key_10);
      }
    }
    var target = new AssetContainer($receiver.scene);
    target.textures = plus(target.textures, textureMap.values);
    target.materials = plus(target.materials, materialMap.values);
    target.geometries = plus(target.geometries, geometryMap.values);
    target.meshes = plus(target.meshes, meshMap.values);
    return target;
  }
  function FPS(scene, customRoot) {
    if (customRoot === void 0)
      customRoot = null;
    this.scene = scene;
    this.instrumentation = new EngineInstrumentation(this.scene.getEngine());
    this.output = new TextBlock();
    this.output.text = '';
    this.output.color = 'white';
    this.output.fontSize = 16;
    this.output.height = '180px';
    if (customRoot == null) {
      var advancedTexture = AdvancedDynamicTexture$Companion.CreateFullscreenUI('UI');
      advancedTexture.addControl(this.output);
    }
     else {
      customRoot.addControl(this.output);
    }
    this.instrumentation.captureGPUFrameTime = true;
    this.instrumentation.captureShaderCompilationTime = true;
    var accumulateTime = {v: 0.0};
    this.scene.onAfterRenderObservable.add(FPS_init$lambda(this, accumulateTime));
  }
  FPS.prototype.update = function () {
    var indices = {v: 0};
    var $receiver = this.scene.meshes;
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      indices.v = indices.v + numberToInt(element.getTotalIndices()) | 0;
    }
    this.output.text = 'FPS: ' + toPrecision(this.scene.getEngine().getFps(), 1) + '';
    this.output.text = this.output.text + ('\n' + 'triangles: ' + toString(indices.v / 3 | 0));
    this.output.text = this.output.text + ('\n' + 'meshes: ' + toString(this.scene.meshes.length));
    this.output.text = this.output.text + ('\n' + 'current frame time (GPU): ' + toPrecision(this.instrumentation.gpuFrameTimeCounter.current * 1.0E-6, 2) + 'ms');
    this.output.text = this.output.text + ('\n' + 'average frame time (GPU): ' + toPrecision(this.instrumentation.gpuFrameTimeCounter.average * 1.0E-6, 2) + 'ms');
    this.output.text = this.output.text + ('\n' + 'total shader compilation time: ' + toPrecision(this.instrumentation.shaderCompilationTimeCounter.total, 2) + 'ms');
    this.output.text = this.output.text + ('\n' + 'average shader compilation time: ' + toPrecision(this.instrumentation.shaderCompilationTimeCounter.average, 2) + 'ms');
    this.output.text = this.output.text + ('\n' + 'compiler shaders count: ' + toString(this.instrumentation.shaderCompilationTimeCounter.count));
  };
  function FPS_init$lambda(this$FPS, closure$accumulateTime) {
    return function (f, f_0) {
      closure$accumulateTime.v += this$FPS.scene.getEngine().getDeltaTime();
      if (closure$accumulateTime.v > 1.25) {
        closure$accumulateTime.v -= 1.25;
        this$FPS.update();
      }
      return Unit;
    };
  }
  FPS.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FPS',
    interfaces: []
  };
  function forEachTexture($receiver, operation) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8;
    if (Kotlin.isType($receiver, PBRMaterial)) {
      if ((tmp$ = $receiver.albedoTexture) != null) {
        operation(tmp$);
      }
      if ((tmp$_0 = $receiver.ambientTexture) != null) {
        operation(tmp$_0);
      }
      if ((tmp$_1 = $receiver.bumpTexture) != null) {
        operation(tmp$_1);
      }
      if ((tmp$_2 = $receiver.emissiveTexture) != null) {
        operation(tmp$_2);
      }
      if ((tmp$_3 = $receiver.lightmapTexture) != null) {
        operation(tmp$_3);
      }
      if ((tmp$_4 = $receiver.metallicTexture) != null) {
        operation(tmp$_4);
      }
      if ((tmp$_5 = $receiver.microSurfaceTexture) != null) {
        operation(tmp$_5);
      }
      if ((tmp$_6 = $receiver.opacityTexture) != null) {
        operation(tmp$_6);
      }
      if ((tmp$_7 = $receiver.reflectivityTexture) != null) {
        operation(tmp$_7);
      }
      if ((tmp$_8 = $receiver.reflectionTexture) != null) {
        operation(tmp$_8);
      }
    }
  }
  function forEachColor($receiver, operation) {
    if (Kotlin.isType($receiver, PBRMaterial)) {
      operation($receiver.albedoColor);
      operation($receiver.ambientColor);
      operation($receiver.emissiveColor);
      operation($receiver.reflectionColor);
      operation($receiver.reflectivityColor);
    }
  }
  function toStringLines($receiver) {
    var tmp$;
    var result = '';
    tmp$ = $receiver.m.length;
    for (var i = 0; i < tmp$; i++) {
      if (i % 4 === 0)
        result += '\n';
      result += '' + $receiver.m[i].toString() + '; ';
    }
    return result;
  }
  function forChildren$lambda(it) {
    return true;
  }
  function forChildren($receiver, action) {
    var $receiver_0 = $receiver.getChildMeshes(void 0, forChildren$lambda);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
      var element = $receiver_0[tmp$];
      action(element);
    }
  }
  function addMeshToScene$lambda(it) {
    addMeshToScene(it);
    return Unit;
  }
  function addMeshToScene($receiver) {
    if (Kotlin.isType($receiver, AbstractMesh)) {
      $receiver.getScene().addMesh($receiver);
    }
    if (Kotlin.isType($receiver, InstancedMesh)) {
      $receiver.sourceMesh._resyncLightSources();
    }
    forChildren($receiver, addMeshToScene$lambda);
  }
  function removeMeshFromScene$lambda(it) {
    removeMeshFromScene(it);
    return Unit;
  }
  function removeMeshFromScene($receiver) {
    if (Kotlin.isType($receiver, AbstractMesh)) {
      $receiver.getScene().removeMesh($receiver);
    }
    forChildren($receiver, removeMeshFromScene$lambda);
  }
  function playAnimation$lambda(closure$loop, closure$speedRatio) {
    return function (it) {
      playAnimation(it, closure$loop, closure$speedRatio);
      return Unit;
    };
  }
  function playAnimation($receiver, loop, speedRatio) {
    if (speedRatio === void 0)
      speedRatio = 1.0;
    var $receiver_0 = $receiver.getAnimationRanges();
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
      var element = $receiver_0[tmp$];
      if (element != null) {
        $receiver.beginAnimation(element.name, loop, speedRatio);
      }
    }
    forChildren($receiver, playAnimation$lambda(loop, speedRatio));
  }
  function stopAnimation$lambda(it) {
    stopAnimation(it);
    return Unit;
  }
  function stopAnimation($receiver) {
    var $receiver_0 = $receiver.getAnimationRanges();
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
      var element = $receiver_0[tmp$];
      if (element != null) {
        var animatable = $receiver.beginAnimation(element.name, true, 1.0);
        animatable != null ? (animatable.stop(), Unit) : null;
      }
    }
    forChildren($receiver, stopAnimation$lambda);
  }
  function setAnimationFrame$lambda(closure$frame) {
    return function (it) {
      setAnimationFrame(it, closure$frame);
      return Unit;
    };
  }
  function setAnimationFrame($receiver, frame) {
    var $receiver_0 = $receiver.getAnimationRanges();
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
      var element = $receiver_0[tmp$];
      if (element != null) {
        var animatable = $receiver.beginAnimation(element.name, true, 1.0);
        animatable != null ? (animatable.goToFrame(frame), Unit) : null;
        animatable != null ? (animatable.pause(), Unit) : null;
      }
    }
    forChildren($receiver, setAnimationFrame$lambda(frame));
  }
  function AtlasPage(texture, info) {
    this.texture = texture;
    this.info = info;
  }
  AtlasPage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AtlasPage',
    interfaces: []
  };
  function Atlas(pages) {
    this.pages = pages;
  }
  Atlas.prototype.getRegion_61zpoe$ = function (name) {
    var tmp$;
    tmp$ = this.pages.values.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var region = element.info.regions.get_11rb$(name);
      if (region != null) {
        return new Pair(element, region);
      }
    }
    return null;
  };
  Atlas.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Atlas',
    interfaces: []
  };
  function AtlasPageInfo(name, size, regions) {
    this.name = name;
    this.size = size;
    this.regions = regions;
  }
  AtlasPageInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AtlasPageInfo',
    interfaces: []
  };
  function AtlasInfo(pages) {
    this.pages = pages;
  }
  AtlasInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AtlasInfo',
    interfaces: []
  };
  function AtlasRegion(name, box) {
    this.name = name;
    this.box = box;
  }
  AtlasRegion.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AtlasRegion',
    interfaces: []
  };
  var loadAbstractData = defineInlineFunction('babylon-helper.casper.util.loader.loadAbstractData_x6kqo$', wrapFunction(function () {
    var XMLHttpRequest_init = XMLHttpRequest;
    var SinglePromiseSignal_init = _.$$importsForInline$$.signalKt.casper.signal.SinglePromiseSignal;
    var toShort = Kotlin.toShort;
    var Unit = Kotlin.kotlin.Unit;
    function loadAbstractData$lambda(closure$request, typeClosure$T, isT, closure$future) {
      return function (it) {
        if (closure$request.status === toShort(200)) {
          var response = closure$request.response;
          if (isT(response)) {
            closure$future.accept_11rb$(response);
          }
           else {
            closure$future.reject_11rc$('Invalid data type: ' + it);
          }
        }
         else {
          closure$future.reject_11rc$('Load failed: ' + it);
        }
        return Unit;
      };
    }
    function loadAbstractData$lambda_0(closure$future) {
      return function (it) {
        closure$future.reject_11rc$('Load failed: ' + it);
        return Unit;
      };
    }
    return function (T_0, isT, url, responseType) {
      var request = new XMLHttpRequest_init();
      var future = new SinglePromiseSignal_init();
      request.onloadend = loadAbstractData$lambda(request, T_0, isT, future);
      request.onerror = loadAbstractData$lambda_0(future);
      request.responseType = responseType;
      request.open('GET', url);
      request.send();
      return future;
    };
  }));
  function parseVector(source) {
    var list = split(source, [',']);
    if (list.size === 2) {
      try {
        return new Vector2i(toInt(list.get_za3lpa$(0)), toInt(list.get_za3lpa$(1)));
      }
       catch (_) {
        if (Kotlin.isType(_, Throwable)) {
          return null;
        }
         else
          throw _;
      }
    }
     else {
      return null;
    }
  }
  function parseVector_0(node, name) {
    var tmp$;
    tmp$ = node.properties.get_11rb$(name);
    if (tmp$ == null) {
      return null;
    }
    var source = tmp$;
    return parseVector(source);
  }
  function parseAtlasInfo(text) {
    var pages = ArrayList_init();
    var textInfo = parseText(text);
    var tmp$;
    tmp$ = textInfo.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0, tmp$_1, tmp$_2, tmp$_3;
      tmp$_0 = parseVector_0(element, 'size');
      if (tmp$_0 == null) {
        throw Error_init('Invalid page size for ' + element.name);
      }
      var pageSize = tmp$_0;
      var regions = LinkedHashMap_init();
      tmp$_1 = element.children.iterator();
      while (tmp$_1.hasNext()) {
        var childrenNode = tmp$_1.next();
        tmp$_2 = parseVector_0(childrenNode, 'xy');
        if (tmp$_2 == null) {
          throw Error_init('Invalid position for ' + childrenNode.name + ' in ' + element.name);
        }
        var position = tmp$_2;
        tmp$_3 = parseVector_0(childrenNode, 'size');
        if (tmp$_3 == null) {
          throw Error_init('Invalid size for ' + childrenNode.name + ' in ' + element.name);
        }
        var size = tmp$_3;
        regions.put_xwzc9p$(childrenNode.name, new AtlasRegion(childrenNode.name, new AABBox2i(position, size)));
      }
      pages.add_11rb$(new AtlasPageInfo(element.name, pageSize, regions));
    }
    return new AtlasInfo(pages);
  }
  function createAtlas(scene, info) {
    var pages = LinkedHashMap_init();
    var tmp$;
    tmp$ = info.pages.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var texture = new Texture(element.name, scene, false, true, Texture.TRILINEAR_SAMPLINGMODE);
      var key = element.name;
      var value = new AtlasPage(texture, element);
      pages.put_xwzc9p$(key, value);
    }
    return new Atlas(pages);
  }
  function createAtlasLoader$lambda(closure$future, closure$scene) {
    return function (it) {
      try {
        var atlasInfo = parseAtlasInfo(it);
        checkImageAndCreateAtlas(closure$future, closure$scene, atlasInfo);
      }
       catch (error) {
        if (Kotlin.isType(error, Throwable)) {
          closure$future.reject_11rc$(error.toString());
        }
         else
          throw error;
      }
      return Unit;
    };
  }
  function createAtlasLoader$lambda_0(closure$future, closure$atlasUrl) {
    return function (it) {
      closure$future.reject_11rc$('File loading ' + closure$atlasUrl + ' is failed: ' + it);
      return Unit;
    };
  }
  function createAtlasLoader(scene, atlasUrl) {
    var future = new SinglePromiseSignal();
    loadTextData(atlasUrl).then_fri4qn$(createAtlasLoader$lambda(future, scene), createAtlasLoader$lambda_0(future, atlasUrl));
    return future;
  }
  function checkImageAndCreateAtlas$lambda$lambda(closure$waiting, closure$scene, closure$atlasInfo, closure$future) {
    return function (it) {
      if ((closure$waiting.v = closure$waiting.v - 1 | 0, closure$waiting.v) <= 0) {
        var atlas = createAtlas(closure$scene, closure$atlasInfo);
        closure$future.accept_11rb$(atlas);
      }
      return Unit;
    };
  }
  function checkImageAndCreateAtlas$lambda$lambda_0(closure$future, closure$page) {
    return function (it) {
      closure$future.reject_11rc$('Image ' + closure$page.name + ' loading for atlas failed: ' + it);
      return Unit;
    };
  }
  function checkImageAndCreateAtlas(future, scene, atlasInfo) {
    var waiting = {v: atlasInfo.pages.size};
    var tmp$;
    tmp$ = atlasInfo.pages.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      loadImage(element.name).then_fri4qn$(checkImageAndCreateAtlas$lambda$lambda(waiting, scene, atlasInfo, future), checkImageAndCreateAtlas$lambda$lambda_0(future, element));
    }
  }
  function TextNode() {
    this.name = '';
    this.properties = LinkedHashMap_init();
    this.children = ArrayList_init();
  }
  TextNode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextNode',
    interfaces: []
  };
  function parseText(text) {
    var pages = ArrayList_init();
    var pageSources = split(removeSuffix(removePrefix(text, '\n'), '\n'), ['\n\n']);
    var tmp$;
    tmp$ = pageSources.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var lines = toMutableList(split(element, ['\n']));
      var title = lines.removeAt_za3lpa$(0);
      var pageRoot = new TextNode();
      pageRoot.name = title;
      pages.add_11rb$(pageRoot);
      var targetNode = {v: pageRoot};
      var tmp$_0;
      tmp$_0 = lines.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        var isProperty = indexOf_0(element_0, ':') >= 0;
        if (isProperty) {
          var lineWithoutSpace = replace(element_0, ' ', '');
          var propertyDividerIndex = indexOf_0(lineWithoutSpace, ':');
          var propertyName = lineWithoutSpace.substring(0, propertyDividerIndex);
          var startIndex = propertyDividerIndex + 1 | 0;
          var propertyValue = lineWithoutSpace.substring(startIndex);
          targetNode.v.properties.put_xwzc9p$(propertyName, propertyValue);
        }
         else {
          targetNode.v = new TextNode();
          targetNode.v.name = element_0;
          pageRoot.children.add_11rb$(targetNode.v);
        }
      }
    }
    return pages;
  }
  function loadAbstractData$lambda(closure$request, typeClosure$T, isT, closure$future) {
    return function (it) {
      if (closure$request.status === toShort(200)) {
        var response = closure$request.response;
        if (isT(response)) {
          closure$future.accept_11rb$(response);
        }
         else {
          closure$future.reject_11rc$('Invalid data type: ' + it);
        }
      }
       else {
        closure$future.reject_11rc$('Load failed: ' + it);
      }
      return Unit;
    };
  }
  function loadAbstractData$lambda_0(closure$future) {
    return function (it) {
      closure$future.reject_11rc$('Load failed: ' + it);
      return Unit;
    };
  }
  function loadBinaryData(url) {
    var responseType = 'arraybuffer';
    var request = new XMLHttpRequest_init();
    var future = new SinglePromiseSignal();
    request.onloadend = loadAbstractData$lambda(request, ArrayBuffer, Kotlin.isInstanceOf(ArrayBuffer), future);
    request.onerror = loadAbstractData$lambda_0(future);
    request.responseType = responseType;
    request.open('GET', url);
    request.send();
    return future;
  }
  function loadImage$lambda(closure$onImage, closure$image) {
    return function (it) {
      closure$onImage.accept_11rb$(closure$image);
      return Unit;
    };
  }
  function loadImage$lambda_0(closure$onImage) {
    return function (a, m, i, k, f) {
      closure$onImage.reject_11rc$(m);
      return Unit;
    };
  }
  function loadImage(name) {
    var onImage = new SinglePromiseSignal();
    var image = document.createElement('img');
    if (Kotlin.isType(image, HTMLImageElement)) {
      image.src = name;
      image.onload = loadImage$lambda(onImage, image);
      image.onerror = loadImage$lambda_0(onImage);
    }
     else {
      onImage.reject_11rc$("Can't create image");
    }
    return onImage;
  }
  function loadAbstractData$lambda_1(closure$request, typeClosure$T, isT, closure$future) {
    return function (it) {
      if (closure$request.status === toShort(200)) {
        var response = closure$request.response;
        if (isT(response)) {
          closure$future.accept_11rb$(response);
        }
         else {
          closure$future.reject_11rc$('Invalid data type: ' + it);
        }
      }
       else {
        closure$future.reject_11rc$('Load failed: ' + it);
      }
      return Unit;
    };
  }
  function loadAbstractData$lambda_2(closure$future) {
    return function (it) {
      closure$future.reject_11rc$('Load failed: ' + it);
      return Unit;
    };
  }
  function loadTextData(url) {
    var request = new XMLHttpRequest_init();
    var future = new SinglePromiseSignal();
    request.onloadend = loadAbstractData$lambda_1(request, String_0, Kotlin.isTypeOf('string'), future);
    request.onerror = loadAbstractData$lambda_2(future);
    request.responseType = 'text';
    request.open('GET', url);
    request.send();
    return future;
  }
  var package$casper = _.casper || (_.casper = {});
  var package$asset = package$casper.asset || (package$casper.asset = {});
  package$asset.AssetGroupLoadManager = AssetGroupLoadManager;
  package$asset.AssetGroupManager = AssetGroupManager;
  package$asset.AssetManager = AssetManager;
  var package$loader = package$casper.loader || (package$casper.loader = {});
  package$loader.createModelLoader_if4f2z$ = createModelLoader;
  package$loader.createTextureLoader_if4f2z$ = createTextureLoader;
  Object.defineProperty(AtlasHelper, 'Companion', {
    get: AtlasHelper$Companion_getInstance
  });
  var package$model = package$casper.model || (package$casper.model = {});
  package$model.AtlasHelper = AtlasHelper;
  Object.defineProperty(MaterialReplacer, 'Companion', {
    get: MaterialReplacer$Companion_getInstance
  });
  package$model.MaterialReplacer = MaterialReplacer;
  Object.defineProperty(MaterialKey, 'Companion', {
    get: MaterialKey$Companion_getInstance
  });
  package$model.MaterialKey = MaterialKey;
  Object.defineProperty(MeshKey, 'Companion', {
    get: MeshKey$Companion_getInstance
  });
  package$model.MeshKey = MeshKey;
  Object.defineProperty(MeshMerger, 'Companion', {
    get: MeshMerger$Companion_getInstance
  });
  package$model.MeshMerger = MeshMerger;
  package$model.Model = Model;
  package$model.ModelData = ModelData;
  package$model.ModelCreateOptions = ModelCreateOptions;
  Object.defineProperty(ModelFactory, 'Companion', {
    get: ModelFactory$Companion_getInstance
  });
  package$model.ModelFactory = ModelFactory;
  package$model.createInstance_w7ozni$ = createInstance;
  package$model.createAndPlaceInstance_tr50zu$ = createAndPlaceInstance;
  Object.defineProperty(TextureReplacer, 'Companion', {
    get: TextureReplacer$Companion_getInstance
  });
  package$model.TextureReplacer = TextureReplacer;
  Object.defineProperty(UVReplacer, 'Companion', {
    get: UVReplacer$Companion_getInstance
  });
  package$model.UVReplacer = UVReplacer;
  var package$util = package$casper.util || (package$casper.util = {});
  package$util.copyMeshState_kijftg$ = copyMeshState;
  package$util.clone_m14ew5$ = clone;
  package$util.FPS = FPS;
  package$util.forEachTexture_vnvga7$ = forEachTexture;
  package$util.forEachColor_xu1u5d$ = forEachColor;
  package$util.toStringLines_lqj46j$ = toStringLines;
  package$util.forChildren_wzp6uw$ = forChildren;
  package$util.addMeshToScene_jig5h0$ = addMeshToScene;
  package$util.removeMeshFromScene_jig5h0$ = removeMeshFromScene;
  package$util.playAnimation_ys0c4h$ = playAnimation;
  package$util.stopAnimation_jig5h0$ = stopAnimation;
  package$util.setAnimationFrame_32rpl6$ = setAnimationFrame;
  var package$atlas = package$util.atlas || (package$util.atlas = {});
  package$atlas.AtlasPage = AtlasPage;
  package$atlas.Atlas = Atlas;
  package$atlas.AtlasPageInfo = AtlasPageInfo;
  package$atlas.AtlasInfo = AtlasInfo;
  package$atlas.AtlasRegion = AtlasRegion;
  $$importsForInline$$.signalKt = $module$signalKt;
  var package$loader_0 = package$util.loader || (package$util.loader = {});
  package$loader_0.parseAtlasInfo_61zpoe$ = parseAtlasInfo;
  package$loader_0.createAtlas_p1ogk7$ = createAtlas;
  package$loader_0.createAtlasLoader_if4f2z$ = createAtlasLoader;
  package$loader_0.TextNode = TextNode;
  package$loader_0.parseText_61zpoe$ = parseText;
  $$importsForInline$$['babylon-helper'] = _;
  package$loader_0.loadBinaryData_61zpoe$ = loadBinaryData;
  package$loader_0.loadImage_61zpoe$ = loadImage;
  package$loader_0.loadTextData_61zpoe$ = loadTextData;
  Kotlin.defineModule('babylon-helper', _);
  return _;
});

//# sourceMappingURL=babylon-helper.js.map
