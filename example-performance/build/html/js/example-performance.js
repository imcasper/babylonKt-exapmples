(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'babylonjs', 'babylonKt', 'babylonjs-gui'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('babylonjs'), require('babylonKt'), require('babylonjs-gui'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'example-performance'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'example-performance'.");
    }
    if (typeof babylonjs === 'undefined') {
      throw new Error("Error loading module 'example-performance'. Its dependency 'babylonjs' was not found. Please, check whether 'babylonjs' is loaded prior to 'example-performance'.");
    }
    if (typeof babylonKt === 'undefined') {
      throw new Error("Error loading module 'example-performance'. Its dependency 'babylonKt' was not found. Please, check whether 'babylonKt' is loaded prior to 'example-performance'.");
    }
    if (typeof this['babylonjs-gui'] === 'undefined') {
      throw new Error("Error loading module 'example-performance'. Its dependency 'babylonjs-gui' was not found. Please, check whether 'babylonjs-gui' is loaded prior to 'example-performance'.");
    }
    root['example-performance'] = factory(typeof this['example-performance'] === 'undefined' ? {} : this['example-performance'], kotlin, babylonjs, babylonKt, this['babylonjs-gui']);
  }
}(this, function (_, Kotlin, $module$babylonjs, $module$babylonKt, $module$babylonjs_gui) {
  'use strict';
  var Vector3 = $module$babylonjs.Vector3;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var createScene = $module$babylonKt.BABYLON.extension.createScene_ivxn3r$;
  var Random = Kotlin.kotlin.random.Random_za3lpa$;
  var Mesh = $module$babylonjs.Mesh;
  var AbstractMesh$Companion = $module$babylonjs.AbstractMesh;
  var SceneLoader$Companion = $module$babylonjs.SceneLoader;
  var runRenderLoop = $module$babylonKt.BABYLON.extension.runRenderLoop_w7gcas$;
  var TextBlock = $module$babylonjs_gui.TextBlock;
  var AdvancedDynamicTexture$Companion = $module$babylonjs_gui.AdvancedDynamicTexture;
  var EngineInstrumentation = $module$babylonjs.EngineInstrumentation;
  var toString = Kotlin.toString;
  var Long$Companion$MIN_VALUE = Kotlin.Long.MIN_VALUE;
  var Long$Companion$MAX_VALUE = Kotlin.Long.MAX_VALUE;
  var isFinite = Kotlin.kotlin.isFinite_yrwdxr$;
  var roundToInt = Kotlin.kotlin.math.roundToInt_yrwdxr$;
  var abs = Kotlin.kotlin.math.abs_za3lpa$;
  var Math_0 = Math;
  function MeshMover(index, node, position, velocity) {
    this.index = index;
    this.node = node;
    this.position = position;
    this.velocity = velocity;
    this.node.getScene().onBeforeRenderObservable.add(MeshMover_init$lambda(this));
  }
  function MeshMover_init$lambda(this$MeshMover) {
    return function (scene, eventState) {
      this$MeshMover.position = new Vector3(this$MeshMover.position.x + this$MeshMover.velocity.x, this$MeshMover.position.y + this$MeshMover.velocity.y, this$MeshMover.position.z + this$MeshMover.velocity.z);
      this$MeshMover.node.position = this$MeshMover.position;
      this$MeshMover.node.scaling = new Vector3(0.01, 0.01, 0.01);
      if (this$MeshMover.position.x > 1.0) {
        var tmp$ = this$MeshMover.velocity;
        var x = this$MeshMover.velocity.x;
        tmp$.x = -Math_0.abs(x);
      }
      if (this$MeshMover.position.x < -1.0) {
        var tmp$_0 = this$MeshMover.velocity;
        var x_0 = this$MeshMover.velocity.x;
        tmp$_0.x = Math_0.abs(x_0);
      }
      if (this$MeshMover.position.y > 1.0) {
        var tmp$_1 = this$MeshMover.velocity;
        var x_1 = this$MeshMover.velocity.y;
        tmp$_1.y = -Math_0.abs(x_1);
      }
      if (this$MeshMover.position.y < -1.0) {
        var tmp$_2 = this$MeshMover.velocity;
        var x_2 = this$MeshMover.velocity.y;
        tmp$_2.y = Math_0.abs(x_2);
      }
      if (this$MeshMover.position.z > 1.0) {
        var tmp$_3 = this$MeshMover.velocity;
        var x_3 = this$MeshMover.velocity.z;
        tmp$_3.z = -Math_0.abs(x_3);
      }
      if (this$MeshMover.position.z < -1.0) {
        var tmp$_4 = this$MeshMover.velocity;
        var x_4 = this$MeshMover.velocity.z;
        tmp$_4.z = Math_0.abs(x_4);
      }
      return Unit;
    };
  }
  MeshMover.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MeshMover',
    interfaces: []
  };
  function main$lambda(closure$random) {
    return function (assetContainer) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$ = assetContainer.meshes;
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var originalMesh = tmp$[tmp$_0];
        if (Kotlin.isType(originalMesh, Mesh)) {
          originalMesh.isPickable = false;
          originalMesh.doNotSyncBoundingInfo = true;
          originalMesh.cullingStrategy = AbstractMesh$Companion.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY;
          originalMesh.convertToUnIndexedMesh();
        }
      }
      for (var index = 0; index < 5000; index++) {
        tmp$_1 = assetContainer.meshes;
        for (tmp$_2 = 0; tmp$_2 !== tmp$_1.length; ++tmp$_2) {
          var originalMesh_0 = tmp$_1[tmp$_2];
          if (Kotlin.isType(originalMesh_0, Mesh)) {
            var newInstance = originalMesh_0.createInstance('i');
            newInstance.isPickable = false;
            newInstance.doNotSyncBoundingInfo = true;
            newInstance.cullingStrategy = AbstractMesh$Companion.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY;
            new MeshMover(index, newInstance, newInstance.position, new Vector3((closure$random.nextDouble() - 0.5) * 0.01, (closure$random.nextDouble() - 0.5) * 0.01, (closure$random.nextDouble() - 0.5) * 0.01));
          }
        }
      }
      return Unit;
    };
  }
  function main() {
    var scene = createScene('renderCanvas', true);
    scene.createDefaultCameraOrLight(true, true, true);
    scene.createDefaultEnvironment();
    var random = Random(0);
    var onSuccess = main$lambda(random);
    SceneLoader$Companion.LoadAssetContainer('', 'sphere.babylon', scene, onSuccess);
    createTool(scene);
    runRenderLoop(scene);
  }
  function createTool$lambda(closure$scene, closure$text1, closure$instrumentation) {
    return function () {
      closure$text1.v.text = 'FPS: ' + toPrecision(closure$scene.getEngine().getFps(), 1) + '';
      closure$text1.v.text = closure$text1.v.text + ('\n' + '5M triangles');
      closure$text1.v.text = closure$text1.v.text + ('\n' + 'current frame time (GPU): ' + toPrecision(closure$instrumentation.v.gpuFrameTimeCounter.current * 1.0E-6, 2) + 'ms');
      closure$text1.v.text = closure$text1.v.text + ('\n' + 'average frame time (GPU): ' + toPrecision(closure$instrumentation.v.gpuFrameTimeCounter.average * 1.0E-6, 2) + 'ms');
      closure$text1.v.text = closure$text1.v.text + ('\n' + 'total shader compilation time: ' + toPrecision(closure$instrumentation.v.shaderCompilationTimeCounter.total, 2) + 'ms');
      closure$text1.v.text = closure$text1.v.text + ('\n' + 'average shader compilation time: ' + toPrecision(closure$instrumentation.v.shaderCompilationTimeCounter.average, 2) + 'ms');
      closure$text1.v.text = closure$text1.v.text + ('\n' + 'compiler shaders count: ' + toString(closure$instrumentation.v.shaderCompilationTimeCounter.count));
      return Unit;
    };
  }
  function createTool(scene) {
    var text1 = {v: new TextBlock()};
    text1.v.text = '';
    text1.v.color = 'white';
    text1.v.fontSize = 16;
    text1.v.height = '150px';
    var advancedTexture = AdvancedDynamicTexture$Companion.CreateFullscreenUI('UI');
    advancedTexture.addControl(text1.v);
    var instrumentation = {v: new EngineInstrumentation(scene.getEngine())};
    instrumentation.v.captureGPUFrameTime = true;
    instrumentation.v.captureShaderCompilationTime = true;
    scene.registerBeforeRender(createTool$lambda(scene, text1, instrumentation));
  }
  function toPrecision($receiver, precision) {
    var precisionFactor = pow(10, precision);
    var normal = $receiver * precisionFactor;
    if (normal < Long$Companion$MIN_VALUE.toNumber() || normal > Long$Companion$MAX_VALUE.toNumber() || !isFinite(normal))
      return normal.toString();
    var value = roundToInt(normal);
    var absValue = abs(value);
    var sign = value < 0 ? '-' : '';
    if (precision === 0) {
      return sign + (absValue / precisionFactor | 0);
    }
    var remain = (absValue % precisionFactor).toString();
    while (remain.length < precision) {
      remain = '0' + remain;
    }
    return sign + (absValue / precisionFactor | 0) + '.' + remain;
  }
  function pow($receiver, x) {
    return powInt($receiver, x);
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
  var package$casper = _.casper || (_.casper = {});
  var package$app = package$casper.app || (package$casper.app = {});
  package$app.MeshMover = MeshMover;
  package$app.main = main;
  package$app.createTool_jkzhlf$ = createTool;
  package$app.toPrecision_j6vyb1$ = toPrecision;
  package$app.pow_dqglrj$ = pow;
  package$app.powInt_vux9f0$ = powInt;
  main();
  Kotlin.defineModule('example-performance', _);
  return _;
}));

//# sourceMappingURL=example-performance.js.map
