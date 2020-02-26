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
  var ModelFactory = $module$babylon_helper.casper.model.ModelFactory;
  var addMeshToScene = $module$babylon_helper.casper.util.addMeshToScene_jig5h0$;
  var AxesViewer = $module$babylonjs.AxesViewer;
  var Color3 = $module$babylonjs.Color3;
  var equals = Kotlin.equals;
  var PBRMaterial = $module$babylonjs.PBRMaterial;
  var MeshMerger = $module$babylon_helper.casper.model.MeshMerger;
  var AbstractMesh = $module$babylonjs.AbstractMesh;
  var forChildren = $module$babylon_helper.casper.util.forChildren_wzp6uw$;
  var playAnimation = $module$babylon_helper.casper.util.playAnimation_ys0c4h$;
  var DirectionalLight = $module$babylonjs.DirectionalLight;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var MaterialReplacer = $module$babylon_helper.casper.model.MaterialReplacer;
  var Texture = $module$babylonjs.Texture;
  var createAndPlaceInstance = $module$babylon_helper.casper.model.createAndPlaceInstance_tr50zu$;
  var InstancedMesh = $module$babylonjs.InstancedMesh;
  var first = Kotlin.kotlin.collections.first_us0mfu$;
  var throwCCE = Kotlin.throwCCE;
  var ShadowGenerator = $module$babylonjs.ShadowGenerator;
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
    scene.useRightHandedSystem = true;
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
    this.scene.debugLayer.show();
    this.createSkyBox();
    new ShadowDemo(this.scene, this.assets);
  }
  Demo.prototype.createMat = function () {
    addMeshToScene(ModelFactory.Companion.create_53ia2n$(this.assets.materials));
    new AxesViewer(this.scene);
  };
  function Demo$createMine$lambda$lambda(it) {
    if (Kotlin.isType(it, AbstractMesh)) {
      it.isPickable = false;
      it.cullingStrategy = AbstractMesh.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY;
    }
    return Unit;
  }
  function Demo$createMine$lambda(closure$models, closure$positionList, closure$modelData2) {
    return function (f, f_0) {
      var tmp$;
      tmp$ = closure$models.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        element.position.x = element.position.x + 0.05;
        element.position = element.position;
      }
      for (var iteration = 1; iteration <= 7; iteration++) {
        if (closure$positionList.isEmpty())
          return;
        var position = closure$positionList.removeAt_za3lpa$(0);
        var model = ModelFactory.Companion.createAndPlace_urgq93$(closure$modelData2);
        forChildren(model, Demo$createMine$lambda$lambda);
        model.position = position;
        model.scaling = new Vector3(0.5, 0.5, 0.5);
        playAnimation(model, true);
        closure$models.add_11rb$(model);
      }
      return Unit;
    };
  }
  Demo.prototype.createMine = function () {
    var tmp$;
    var $receiver = this.assets.robot_builder.assetContainer.materials;
    var tmp$_0;
    for (tmp$_0 = 0; tmp$_0 !== $receiver.length; ++tmp$_0) {
      var element = $receiver[tmp$_0];
      var companyColor = new Color3(0.0, 0.1, 0.7);
      var companyColor2 = new Color3(0.0, 0.1, 0.7);
      if (equals(element.name, 'Red') && Kotlin.isType(element, PBRMaterial)) {
        element.albedoColor = companyColor;
      }
      if (equals(element.name, 'Green') && Kotlin.isType(element, PBRMaterial)) {
        element.albedoColor = companyColor2;
      }
    }
    tmp$ = MeshMerger.Companion.merge_uw5ica$(this.assets.robot_builder, this.assets.robot_builder.name);
    if (tmp$ == null) {
      return;
    }
    var modelData2 = tmp$;
    var positionList = ArrayList_init();
    var R = 6;
    for (var x = -R | 0; x <= R; x++) {
      for (var y = -R | 0; y <= R; y++) {
        for (var z = -R | 0; z <= R; z++) {
          positionList.add_11rb$(new Vector3(x, y, z));
        }
      }
    }
    var models = ArrayList_init();
    this.scene.onAfterRenderObservable.add(Demo$createMine$lambda(models, positionList, modelData2));
    println(this.assets.robot_builder.instances.size.toString() + '=>' + modelData2.instances.size);
  };
  Demo.prototype.createSkyBox = function () {
    var light = new DirectionalLight('light', (new Vector3(-1.0, -1.0, -0.5)).normalize(), this.scene);
    light.intensity = 5.0;
  };
  Demo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Demo',
    interfaces: []
  };
  function RobotDemo(scene, assets) {
    this.scene = scene;
    this.assets = assets;
    this.steelMaterial = new PBRMaterial('', this.scene);
    var tmp$, tmp$_0;
    this.steelMaterial.albedoTexture = new Texture('atlas/unknown.png', this.scene);
    (tmp$ = this.steelMaterial.albedoTexture) != null ? (tmp$.coordinatesIndex = 0) : null;
    this.steelMaterial.metallicTexture = new Texture('atlas/steel_metallic.png', this.scene);
    (tmp$_0 = this.steelMaterial.metallicTexture) != null ? (tmp$_0.coordinatesIndex = 0) : null;
    this.steelMaterial.useRoughnessFromMetallicTextureAlpha = true;
  }
  function RobotDemo$createRobotData$lambda(this$RobotDemo) {
    return function (it) {
      return this$RobotDemo.steelMaterial;
    };
  }
  RobotDemo.prototype.createRobotData_0 = function (original) {
    var modelData = original.clone_61zpoe$('');
    MaterialReplacer.Companion.replace_klijsx$(modelData, RobotDemo$createRobotData$lambda(this));
    return modelData;
  };
  RobotDemo.prototype.createRobot_0 = function () {
    var soilMaterial = new PBRMaterial('', this.scene);
    soilMaterial.albedoTexture = new Texture('atlas/soil.png', this.scene);
    soilMaterial.metallic = 0.0;
    soilMaterial.roughness = 0.9;
    var oilMaterial = new PBRMaterial('', this.scene);
    oilMaterial.albedoColor = new Color3(0.02, 0.01, 0.03);
    oilMaterial.metallicTexture = new Texture('atlas/oil.png', this.scene);
    oilMaterial.roughness = 0.4;
    oilMaterial.alpha = 0.9;
    var robot_truck = this.createRobotData_0(this.assets.robot_truck);
    var model = createAndPlaceInstance(robot_truck);
  };
  RobotDemo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RobotDemo',
    interfaces: []
  };
  function ShadowDemo(scene, assets) {
    this.scene = scene;
    this.assets = assets;
    var tmp$;
    this.light = Kotlin.isType(tmp$ = first(this.scene.lights), Object) ? tmp$ : throwCCE();
    this.shadowGenerator = new ShadowGenerator(1024.0, this.light);
    for (var x = 0; x <= 6; x++) {
      for (var y = 0; y <= 6; y++) {
        this.createModel_0(new Vector3(x * 10.0 - 30.0, 0.5, y * 10.0 - 30.0));
      }
    }
    var cube = createAndPlaceInstance(this.assets.cube);
    cube.position = new Vector3(0.0, -1.0, 0.0);
    cube.scaling = new Vector3(100.0, 1.0, 100.0);
    new AxesViewer(this.scene);
    this.addShadowReceiver_0(this.shadowGenerator, cube);
  }
  ShadowDemo.prototype.createModel_0 = function (position) {
    var model = createAndPlaceInstance(this.assets.animation);
    playAnimation(model, true);
    this.addShadowCaster_0(this.shadowGenerator, model);
    this.addShadowReceiver_0(this.shadowGenerator, model);
    model.position = position;
  };
  function ShadowDemo$addShadowCaster$lambda(closure$shadowGenerator, this$ShadowDemo) {
    return function (it) {
      this$ShadowDemo.addShadowCaster_0(closure$shadowGenerator, it);
      return Unit;
    };
  }
  ShadowDemo.prototype.addShadowCaster_0 = function (shadowGenerator, node) {
    if (Kotlin.isType(node, AbstractMesh)) {
      shadowGenerator.addShadowCaster(node);
    }
    forChildren(node, ShadowDemo$addShadowCaster$lambda(shadowGenerator, this));
  };
  function ShadowDemo$addShadowReceiver$lambda(closure$shadowGenerator, this$ShadowDemo) {
    return function (it) {
      this$ShadowDemo.addShadowReceiver_0(closure$shadowGenerator, it);
      return Unit;
    };
  }
  ShadowDemo.prototype.addShadowReceiver_0 = function (shadowGenerator, node) {
    if (Kotlin.isType(node, InstancedMesh)) {
      node.sourceMesh.receiveShadows = true;
    }
    forChildren(node, ShadowDemo$addShadowReceiver$lambda(shadowGenerator, this));
  };
  ShadowDemo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ShadowDemo',
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
  package$app.ShadowDemo = ShadowDemo;
  var package$asset = package$casper.asset || (package$casper.asset = {});
  package$asset.createAssetsArrayLoader_kpwjgh$ = createAssetsArrayLoader;
  package$asset.Assets = Assets;
  main();
  Kotlin.defineModule('example-experiment', _);
  return _;
}));

//# sourceMappingURL=example-experiment.js.map
