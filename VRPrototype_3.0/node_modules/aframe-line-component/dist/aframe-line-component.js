/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	/* global AFRAME */

	if (typeof AFRAME === 'undefined') {
	  throw new Error('Component attempted to register before AFRAME was available.');
	}

	/**
	 * Line component for A-Frame.
	 */
	AFRAME.registerComponent('line', {
	  schema: {
	    start: {type: 'vec3', default: '0 0 0'},
	    end: {type: 'vec3', default: '0 0 0'},
	    color: {type: 'color', default: '#fff'},
	    opacity: {type: 'number', default: '1'}
	  },

	  init: function () {
	    var material = this.material = new THREE.LineBasicMaterial({
	      color: this.data.color,
	      opacity: this.data.opacity,
	      transparent: this.data.opacity < 1
	    });
	    var geometry = this.geometry = new THREE.BufferGeometry();
	    geometry.addAttribute('position', new THREE.BufferAttribute(new Float32Array(2 * 3), 3));

	    this.line = new THREE.Line(geometry, material);
	    this.el.setObject3D('line', this.line);
	  },

	  update: function (oldData) {
	    var data = this.data;
	    var diff = AFRAME.utils.diff(data, oldData);

	    // Update geometry
	    if ('start' in diff || 'end' in diff) {
	      var pos = this.geometry.attributes.position.array;
	      pos[0] = data.start.x;
	      pos[1] = data.start.y;
	      pos[2] = data.start.z;
	      pos[3] = data.end.x;
	      pos[4] = data.end.y;
	      pos[5] = data.end.z;
	      this.geometry.attributes.position.needsUpdate = true;
	      this.geometry.computeBoundingSphere();
	    }

	    this.material.color.setStyle(data.color);
	  }
	});


/***/ }
/******/ ]);