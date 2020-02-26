(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'babylonjs', 'babylonKt'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('babylonjs'), require('babylonKt'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'example-simple'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'example-simple'.");
    }
    if (typeof babylonjs === 'undefined') {
      throw new Error("Error loading module 'example-simple'. Its dependency 'babylonjs' was not found. Please, check whether 'babylonjs' is loaded prior to 'example-simple'.");
    }
    if (typeof babylonKt === 'undefined') {
      throw new Error("Error loading module 'example-simple'. Its dependency 'babylonKt' was not found. Please, check whether 'babylonKt' is loaded prior to 'example-simple'.");
    }
    root['example-simple'] = factory(typeof this['example-simple'] === 'undefined' ? {} : this['example-simple'], kotlin, babylonjs, babylonKt);
  }
}(this, function (_, Kotlin, $module$babylonjs, $module$babylonKt) {
  'use strict';
  var Scene = $module$babylonjs.Scene;
  var MeshBuilder$Companion = $module$babylonjs.MeshBuilder;
  var SphereOptions = $module$babylonKt.BABYLON.SphereOptions;
  var Unit = Kotlin.kotlin.Unit;
  var Error_init = Kotlin.kotlin.Error_init_pdl1vj$;
  var Engine = $module$babylonjs.Engine;
  function createScene(canvas, engine) {
    var scene = new Scene(engine);
    scene.createDefaultCameraOrLight(true, true, true);
    scene.createDefaultEnvironment();
    MeshBuilder$Companion.CreateSphere('sphere', new SphereOptions(void 0, void 0, void 0, 0.5, 0.5), scene);
    return scene;
  }
  function main$lambda(event) {
    event.stopImmediatePropagation();
    return Unit;
  }
  function main$lambda_0(closure$engine, closure$scene) {
    return function () {
      closure$engine.resize();
      closure$scene.render();
      return Unit;
    };
  }
  function main() {
    document.addEventListener('oncontextmenu', main$lambda);
    var canvas = document.getElementById('renderCanvas');
    if (!Kotlin.isType(canvas, HTMLCanvasElement)) {
      throw Error_init('Cant find canvas with id renderCanvas');
    }
    var engine = new Engine(canvas, true);
    var scene = createScene(canvas, engine);
    engine.runRenderLoop(main$lambda_0(engine, scene));
  }
  var package$casper = _.casper || (_.casper = {});
  var package$app = package$casper.app || (package$casper.app = {});
  package$app.createScene_lxjkrx$ = createScene;
  package$app.main = main;
  main();
  Kotlin.defineModule('example-simple', _);
  return _;
}));

//# sourceMappingURL=example-simple.js.map
