define(['exports', 'kotlin', 'babylonjs'], function (_, Kotlin, $module$babylonjs) {
  'use strict';
  var Unit = Kotlin.kotlin.Unit;
  var Mesh = $module$babylonjs.Mesh;
  var Error_init = Kotlin.kotlin.Error_init_pdl1vj$;
  var Engine_init = $module$babylonjs.Engine;
  var Scene = $module$babylonjs.Scene;
  var Vector3 = $module$babylonjs.Vector3;
  var TargetCamera = $module$babylonjs.TargetCamera;
  var Throwable = Error;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  function setVisibleRecursive$lambda(it) {
    return true;
  }
  function setVisibleRecursive($receiver, value) {
    if ($receiver.isVisible === value)
      return;
    $receiver.isVisible = value;
    var $receiver_0 = $receiver.getChildMeshes(void 0, setVisibleRecursive$lambda);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
      var element = $receiver_0[tmp$];
      setVisibleRecursive(element, value);
    }
  }
  function setPlayAnimation$lambda(it) {
    return true;
  }
  function setPlayAnimation($receiver, loop, speedRatio) {
    if (speedRatio === void 0)
      speedRatio = 1.0;
    var $receiver_0 = $receiver.getAnimationRanges();
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
      var element = $receiver_0[tmp$];
      $receiver.beginAnimation(element.name, loop, speedRatio);
    }
    var $receiver_1 = $receiver.getChildMeshes(void 0, setPlayAnimation$lambda);
    var tmp$_0;
    for (tmp$_0 = 0; tmp$_0 !== $receiver_1.length; ++tmp$_0) {
      var element_0 = $receiver_1[tmp$_0];
      setPlayAnimation(element_0, loop, speedRatio);
    }
  }
  function setStopAnimation$lambda(it) {
    return true;
  }
  function setStopAnimation($receiver) {
    var $receiver_0 = $receiver.getAnimationRanges();
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
      var element = $receiver_0[tmp$];
      var animatable = $receiver.beginAnimation(element.name, true, 1.0);
      animatable.stop();
    }
    var $receiver_1 = $receiver.getChildMeshes(void 0, setStopAnimation$lambda);
    var tmp$_0;
    for (tmp$_0 = 0; tmp$_0 !== $receiver_1.length; ++tmp$_0) {
      var element_0 = $receiver_1[tmp$_0];
      setStopAnimation(element_0);
    }
  }
  function setFrameAnimation$lambda(it) {
    return true;
  }
  function setFrameAnimation($receiver, frame) {
    var $receiver_0 = $receiver.getAnimationRanges();
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
      var element = $receiver_0[tmp$];
      var animatable = $receiver.beginAnimation(element.name, true, 1.0);
      animatable.goToFrame(frame);
      animatable.pause();
    }
    var $receiver_1 = $receiver.getChildMeshes(void 0, setFrameAnimation$lambda);
    var tmp$_0;
    for (tmp$_0 = 0; tmp$_0 !== $receiver_1.length; ++tmp$_0) {
      var element_0 = $receiver_1[tmp$_0];
      if (Kotlin.isType(element_0, Mesh)) {
        setFrameAnimation(element_0, frame);
      }
    }
  }
  function createScene$lambda(event) {
    event.stopImmediatePropagation();
    return Unit;
  }
  function createScene(canvasElementId, antiAlias) {
    document.addEventListener('oncontextmenu', createScene$lambda);
    var canvas = document.getElementById(canvasElementId);
    if (!Kotlin.isType(canvas, HTMLCanvasElement)) {
      throw Error_init('Cant find canvas with id ' + canvasElementId);
    }
    var engine = new Engine_init(canvas, antiAlias);
    var scene = new Scene(engine);
    var t = new TargetCamera('empty', new Vector3(5.0, 5.0, 5.0), scene);
    t.setTarget(new Vector3(0.0, 0.0, 0.0));
    scene.activeCameras = scene.activeCameras.concat([t]);
    return scene;
  }
  function runRenderLoop$lambda(closure$lastException, closure$engine) {
    return function (it) {
      if (closure$lastException.v == null) {
        closure$engine.resize();
      }
      return Unit;
    };
  }
  function runRenderLoop$lambda_0(closure$lastException, this$runRenderLoop) {
    return function () {
      if (closure$lastException.v == null) {
        try {
          this$runRenderLoop.render();
        }
         catch (exception) {
          if (Kotlin.isType(exception, Throwable)) {
            closure$lastException.v = exception;
            console.error(closure$lastException.v);
          }
           else
            throw exception;
        }
      }
      return Unit;
    };
  }
  function runRenderLoop($receiver) {
    var engine = $receiver.getEngine();
    var lastException = {v: null};
    var onResize = runRenderLoop$lambda(lastException, engine);
    var onRender = runRenderLoop$lambda_0(lastException, $receiver);
    engine.runRenderLoop(onRender);
    window.addEventListener('resize', onResize);
  }
  function MouseButton() {
    MouseButton$Companion_getInstance();
  }
  function MouseButton$Companion() {
    MouseButton$Companion_instance = this;
    this.LEFT = 0.0;
    this.MIDDLE = 1.0;
    this.RIGHT = 2.0;
  }
  MouseButton$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MouseButton$Companion_instance = null;
  function MouseButton$Companion_getInstance() {
    if (MouseButton$Companion_instance === null) {
      new MouseButton$Companion();
    }
    return MouseButton$Companion_instance;
  }
  MouseButton.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MouseButton',
    interfaces: []
  };
  function SphereOptions(segments, diameter, diameterX, diameterY, diameterZ, arc, slice, sideOrientation, frontUVs, backUVs, updatable) {
    if (segments === void 0)
      segments = null;
    if (diameter === void 0)
      diameter = null;
    if (diameterX === void 0)
      diameterX = null;
    if (diameterY === void 0)
      diameterY = null;
    if (diameterZ === void 0)
      diameterZ = null;
    if (arc === void 0)
      arc = null;
    if (slice === void 0)
      slice = null;
    if (sideOrientation === void 0)
      sideOrientation = null;
    if (frontUVs === void 0)
      frontUVs = null;
    if (backUVs === void 0)
      backUVs = null;
    if (updatable === void 0)
      updatable = null;
    this.segments = segments;
    this.diameter = diameter;
    this.diameterX = diameterX;
    this.diameterY = diameterY;
    this.diameterZ = diameterZ;
    this.arc = arc;
    this.slice = slice;
    this.sideOrientation = sideOrientation;
    this.frontUVs = frontUVs;
    this.backUVs = backUVs;
    this.updatable = updatable;
  }
  SphereOptions.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SphereOptions',
    interfaces: []
  };
  function BoxOptions(size, width, height, depth, faceUV, faceColors, sideOrientation, frontUVs, backUVs, updatable) {
    if (size === void 0)
      size = null;
    if (width === void 0)
      width = null;
    if (height === void 0)
      height = null;
    if (depth === void 0)
      depth = null;
    if (faceUV === void 0)
      faceUV = null;
    if (faceColors === void 0)
      faceColors = null;
    if (sideOrientation === void 0)
      sideOrientation = null;
    if (frontUVs === void 0)
      frontUVs = null;
    if (backUVs === void 0)
      backUVs = null;
    if (updatable === void 0)
      updatable = null;
    this.size = size;
    this.width = width;
    this.height = height;
    this.depth = depth;
    this.faceUV = faceUV;
    this.faceColors = faceColors;
    this.sideOrientation = sideOrientation;
    this.frontUVs = frontUVs;
    this.backUVs = backUVs;
    this.updatable = updatable;
  }
  BoxOptions.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BoxOptions',
    interfaces: []
  };
  function DiskOptions(radius, tessellation, arc, updatable, sideOrientation, frontUVs, backUVs) {
    if (radius === void 0)
      radius = null;
    if (tessellation === void 0)
      tessellation = null;
    if (arc === void 0)
      arc = null;
    if (updatable === void 0)
      updatable = null;
    if (sideOrientation === void 0)
      sideOrientation = null;
    if (frontUVs === void 0)
      frontUVs = null;
    if (backUVs === void 0)
      backUVs = null;
    this.radius = radius;
    this.tessellation = tessellation;
    this.arc = arc;
    this.updatable = updatable;
    this.sideOrientation = sideOrientation;
    this.frontUVs = frontUVs;
    this.backUVs = backUVs;
  }
  DiskOptions.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DiskOptions',
    interfaces: []
  };
  function IcoSphereOptions(radius, radiusX, radiusY, radiusZ, flat, subdivisions, sideOrientation, frontUVs, backUVs, updatable) {
    if (radius === void 0)
      radius = null;
    if (radiusX === void 0)
      radiusX = null;
    if (radiusY === void 0)
      radiusY = null;
    if (radiusZ === void 0)
      radiusZ = null;
    if (flat === void 0)
      flat = null;
    if (subdivisions === void 0)
      subdivisions = null;
    if (sideOrientation === void 0)
      sideOrientation = null;
    if (frontUVs === void 0)
      frontUVs = null;
    if (backUVs === void 0)
      backUVs = null;
    if (updatable === void 0)
      updatable = null;
    this.radius = radius;
    this.radiusX = radiusX;
    this.radiusY = radiusY;
    this.radiusZ = radiusZ;
    this.flat = flat;
    this.subdivisions = subdivisions;
    this.sideOrientation = sideOrientation;
    this.frontUVs = frontUVs;
    this.backUVs = backUVs;
    this.updatable = updatable;
  }
  IcoSphereOptions.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IcoSphereOptions',
    interfaces: []
  };
  var package$BABYLON = _.BABYLON || (_.BABYLON = {});
  var package$extension = package$BABYLON.extension || (package$BABYLON.extension = {});
  package$extension.setVisibleRecursive_ombx8e$ = setVisibleRecursive;
  package$extension.setPlayAnimation_55seop$ = setPlayAnimation;
  package$extension.setStopAnimation_spyghy$ = setStopAnimation;
  package$extension.setFrameAnimation_6lrt1g$ = setFrameAnimation;
  package$extension.createScene_ivxn3r$ = createScene;
  package$extension.runRenderLoop_w7gcas$ = runRenderLoop;
  Object.defineProperty(MouseButton, 'Companion', {
    get: MouseButton$Companion_getInstance
  });
  package$BABYLON.MouseButton = MouseButton;
  package$BABYLON.SphereOptions = SphereOptions;
  package$BABYLON.BoxOptions = BoxOptions;
  package$BABYLON.DiskOptions = DiskOptions;
  package$BABYLON.IcoSphereOptions = IcoSphereOptions;
  Kotlin.defineModule('babylonKt', _);
  return _;
});

//# sourceMappingURL=babylonKt.js.map
