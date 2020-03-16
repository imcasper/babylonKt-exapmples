(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'babylonKt', 'babylonjs', 'babylon-helper', 'signalKt'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('babylonKt'), require('babylonjs'), require('babylon-helper'), require('signalKt'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'example-experiment'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'example-experiment'.");
    }
    if (typeof babylonKt === 'undefined') {
      throw new Error("Error loading module 'example-experiment'. Its dependency 'babylonKt' was not found. Please, check whether 'babylonKt' is loaded prior to 'example-experiment'.");
    }
    if (typeof babylonjs === 'undefined') {
      throw new Error("Error loading module 'example-experiment'. Its dependency 'babylonjs' was not found. Please, check whether 'babylonjs' is loaded prior to 'example-experiment'.");
    }
    if (typeof this['babylon-helper'] === 'undefined') {
      throw new Error("Error loading module 'example-experiment'. Its dependency 'babylon-helper' was not found. Please, check whether 'babylon-helper' is loaded prior to 'example-experiment'.");
    }
    if (typeof signalKt === 'undefined') {
      throw new Error("Error loading module 'example-experiment'. Its dependency 'signalKt' was not found. Please, check whether 'signalKt' is loaded prior to 'example-experiment'.");
    }
    root['example-experiment'] = factory(typeof this['example-experiment'] === 'undefined' ? {} : this['example-experiment'], kotlin, babylonKt, babylonjs, this['babylon-helper'], signalKt);
  }
}(this, function (_, Kotlin, $module$babylonKt, $module$babylonjs, $module$babylon_helper, $module$signalKt) {
  'use strict';
  var createScene = $module$babylonKt.BABYLON.extension.createScene_ivxn3r$;
  var Vector3 = $module$babylonjs.Vector3;
  var SceneLoader$Companion = $module$babylonjs.SceneLoader;
  var AssetManager = $module$babylon_helper.casper.asset.AssetManager;
  var Unit = Kotlin.kotlin.Unit;
  var Color4 = $module$babylonjs.Color4;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var runRenderLoop = $module$babylonKt.BABYLON.extension.runRenderLoop_w7gcas$;
  var DirectionalLight = $module$babylonjs.DirectionalLight;
  var Inspector = $module$babylon_helper.casper.util.Inspector;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var PBRMaterial = $module$babylonjs.PBRMaterial;
  var MeshBuilder$Companion = $module$babylonjs.MeshBuilder;
  var SphereOptions = $module$babylonKt.BABYLON.SphereOptions;
  var first = Kotlin.kotlin.collections.first_us0mfu$;
  var ShadowGenerator = $module$babylonjs.ShadowGenerator;
  var throwCCE = Kotlin.throwCCE;
  var Mesh = $module$babylonjs.Mesh;
  var Model = $module$babylon_helper.casper.model.Model;
  var Texture = $module$babylonjs.Texture;
  var AbstractMesh = $module$babylonjs.AbstractMesh;
  var forChildren = $module$babylon_helper.casper.util.forChildren_wzp6uw$;
  var InstancedMesh = $module$babylonjs.InstancedMesh;
  var ArcRotateCamera = $module$babylonjs.ArcRotateCamera;
  var PromiseSignal = $module$signalKt.casper.signal.PromiseSignal;
  var PromiseUnion = $module$signalKt.casper.signal.PromiseUnion;
  var Throwable = Error;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var ensureNotNull = Kotlin.ensureNotNull;
  function main$lambda$lambda(closure$scene, closure$manager) {
    return function (it) {
      new Demo(closure$scene, closure$manager, it);
      return Unit;
    };
  }
  function main$lambda$lambda_0(closure$scene) {
    return function (it) {
      closure$scene.clearColor = new Color4(1.0, 0.0, 0.0);
      println(it);
      return Unit;
    };
  }
  function main$lambda(closure$manager, closure$scene) {
    return function (it) {
      createAssetsArrayLoader(closure$manager).then_fri4qn$(main$lambda$lambda(closure$scene, closure$manager), main$lambda$lambda_0(closure$scene));
      return Unit;
    };
  }
  function main() {
    var tmp$;
    var scene = createScene('renderCanvas', true);
    scene.createDefaultCamera(true, true, true);
    (tmp$ = scene.activeCamera) != null ? (tmp$.position = new Vector3(5.0, 5.0, 5.0)) : null;
    SceneLoader$Companion.ShowLoadingScreen = false;
    var manager = new AssetManager(scene);
    manager.atlases.loader_61zpoe$('atlas.atlas').thenAccept_qlkmfe$(main$lambda(manager, scene));
    runRenderLoop(scene);
  }
  function Demo(scene, manager, assets) {
    this.scene = scene;
    this.manager = manager;
    this.assets = assets;
    this.createSkyBox();
    var shadow = new Shadow(this.scene);
    new Inspector(this.scene);
    new RobotDemo(this.scene, shadow, this.assets);
  }
  Demo.prototype.createSkyBox = function () {
    var light = new DirectionalLight('light', (new Vector3(-1.0, -1.0, -1.0)).normalize(), this.scene);
    light.intensity = 5.0;
  };
  Demo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Demo',
    interfaces: []
  };
  function RobotDemo(scene, shadow, assets) {
    this.scene = scene;
    this.shadow = shadow;
    this.assets = assets;
    this.steelMaterial = new PBRMaterial('', this.scene);
    var tmp$, tmp$_0;
    this.steelMaterial.albedoTexture = new Texture('atlas/unknown.png', this.scene);
    (tmp$ = this.steelMaterial.albedoTexture) != null ? (tmp$.coordinatesIndex = 0) : null;
    this.steelMaterial.metallicTexture = new Texture('atlas/steel_metallic.png', this.scene);
    (tmp$_0 = this.steelMaterial.metallicTexture) != null ? (tmp$_0.coordinatesIndex = 0) : null;
    this.steelMaterial.useRoughnessFromMetallicTextureAlpha = true;
    this.createRobot_0();
  }
  RobotDemo.prototype.createRobot_0 = function () {
    var tmp$, tmp$_0;
    var oilMaterial = new PBRMaterial('oil-material', this.scene);
    oilMaterial.alpha = 0.6;
    var sphere = MeshBuilder$Companion.CreateSphere('test', new SphereOptions());
    this.scene.removeMesh(sphere);
    var sphere2 = sphere.createInstance('');
    sphere2.position = new Vector3(2.5, 0.0, 0.0);
    sphere2.sourceMesh.material = oilMaterial;
    sphere2.sourceMesh.receiveShadows = true;
    (Kotlin.isType(tmp$ = first(this.scene.lights).getShadowGenerator(), ShadowGenerator) ? tmp$ : throwCCE()).addShadowCaster(sphere);
    (Kotlin.isType(tmp$_0 = first(this.scene.lights).getShadowGenerator(), ShadowGenerator) ? tmp$_0 : throwCCE()).addShadowCaster(sphere2);
    var $receiver = this.assets.robot_builder.assetContainer.meshes;
    var tmp$_1;
    for (tmp$_1 = 0; tmp$_1 !== $receiver.length; ++tmp$_1) {
      var element = $receiver[tmp$_1];
      if (Kotlin.isType(element, Mesh)) {
        element.material = oilMaterial;
      }
    }
    var model2 = new Model(this.assets.robot_builder);
    model2.node.position = new Vector3(2.0, 0.0, 0.0);
    model2.addToScene();
  };
  RobotDemo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RobotDemo',
    interfaces: []
  };
  function Shadow(scene) {
    this.scene = scene;
    var tmp$, tmp$_0;
    this.camera = Kotlin.isType(tmp$ = this.scene.activeCamera, ArcRotateCamera) ? tmp$ : throwCCE();
    this.light = Kotlin.isType(tmp$_0 = first(this.scene.lights), DirectionalLight) ? tmp$_0 : throwCCE();
    this.shadowGenerator = new ShadowGenerator(1024.0, this.light);
    this.camera.minZ = 5.0;
    this.light.shadowFrustumSize = 100.0;
    this.light.autoCalcShadowZBounds = true;
    this.light.autoUpdateExtends = false;
    this.scene.onBeforeRenderObservable.add(Shadow_init$lambda(this));
  }
  function Shadow$addShadowCaster$lambda(this$Shadow) {
    return function (it) {
      this$Shadow.addShadowCaster_mnqvv$(it);
      return Unit;
    };
  }
  Shadow.prototype.addShadowCaster_mnqvv$ = function (node) {
    if (Kotlin.isType(node, AbstractMesh)) {
      this.shadowGenerator.addShadowCaster(node);
    }
    forChildren(node, Shadow$addShadowCaster$lambda(this));
  };
  function Shadow$addShadowReceiver$lambda(this$Shadow) {
    return function (it) {
      this$Shadow.addShadowReceiver_mnqvv$(it);
      return Unit;
    };
  }
  Shadow.prototype.addShadowReceiver_mnqvv$ = function (node) {
    if (Kotlin.isType(node, InstancedMesh)) {
      node.sourceMesh.receiveShadows = true;
    }
    forChildren(node, Shadow$addShadowReceiver$lambda(this));
  };
  function Shadow_init$lambda(this$Shadow) {
    return function (f, f_0) {
      this$Shadow.light.position = new Vector3(this$Shadow.camera.target.x, this$Shadow.light.shadowFrustumSize / 2.0, this$Shadow.camera.target.z);
      return Unit;
    };
  }
  Shadow.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Shadow',
    interfaces: []
  };
  function createAssetsArrayLoader$lambda(closure$manager, closure$result) {
    return function (it) {
      try {
        var assets = new Assets(closure$manager);
        closure$result.accept_11rb$(assets);
      }
       catch (t) {
        if (Kotlin.isType(t, Throwable)) {
          closure$result.reject_11rc$(t.toString());
        }
         else
          throw t;
      }
      return Unit;
    };
  }
  function createAssetsArrayLoader$lambda_0(closure$result) {
    return function (it) {
      closure$result.reject_11rc$(joinToString(it, '\n\n'));
      return Unit;
    };
  }
  function createAssetsArrayLoader(manager) {
    var result = new PromiseSignal();
    (new PromiseUnion([manager.models.loader_61zpoe$('robot_builder.babylon'), manager.models.loader_61zpoe$('animation.babylon'), manager.models.loader_61zpoe$('drill.babylon'), manager.models.loader_61zpoe$('construction_robot.babylon'), manager.models.loader_61zpoe$('robot_truck.babylon'), manager.models.loader_61zpoe$('scene.babylon'), manager.models.loader_61zpoe$('cube.babylon'), manager.models.loader_61zpoe$('robot_cargo.babylon'), manager.models.loader_61zpoe$('model.babylon'), manager.models.loader_61zpoe$('materials.babylon')])).then_fri4qn$(createAssetsArrayLoader$lambda(manager, result), createAssetsArrayLoader$lambda_0(result));
    return result;
  }
  function Assets(manager) {
    this.robot_builder = ensureNotNull(manager.getModel_61zpoe$('robot_builder.babylon'));
    this.animation = ensureNotNull(manager.getModel_61zpoe$('animation.babylon'));
    this.drill = ensureNotNull(manager.getModel_61zpoe$('drill.babylon'));
    this.construction_robot = ensureNotNull(manager.getModel_61zpoe$('construction_robot.babylon'));
    this.robot_truck = ensureNotNull(manager.getModel_61zpoe$('robot_truck.babylon'));
    this.scene = ensureNotNull(manager.getModel_61zpoe$('scene.babylon'));
    this.cube = ensureNotNull(manager.getModel_61zpoe$('cube.babylon'));
    this.robot_cargo = ensureNotNull(manager.getModel_61zpoe$('robot_cargo.babylon'));
    this.model = ensureNotNull(manager.getModel_61zpoe$('model.babylon'));
    this.materials = ensureNotNull(manager.getModel_61zpoe$('materials.babylon'));
  }
  Assets.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Assets',
    interfaces: []
  };
  var package$casper = _.casper || (_.casper = {});
  var package$app = package$casper.app || (package$casper.app = {});
  package$app.main = main;
  package$app.Demo = Demo;
  package$app.RobotDemo = RobotDemo;
  package$app.Shadow = Shadow;
  var package$asset = package$casper.asset || (package$casper.asset = {});
  package$asset.createAssetsArrayLoader_kpwjgh$ = createAssetsArrayLoader;
  package$asset.Assets = Assets;
  main();
  Kotlin.defineModule('example-experiment', _);
  return _;
}));

//# sourceMappingURL=example-experiment.js.map
