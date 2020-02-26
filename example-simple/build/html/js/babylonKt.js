define(['exports', 'kotlin', 'babylonjs'], function (_, Kotlin, $module$babylonjs) {
  'use strict';
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var Unit = Kotlin.kotlin.Unit;
  var Error_init = Kotlin.kotlin.Error_init_pdl1vj$;
  var Engine = $module$babylonjs.Engine;
  var Scene = $module$babylonjs.Scene;
  var Vector3 = $module$babylonjs.Vector3;
  var TargetCamera = $module$babylonjs.TargetCamera;
  var Throwable = Error;
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
  var get_mozIndexedDB = defineInlineFunction('babylonKt.get_mozIndexedDB_nz12v2$', function ($receiver) {
    return $receiver.mozIndexedDB;
  });
  var set_mozIndexedDB = defineInlineFunction('babylonKt.set_mozIndexedDB_pv07r9$', function ($receiver, value) {
    $receiver.mozIndexedDB = value;
  });
  var get_webkitIndexedDB = defineInlineFunction('babylonKt.get_webkitIndexedDB_nz12v2$', function ($receiver) {
    return $receiver.webkitIndexedDB;
  });
  var set_webkitIndexedDB = defineInlineFunction('babylonKt.set_webkitIndexedDB_pv07r9$', function ($receiver, value) {
    $receiver.webkitIndexedDB = value;
  });
  var get_msIndexedDB = defineInlineFunction('babylonKt.get_msIndexedDB_nz12v2$', function ($receiver) {
    return $receiver.msIndexedDB;
  });
  var set_msIndexedDB = defineInlineFunction('babylonKt.set_msIndexedDB_pv07r9$', function ($receiver, value) {
    $receiver.msIndexedDB = value;
  });
  var get_webkitURL = defineInlineFunction('babylonKt.get_webkitURL_nz12v2$', function ($receiver) {
    return $receiver.webkitURL;
  });
  var set_webkitURL = defineInlineFunction('babylonKt.set_webkitURL_6gcixr$', function ($receiver, value) {
    $receiver.webkitURL = value;
  });
  var mozRequestAnimationFrame = defineInlineFunction('babylonKt.mozRequestAnimationFrame_l6ncq1$', function ($receiver, callback) {
    return $receiver.mozRequestAnimationFrame(callback);
  });
  var oRequestAnimationFrame = defineInlineFunction('babylonKt.oRequestAnimationFrame_l6ncq1$', function ($receiver, callback) {
    return $receiver.oRequestAnimationFrame(callback);
  });
  var get_WebGLRenderingContext = defineInlineFunction('babylonKt.get_WebGLRenderingContext_nz12v2$', function ($receiver) {
    return $receiver.WebGLRenderingContext;
  });
  var set_WebGLRenderingContext = defineInlineFunction('babylonKt.set_WebGLRenderingContext_k19mkb$', function ($receiver, value) {
    $receiver.WebGLRenderingContext = value;
  });
  var get_MSGesture = defineInlineFunction('babylonKt.get_MSGesture_nz12v2$', function ($receiver) {
    return $receiver.MSGesture;
  });
  var set_MSGesture = defineInlineFunction('babylonKt.set_MSGesture_jb46v5$', function ($receiver, value) {
    $receiver.MSGesture = value;
  });
  var get_CANNON = defineInlineFunction('babylonKt.get_CANNON_nz12v2$', function ($receiver) {
    return $receiver.CANNON;
  });
  var set_CANNON = defineInlineFunction('babylonKt.set_CANNON_6gcixr$', function ($receiver, value) {
    $receiver.CANNON = value;
  });
  var get_AudioContext = defineInlineFunction('babylonKt.get_AudioContext_nz12v2$', function ($receiver) {
    return $receiver.AudioContext;
  });
  var set_AudioContext = defineInlineFunction('babylonKt.set_AudioContext_abgro4$', function ($receiver, value) {
    $receiver.AudioContext = value;
  });
  var get_webkitAudioContext = defineInlineFunction('babylonKt.get_webkitAudioContext_nz12v2$', function ($receiver) {
    return $receiver.webkitAudioContext;
  });
  var set_webkitAudioContext = defineInlineFunction('babylonKt.set_webkitAudioContext_abgro4$', function ($receiver, value) {
    $receiver.webkitAudioContext = value;
  });
  var get_PointerEvent = defineInlineFunction('babylonKt.get_PointerEvent_nz12v2$', function ($receiver) {
    return $receiver.PointerEvent;
  });
  var set_PointerEvent = defineInlineFunction('babylonKt.set_PointerEvent_6gcixr$', function ($receiver, value) {
    $receiver.PointerEvent = value;
  });
  var get_Math = defineInlineFunction('babylonKt.get_Math_nz12v2$', function ($receiver) {
    return $receiver.Math;
  });
  var set_Math = defineInlineFunction('babylonKt.set_Math_gjdsoy$', function ($receiver, value) {
    $receiver.Math = value;
  });
  var get_Uint8Array = defineInlineFunction('babylonKt.get_Uint8Array_nz12v2$', function ($receiver) {
    return $receiver.Uint8Array;
  });
  var set_Uint8Array = defineInlineFunction('babylonKt.set_Uint8Array_99kp31$', function ($receiver, value) {
    $receiver.Uint8Array = value;
  });
  var get_Float32Array = defineInlineFunction('babylonKt.get_Float32Array_nz12v2$', function ($receiver) {
    return $receiver.Float32Array;
  });
  var set_Float32Array = defineInlineFunction('babylonKt.set_Float32Array_scs7vq$', function ($receiver, value) {
    $receiver.Float32Array = value;
  });
  var get_mozURL = defineInlineFunction('babylonKt.get_mozURL_nz12v2$', function ($receiver) {
    return $receiver.mozURL;
  });
  var set_mozURL = defineInlineFunction('babylonKt.set_mozURL_6gcixr$', function ($receiver, value) {
    $receiver.mozURL = value;
  });
  var get_msURL = defineInlineFunction('babylonKt.get_msURL_nz12v2$', function ($receiver) {
    return $receiver.msURL;
  });
  var set_msURL = defineInlineFunction('babylonKt.set_msURL_6gcixr$', function ($receiver, value) {
    $receiver.msURL = value;
  });
  var get_VRFrameData = defineInlineFunction('babylonKt.get_VRFrameData_nz12v2$', function ($receiver) {
    return $receiver.VRFrameData;
  });
  var set_VRFrameData = defineInlineFunction('babylonKt.set_VRFrameData_6gcixr$', function ($receiver, value) {
    $receiver.VRFrameData = value;
  });
  var get_DracoDecoderModule = defineInlineFunction('babylonKt.get_DracoDecoderModule_nz12v2$', function ($receiver) {
    return $receiver.DracoDecoderModule;
  });
  var set_DracoDecoderModule = defineInlineFunction('babylonKt.set_DracoDecoderModule_6gcixr$', function ($receiver, value) {
    $receiver.DracoDecoderModule = value;
  });
  var requestPointerLock = defineInlineFunction('babylonKt.requestPointerLock_ng27xv$', function ($receiver) {
    $receiver.requestPointerLock();
  });
  var msRequestPointerLock = defineInlineFunction('babylonKt.msRequestPointerLock_ng27xv$', function ($receiver) {
    $receiver.msRequestPointerLock();
  });
  var mozRequestPointerLock = defineInlineFunction('babylonKt.mozRequestPointerLock_ng27xv$', function ($receiver) {
    $receiver.mozRequestPointerLock();
  });
  var webkitRequestPointerLock = defineInlineFunction('babylonKt.webkitRequestPointerLock_ng27xv$', function ($receiver) {
    $receiver.webkitRequestPointerLock();
  });
  var get_isRecording = defineInlineFunction('babylonKt.get_isRecording_ng27xv$', function ($receiver) {
    return $receiver.isRecording;
  });
  var set_isRecording = defineInlineFunction('babylonKt.set_isRecording_o1t3le$', function ($receiver, value) {
    $receiver.isRecording = value;
  });
  var captureStream = defineInlineFunction('babylonKt.captureStream_ng27xv$', function ($receiver) {
    return $receiver.captureStream();
  });
  var captureStream_0 = defineInlineFunction('babylonKt.captureStream_9kue5f$', function ($receiver, fps) {
    return $receiver.captureStream(fps);
  });
  var get_msImageSmoothingEnabled = defineInlineFunction('babylonKt.get_msImageSmoothingEnabled_qtrdl1$', function ($receiver) {
    return $receiver.msImageSmoothingEnabled;
  });
  var set_msImageSmoothingEnabled = defineInlineFunction('babylonKt.set_msImageSmoothingEnabled_fcsaw0$', function ($receiver, value) {
    $receiver.msImageSmoothingEnabled = value;
  });
  var get_mozMovementX = defineInlineFunction('babylonKt.get_mozMovementX_apx4ki$', function ($receiver) {
    return $receiver.mozMovementX;
  });
  var set_mozMovementX = defineInlineFunction('babylonKt.set_mozMovementX_r8vaac$', function ($receiver, value) {
    $receiver.mozMovementX = value;
  });
  var get_mozMovementY = defineInlineFunction('babylonKt.get_mozMovementY_apx4ki$', function ($receiver) {
    return $receiver.mozMovementY;
  });
  var set_mozMovementY = defineInlineFunction('babylonKt.set_mozMovementY_r8vaac$', function ($receiver, value) {
    $receiver.mozMovementY = value;
  });
  var get_webkitMovementX = defineInlineFunction('babylonKt.get_webkitMovementX_apx4ki$', function ($receiver) {
    return $receiver.webkitMovementX;
  });
  var set_webkitMovementX = defineInlineFunction('babylonKt.set_webkitMovementX_r8vaac$', function ($receiver, value) {
    $receiver.webkitMovementX = value;
  });
  var get_webkitMovementY = defineInlineFunction('babylonKt.get_webkitMovementY_apx4ki$', function ($receiver) {
    return $receiver.webkitMovementY;
  });
  var set_webkitMovementY = defineInlineFunction('babylonKt.set_webkitMovementY_r8vaac$', function ($receiver, value) {
    $receiver.webkitMovementY = value;
  });
  var get_msMovementX = defineInlineFunction('babylonKt.get_msMovementX_apx4ki$', function ($receiver) {
    return $receiver.msMovementX;
  });
  var set_msMovementX = defineInlineFunction('babylonKt.set_msMovementX_r8vaac$', function ($receiver, value) {
    $receiver.msMovementX = value;
  });
  var get_msMovementY = defineInlineFunction('babylonKt.get_msMovementY_apx4ki$', function ($receiver) {
    return $receiver.msMovementY;
  });
  var set_msMovementY = defineInlineFunction('babylonKt.set_msMovementY_r8vaac$', function ($receiver, value) {
    $receiver.msMovementY = value;
  });
  var webkitGetUserMedia = defineInlineFunction('babylonKt.webkitGetUserMedia_z413pc$', function ($receiver, constraints, successCallback, errorCallback) {
    $receiver.webkitGetUserMedia(constraints, successCallback, errorCallback);
  });
  var mozGetUserMedia = defineInlineFunction('babylonKt.mozGetUserMedia_z413pc$', function ($receiver, constraints, successCallback, errorCallback) {
    $receiver.mozGetUserMedia(constraints, successCallback, errorCallback);
  });
  var msGetUserMedia = defineInlineFunction('babylonKt.msGetUserMedia_z413pc$', function ($receiver, constraints, successCallback, errorCallback) {
    $receiver.msGetUserMedia(constraints, successCallback, errorCallback);
  });
  var webkitGetGamepads = defineInlineFunction('babylonKt.webkitGetGamepads_yi0el1$', function ($receiver) {
    return $receiver.webkitGetGamepads();
  });
  var msGetGamepads = defineInlineFunction('babylonKt.msGetGamepads_yi0el1$', function ($receiver) {
    return $receiver.msGetGamepads();
  });
  var webkitGamepads = defineInlineFunction('babylonKt.webkitGamepads_yi0el1$', function ($receiver) {
    return $receiver.webkitGamepads();
  });
  var get_mozSrcObject = defineInlineFunction('babylonKt.get_mozSrcObject_ewrydi$', function ($receiver) {
    return $receiver.mozSrcObject;
  });
  var set_mozSrcObject = defineInlineFunction('babylonKt.set_mozSrcObject_dx7tcr$', function ($receiver, value) {
    $receiver.mozSrcObject = value;
  });
  var fround = defineInlineFunction('babylonKt.fround_n5qjh5$', function ($receiver, x) {
    return $receiver.fround(x);
  });
  var imul = defineInlineFunction('babylonKt.imul_53g6xb$', function ($receiver, a, b) {
    return $receiver.imul(a, b);
  });
  var drawArraysInstanced = defineInlineFunction('babylonKt.drawArraysInstanced_f7dmmk$', function ($receiver, mode, first, count, primcount) {
    $receiver.drawArraysInstanced(mode, first, count, primcount);
  });
  var drawElementsInstanced = defineInlineFunction('babylonKt.drawElementsInstanced_an5x4a$', function ($receiver, mode, count, type, offset, primcount) {
    $receiver.drawElementsInstanced(mode, count, type, offset, primcount);
  });
  var vertexAttribDivisor = defineInlineFunction('babylonKt.vertexAttribDivisor_k9pqo8$', function ($receiver, index, divisor) {
    $receiver.vertexAttribDivisor(index, divisor);
  });
  var createVertexArray = defineInlineFunction('babylonKt.createVertexArray_4433t4$', function ($receiver) {
    return $receiver.createVertexArray();
  });
  var bindVertexArray = defineInlineFunction('babylonKt.bindVertexArray_4433t4$', function ($receiver) {
    $receiver.bindVertexArray();
  });
  var bindVertexArray_0 = defineInlineFunction('babylonKt.bindVertexArray_3rmx38$', function ($receiver, vao) {
    $receiver.bindVertexArray(vao);
  });
  var deleteVertexArray = defineInlineFunction('babylonKt.deleteVertexArray_2ev2al$', function ($receiver, vao) {
    $receiver.deleteVertexArray(vao);
  });
  var blitFramebuffer = defineInlineFunction('babylonKt.blitFramebuffer_pb0ljc$', function ($receiver, srcX0, srcY0, srcX1, srcY1, dstX0, dstY0, dstX1, dstY1, mask, filter) {
    $receiver.blitFramebuffer(srcX0, srcY0, srcX1, srcY1, dstX0, dstY0, dstX1, dstY1, mask, filter);
  });
  var renderbufferStorageMultisample = defineInlineFunction('babylonKt.renderbufferStorageMultisample_an5x4a$', function ($receiver, target, samples, internalformat, width, height) {
    $receiver.renderbufferStorageMultisample(target, samples, internalformat, width, height);
  });
  var bindBufferBase = defineInlineFunction('babylonKt.bindBufferBase_aolh7z$', function ($receiver, target, index, buffer) {
    $receiver.bindBufferBase(target, index, buffer);
  });
  var getUniformBlockIndex = defineInlineFunction('babylonKt.getUniformBlockIndex_4swexm$', function ($receiver, program, uniformBlockName) {
    return $receiver.getUniformBlockIndex(program, uniformBlockName);
  });
  var uniformBlockBinding = defineInlineFunction('babylonKt.uniformBlockBinding_dv3na4$', function ($receiver, program, uniformBlockIndex, uniformBlockBinding) {
    $receiver.uniformBlockBinding(program, uniformBlockIndex, uniformBlockBinding);
  });
  var createQuery = defineInlineFunction('babylonKt.createQuery_4433t4$', function ($receiver) {
    return $receiver.createQuery();
  });
  var deleteQuery = defineInlineFunction('babylonKt.deleteQuery_8ya3av$', function ($receiver, query) {
    $receiver.deleteQuery(query);
  });
  var beginQuery = defineInlineFunction('babylonKt.beginQuery_58uyel$', function ($receiver, target, query) {
    $receiver.beginQuery(target, query);
  });
  var endQuery = defineInlineFunction('babylonKt.endQuery_6tq2ge$', function ($receiver, target) {
    $receiver.endQuery(target);
  });
  var getQueryParameter = defineInlineFunction('babylonKt.getQueryParameter_d0qi7z$', function ($receiver, query, pname) {
    return $receiver.getQueryParameter(query, pname);
  });
  var getQuery = defineInlineFunction('babylonKt.getQuery_k9pqo8$', function ($receiver, target, pname) {
    return $receiver.getQuery(target, pname);
  });
  var get_MAX_SAMPLES = defineInlineFunction('babylonKt.get_MAX_SAMPLES_4433t4$', function ($receiver) {
    return $receiver.MAX_SAMPLES;
  });
  var set_MAX_SAMPLES = defineInlineFunction('babylonKt.set_MAX_SAMPLES_6tq2ge$', function ($receiver, value) {
    $receiver.MAX_SAMPLES = value;
  });
  var get_RGBA8 = defineInlineFunction('babylonKt.get_RGBA8_4433t4$', function ($receiver) {
    return $receiver.RGBA8;
  });
  var set_RGBA8 = defineInlineFunction('babylonKt.set_RGBA8_6tq2ge$', function ($receiver, value) {
    $receiver.RGBA8 = value;
  });
  var get_READ_FRAMEBUFFER = defineInlineFunction('babylonKt.get_READ_FRAMEBUFFER_4433t4$', function ($receiver) {
    return $receiver.READ_FRAMEBUFFER;
  });
  var set_READ_FRAMEBUFFER = defineInlineFunction('babylonKt.set_READ_FRAMEBUFFER_6tq2ge$', function ($receiver, value) {
    $receiver.READ_FRAMEBUFFER = value;
  });
  var get_DRAW_FRAMEBUFFER = defineInlineFunction('babylonKt.get_DRAW_FRAMEBUFFER_4433t4$', function ($receiver) {
    return $receiver.DRAW_FRAMEBUFFER;
  });
  var set_DRAW_FRAMEBUFFER = defineInlineFunction('babylonKt.set_DRAW_FRAMEBUFFER_6tq2ge$', function ($receiver, value) {
    $receiver.DRAW_FRAMEBUFFER = value;
  });
  var get_UNIFORM_BUFFER = defineInlineFunction('babylonKt.get_UNIFORM_BUFFER_4433t4$', function ($receiver) {
    return $receiver.UNIFORM_BUFFER;
  });
  var set_UNIFORM_BUFFER = defineInlineFunction('babylonKt.set_UNIFORM_BUFFER_6tq2ge$', function ($receiver, value) {
    $receiver.UNIFORM_BUFFER = value;
  });
  var get_HALF_FLOAT_OES = defineInlineFunction('babylonKt.get_HALF_FLOAT_OES_4433t4$', function ($receiver) {
    return $receiver.HALF_FLOAT_OES;
  });
  var set_HALF_FLOAT_OES = defineInlineFunction('babylonKt.set_HALF_FLOAT_OES_6tq2ge$', function ($receiver, value) {
    $receiver.HALF_FLOAT_OES = value;
  });
  var get_RGBA16F = defineInlineFunction('babylonKt.get_RGBA16F_4433t4$', function ($receiver) {
    return $receiver.RGBA16F;
  });
  var set_RGBA16F = defineInlineFunction('babylonKt.set_RGBA16F_6tq2ge$', function ($receiver, value) {
    $receiver.RGBA16F = value;
  });
  var get_RGBA32F = defineInlineFunction('babylonKt.get_RGBA32F_4433t4$', function ($receiver) {
    return $receiver.RGBA32F;
  });
  var set_RGBA32F = defineInlineFunction('babylonKt.set_RGBA32F_6tq2ge$', function ($receiver, value) {
    $receiver.RGBA32F = value;
  });
  var get_R32F = defineInlineFunction('babylonKt.get_R32F_4433t4$', function ($receiver) {
    return $receiver.R32F;
  });
  var set_R32F = defineInlineFunction('babylonKt.set_R32F_6tq2ge$', function ($receiver, value) {
    $receiver.R32F = value;
  });
  var get_RG32F = defineInlineFunction('babylonKt.get_RG32F_4433t4$', function ($receiver) {
    return $receiver.RG32F;
  });
  var set_RG32F = defineInlineFunction('babylonKt.set_RG32F_6tq2ge$', function ($receiver, value) {
    $receiver.RG32F = value;
  });
  var get_RGB32F = defineInlineFunction('babylonKt.get_RGB32F_4433t4$', function ($receiver) {
    return $receiver.RGB32F;
  });
  var set_RGB32F = defineInlineFunction('babylonKt.set_RGB32F_6tq2ge$', function ($receiver, value) {
    $receiver.RGB32F = value;
  });
  var get_R16F = defineInlineFunction('babylonKt.get_R16F_4433t4$', function ($receiver) {
    return $receiver.R16F;
  });
  var set_R16F = defineInlineFunction('babylonKt.set_R16F_6tq2ge$', function ($receiver, value) {
    $receiver.R16F = value;
  });
  var get_RG16F = defineInlineFunction('babylonKt.get_RG16F_4433t4$', function ($receiver) {
    return $receiver.RG16F;
  });
  var set_RG16F = defineInlineFunction('babylonKt.set_RG16F_6tq2ge$', function ($receiver, value) {
    $receiver.RG16F = value;
  });
  var get_RGB16F = defineInlineFunction('babylonKt.get_RGB16F_4433t4$', function ($receiver) {
    return $receiver.RGB16F;
  });
  var set_RGB16F = defineInlineFunction('babylonKt.set_RGB16F_6tq2ge$', function ($receiver, value) {
    $receiver.RGB16F = value;
  });
  var get_RED = defineInlineFunction('babylonKt.get_RED_4433t4$', function ($receiver) {
    return $receiver.RED;
  });
  var set_RED = defineInlineFunction('babylonKt.set_RED_6tq2ge$', function ($receiver, value) {
    $receiver.RED = value;
  });
  var get_RG = defineInlineFunction('babylonKt.get_RG_4433t4$', function ($receiver) {
    return $receiver.RG;
  });
  var set_RG = defineInlineFunction('babylonKt.set_RG_6tq2ge$', function ($receiver, value) {
    $receiver.RG = value;
  });
  var get_R8 = defineInlineFunction('babylonKt.get_R8_4433t4$', function ($receiver) {
    return $receiver.R8;
  });
  var set_R8 = defineInlineFunction('babylonKt.set_R8_6tq2ge$', function ($receiver, value) {
    $receiver.R8 = value;
  });
  var get_RG8 = defineInlineFunction('babylonKt.get_RG8_4433t4$', function ($receiver) {
    return $receiver.RG8;
  });
  var set_RG8 = defineInlineFunction('babylonKt.set_RG8_6tq2ge$', function ($receiver, value) {
    $receiver.RG8 = value;
  });
  var get_UNSIGNED_INT_24_8 = defineInlineFunction('babylonKt.get_UNSIGNED_INT_24_8_4433t4$', function ($receiver) {
    return $receiver.UNSIGNED_INT_24_8;
  });
  var set_UNSIGNED_INT_24_8 = defineInlineFunction('babylonKt.set_UNSIGNED_INT_24_8_6tq2ge$', function ($receiver, value) {
    $receiver.UNSIGNED_INT_24_8 = value;
  });
  var get_DEPTH24_STENCIL8 = defineInlineFunction('babylonKt.get_DEPTH24_STENCIL8_4433t4$', function ($receiver) {
    return $receiver.DEPTH24_STENCIL8;
  });
  var set_DEPTH24_STENCIL8 = defineInlineFunction('babylonKt.set_DEPTH24_STENCIL8_6tq2ge$', function ($receiver, value) {
    $receiver.DEPTH24_STENCIL8 = value;
  });
  var get_MIN = defineInlineFunction('babylonKt.get_MIN_4433t4$', function ($receiver) {
    return $receiver.MIN;
  });
  var set_MIN = defineInlineFunction('babylonKt.set_MIN_6tq2ge$', function ($receiver, value) {
    $receiver.MIN = value;
  });
  var get_MAX = defineInlineFunction('babylonKt.get_MAX_4433t4$', function ($receiver) {
    return $receiver.MAX;
  });
  var set_MAX = defineInlineFunction('babylonKt.set_MAX_6tq2ge$', function ($receiver, value) {
    $receiver.MAX = value;
  });
  var drawBuffers = defineInlineFunction('babylonKt.drawBuffers_xuy6y8$', function ($receiver, buffers) {
    $receiver.drawBuffers(buffers);
  });
  var readBuffer = defineInlineFunction('babylonKt.readBuffer_6tq2ge$', function ($receiver, src) {
    $receiver.readBuffer(src);
  });
  var get_COLOR_ATTACHMENT0 = defineInlineFunction('babylonKt.get_COLOR_ATTACHMENT0_4433t4$', function ($receiver) {
    return $receiver.COLOR_ATTACHMENT0;
  });
  var set_COLOR_ATTACHMENT0 = defineInlineFunction('babylonKt.set_COLOR_ATTACHMENT0_6tq2ge$', function ($receiver, value) {
    $receiver.COLOR_ATTACHMENT0 = value;
  });
  var get_COLOR_ATTACHMENT1 = defineInlineFunction('babylonKt.get_COLOR_ATTACHMENT1_4433t4$', function ($receiver) {
    return $receiver.COLOR_ATTACHMENT1;
  });
  var set_COLOR_ATTACHMENT1 = defineInlineFunction('babylonKt.set_COLOR_ATTACHMENT1_6tq2ge$', function ($receiver, value) {
    $receiver.COLOR_ATTACHMENT1 = value;
  });
  var get_COLOR_ATTACHMENT2 = defineInlineFunction('babylonKt.get_COLOR_ATTACHMENT2_4433t4$', function ($receiver) {
    return $receiver.COLOR_ATTACHMENT2;
  });
  var set_COLOR_ATTACHMENT2 = defineInlineFunction('babylonKt.set_COLOR_ATTACHMENT2_6tq2ge$', function ($receiver, value) {
    $receiver.COLOR_ATTACHMENT2 = value;
  });
  var get_COLOR_ATTACHMENT3 = defineInlineFunction('babylonKt.get_COLOR_ATTACHMENT3_4433t4$', function ($receiver) {
    return $receiver.COLOR_ATTACHMENT3;
  });
  var set_COLOR_ATTACHMENT3 = defineInlineFunction('babylonKt.set_COLOR_ATTACHMENT3_6tq2ge$', function ($receiver, value) {
    $receiver.COLOR_ATTACHMENT3 = value;
  });
  var get_ANY_SAMPLES_PASSED_CONSERVATIVE = defineInlineFunction('babylonKt.get_ANY_SAMPLES_PASSED_CONSERVATIVE_4433t4$', function ($receiver) {
    return $receiver.ANY_SAMPLES_PASSED_CONSERVATIVE;
  });
  var set_ANY_SAMPLES_PASSED_CONSERVATIVE = defineInlineFunction('babylonKt.set_ANY_SAMPLES_PASSED_CONSERVATIVE_6tq2ge$', function ($receiver, value) {
    $receiver.ANY_SAMPLES_PASSED_CONSERVATIVE = value;
  });
  var get_ANY_SAMPLES_PASSED = defineInlineFunction('babylonKt.get_ANY_SAMPLES_PASSED_4433t4$', function ($receiver) {
    return $receiver.ANY_SAMPLES_PASSED;
  });
  var set_ANY_SAMPLES_PASSED = defineInlineFunction('babylonKt.set_ANY_SAMPLES_PASSED_6tq2ge$', function ($receiver, value) {
    $receiver.ANY_SAMPLES_PASSED = value;
  });
  var get_QUERY_RESULT_AVAILABLE = defineInlineFunction('babylonKt.get_QUERY_RESULT_AVAILABLE_4433t4$', function ($receiver) {
    return $receiver.QUERY_RESULT_AVAILABLE;
  });
  var set_QUERY_RESULT_AVAILABLE = defineInlineFunction('babylonKt.set_QUERY_RESULT_AVAILABLE_6tq2ge$', function ($receiver, value) {
    $receiver.QUERY_RESULT_AVAILABLE = value;
  });
  var get_QUERY_RESULT = defineInlineFunction('babylonKt.get_QUERY_RESULT_4433t4$', function ($receiver) {
    return $receiver.QUERY_RESULT;
  });
  var set_QUERY_RESULT = defineInlineFunction('babylonKt.set_QUERY_RESULT_6tq2ge$', function ($receiver, value) {
    $receiver.QUERY_RESULT = value;
  });
  var get___SPECTOR_rebuildProgram = defineInlineFunction('babylonKt.get___SPECTOR_rebuildProgram_yfn2oh$', function ($receiver) {
    return $receiver.__SPECTOR_rebuildProgram;
  });
  var set___SPECTOR_rebuildProgram = defineInlineFunction('babylonKt.set___SPECTOR_rebuildProgram_x8b1lr$', function ($receiver, value) {
    $receiver.__SPECTOR_rebuildProgram = value;
  });
  var get__currentState = defineInlineFunction('babylonKt.get__currentState_22ndca$', function ($receiver) {
    return $receiver._currentState;
  });
  var set__currentState = defineInlineFunction('babylonKt.set__currentState_ysln13$', function ($receiver, value) {
    $receiver._currentState = value;
  });
  var get_RASTERIZER_DISCARD = defineInlineFunction('babylonKt.get_RASTERIZER_DISCARD_4433t4$', function ($receiver) {
    return $receiver.RASTERIZER_DISCARD;
  });
  var set_RASTERIZER_DISCARD = defineInlineFunction('babylonKt.set_RASTERIZER_DISCARD_6tq2ge$', function ($receiver, value) {
    $receiver.RASTERIZER_DISCARD = value;
  });
  var get_DEPTH_COMPONENT24 = defineInlineFunction('babylonKt.get_DEPTH_COMPONENT24_4433t4$', function ($receiver) {
    return $receiver.DEPTH_COMPONENT24;
  });
  var set_DEPTH_COMPONENT24 = defineInlineFunction('babylonKt.set_DEPTH_COMPONENT24_6tq2ge$', function ($receiver, value) {
    $receiver.DEPTH_COMPONENT24 = value;
  });
  var get_TEXTURE_3D = defineInlineFunction('babylonKt.get_TEXTURE_3D_4433t4$', function ($receiver) {
    return $receiver.TEXTURE_3D;
  });
  var set_TEXTURE_3D = defineInlineFunction('babylonKt.set_TEXTURE_3D_6tq2ge$', function ($receiver, value) {
    $receiver.TEXTURE_3D = value;
  });
  var get_TEXTURE_2D_ARRAY = defineInlineFunction('babylonKt.get_TEXTURE_2D_ARRAY_4433t4$', function ($receiver) {
    return $receiver.TEXTURE_2D_ARRAY;
  });
  var set_TEXTURE_2D_ARRAY = defineInlineFunction('babylonKt.set_TEXTURE_2D_ARRAY_6tq2ge$', function ($receiver, value) {
    $receiver.TEXTURE_2D_ARRAY = value;
  });
  var get_TEXTURE_COMPARE_FUNC = defineInlineFunction('babylonKt.get_TEXTURE_COMPARE_FUNC_4433t4$', function ($receiver) {
    return $receiver.TEXTURE_COMPARE_FUNC;
  });
  var set_TEXTURE_COMPARE_FUNC = defineInlineFunction('babylonKt.set_TEXTURE_COMPARE_FUNC_6tq2ge$', function ($receiver, value) {
    $receiver.TEXTURE_COMPARE_FUNC = value;
  });
  var get_TEXTURE_COMPARE_MODE = defineInlineFunction('babylonKt.get_TEXTURE_COMPARE_MODE_4433t4$', function ($receiver) {
    return $receiver.TEXTURE_COMPARE_MODE;
  });
  var set_TEXTURE_COMPARE_MODE = defineInlineFunction('babylonKt.set_TEXTURE_COMPARE_MODE_6tq2ge$', function ($receiver, value) {
    $receiver.TEXTURE_COMPARE_MODE = value;
  });
  var get_COMPARE_REF_TO_TEXTURE = defineInlineFunction('babylonKt.get_COMPARE_REF_TO_TEXTURE_4433t4$', function ($receiver) {
    return $receiver.COMPARE_REF_TO_TEXTURE;
  });
  var set_COMPARE_REF_TO_TEXTURE = defineInlineFunction('babylonKt.set_COMPARE_REF_TO_TEXTURE_6tq2ge$', function ($receiver, value) {
    $receiver.COMPARE_REF_TO_TEXTURE = value;
  });
  var get_TEXTURE_WRAP_R = defineInlineFunction('babylonKt.get_TEXTURE_WRAP_R_4433t4$', function ($receiver) {
    return $receiver.TEXTURE_WRAP_R;
  });
  var set_TEXTURE_WRAP_R = defineInlineFunction('babylonKt.set_TEXTURE_WRAP_R_6tq2ge$', function ($receiver, value) {
    $receiver.TEXTURE_WRAP_R = value;
  });
  var get_HALF_FLOAT = defineInlineFunction('babylonKt.get_HALF_FLOAT_4433t4$', function ($receiver) {
    return $receiver.HALF_FLOAT;
  });
  var set_HALF_FLOAT = defineInlineFunction('babylonKt.set_HALF_FLOAT_6tq2ge$', function ($receiver, value) {
    $receiver.HALF_FLOAT = value;
  });
  var get_RGB8 = defineInlineFunction('babylonKt.get_RGB8_4433t4$', function ($receiver) {
    return $receiver.RGB8;
  });
  var set_RGB8 = defineInlineFunction('babylonKt.set_RGB8_6tq2ge$', function ($receiver, value) {
    $receiver.RGB8 = value;
  });
  var get_RED_INTEGER = defineInlineFunction('babylonKt.get_RED_INTEGER_4433t4$', function ($receiver) {
    return $receiver.RED_INTEGER;
  });
  var set_RED_INTEGER = defineInlineFunction('babylonKt.set_RED_INTEGER_6tq2ge$', function ($receiver, value) {
    $receiver.RED_INTEGER = value;
  });
  var get_RG_INTEGER = defineInlineFunction('babylonKt.get_RG_INTEGER_4433t4$', function ($receiver) {
    return $receiver.RG_INTEGER;
  });
  var set_RG_INTEGER = defineInlineFunction('babylonKt.set_RG_INTEGER_6tq2ge$', function ($receiver, value) {
    $receiver.RG_INTEGER = value;
  });
  var get_RGB_INTEGER = defineInlineFunction('babylonKt.get_RGB_INTEGER_4433t4$', function ($receiver) {
    return $receiver.RGB_INTEGER;
  });
  var set_RGB_INTEGER = defineInlineFunction('babylonKt.set_RGB_INTEGER_6tq2ge$', function ($receiver, value) {
    $receiver.RGB_INTEGER = value;
  });
  var get_RGBA_INTEGER = defineInlineFunction('babylonKt.get_RGBA_INTEGER_4433t4$', function ($receiver) {
    return $receiver.RGBA_INTEGER;
  });
  var set_RGBA_INTEGER = defineInlineFunction('babylonKt.set_RGBA_INTEGER_6tq2ge$', function ($receiver, value) {
    $receiver.RGBA_INTEGER = value;
  });
  var get_R8_SNORM = defineInlineFunction('babylonKt.get_R8_SNORM_4433t4$', function ($receiver) {
    return $receiver.R8_SNORM;
  });
  var set_R8_SNORM = defineInlineFunction('babylonKt.set_R8_SNORM_6tq2ge$', function ($receiver, value) {
    $receiver.R8_SNORM = value;
  });
  var get_RG8_SNORM = defineInlineFunction('babylonKt.get_RG8_SNORM_4433t4$', function ($receiver) {
    return $receiver.RG8_SNORM;
  });
  var set_RG8_SNORM = defineInlineFunction('babylonKt.set_RG8_SNORM_6tq2ge$', function ($receiver, value) {
    $receiver.RG8_SNORM = value;
  });
  var get_RGB8_SNORM = defineInlineFunction('babylonKt.get_RGB8_SNORM_4433t4$', function ($receiver) {
    return $receiver.RGB8_SNORM;
  });
  var set_RGB8_SNORM = defineInlineFunction('babylonKt.set_RGB8_SNORM_6tq2ge$', function ($receiver, value) {
    $receiver.RGB8_SNORM = value;
  });
  var get_RGBA8_SNORM = defineInlineFunction('babylonKt.get_RGBA8_SNORM_4433t4$', function ($receiver) {
    return $receiver.RGBA8_SNORM;
  });
  var set_RGBA8_SNORM = defineInlineFunction('babylonKt.set_RGBA8_SNORM_6tq2ge$', function ($receiver, value) {
    $receiver.RGBA8_SNORM = value;
  });
  var get_R8I = defineInlineFunction('babylonKt.get_R8I_4433t4$', function ($receiver) {
    return $receiver.R8I;
  });
  var set_R8I = defineInlineFunction('babylonKt.set_R8I_6tq2ge$', function ($receiver, value) {
    $receiver.R8I = value;
  });
  var get_RG8I = defineInlineFunction('babylonKt.get_RG8I_4433t4$', function ($receiver) {
    return $receiver.RG8I;
  });
  var set_RG8I = defineInlineFunction('babylonKt.set_RG8I_6tq2ge$', function ($receiver, value) {
    $receiver.RG8I = value;
  });
  var get_RGB8I = defineInlineFunction('babylonKt.get_RGB8I_4433t4$', function ($receiver) {
    return $receiver.RGB8I;
  });
  var set_RGB8I = defineInlineFunction('babylonKt.set_RGB8I_6tq2ge$', function ($receiver, value) {
    $receiver.RGB8I = value;
  });
  var get_RGBA8I = defineInlineFunction('babylonKt.get_RGBA8I_4433t4$', function ($receiver) {
    return $receiver.RGBA8I;
  });
  var set_RGBA8I = defineInlineFunction('babylonKt.set_RGBA8I_6tq2ge$', function ($receiver, value) {
    $receiver.RGBA8I = value;
  });
  var get_R8UI = defineInlineFunction('babylonKt.get_R8UI_4433t4$', function ($receiver) {
    return $receiver.R8UI;
  });
  var set_R8UI = defineInlineFunction('babylonKt.set_R8UI_6tq2ge$', function ($receiver, value) {
    $receiver.R8UI = value;
  });
  var get_RG8UI = defineInlineFunction('babylonKt.get_RG8UI_4433t4$', function ($receiver) {
    return $receiver.RG8UI;
  });
  var set_RG8UI = defineInlineFunction('babylonKt.set_RG8UI_6tq2ge$', function ($receiver, value) {
    $receiver.RG8UI = value;
  });
  var get_RGB8UI = defineInlineFunction('babylonKt.get_RGB8UI_4433t4$', function ($receiver) {
    return $receiver.RGB8UI;
  });
  var set_RGB8UI = defineInlineFunction('babylonKt.set_RGB8UI_6tq2ge$', function ($receiver, value) {
    $receiver.RGB8UI = value;
  });
  var get_RGBA8UI = defineInlineFunction('babylonKt.get_RGBA8UI_4433t4$', function ($receiver) {
    return $receiver.RGBA8UI;
  });
  var set_RGBA8UI = defineInlineFunction('babylonKt.set_RGBA8UI_6tq2ge$', function ($receiver, value) {
    $receiver.RGBA8UI = value;
  });
  var get_R16I = defineInlineFunction('babylonKt.get_R16I_4433t4$', function ($receiver) {
    return $receiver.R16I;
  });
  var set_R16I = defineInlineFunction('babylonKt.set_R16I_6tq2ge$', function ($receiver, value) {
    $receiver.R16I = value;
  });
  var get_RG16I = defineInlineFunction('babylonKt.get_RG16I_4433t4$', function ($receiver) {
    return $receiver.RG16I;
  });
  var set_RG16I = defineInlineFunction('babylonKt.set_RG16I_6tq2ge$', function ($receiver, value) {
    $receiver.RG16I = value;
  });
  var get_RGB16I = defineInlineFunction('babylonKt.get_RGB16I_4433t4$', function ($receiver) {
    return $receiver.RGB16I;
  });
  var set_RGB16I = defineInlineFunction('babylonKt.set_RGB16I_6tq2ge$', function ($receiver, value) {
    $receiver.RGB16I = value;
  });
  var get_RGBA16I = defineInlineFunction('babylonKt.get_RGBA16I_4433t4$', function ($receiver) {
    return $receiver.RGBA16I;
  });
  var set_RGBA16I = defineInlineFunction('babylonKt.set_RGBA16I_6tq2ge$', function ($receiver, value) {
    $receiver.RGBA16I = value;
  });
  var get_R16UI = defineInlineFunction('babylonKt.get_R16UI_4433t4$', function ($receiver) {
    return $receiver.R16UI;
  });
  var set_R16UI = defineInlineFunction('babylonKt.set_R16UI_6tq2ge$', function ($receiver, value) {
    $receiver.R16UI = value;
  });
  var get_RG16UI = defineInlineFunction('babylonKt.get_RG16UI_4433t4$', function ($receiver) {
    return $receiver.RG16UI;
  });
  var set_RG16UI = defineInlineFunction('babylonKt.set_RG16UI_6tq2ge$', function ($receiver, value) {
    $receiver.RG16UI = value;
  });
  var get_RGB16UI = defineInlineFunction('babylonKt.get_RGB16UI_4433t4$', function ($receiver) {
    return $receiver.RGB16UI;
  });
  var set_RGB16UI = defineInlineFunction('babylonKt.set_RGB16UI_6tq2ge$', function ($receiver, value) {
    $receiver.RGB16UI = value;
  });
  var get_RGBA16UI = defineInlineFunction('babylonKt.get_RGBA16UI_4433t4$', function ($receiver) {
    return $receiver.RGBA16UI;
  });
  var set_RGBA16UI = defineInlineFunction('babylonKt.set_RGBA16UI_6tq2ge$', function ($receiver, value) {
    $receiver.RGBA16UI = value;
  });
  var get_R32I = defineInlineFunction('babylonKt.get_R32I_4433t4$', function ($receiver) {
    return $receiver.R32I;
  });
  var set_R32I = defineInlineFunction('babylonKt.set_R32I_6tq2ge$', function ($receiver, value) {
    $receiver.R32I = value;
  });
  var get_RG32I = defineInlineFunction('babylonKt.get_RG32I_4433t4$', function ($receiver) {
    return $receiver.RG32I;
  });
  var set_RG32I = defineInlineFunction('babylonKt.set_RG32I_6tq2ge$', function ($receiver, value) {
    $receiver.RG32I = value;
  });
  var get_RGB32I = defineInlineFunction('babylonKt.get_RGB32I_4433t4$', function ($receiver) {
    return $receiver.RGB32I;
  });
  var set_RGB32I = defineInlineFunction('babylonKt.set_RGB32I_6tq2ge$', function ($receiver, value) {
    $receiver.RGB32I = value;
  });
  var get_RGBA32I = defineInlineFunction('babylonKt.get_RGBA32I_4433t4$', function ($receiver) {
    return $receiver.RGBA32I;
  });
  var set_RGBA32I = defineInlineFunction('babylonKt.set_RGBA32I_6tq2ge$', function ($receiver, value) {
    $receiver.RGBA32I = value;
  });
  var get_R32UI = defineInlineFunction('babylonKt.get_R32UI_4433t4$', function ($receiver) {
    return $receiver.R32UI;
  });
  var set_R32UI = defineInlineFunction('babylonKt.set_R32UI_6tq2ge$', function ($receiver, value) {
    $receiver.R32UI = value;
  });
  var get_RG32UI = defineInlineFunction('babylonKt.get_RG32UI_4433t4$', function ($receiver) {
    return $receiver.RG32UI;
  });
  var set_RG32UI = defineInlineFunction('babylonKt.set_RG32UI_6tq2ge$', function ($receiver, value) {
    $receiver.RG32UI = value;
  });
  var get_RGB32UI = defineInlineFunction('babylonKt.get_RGB32UI_4433t4$', function ($receiver) {
    return $receiver.RGB32UI;
  });
  var set_RGB32UI = defineInlineFunction('babylonKt.set_RGB32UI_6tq2ge$', function ($receiver, value) {
    $receiver.RGB32UI = value;
  });
  var get_RGBA32UI = defineInlineFunction('babylonKt.get_RGBA32UI_4433t4$', function ($receiver) {
    return $receiver.RGBA32UI;
  });
  var set_RGBA32UI = defineInlineFunction('babylonKt.set_RGBA32UI_6tq2ge$', function ($receiver, value) {
    $receiver.RGBA32UI = value;
  });
  var get_RGB10_A2UI = defineInlineFunction('babylonKt.get_RGB10_A2UI_4433t4$', function ($receiver) {
    return $receiver.RGB10_A2UI;
  });
  var set_RGB10_A2UI = defineInlineFunction('babylonKt.set_RGB10_A2UI_6tq2ge$', function ($receiver, value) {
    $receiver.RGB10_A2UI = value;
  });
  var get_R11F_G11F_B10F = defineInlineFunction('babylonKt.get_R11F_G11F_B10F_4433t4$', function ($receiver) {
    return $receiver.R11F_G11F_B10F;
  });
  var set_R11F_G11F_B10F = defineInlineFunction('babylonKt.set_R11F_G11F_B10F_6tq2ge$', function ($receiver, value) {
    $receiver.R11F_G11F_B10F = value;
  });
  var get_RGB9_E5 = defineInlineFunction('babylonKt.get_RGB9_E5_4433t4$', function ($receiver) {
    return $receiver.RGB9_E5;
  });
  var set_RGB9_E5 = defineInlineFunction('babylonKt.set_RGB9_E5_6tq2ge$', function ($receiver, value) {
    $receiver.RGB9_E5 = value;
  });
  var get_RGB10_A2 = defineInlineFunction('babylonKt.get_RGB10_A2_4433t4$', function ($receiver) {
    return $receiver.RGB10_A2;
  });
  var set_RGB10_A2 = defineInlineFunction('babylonKt.set_RGB10_A2_6tq2ge$', function ($receiver, value) {
    $receiver.RGB10_A2 = value;
  });
  var get_UNSIGNED_INT_2_10_10_10_REV = defineInlineFunction('babylonKt.get_UNSIGNED_INT_2_10_10_10_REV_4433t4$', function ($receiver) {
    return $receiver.UNSIGNED_INT_2_10_10_10_REV;
  });
  var set_UNSIGNED_INT_2_10_10_10_REV = defineInlineFunction('babylonKt.set_UNSIGNED_INT_2_10_10_10_REV_6tq2ge$', function ($receiver, value) {
    $receiver.UNSIGNED_INT_2_10_10_10_REV = value;
  });
  var get_UNSIGNED_INT_10F_11F_11F_REV = defineInlineFunction('babylonKt.get_UNSIGNED_INT_10F_11F_11F_REV_4433t4$', function ($receiver) {
    return $receiver.UNSIGNED_INT_10F_11F_11F_REV;
  });
  var set_UNSIGNED_INT_10F_11F_11F_REV = defineInlineFunction('babylonKt.set_UNSIGNED_INT_10F_11F_11F_REV_6tq2ge$', function ($receiver, value) {
    $receiver.UNSIGNED_INT_10F_11F_11F_REV = value;
  });
  var get_UNSIGNED_INT_5_9_9_9_REV = defineInlineFunction('babylonKt.get_UNSIGNED_INT_5_9_9_9_REV_4433t4$', function ($receiver) {
    return $receiver.UNSIGNED_INT_5_9_9_9_REV;
  });
  var set_UNSIGNED_INT_5_9_9_9_REV = defineInlineFunction('babylonKt.set_UNSIGNED_INT_5_9_9_9_REV_6tq2ge$', function ($receiver, value) {
    $receiver.UNSIGNED_INT_5_9_9_9_REV = value;
  });
  var get_FLOAT_32_UNSIGNED_INT_24_8_REV = defineInlineFunction('babylonKt.get_FLOAT_32_UNSIGNED_INT_24_8_REV_4433t4$', function ($receiver) {
    return $receiver.FLOAT_32_UNSIGNED_INT_24_8_REV;
  });
  var set_FLOAT_32_UNSIGNED_INT_24_8_REV = defineInlineFunction('babylonKt.set_FLOAT_32_UNSIGNED_INT_24_8_REV_6tq2ge$', function ($receiver, value) {
    $receiver.FLOAT_32_UNSIGNED_INT_24_8_REV = value;
  });
  var get_DEPTH_COMPONENT32F = defineInlineFunction('babylonKt.get_DEPTH_COMPONENT32F_4433t4$', function ($receiver) {
    return $receiver.DEPTH_COMPONENT32F;
  });
  var set_DEPTH_COMPONENT32F = defineInlineFunction('babylonKt.set_DEPTH_COMPONENT32F_6tq2ge$', function ($receiver, value) {
    $receiver.DEPTH_COMPONENT32F = value;
  });
  var texImage3D = defineInlineFunction('babylonKt.texImage3D_fy1xcs$', function ($receiver, target, level, internalformat, width, height, depth, border, format, type, pixels) {
    $receiver.texImage3D(target, level, internalformat, width, height, depth, border, format, type, pixels);
  });
  var texImage3D_0 = defineInlineFunction('babylonKt.texImage3D_764p1h$', function ($receiver, target, level, internalformat, width, height, depth, border, format, type, pixels, offset) {
    $receiver.texImage3D(target, level, internalformat, width, height, depth, border, format, type, pixels, offset);
  });
  var texImage3D_1 = defineInlineFunction('babylonKt.texImage3D_4y9ksf$', function ($receiver, target, level, internalformat, width, height, depth, border, format, type, pixels) {
    $receiver.texImage3D(target, level, internalformat, width, height, depth, border, format, type, pixels);
  });
  var texImage3D_2 = defineInlineFunction('babylonKt.texImage3D_b60dfe$', function ($receiver, target, level, internalformat, width, height, depth, border, format, type, pixels) {
    $receiver.texImage3D(target, level, internalformat, width, height, depth, border, format, type, pixels);
  });
  var texImage3D_3 = defineInlineFunction('babylonKt.texImage3D_j7jnlj$', function ($receiver, target, level, internalformat, width, height, depth, border, format, type, pixels) {
    $receiver.texImage3D(target, level, internalformat, width, height, depth, border, format, type, pixels);
  });
  var texImage3D_4 = defineInlineFunction('babylonKt.texImage3D_vjck7r$', function ($receiver, target, level, internalformat, width, height, depth, border, format, type, pixels) {
    $receiver.texImage3D(target, level, internalformat, width, height, depth, border, format, type, pixels);
  });
  var texImage3D_5 = defineInlineFunction('babylonKt.texImage3D_1n1dla$', function ($receiver, target, level, internalformat, width, height, depth, border, format, type, pixels) {
    $receiver.texImage3D(target, level, internalformat, width, height, depth, border, format, type, pixels);
  });
  var framebufferTextureLayer = defineInlineFunction('babylonKt.framebufferTextureLayer_whbt20$', function ($receiver, target, attachment, texture, level, layer) {
    $receiver.framebufferTextureLayer(target, attachment, texture, level, layer);
  });
  var compressedTexImage3D = defineInlineFunction('babylonKt.compressedTexImage3D_fokhnd$', function ($receiver, target, level, internalformat, width, height, depth, border, data) {
    $receiver.compressedTexImage3D(target, level, internalformat, width, height, depth, border, data);
  });
  var compressedTexImage3D_0 = defineInlineFunction('babylonKt.compressedTexImage3D_f2gm6n$', function ($receiver, target, level, internalformat, width, height, depth, border, data, offset) {
    $receiver.compressedTexImage3D(target, level, internalformat, width, height, depth, border, data, offset);
  });
  var compressedTexImage3D_1 = defineInlineFunction('babylonKt.compressedTexImage3D_z96z3v$', function ($receiver, target, level, internalformat, width, height, depth, border, data, offset, length) {
    $receiver.compressedTexImage3D(target, level, internalformat, width, height, depth, border, data, offset, length);
  });
  var get_TRANSFORM_FEEDBACK = defineInlineFunction('babylonKt.get_TRANSFORM_FEEDBACK_4433t4$', function ($receiver) {
    return $receiver.TRANSFORM_FEEDBACK;
  });
  var set_TRANSFORM_FEEDBACK = defineInlineFunction('babylonKt.set_TRANSFORM_FEEDBACK_6tq2ge$', function ($receiver, value) {
    $receiver.TRANSFORM_FEEDBACK = value;
  });
  var get_INTERLEAVED_ATTRIBS = defineInlineFunction('babylonKt.get_INTERLEAVED_ATTRIBS_4433t4$', function ($receiver) {
    return $receiver.INTERLEAVED_ATTRIBS;
  });
  var set_INTERLEAVED_ATTRIBS = defineInlineFunction('babylonKt.set_INTERLEAVED_ATTRIBS_6tq2ge$', function ($receiver, value) {
    $receiver.INTERLEAVED_ATTRIBS = value;
  });
  var get_TRANSFORM_FEEDBACK_BUFFER = defineInlineFunction('babylonKt.get_TRANSFORM_FEEDBACK_BUFFER_4433t4$', function ($receiver) {
    return $receiver.TRANSFORM_FEEDBACK_BUFFER;
  });
  var set_TRANSFORM_FEEDBACK_BUFFER = defineInlineFunction('babylonKt.set_TRANSFORM_FEEDBACK_BUFFER_6tq2ge$', function ($receiver, value) {
    $receiver.TRANSFORM_FEEDBACK_BUFFER = value;
  });
  var createTransformFeedback = defineInlineFunction('babylonKt.createTransformFeedback_4433t4$', function ($receiver) {
    return $receiver.createTransformFeedback();
  });
  var deleteTransformFeedback = defineInlineFunction('babylonKt.deleteTransformFeedback_3md0qo$', function ($receiver, transformFeedbac) {
    $receiver.deleteTransformFeedback(transformFeedbac);
  });
  var bindTransformFeedback = defineInlineFunction('babylonKt.bindTransformFeedback_fk3yq1$', function ($receiver, target, transformFeedback) {
    $receiver.bindTransformFeedback(target, transformFeedback);
  });
  var beginTransformFeedback = defineInlineFunction('babylonKt.beginTransformFeedback_6tq2ge$', function ($receiver, primitiveMode) {
    $receiver.beginTransformFeedback(primitiveMode);
  });
  var endTransformFeedback = defineInlineFunction('babylonKt.endTransformFeedback_4433t4$', function ($receiver) {
    $receiver.endTransformFeedback();
  });
  var transformFeedbackVaryings = defineInlineFunction('babylonKt.transformFeedbackVaryings_tx4b8q$', function ($receiver, program, varyings, bufferMode) {
    $receiver.transformFeedbackVaryings(program, varyings, bufferMode);
  });
  var clearBufferfv = defineInlineFunction('babylonKt.clearBufferfv_fn0ogw$', function ($receiver, buffer, drawbuffer, values, srcOffset) {
    $receiver.clearBufferfv(buffer, drawbuffer, values, srcOffset);
  });
  var clearBufferiv = defineInlineFunction('babylonKt.clearBufferiv_fn0ogw$', function ($receiver, buffer, drawbuffer, values, srcOffset) {
    $receiver.clearBufferiv(buffer, drawbuffer, values, srcOffset);
  });
  var clearBufferuiv = defineInlineFunction('babylonKt.clearBufferuiv_fn0ogw$', function ($receiver, buffer, drawbuffer, values, srcOffset) {
    $receiver.clearBufferuiv(buffer, drawbuffer, values, srcOffset);
  });
  var clearBufferfi = defineInlineFunction('babylonKt.clearBufferfi_f7dmmk$', function ($receiver, buffer, drawbuffer, depth, stencil) {
    $receiver.clearBufferfi(buffer, drawbuffer, depth, stencil);
  });
  var get_width = defineInlineFunction('babylonKt.get_width_7nqmea$', function ($receiver) {
    return $receiver.width;
  });
  var set_width = defineInlineFunction('babylonKt.set_width_ge2f1o$', function ($receiver, value) {
    $receiver.width = value;
  });
  var get_height = defineInlineFunction('babylonKt.get_height_7nqmea$', function ($receiver) {
    return $receiver.height;
  });
  var set_height = defineInlineFunction('babylonKt.set_height_ge2f1o$', function ($receiver, value) {
    $receiver.height = value;
  });
  var close = defineInlineFunction('babylonKt.close_7nqmea$', function ($receiver) {
    $receiver.close();
  });
  var get_capabilities = defineInlineFunction('babylonKt.get_capabilities_pokznb$', function ($receiver) {
    return $receiver.capabilities;
  });
  var set_capabilities = defineInlineFunction('babylonKt.set_capabilities_5tz7mb$', function ($receiver, value) {
    $receiver.capabilities = value;
  });
  var get_depthFar = defineInlineFunction('babylonKt.get_depthFar_pokznb$', function ($receiver) {
    return $receiver.depthFar;
  });
  var set_depthFar = defineInlineFunction('babylonKt.set_depthFar_hcxwy5$', function ($receiver, value) {
    $receiver.depthFar = value;
  });
  var get_depthNear = defineInlineFunction('babylonKt.get_depthNear_pokznb$', function ($receiver) {
    return $receiver.depthNear;
  });
  var set_depthNear = defineInlineFunction('babylonKt.set_depthNear_hcxwy5$', function ($receiver, value) {
    $receiver.depthNear = value;
  });
  var get_displayId = defineInlineFunction('babylonKt.get_displayId_pokznb$', function ($receiver) {
    return $receiver.displayId;
  });
  var set_displayId = defineInlineFunction('babylonKt.set_displayId_hcxwy5$', function ($receiver, value) {
    $receiver.displayId = value;
  });
  var get_displayName = defineInlineFunction('babylonKt.get_displayName_pokznb$', function ($receiver) {
    return $receiver.displayName;
  });
  var set_displayName = defineInlineFunction('babylonKt.set_displayName_jppknp$', function ($receiver, value) {
    $receiver.displayName = value;
  });
  var get_isConnected = defineInlineFunction('babylonKt.get_isConnected_pokznb$', function ($receiver) {
    return $receiver.isConnected;
  });
  var set_isConnected = defineInlineFunction('babylonKt.set_isConnected_41vx7o$', function ($receiver, value) {
    $receiver.isConnected = value;
  });
  var get_isPresenting = defineInlineFunction('babylonKt.get_isPresenting_pokznb$', function ($receiver) {
    return $receiver.isPresenting;
  });
  var set_isPresenting = defineInlineFunction('babylonKt.set_isPresenting_41vx7o$', function ($receiver, value) {
    $receiver.isPresenting = value;
  });
  var get_stageParameters = defineInlineFunction('babylonKt.get_stageParameters_pokznb$', function ($receiver) {
    return $receiver.stageParameters;
  });
  var set_stageParameters = defineInlineFunction('babylonKt.set_stageParameters_snp5gc$', function ($receiver, value) {
    $receiver.stageParameters = value;
  });
  var cancelAnimationFrame = defineInlineFunction('babylonKt.cancelAnimationFrame_hcxwy5$', function ($receiver, handle) {
    $receiver.cancelAnimationFrame(handle);
  });
  var exitPresent = defineInlineFunction('babylonKt.exitPresent_pokznb$', function ($receiver) {
    return $receiver.exitPresent();
  });
  var getEyeParameters = defineInlineFunction('babylonKt.getEyeParameters_jppknp$', function ($receiver, whichEye) {
    return $receiver.getEyeParameters(whichEye);
  });
  var getFrameData = defineInlineFunction('babylonKt.getFrameData_7671gy$', function ($receiver, frameData) {
    return $receiver.getFrameData(frameData);
  });
  var getLayers = defineInlineFunction('babylonKt.getLayers_pokznb$', function ($receiver) {
    return $receiver.getLayers();
  });
  var getPose = defineInlineFunction('babylonKt.getPose_pokznb$', function ($receiver) {
    return $receiver.getPose();
  });
  var getImmediatePose = defineInlineFunction('babylonKt.getImmediatePose_pokznb$', function ($receiver) {
    return $receiver.getImmediatePose();
  });
  var requestAnimationFrame = defineInlineFunction('babylonKt.requestAnimationFrame_c9wk0$', function ($receiver, callback) {
    return $receiver.requestAnimationFrame(callback);
  });
  var requestPresent = defineInlineFunction('babylonKt.requestPresent_xqyw5s$', function ($receiver, layers) {
    return $receiver.requestPresent(layers);
  });
  var resetPose = defineInlineFunction('babylonKt.resetPose_pokznb$', function ($receiver) {
    $receiver.resetPose();
  });
  var submitFrame = defineInlineFunction('babylonKt.submitFrame_pokznb$', function ($receiver) {
    $receiver.submitFrame();
  });
  var submitFrame_0 = defineInlineFunction('babylonKt.submitFrame_qyoiq2$', function ($receiver, pose) {
    $receiver.submitFrame(pose);
  });
  var get_leftBounds = defineInlineFunction('babylonKt.get_leftBounds_q9bxei$', function ($receiver) {
    return $receiver.leftBounds;
  });
  var set_leftBounds = defineInlineFunction('babylonKt.set_leftBounds_n7yk9$', function ($receiver, value) {
    $receiver.leftBounds = value;
  });
  var get_rightBounds = defineInlineFunction('babylonKt.get_rightBounds_q9bxei$', function ($receiver) {
    return $receiver.rightBounds;
  });
  var set_rightBounds = defineInlineFunction('babylonKt.set_rightBounds_n7yk9$', function ($receiver, value) {
    $receiver.rightBounds = value;
  });
  var get_source = defineInlineFunction('babylonKt.get_source_q9bxei$', function ($receiver) {
    return $receiver.source;
  });
  var set_source = defineInlineFunction('babylonKt.set_source_cewq1v$', function ($receiver, value) {
    $receiver.source = value;
  });
  var get_canPresent = defineInlineFunction('babylonKt.get_canPresent_8cc5f7$', function ($receiver) {
    return $receiver.canPresent;
  });
  var set_canPresent = defineInlineFunction('babylonKt.set_canPresent_tjj5fy$', function ($receiver, value) {
    $receiver.canPresent = value;
  });
  var get_hasExternalDisplay = defineInlineFunction('babylonKt.get_hasExternalDisplay_8cc5f7$', function ($receiver) {
    return $receiver.hasExternalDisplay;
  });
  var set_hasExternalDisplay = defineInlineFunction('babylonKt.set_hasExternalDisplay_tjj5fy$', function ($receiver, value) {
    $receiver.hasExternalDisplay = value;
  });
  var get_hasOrientation = defineInlineFunction('babylonKt.get_hasOrientation_8cc5f7$', function ($receiver) {
    return $receiver.hasOrientation;
  });
  var set_hasOrientation = defineInlineFunction('babylonKt.set_hasOrientation_tjj5fy$', function ($receiver, value) {
    $receiver.hasOrientation = value;
  });
  var get_hasPosition = defineInlineFunction('babylonKt.get_hasPosition_8cc5f7$', function ($receiver) {
    return $receiver.hasPosition;
  });
  var set_hasPosition = defineInlineFunction('babylonKt.set_hasPosition_tjj5fy$', function ($receiver, value) {
    $receiver.hasPosition = value;
  });
  var get_maxLayers = defineInlineFunction('babylonKt.get_maxLayers_8cc5f7$', function ($receiver) {
    return $receiver.maxLayers;
  });
  var set_maxLayers = defineInlineFunction('babylonKt.set_maxLayers_txozh9$', function ($receiver, value) {
    $receiver.maxLayers = value;
  });
  var get_fieldOfView = defineInlineFunction('babylonKt.get_fieldOfView_6mjlhs$', function ($receiver) {
    return $receiver.fieldOfView;
  });
  var set_fieldOfView = defineInlineFunction('babylonKt.set_fieldOfView_htmui$', function ($receiver, value) {
    $receiver.fieldOfView = value;
  });
  var get_offset = defineInlineFunction('babylonKt.get_offset_6mjlhs$', function ($receiver) {
    return $receiver.offset;
  });
  var set_offset = defineInlineFunction('babylonKt.set_offset_bfxp6l$', function ($receiver, value) {
    $receiver.offset = value;
  });
  var get_renderHeight = defineInlineFunction('babylonKt.get_renderHeight_6mjlhs$', function ($receiver) {
    return $receiver.renderHeight;
  });
  var set_renderHeight = defineInlineFunction('babylonKt.set_renderHeight_1y9rba$', function ($receiver, value) {
    $receiver.renderHeight = value;
  });
  var get_renderWidth = defineInlineFunction('babylonKt.get_renderWidth_6mjlhs$', function ($receiver) {
    return $receiver.renderWidth;
  });
  var set_renderWidth = defineInlineFunction('babylonKt.set_renderWidth_1y9rba$', function ($receiver, value) {
    $receiver.renderWidth = value;
  });
  var get_downDegrees = defineInlineFunction('babylonKt.get_downDegrees_1h27e3$', function ($receiver) {
    return $receiver.downDegrees;
  });
  var set_downDegrees = defineInlineFunction('babylonKt.set_downDegrees_90yo01$', function ($receiver, value) {
    $receiver.downDegrees = value;
  });
  var get_leftDegrees = defineInlineFunction('babylonKt.get_leftDegrees_1h27e3$', function ($receiver) {
    return $receiver.leftDegrees;
  });
  var set_leftDegrees = defineInlineFunction('babylonKt.set_leftDegrees_90yo01$', function ($receiver, value) {
    $receiver.leftDegrees = value;
  });
  var get_rightDegrees = defineInlineFunction('babylonKt.get_rightDegrees_1h27e3$', function ($receiver) {
    return $receiver.rightDegrees;
  });
  var set_rightDegrees = defineInlineFunction('babylonKt.set_rightDegrees_90yo01$', function ($receiver, value) {
    $receiver.rightDegrees = value;
  });
  var get_upDegrees = defineInlineFunction('babylonKt.get_upDegrees_1h27e3$', function ($receiver) {
    return $receiver.upDegrees;
  });
  var set_upDegrees = defineInlineFunction('babylonKt.set_upDegrees_90yo01$', function ($receiver, value) {
    $receiver.upDegrees = value;
  });
  var get_leftProjectionMatrix = defineInlineFunction('babylonKt.get_leftProjectionMatrix_n9ymks$', function ($receiver) {
    return $receiver.leftProjectionMatrix;
  });
  var set_leftProjectionMatrix = defineInlineFunction('babylonKt.set_leftProjectionMatrix_hjixo9$', function ($receiver, value) {
    $receiver.leftProjectionMatrix = value;
  });
  var get_leftViewMatrix = defineInlineFunction('babylonKt.get_leftViewMatrix_n9ymks$', function ($receiver) {
    return $receiver.leftViewMatrix;
  });
  var set_leftViewMatrix = defineInlineFunction('babylonKt.set_leftViewMatrix_hjixo9$', function ($receiver, value) {
    $receiver.leftViewMatrix = value;
  });
  var get_pose = defineInlineFunction('babylonKt.get_pose_n9ymks$', function ($receiver) {
    return $receiver.pose;
  });
  var set_pose = defineInlineFunction('babylonKt.set_pose_lhzucf$', function ($receiver, value) {
    $receiver.pose = value;
  });
  var get_rightProjectionMatrix = defineInlineFunction('babylonKt.get_rightProjectionMatrix_n9ymks$', function ($receiver) {
    return $receiver.rightProjectionMatrix;
  });
  var set_rightProjectionMatrix = defineInlineFunction('babylonKt.set_rightProjectionMatrix_hjixo9$', function ($receiver, value) {
    $receiver.rightProjectionMatrix = value;
  });
  var get_rightViewMatrix = defineInlineFunction('babylonKt.get_rightViewMatrix_n9ymks$', function ($receiver) {
    return $receiver.rightViewMatrix;
  });
  var set_rightViewMatrix = defineInlineFunction('babylonKt.set_rightViewMatrix_hjixo9$', function ($receiver, value) {
    $receiver.rightViewMatrix = value;
  });
  var get_timestamp = defineInlineFunction('babylonKt.get_timestamp_n9ymks$', function ($receiver) {
    return $receiver.timestamp;
  });
  var set_timestamp = defineInlineFunction('babylonKt.set_timestamp_ti2s76$', function ($receiver, value) {
    $receiver.timestamp = value;
  });
  var get_angularAcceleration = defineInlineFunction('babylonKt.get_angularAcceleration_nttaoy$', function ($receiver) {
    return $receiver.angularAcceleration;
  });
  var set_angularAcceleration = defineInlineFunction('babylonKt.set_angularAcceleration_an2jai$', function ($receiver, value) {
    $receiver.angularAcceleration = value;
  });
  var get_angularVelocity = defineInlineFunction('babylonKt.get_angularVelocity_nttaoy$', function ($receiver) {
    return $receiver.angularVelocity;
  });
  var set_angularVelocity = defineInlineFunction('babylonKt.set_angularVelocity_an2jai$', function ($receiver, value) {
    $receiver.angularVelocity = value;
  });
  var get_linearAcceleration = defineInlineFunction('babylonKt.get_linearAcceleration_nttaoy$', function ($receiver) {
    return $receiver.linearAcceleration;
  });
  var set_linearAcceleration = defineInlineFunction('babylonKt.set_linearAcceleration_an2jai$', function ($receiver, value) {
    $receiver.linearAcceleration = value;
  });
  var get_linearVelocity = defineInlineFunction('babylonKt.get_linearVelocity_nttaoy$', function ($receiver) {
    return $receiver.linearVelocity;
  });
  var set_linearVelocity = defineInlineFunction('babylonKt.set_linearVelocity_an2jai$', function ($receiver, value) {
    $receiver.linearVelocity = value;
  });
  var get_orientation = defineInlineFunction('babylonKt.get_orientation_nttaoy$', function ($receiver) {
    return $receiver.orientation;
  });
  var set_orientation = defineInlineFunction('babylonKt.set_orientation_an2jai$', function ($receiver, value) {
    $receiver.orientation = value;
  });
  var get_position = defineInlineFunction('babylonKt.get_position_nttaoy$', function ($receiver) {
    return $receiver.position;
  });
  var set_position = defineInlineFunction('babylonKt.set_position_an2jai$', function ($receiver, value) {
    $receiver.position = value;
  });
  var get_timestamp_0 = defineInlineFunction('babylonKt.get_timestamp_nttaoy$', function ($receiver) {
    return $receiver.timestamp;
  });
  var set_timestamp_0 = defineInlineFunction('babylonKt.set_timestamp_s46pqs$', function ($receiver, value) {
    $receiver.timestamp = value;
  });
  var get_sittingToStandingTransform = defineInlineFunction('babylonKt.get_sittingToStandingTransform_a4kub$', function ($receiver) {
    return $receiver.sittingToStandingTransform;
  });
  var set_sittingToStandingTransform = defineInlineFunction('babylonKt.set_sittingToStandingTransform_cgjqxj$', function ($receiver, value) {
    $receiver.sittingToStandingTransform = value;
  });
  var get_sizeX = defineInlineFunction('babylonKt.get_sizeX_a4kub$', function ($receiver) {
    return $receiver.sizeX;
  });
  var set_sizeX = defineInlineFunction('babylonKt.set_sizeX_69tpvw$', function ($receiver, value) {
    $receiver.sizeX = value;
  });
  var get_sizeY = defineInlineFunction('babylonKt.get_sizeY_a4kub$', function ($receiver) {
    return $receiver.sizeY;
  });
  var set_sizeY = defineInlineFunction('babylonKt.set_sizeY_69tpvw$', function ($receiver, value) {
    $receiver.sizeY = value;
  });
  var getVRDisplays = defineInlineFunction('babylonKt.getVRDisplays_yi0el1$', function ($receiver) {
    return $receiver.getVRDisplays();
  });
  var get_activeVRDisplays = defineInlineFunction('babylonKt.get_activeVRDisplays_yi0el1$', function ($receiver) {
    return $receiver.activeVRDisplays;
  });
  var set_activeVRDisplays = defineInlineFunction('babylonKt.set_activeVRDisplays_odtvir$', function ($receiver, value) {
    $receiver.activeVRDisplays = value;
  });
  var get_onvrdisplayconnected = defineInlineFunction('babylonKt.get_onvrdisplayconnected_nz12v2$', function ($receiver) {
    return $receiver.onvrdisplayconnected;
  });
  var set_onvrdisplayconnected = defineInlineFunction('babylonKt.set_onvrdisplayconnected_dfx1an$', function ($receiver, value) {
    $receiver.onvrdisplayconnected = value;
  });
  var get_onvrdisplaydisconnected = defineInlineFunction('babylonKt.get_onvrdisplaydisconnected_nz12v2$', function ($receiver) {
    return $receiver.onvrdisplaydisconnected;
  });
  var set_onvrdisplaydisconnected = defineInlineFunction('babylonKt.set_onvrdisplaydisconnected_dfx1an$', function ($receiver, value) {
    $receiver.onvrdisplaydisconnected = value;
  });
  var get_onvrdisplaypresentchange = defineInlineFunction('babylonKt.get_onvrdisplaypresentchange_nz12v2$', function ($receiver) {
    return $receiver.onvrdisplaypresentchange;
  });
  var set_onvrdisplaypresentchange = defineInlineFunction('babylonKt.set_onvrdisplaypresentchange_dfx1an$', function ($receiver, value) {
    $receiver.onvrdisplaypresentchange = value;
  });
  var get_displayId_0 = defineInlineFunction('babylonKt.get_displayId_s6by0i$', function ($receiver) {
    return $receiver.displayId;
  });
  var set_displayId_0 = defineInlineFunction('babylonKt.set_displayId_gvcnko$', function ($receiver, value) {
    $receiver.displayId = value;
  });
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
    var engine = new Engine(canvas, antiAlias);
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
  Object.defineProperty(MouseButton, 'Companion', {
    get: MouseButton$Companion_getInstance
  });
  var package$BABYLON = _.BABYLON || (_.BABYLON = {});
  package$BABYLON.MouseButton = MouseButton;
  package$BABYLON.SphereOptions = SphereOptions;
  package$BABYLON.BoxOptions = BoxOptions;
  package$BABYLON.DiskOptions = DiskOptions;
  package$BABYLON.IcoSphereOptions = IcoSphereOptions;
  _.get_mozIndexedDB_nz12v2$ = get_mozIndexedDB;
  _.set_mozIndexedDB_pv07r9$ = set_mozIndexedDB;
  _.get_webkitIndexedDB_nz12v2$ = get_webkitIndexedDB;
  _.set_webkitIndexedDB_pv07r9$ = set_webkitIndexedDB;
  _.get_msIndexedDB_nz12v2$ = get_msIndexedDB;
  _.set_msIndexedDB_pv07r9$ = set_msIndexedDB;
  _.get_webkitURL_nz12v2$ = get_webkitURL;
  _.set_webkitURL_6gcixr$ = set_webkitURL;
  _.mozRequestAnimationFrame_l6ncq1$ = mozRequestAnimationFrame;
  _.oRequestAnimationFrame_l6ncq1$ = oRequestAnimationFrame;
  _.get_WebGLRenderingContext_nz12v2$ = get_WebGLRenderingContext;
  _.set_WebGLRenderingContext_k19mkb$ = set_WebGLRenderingContext;
  _.get_MSGesture_nz12v2$ = get_MSGesture;
  _.set_MSGesture_jb46v5$ = set_MSGesture;
  _.get_CANNON_nz12v2$ = get_CANNON;
  _.set_CANNON_6gcixr$ = set_CANNON;
  _.get_AudioContext_nz12v2$ = get_AudioContext;
  _.set_AudioContext_abgro4$ = set_AudioContext;
  _.get_webkitAudioContext_nz12v2$ = get_webkitAudioContext;
  _.set_webkitAudioContext_abgro4$ = set_webkitAudioContext;
  _.get_PointerEvent_nz12v2$ = get_PointerEvent;
  _.set_PointerEvent_6gcixr$ = set_PointerEvent;
  _.get_Math_nz12v2$ = get_Math;
  _.set_Math_gjdsoy$ = set_Math;
  _.get_Uint8Array_nz12v2$ = get_Uint8Array;
  _.set_Uint8Array_99kp31$ = set_Uint8Array;
  _.get_Float32Array_nz12v2$ = get_Float32Array;
  _.set_Float32Array_scs7vq$ = set_Float32Array;
  _.get_mozURL_nz12v2$ = get_mozURL;
  _.set_mozURL_6gcixr$ = set_mozURL;
  _.get_msURL_nz12v2$ = get_msURL;
  _.set_msURL_6gcixr$ = set_msURL;
  _.get_VRFrameData_nz12v2$ = get_VRFrameData;
  _.set_VRFrameData_6gcixr$ = set_VRFrameData;
  _.get_DracoDecoderModule_nz12v2$ = get_DracoDecoderModule;
  _.set_DracoDecoderModule_6gcixr$ = set_DracoDecoderModule;
  _.requestPointerLock_ng27xv$ = requestPointerLock;
  _.msRequestPointerLock_ng27xv$ = msRequestPointerLock;
  _.mozRequestPointerLock_ng27xv$ = mozRequestPointerLock;
  _.webkitRequestPointerLock_ng27xv$ = webkitRequestPointerLock;
  _.get_isRecording_ng27xv$ = get_isRecording;
  _.set_isRecording_o1t3le$ = set_isRecording;
  _.captureStream_ng27xv$ = captureStream;
  _.captureStream_9kue5f$ = captureStream_0;
  _.get_msImageSmoothingEnabled_qtrdl1$ = get_msImageSmoothingEnabled;
  _.set_msImageSmoothingEnabled_fcsaw0$ = set_msImageSmoothingEnabled;
  _.get_mozMovementX_apx4ki$ = get_mozMovementX;
  _.set_mozMovementX_r8vaac$ = set_mozMovementX;
  _.get_mozMovementY_apx4ki$ = get_mozMovementY;
  _.set_mozMovementY_r8vaac$ = set_mozMovementY;
  _.get_webkitMovementX_apx4ki$ = get_webkitMovementX;
  _.set_webkitMovementX_r8vaac$ = set_webkitMovementX;
  _.get_webkitMovementY_apx4ki$ = get_webkitMovementY;
  _.set_webkitMovementY_r8vaac$ = set_webkitMovementY;
  _.get_msMovementX_apx4ki$ = get_msMovementX;
  _.set_msMovementX_r8vaac$ = set_msMovementX;
  _.get_msMovementY_apx4ki$ = get_msMovementY;
  _.set_msMovementY_r8vaac$ = set_msMovementY;
  _.webkitGetUserMedia_z413pc$ = webkitGetUserMedia;
  _.mozGetUserMedia_z413pc$ = mozGetUserMedia;
  _.msGetUserMedia_z413pc$ = msGetUserMedia;
  _.webkitGetGamepads_yi0el1$ = webkitGetGamepads;
  _.msGetGamepads_yi0el1$ = msGetGamepads;
  _.webkitGamepads_yi0el1$ = webkitGamepads;
  _.get_mozSrcObject_ewrydi$ = get_mozSrcObject;
  _.set_mozSrcObject_dx7tcr$ = set_mozSrcObject;
  _.fround_n5qjh5$ = fround;
  _.imul_53g6xb$ = imul;
  _.drawArraysInstanced_f7dmmk$ = drawArraysInstanced;
  _.drawElementsInstanced_an5x4a$ = drawElementsInstanced;
  _.vertexAttribDivisor_k9pqo8$ = vertexAttribDivisor;
  _.createVertexArray_4433t4$ = createVertexArray;
  _.bindVertexArray_4433t4$ = bindVertexArray;
  _.bindVertexArray_3rmx38$ = bindVertexArray_0;
  _.deleteVertexArray_2ev2al$ = deleteVertexArray;
  _.blitFramebuffer_pb0ljc$ = blitFramebuffer;
  _.renderbufferStorageMultisample_an5x4a$ = renderbufferStorageMultisample;
  _.bindBufferBase_aolh7z$ = bindBufferBase;
  _.getUniformBlockIndex_4swexm$ = getUniformBlockIndex;
  _.uniformBlockBinding_dv3na4$ = uniformBlockBinding;
  _.createQuery_4433t4$ = createQuery;
  _.deleteQuery_8ya3av$ = deleteQuery;
  _.beginQuery_58uyel$ = beginQuery;
  _.endQuery_6tq2ge$ = endQuery;
  _.getQueryParameter_d0qi7z$ = getQueryParameter;
  _.getQuery_k9pqo8$ = getQuery;
  _.get_MAX_SAMPLES_4433t4$ = get_MAX_SAMPLES;
  _.set_MAX_SAMPLES_6tq2ge$ = set_MAX_SAMPLES;
  _.get_RGBA8_4433t4$ = get_RGBA8;
  _.set_RGBA8_6tq2ge$ = set_RGBA8;
  _.get_READ_FRAMEBUFFER_4433t4$ = get_READ_FRAMEBUFFER;
  _.set_READ_FRAMEBUFFER_6tq2ge$ = set_READ_FRAMEBUFFER;
  _.get_DRAW_FRAMEBUFFER_4433t4$ = get_DRAW_FRAMEBUFFER;
  _.set_DRAW_FRAMEBUFFER_6tq2ge$ = set_DRAW_FRAMEBUFFER;
  _.get_UNIFORM_BUFFER_4433t4$ = get_UNIFORM_BUFFER;
  _.set_UNIFORM_BUFFER_6tq2ge$ = set_UNIFORM_BUFFER;
  _.get_HALF_FLOAT_OES_4433t4$ = get_HALF_FLOAT_OES;
  _.set_HALF_FLOAT_OES_6tq2ge$ = set_HALF_FLOAT_OES;
  _.get_RGBA16F_4433t4$ = get_RGBA16F;
  _.set_RGBA16F_6tq2ge$ = set_RGBA16F;
  _.get_RGBA32F_4433t4$ = get_RGBA32F;
  _.set_RGBA32F_6tq2ge$ = set_RGBA32F;
  _.get_R32F_4433t4$ = get_R32F;
  _.set_R32F_6tq2ge$ = set_R32F;
  _.get_RG32F_4433t4$ = get_RG32F;
  _.set_RG32F_6tq2ge$ = set_RG32F;
  _.get_RGB32F_4433t4$ = get_RGB32F;
  _.set_RGB32F_6tq2ge$ = set_RGB32F;
  _.get_R16F_4433t4$ = get_R16F;
  _.set_R16F_6tq2ge$ = set_R16F;
  _.get_RG16F_4433t4$ = get_RG16F;
  _.set_RG16F_6tq2ge$ = set_RG16F;
  _.get_RGB16F_4433t4$ = get_RGB16F;
  _.set_RGB16F_6tq2ge$ = set_RGB16F;
  _.get_RED_4433t4$ = get_RED;
  _.set_RED_6tq2ge$ = set_RED;
  _.get_RG_4433t4$ = get_RG;
  _.set_RG_6tq2ge$ = set_RG;
  _.get_R8_4433t4$ = get_R8;
  _.set_R8_6tq2ge$ = set_R8;
  _.get_RG8_4433t4$ = get_RG8;
  _.set_RG8_6tq2ge$ = set_RG8;
  _.get_UNSIGNED_INT_24_8_4433t4$ = get_UNSIGNED_INT_24_8;
  _.set_UNSIGNED_INT_24_8_6tq2ge$ = set_UNSIGNED_INT_24_8;
  _.get_DEPTH24_STENCIL8_4433t4$ = get_DEPTH24_STENCIL8;
  _.set_DEPTH24_STENCIL8_6tq2ge$ = set_DEPTH24_STENCIL8;
  _.get_MIN_4433t4$ = get_MIN;
  _.set_MIN_6tq2ge$ = set_MIN;
  _.get_MAX_4433t4$ = get_MAX;
  _.set_MAX_6tq2ge$ = set_MAX;
  _.drawBuffers_xuy6y8$ = drawBuffers;
  _.readBuffer_6tq2ge$ = readBuffer;
  _.get_COLOR_ATTACHMENT0_4433t4$ = get_COLOR_ATTACHMENT0;
  _.set_COLOR_ATTACHMENT0_6tq2ge$ = set_COLOR_ATTACHMENT0;
  _.get_COLOR_ATTACHMENT1_4433t4$ = get_COLOR_ATTACHMENT1;
  _.set_COLOR_ATTACHMENT1_6tq2ge$ = set_COLOR_ATTACHMENT1;
  _.get_COLOR_ATTACHMENT2_4433t4$ = get_COLOR_ATTACHMENT2;
  _.set_COLOR_ATTACHMENT2_6tq2ge$ = set_COLOR_ATTACHMENT2;
  _.get_COLOR_ATTACHMENT3_4433t4$ = get_COLOR_ATTACHMENT3;
  _.set_COLOR_ATTACHMENT3_6tq2ge$ = set_COLOR_ATTACHMENT3;
  _.get_ANY_SAMPLES_PASSED_CONSERVATIVE_4433t4$ = get_ANY_SAMPLES_PASSED_CONSERVATIVE;
  _.set_ANY_SAMPLES_PASSED_CONSERVATIVE_6tq2ge$ = set_ANY_SAMPLES_PASSED_CONSERVATIVE;
  _.get_ANY_SAMPLES_PASSED_4433t4$ = get_ANY_SAMPLES_PASSED;
  _.set_ANY_SAMPLES_PASSED_6tq2ge$ = set_ANY_SAMPLES_PASSED;
  _.get_QUERY_RESULT_AVAILABLE_4433t4$ = get_QUERY_RESULT_AVAILABLE;
  _.set_QUERY_RESULT_AVAILABLE_6tq2ge$ = set_QUERY_RESULT_AVAILABLE;
  _.get_QUERY_RESULT_4433t4$ = get_QUERY_RESULT;
  _.set_QUERY_RESULT_6tq2ge$ = set_QUERY_RESULT;
  _.get___SPECTOR_rebuildProgram_yfn2oh$ = get___SPECTOR_rebuildProgram;
  _.set___SPECTOR_rebuildProgram_x8b1lr$ = set___SPECTOR_rebuildProgram;
  _.get__currentState_22ndca$ = get__currentState;
  _.set__currentState_ysln13$ = set__currentState;
  _.get_RASTERIZER_DISCARD_4433t4$ = get_RASTERIZER_DISCARD;
  _.set_RASTERIZER_DISCARD_6tq2ge$ = set_RASTERIZER_DISCARD;
  _.get_DEPTH_COMPONENT24_4433t4$ = get_DEPTH_COMPONENT24;
  _.set_DEPTH_COMPONENT24_6tq2ge$ = set_DEPTH_COMPONENT24;
  _.get_TEXTURE_3D_4433t4$ = get_TEXTURE_3D;
  _.set_TEXTURE_3D_6tq2ge$ = set_TEXTURE_3D;
  _.get_TEXTURE_2D_ARRAY_4433t4$ = get_TEXTURE_2D_ARRAY;
  _.set_TEXTURE_2D_ARRAY_6tq2ge$ = set_TEXTURE_2D_ARRAY;
  _.get_TEXTURE_COMPARE_FUNC_4433t4$ = get_TEXTURE_COMPARE_FUNC;
  _.set_TEXTURE_COMPARE_FUNC_6tq2ge$ = set_TEXTURE_COMPARE_FUNC;
  _.get_TEXTURE_COMPARE_MODE_4433t4$ = get_TEXTURE_COMPARE_MODE;
  _.set_TEXTURE_COMPARE_MODE_6tq2ge$ = set_TEXTURE_COMPARE_MODE;
  _.get_COMPARE_REF_TO_TEXTURE_4433t4$ = get_COMPARE_REF_TO_TEXTURE;
  _.set_COMPARE_REF_TO_TEXTURE_6tq2ge$ = set_COMPARE_REF_TO_TEXTURE;
  _.get_TEXTURE_WRAP_R_4433t4$ = get_TEXTURE_WRAP_R;
  _.set_TEXTURE_WRAP_R_6tq2ge$ = set_TEXTURE_WRAP_R;
  _.get_HALF_FLOAT_4433t4$ = get_HALF_FLOAT;
  _.set_HALF_FLOAT_6tq2ge$ = set_HALF_FLOAT;
  _.get_RGB8_4433t4$ = get_RGB8;
  _.set_RGB8_6tq2ge$ = set_RGB8;
  _.get_RED_INTEGER_4433t4$ = get_RED_INTEGER;
  _.set_RED_INTEGER_6tq2ge$ = set_RED_INTEGER;
  _.get_RG_INTEGER_4433t4$ = get_RG_INTEGER;
  _.set_RG_INTEGER_6tq2ge$ = set_RG_INTEGER;
  _.get_RGB_INTEGER_4433t4$ = get_RGB_INTEGER;
  _.set_RGB_INTEGER_6tq2ge$ = set_RGB_INTEGER;
  _.get_RGBA_INTEGER_4433t4$ = get_RGBA_INTEGER;
  _.set_RGBA_INTEGER_6tq2ge$ = set_RGBA_INTEGER;
  _.get_R8_SNORM_4433t4$ = get_R8_SNORM;
  _.set_R8_SNORM_6tq2ge$ = set_R8_SNORM;
  _.get_RG8_SNORM_4433t4$ = get_RG8_SNORM;
  _.set_RG8_SNORM_6tq2ge$ = set_RG8_SNORM;
  _.get_RGB8_SNORM_4433t4$ = get_RGB8_SNORM;
  _.set_RGB8_SNORM_6tq2ge$ = set_RGB8_SNORM;
  _.get_RGBA8_SNORM_4433t4$ = get_RGBA8_SNORM;
  _.set_RGBA8_SNORM_6tq2ge$ = set_RGBA8_SNORM;
  _.get_R8I_4433t4$ = get_R8I;
  _.set_R8I_6tq2ge$ = set_R8I;
  _.get_RG8I_4433t4$ = get_RG8I;
  _.set_RG8I_6tq2ge$ = set_RG8I;
  _.get_RGB8I_4433t4$ = get_RGB8I;
  _.set_RGB8I_6tq2ge$ = set_RGB8I;
  _.get_RGBA8I_4433t4$ = get_RGBA8I;
  _.set_RGBA8I_6tq2ge$ = set_RGBA8I;
  _.get_R8UI_4433t4$ = get_R8UI;
  _.set_R8UI_6tq2ge$ = set_R8UI;
  _.get_RG8UI_4433t4$ = get_RG8UI;
  _.set_RG8UI_6tq2ge$ = set_RG8UI;
  _.get_RGB8UI_4433t4$ = get_RGB8UI;
  _.set_RGB8UI_6tq2ge$ = set_RGB8UI;
  _.get_RGBA8UI_4433t4$ = get_RGBA8UI;
  _.set_RGBA8UI_6tq2ge$ = set_RGBA8UI;
  _.get_R16I_4433t4$ = get_R16I;
  _.set_R16I_6tq2ge$ = set_R16I;
  _.get_RG16I_4433t4$ = get_RG16I;
  _.set_RG16I_6tq2ge$ = set_RG16I;
  _.get_RGB16I_4433t4$ = get_RGB16I;
  _.set_RGB16I_6tq2ge$ = set_RGB16I;
  _.get_RGBA16I_4433t4$ = get_RGBA16I;
  _.set_RGBA16I_6tq2ge$ = set_RGBA16I;
  _.get_R16UI_4433t4$ = get_R16UI;
  _.set_R16UI_6tq2ge$ = set_R16UI;
  _.get_RG16UI_4433t4$ = get_RG16UI;
  _.set_RG16UI_6tq2ge$ = set_RG16UI;
  _.get_RGB16UI_4433t4$ = get_RGB16UI;
  _.set_RGB16UI_6tq2ge$ = set_RGB16UI;
  _.get_RGBA16UI_4433t4$ = get_RGBA16UI;
  _.set_RGBA16UI_6tq2ge$ = set_RGBA16UI;
  _.get_R32I_4433t4$ = get_R32I;
  _.set_R32I_6tq2ge$ = set_R32I;
  _.get_RG32I_4433t4$ = get_RG32I;
  _.set_RG32I_6tq2ge$ = set_RG32I;
  _.get_RGB32I_4433t4$ = get_RGB32I;
  _.set_RGB32I_6tq2ge$ = set_RGB32I;
  _.get_RGBA32I_4433t4$ = get_RGBA32I;
  _.set_RGBA32I_6tq2ge$ = set_RGBA32I;
  _.get_R32UI_4433t4$ = get_R32UI;
  _.set_R32UI_6tq2ge$ = set_R32UI;
  _.get_RG32UI_4433t4$ = get_RG32UI;
  _.set_RG32UI_6tq2ge$ = set_RG32UI;
  _.get_RGB32UI_4433t4$ = get_RGB32UI;
  _.set_RGB32UI_6tq2ge$ = set_RGB32UI;
  _.get_RGBA32UI_4433t4$ = get_RGBA32UI;
  _.set_RGBA32UI_6tq2ge$ = set_RGBA32UI;
  _.get_RGB10_A2UI_4433t4$ = get_RGB10_A2UI;
  _.set_RGB10_A2UI_6tq2ge$ = set_RGB10_A2UI;
  _.get_R11F_G11F_B10F_4433t4$ = get_R11F_G11F_B10F;
  _.set_R11F_G11F_B10F_6tq2ge$ = set_R11F_G11F_B10F;
  _.get_RGB9_E5_4433t4$ = get_RGB9_E5;
  _.set_RGB9_E5_6tq2ge$ = set_RGB9_E5;
  _.get_RGB10_A2_4433t4$ = get_RGB10_A2;
  _.set_RGB10_A2_6tq2ge$ = set_RGB10_A2;
  _.get_UNSIGNED_INT_2_10_10_10_REV_4433t4$ = get_UNSIGNED_INT_2_10_10_10_REV;
  _.set_UNSIGNED_INT_2_10_10_10_REV_6tq2ge$ = set_UNSIGNED_INT_2_10_10_10_REV;
  _.get_UNSIGNED_INT_10F_11F_11F_REV_4433t4$ = get_UNSIGNED_INT_10F_11F_11F_REV;
  _.set_UNSIGNED_INT_10F_11F_11F_REV_6tq2ge$ = set_UNSIGNED_INT_10F_11F_11F_REV;
  _.get_UNSIGNED_INT_5_9_9_9_REV_4433t4$ = get_UNSIGNED_INT_5_9_9_9_REV;
  _.set_UNSIGNED_INT_5_9_9_9_REV_6tq2ge$ = set_UNSIGNED_INT_5_9_9_9_REV;
  _.get_FLOAT_32_UNSIGNED_INT_24_8_REV_4433t4$ = get_FLOAT_32_UNSIGNED_INT_24_8_REV;
  _.set_FLOAT_32_UNSIGNED_INT_24_8_REV_6tq2ge$ = set_FLOAT_32_UNSIGNED_INT_24_8_REV;
  _.get_DEPTH_COMPONENT32F_4433t4$ = get_DEPTH_COMPONENT32F;
  _.set_DEPTH_COMPONENT32F_6tq2ge$ = set_DEPTH_COMPONENT32F;
  _.texImage3D_fy1xcs$ = texImage3D;
  _.texImage3D_764p1h$ = texImage3D_0;
  _.texImage3D_4y9ksf$ = texImage3D_1;
  _.texImage3D_b60dfe$ = texImage3D_2;
  _.texImage3D_j7jnlj$ = texImage3D_3;
  _.texImage3D_vjck7r$ = texImage3D_4;
  _.texImage3D_1n1dla$ = texImage3D_5;
  _.framebufferTextureLayer_whbt20$ = framebufferTextureLayer;
  _.compressedTexImage3D_fokhnd$ = compressedTexImage3D;
  _.compressedTexImage3D_f2gm6n$ = compressedTexImage3D_0;
  _.compressedTexImage3D_z96z3v$ = compressedTexImage3D_1;
  _.get_TRANSFORM_FEEDBACK_4433t4$ = get_TRANSFORM_FEEDBACK;
  _.set_TRANSFORM_FEEDBACK_6tq2ge$ = set_TRANSFORM_FEEDBACK;
  _.get_INTERLEAVED_ATTRIBS_4433t4$ = get_INTERLEAVED_ATTRIBS;
  _.set_INTERLEAVED_ATTRIBS_6tq2ge$ = set_INTERLEAVED_ATTRIBS;
  _.get_TRANSFORM_FEEDBACK_BUFFER_4433t4$ = get_TRANSFORM_FEEDBACK_BUFFER;
  _.set_TRANSFORM_FEEDBACK_BUFFER_6tq2ge$ = set_TRANSFORM_FEEDBACK_BUFFER;
  _.createTransformFeedback_4433t4$ = createTransformFeedback;
  _.deleteTransformFeedback_3md0qo$ = deleteTransformFeedback;
  _.bindTransformFeedback_fk3yq1$ = bindTransformFeedback;
  _.beginTransformFeedback_6tq2ge$ = beginTransformFeedback;
  _.endTransformFeedback_4433t4$ = endTransformFeedback;
  _.transformFeedbackVaryings_tx4b8q$ = transformFeedbackVaryings;
  _.clearBufferfv_fn0ogw$ = clearBufferfv;
  _.clearBufferiv_fn0ogw$ = clearBufferiv;
  _.clearBufferuiv_fn0ogw$ = clearBufferuiv;
  _.clearBufferfi_f7dmmk$ = clearBufferfi;
  _.get_width_7nqmea$ = get_width;
  _.set_width_ge2f1o$ = set_width;
  _.get_height_7nqmea$ = get_height;
  _.set_height_ge2f1o$ = set_height;
  _.close_7nqmea$ = close;
  _.get_capabilities_pokznb$ = get_capabilities;
  _.set_capabilities_5tz7mb$ = set_capabilities;
  _.get_depthFar_pokznb$ = get_depthFar;
  _.set_depthFar_hcxwy5$ = set_depthFar;
  _.get_depthNear_pokznb$ = get_depthNear;
  _.set_depthNear_hcxwy5$ = set_depthNear;
  _.get_displayId_pokznb$ = get_displayId;
  _.set_displayId_hcxwy5$ = set_displayId;
  _.get_displayName_pokznb$ = get_displayName;
  _.set_displayName_jppknp$ = set_displayName;
  _.get_isConnected_pokznb$ = get_isConnected;
  _.set_isConnected_41vx7o$ = set_isConnected;
  _.get_isPresenting_pokznb$ = get_isPresenting;
  _.set_isPresenting_41vx7o$ = set_isPresenting;
  _.get_stageParameters_pokznb$ = get_stageParameters;
  _.set_stageParameters_snp5gc$ = set_stageParameters;
  _.cancelAnimationFrame_hcxwy5$ = cancelAnimationFrame;
  _.exitPresent_pokznb$ = exitPresent;
  _.getEyeParameters_jppknp$ = getEyeParameters;
  _.getFrameData_7671gy$ = getFrameData;
  _.getLayers_pokznb$ = getLayers;
  _.getPose_pokznb$ = getPose;
  _.getImmediatePose_pokznb$ = getImmediatePose;
  _.requestAnimationFrame_c9wk0$ = requestAnimationFrame;
  _.requestPresent_xqyw5s$ = requestPresent;
  _.resetPose_pokznb$ = resetPose;
  _.submitFrame_pokznb$ = submitFrame;
  _.submitFrame_qyoiq2$ = submitFrame_0;
  _.get_leftBounds_q9bxei$ = get_leftBounds;
  _.set_leftBounds_n7yk9$ = set_leftBounds;
  _.get_rightBounds_q9bxei$ = get_rightBounds;
  _.set_rightBounds_n7yk9$ = set_rightBounds;
  _.get_source_q9bxei$ = get_source;
  _.set_source_cewq1v$ = set_source;
  _.get_canPresent_8cc5f7$ = get_canPresent;
  _.set_canPresent_tjj5fy$ = set_canPresent;
  _.get_hasExternalDisplay_8cc5f7$ = get_hasExternalDisplay;
  _.set_hasExternalDisplay_tjj5fy$ = set_hasExternalDisplay;
  _.get_hasOrientation_8cc5f7$ = get_hasOrientation;
  _.set_hasOrientation_tjj5fy$ = set_hasOrientation;
  _.get_hasPosition_8cc5f7$ = get_hasPosition;
  _.set_hasPosition_tjj5fy$ = set_hasPosition;
  _.get_maxLayers_8cc5f7$ = get_maxLayers;
  _.set_maxLayers_txozh9$ = set_maxLayers;
  _.get_fieldOfView_6mjlhs$ = get_fieldOfView;
  _.set_fieldOfView_htmui$ = set_fieldOfView;
  _.get_offset_6mjlhs$ = get_offset;
  _.set_offset_bfxp6l$ = set_offset;
  _.get_renderHeight_6mjlhs$ = get_renderHeight;
  _.set_renderHeight_1y9rba$ = set_renderHeight;
  _.get_renderWidth_6mjlhs$ = get_renderWidth;
  _.set_renderWidth_1y9rba$ = set_renderWidth;
  _.get_downDegrees_1h27e3$ = get_downDegrees;
  _.set_downDegrees_90yo01$ = set_downDegrees;
  _.get_leftDegrees_1h27e3$ = get_leftDegrees;
  _.set_leftDegrees_90yo01$ = set_leftDegrees;
  _.get_rightDegrees_1h27e3$ = get_rightDegrees;
  _.set_rightDegrees_90yo01$ = set_rightDegrees;
  _.get_upDegrees_1h27e3$ = get_upDegrees;
  _.set_upDegrees_90yo01$ = set_upDegrees;
  _.get_leftProjectionMatrix_n9ymks$ = get_leftProjectionMatrix;
  _.set_leftProjectionMatrix_hjixo9$ = set_leftProjectionMatrix;
  _.get_leftViewMatrix_n9ymks$ = get_leftViewMatrix;
  _.set_leftViewMatrix_hjixo9$ = set_leftViewMatrix;
  _.get_pose_n9ymks$ = get_pose;
  _.set_pose_lhzucf$ = set_pose;
  _.get_rightProjectionMatrix_n9ymks$ = get_rightProjectionMatrix;
  _.set_rightProjectionMatrix_hjixo9$ = set_rightProjectionMatrix;
  _.get_rightViewMatrix_n9ymks$ = get_rightViewMatrix;
  _.set_rightViewMatrix_hjixo9$ = set_rightViewMatrix;
  _.get_timestamp_n9ymks$ = get_timestamp;
  _.set_timestamp_ti2s76$ = set_timestamp;
  _.get_angularAcceleration_nttaoy$ = get_angularAcceleration;
  _.set_angularAcceleration_an2jai$ = set_angularAcceleration;
  _.get_angularVelocity_nttaoy$ = get_angularVelocity;
  _.set_angularVelocity_an2jai$ = set_angularVelocity;
  _.get_linearAcceleration_nttaoy$ = get_linearAcceleration;
  _.set_linearAcceleration_an2jai$ = set_linearAcceleration;
  _.get_linearVelocity_nttaoy$ = get_linearVelocity;
  _.set_linearVelocity_an2jai$ = set_linearVelocity;
  _.get_orientation_nttaoy$ = get_orientation;
  _.set_orientation_an2jai$ = set_orientation;
  _.get_position_nttaoy$ = get_position;
  _.set_position_an2jai$ = set_position;
  _.get_timestamp_nttaoy$ = get_timestamp_0;
  _.set_timestamp_s46pqs$ = set_timestamp_0;
  _.get_sittingToStandingTransform_a4kub$ = get_sittingToStandingTransform;
  _.set_sittingToStandingTransform_cgjqxj$ = set_sittingToStandingTransform;
  _.get_sizeX_a4kub$ = get_sizeX;
  _.set_sizeX_69tpvw$ = set_sizeX;
  _.get_sizeY_a4kub$ = get_sizeY;
  _.set_sizeY_69tpvw$ = set_sizeY;
  _.getVRDisplays_yi0el1$ = getVRDisplays;
  _.get_activeVRDisplays_yi0el1$ = get_activeVRDisplays;
  _.set_activeVRDisplays_odtvir$ = set_activeVRDisplays;
  _.get_onvrdisplayconnected_nz12v2$ = get_onvrdisplayconnected;
  _.set_onvrdisplayconnected_dfx1an$ = set_onvrdisplayconnected;
  _.get_onvrdisplaydisconnected_nz12v2$ = get_onvrdisplaydisconnected;
  _.set_onvrdisplaydisconnected_dfx1an$ = set_onvrdisplaydisconnected;
  _.get_onvrdisplaypresentchange_nz12v2$ = get_onvrdisplaypresentchange;
  _.set_onvrdisplaypresentchange_dfx1an$ = set_onvrdisplaypresentchange;
  _.get_displayId_s6by0i$ = get_displayId_0;
  _.set_displayId_gvcnko$ = set_displayId_0;
  var package$extension = package$BABYLON.extension || (package$BABYLON.extension = {});
  package$extension.createScene_ivxn3r$ = createScene;
  package$extension.runRenderLoop_w7gcas$ = runRenderLoop;
  Kotlin.defineModule('babylonKt', _);
  return _;
});

//# sourceMappingURL=babylonKt.js.map
