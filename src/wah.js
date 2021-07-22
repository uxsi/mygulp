/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["WAH"] = factory();
	else
		root["WAH"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/wah.css":
/*!***********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/wah.css ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* 控制器 */\\n.wah-controls {\\n  position: fixed;\\n  z-index: 100000;\\n  bottom: calc(10px + constant(safe-area-inset-bottom));\\n  bottom: calc(10px + env(safe-area-inset-bottom));\\n  right: constant(safe-area-inset-right);\\n  right: env(safe-area-inset-right);\\n  display: flex;\\n  align-items: center;\\n  background: rgba(0, 0, 0, 0.5);\\n  color: #fff;\\n  font-size: 14px;\\n  border-top-left-radius: 4px;\\n  border-bottom-left-radius: 4px;\\n  overflow: hidden;\\n}\\n.wah-control {\\n  padding: 4px;\\n  display: flex;\\n  align-items: center;\\n}\\n\\n/* 热区蓝字 */\\n.wah-hotarea-size {\\n  z-index: 99999;\\n  font-size: 10px;\\n  background: rgba(0, 0, 255, 0.5);\\n  color: #FFF;\\n}\\n\\n/* 读屏红框 */\\n.wah-reading-panel {\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n  pointer-events: none;\\n}\\n.wah-reading-outline {\\n  position: absolute;\\n  z-index: 99999;\\n  transform: translateZ(999999px);\\n  border: 2px solid rgba(255, 0, 0, 0.5);\\n  background: rgba(100, 0, 0, 0.3);\\n  font-size: 10px;\\n  font-weight: 500;\\n  line-height: 1.4;\\n  color: #fff;\\n  word-break: break-all;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://WAH/./src/wah.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://WAH/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/wah.css":
/*!*********************!*\
  !*** ./src/wah.css ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/getTarget.js */ \"./node_modules/style-loader/dist/runtime/getTarget.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_wah_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./wah.css */ \"./node_modules/css-loader/dist/cjs.js!./src/wah.css\");\n\n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = function(css, style){\n      if (style.styleSheet) {\n        style.styleSheet.cssText = css;\n      } else {\n      while (style.firstChild) {\n        style.removeChild(style.firstChild);\n      }\n\n      style.appendChild(document.createTextNode(css));\n    }\n  };\noptions.setAttributes = function(style) {\n        var nonce =\n           true ? __webpack_require__.nc : 0;\n\n        if (nonce) {\n          style.setAttribute(\"nonce\", nonce);\n        }\n      };\noptions.insert = function(style){\n    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()(\"head\");\n\n    if (!target) {\n      throw new Error(\n        \"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\"\n      );\n    }\n\n    target.appendChild(style);\n  };\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_wah_css__WEBPACK_IMPORTED_MODULE_4__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_wah_css__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_wah_css__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_wah_css__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);\n\n\n//# sourceURL=webpack://WAH/./src/wah.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/getTarget.js":
/*!*************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/getTarget.js ***!
  \*************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n\nmodule.exports = getTarget;\n\n//# sourceURL=webpack://WAH/./node_modules/style-loader/dist/runtime/getTarget.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://WAH/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://WAH/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://WAH/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _wah_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wah.css */ \"./src/wah.css\");\n/* harmony import */ var _wah_reading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wah-reading */ \"./src/wah-reading.js\");\n/* harmony import */ var _wah_hotarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wah-hotarea */ \"./src/wah-hotarea.js\");\n/**\n * 走查读屏器辅助工具\n * @author bearyan xushengni\n */\n\n\n\n\n\n// 控制器HTML\nconst CONTROL_TMPL =\n`<div class=\"wah-controls\">\n  <div class=\"wah-control\">\n    <label for=\"wah-control-hotarea\">走查热区</label>\n    <input type=\"checkbox\" id=\"wah-control-hotarea\" />\n  </div>\n  <div class=\"wah-control\">\n    <label for=\"wah-control-reading\">走查读屏</label>\n    <input type=\"checkbox\" id=\"wah-control-reading\" />\n  </div>\n</div>`\n\nfunction addControl(wrapEl) {\n  const controlEl = document.createElement('DIV')\n  controlEl.innerHTML = CONTROL_TMPL\n  controlEl.addEventListener('input', (evt) => {\n    const target = evt.target\n    const checked = target.checked\n\n    switch (target.id) {\n      case 'wah-control-hotarea':\n        if (checked) {\n          _wah_hotarea__WEBPACK_IMPORTED_MODULE_2__.default.show()\n        } else {\n          _wah_hotarea__WEBPACK_IMPORTED_MODULE_2__.default.hide()\n        }\n        break;\n      case 'wah-control-reading':\n        _wah_reading__WEBPACK_IMPORTED_MODULE_1__.default.hide()\n\n        if (checked) {\n          _wah_reading__WEBPACK_IMPORTED_MODULE_1__.default.show(wrapEl)\n        }\n        break;\n    }\n  }, false)\n\n  wrapEl.appendChild(controlEl)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  init(wrapEl) {\n    if (!wrapEl) wrapEl = document.body\n\n    addControl(wrapEl)\n  },\n});\n\n\n//# sourceURL=webpack://WAH/./src/index.js?");

/***/ }),

/***/ "./src/libs/ReadOnceProxy.js":
/*!***********************************!*\
  !*** ./src/libs/ReadOnceProxy.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * 只读一次的属性\n * @type {*[]}\n */\n\nlet readOnceMap = [] // { obj: {}, props: [] }\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  proxy(obj) {\n    return new Proxy(obj, {\n      get(target, name) {\n        if (typeof target[name] === 'function') {\n          return target[name].bind(target)\n        }\n\n        const record = readOnceMap.find(item => item.obj === target)\n\n        if (record) {\n          if (record.props.indexOf(name) > -1) return null\n\n          record.props.push(name)\n        } else {\n          readOnceMap.push({\n            obj: target,\n            props: [name]\n          })\n        }\n\n        return Reflect.get(target, name)\n      }\n    });\n  },\n  clear() {\n    readOnceMap = []\n  }\n});\n\n\n//# sourceURL=webpack://WAH/./src/libs/ReadOnceProxy.js?");

/***/ }),

/***/ "./src/libs/computeTextFromResult.js":
/*!*******************************************!*\
  !*** ./src/libs/computeTextFromResult.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * 传入 aria result 计算出纯文本\n */\n\nfunction computeTextFromResult(ariaResult) {\n  if (!ariaResult) return ''\n\n  const textContent = []\n  if (ariaResult.wordings) {\n    textContent.push(ariaResult.wordings.name.filter(i => i)) // 只取name就够了\n  }\n  if (ariaResult.children) {\n    ariaResult.children.forEach(child => {\n      textContent.push(computeTextFromResult(child))\n    })\n  }\n\n  return textContent.join('')\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (computeTextFromResult);\n\n\n//# sourceURL=webpack://WAH/./src/libs/computeTextFromResult.js?");

/***/ }),

/***/ "./src/libs/getRenderPosition.js":
/*!***************************************!*\
  !*** ./src/libs/getRenderPosition.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getStyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getStyle */ \"./src/libs/getStyle.js\");\n/**\n * 检测是否 fixed 元素的后代\n */\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(originEl) {\n  if (!originEl) return 'absolute'\n\n  let currentEl = originEl\n\n  while(true) {\n    const position = (0,_getStyle__WEBPACK_IMPORTED_MODULE_0__.default)(currentEl, 'position')\n    if (position === 'fixed') {\n      return 'fixed'\n    } else if (position === 'sticky') {\n      return currentEl === originEl ? 'sticky' : 'absolute'\n    } else {\n      currentEl = currentEl.parentElement\n      if (currentEl === document.body || !currentEl) {\n        break\n      }\n    }\n  }\n\n  return 'absolute'\n}\n\n\n//# sourceURL=webpack://WAH/./src/libs/getRenderPosition.js?");

/***/ }),

/***/ "./src/libs/getStyle.js":
/*!******************************!*\
  !*** ./src/libs/getStyle.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(el, prop) {\n  try {\n    return (el.style && el.style[prop]) || window.getComputedStyle(el, null).getPropertyValue(prop.replace(/([A-Z])/g, '-$1').toLowerCase())\n  } catch(e) {\n    return ''\n  }\n}\n\n\n//# sourceURL=webpack://WAH/./src/libs/getStyle.js?");

/***/ }),

/***/ "./src/wah-hotarea.js":
/*!****************************!*\
  !*** ./src/wah-hotarea.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _libs_getRenderPosition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs/getRenderPosition */ \"./src/libs/getRenderPosition.js\");\n/**\n * 点击热区模块\n */\n\n\nconst STYLE_TMPL =\n`[wah-hotarea] {\n  box-shadow: 0 0 0 1px rgba(0, 0, 255, 0.5), inset 0 0 0 1px rgba(0, 0, 255, 0.5);\n  outline: 1px solid rgba(0, 0, 255, 0.5);\n}\n`\nconst CONTROL_SELECTOR_LIST = ['a:not([wah-hotarea-scaned])', 'input:not([wah-hotarea-scaned])', 'button:not([wah-hotarea-scaned])']\nconst controlList = []\nlet style\n\n\n(function() {\n  const _interfaces = Object.getOwnPropertyNames(window).filter(function(i) {\n    return /^HTML/.test(i);\n  }).map(function(i) {\n    return window[i];\n  });\n\n  for (let i = 0; i < _interfaces.length; i++) {\n    (\n      function(original) {\n        _interfaces[i].prototype.addEventListener = function(type, listener, useCapture) {\n          if (type === 'click' || type === 'touchstart' || type === 'touchend') {\n            this && this.setAttribute && this.setAttribute('wah-hotarea', type)\n            if (controlList.indexOf(this) < 0) {\n              controlList.push(this)\n            }\n          }\n          return original.apply(this, arguments)\n        }\n      }\n    )(_interfaces[i].prototype.addEventListener)\n  }\n})()\n\n\nfunction showElSize(originEl){\n  if (!originEl) return\n  const el = document.createElement('DIV')\n  const scrollTop = (window.pageYOffset || document.documentElement.scrollTop)\n  const scrollLeft = (window.pageXOffset || document.documentElement.scrollLeft)\n\n  const rect = originEl.getBoundingClientRect()\n  const position = (0,_libs_getRenderPosition__WEBPACK_IMPORTED_MODULE_0__.default)(originEl)\n  const isFixed = position === 'fixed'\n\n  el.classList && el.classList.add('wah-hotarea-size')\n  el.textContent = '[' + originEl.offsetWidth + \"*\" + originEl.offsetHeight + ']'\n  el.style.position = position\n  el.style.top = (isFixed ? 0 : scrollTop) + rect.top + 'px'\n  el.style.left = (isFixed ? 0 : scrollLeft) + rect.left + 'px'\n  el._wahNode = originEl\n  originEl.getAttribute && !originEl.getAttribute('wah-hotarea') && originEl.setAttribute('wah-hotarea', 'click')\n\n  document.querySelector('#wah-hotarea-panel').appendChild(el)\n}\nfunction showOutline() {\n  style = document.createElement('style')\n  style.appendChild(document.createTextNode(STYLE_TMPL))\n  document.head.appendChild(style)\n}\nfunction hideOutline() {\n  style && document.head.removeChild(style)\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  hide() {\n    hideOutline()\n\n    const wahPanel = document.querySelector('#wah-hotarea-panel')\n    if (wahPanel) {\n      wahPanel.parentElement.removeChild(wahPanel)\n    }\n  },\n  show() {\n    const elWrp = document.createElement('DIV')\n    elWrp.id = 'wah-hotarea-panel'\n    document.body.appendChild(elWrp)\n\n    const els = document.querySelectorAll(CONTROL_SELECTOR_LIST)\n    Array.prototype.forEach.call(els, function(el) {\n      el.setAttribute('wah-hotarea-scaned', true)\n      if (controlList.indexOf(el) < 0) {\n        controlList.push(el)\n      }\n    })\n\n    controlList.forEach(showElSize)\n    showOutline()\n  },\n});\n\n\n//# sourceURL=webpack://WAH/./src/wah-hotarea.js?");

/***/ }),

/***/ "./src/wah-reading.js":
/*!****************************!*\
  !*** ./src/wah-reading.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _libs_ReadOnceProxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs/ReadOnceProxy */ \"./src/libs/ReadOnceProxy.js\");\n/* harmony import */ var _libs_computeTextFromResult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libs/computeTextFromResult */ \"./src/libs/computeTextFromResult.js\");\n/* harmony import */ var _libs_getStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libs/getStyle */ \"./src/libs/getStyle.js\");\n/* harmony import */ var _libs_getRenderPosition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./libs/getRenderPosition */ \"./src/libs/getRenderPosition.js\");\n/**\n * 读屏模块\n */\n\n\n\n\n\n\n// 过滤result\nconst genARIARet = function(name, type, desc) {\n  return {\n    name: [(name && name.trim().replace(/\\n/g, '')) || ''],\n    type: [(type && type.trim().replace(/\\n/g, '')) || ''],\n    desc: [(desc && desc.trim().replace(/\\n/g, '')) || ''],\n  }\n}\n\n// 块级别元素的类型\nconst BLOCK_ARIA_TYPE = {\n  h1: '标题级别一',\n  h2: '标题级别二',\n  h3: '标题级别三',\n  h4: '标题级别四',\n  h5: '标题级别五',\n  h6: '标题级别六',\n}\n\n// 设置元素读取规则\nconst tagNameDefault = function(dom, parentARIAType, type) {\n  return genARIARet(\n    dom.ariaLabel || dom.textContent || dom.title,\n    type,\n    dom.ariaDescription || dom.title,\n  )\n}\nconst ARIA_TAG_NAME_RULES = {\n  a(dom, parentARIAType) {\n    return genARIARet(\n      dom.ariaLabel || dom.textContent || dom.title || dom.getAttribute('summary'),\n      dom.href && '链接',\n      dom.ariaDescription || dom.title,\n    )\n  },\n  button(dom, parentARIAType) {\n    return tagNameDefault(dom, parentARIAType, '按钮');\n  },\n  img(dom, parentARIAType) {\n    return genARIARet(\n      dom.ariaLabel || dom.alt || dom.title,\n      '图像',\n      dom.ariaDescription || dom.title\n    )\n  },\n  svg(dom, parentARIAType) {\n    return genARIARet(\n      dom.ariaLabel || dom.alt || dom.title,\n      '图像',\n      dom.ariaDescription || dom.title\n    )\n  },\n  input(dom, parentARIAType) {\n    const type = dom.type\n    const id = dom.id\n    let labelText = ''\n\n    if (id) {\n      const labelDom = document.querySelector('label[for=' + id + ']')\n      if (labelDom) {\n        labelText = labelDom.textContent\n      }\n    }\n\n    switch (type){\n      case 'image':\n        return genARIARet(\n          dom.ariaLabel || dom.alt || dom.value || dom.title,\n          '图像',\n          dom.ariaDescription || dom.title\n        )\n      case 'button':\n        return genARIARet(\n          dom.ariaLabel || dom.value || dom.title,\n          '按钮',\n          dom.ariaDescription || dom.value || dom.title\n        )\n      case 'submit':\n        return genARIARet(\n          dom.ariaLabel || dom.value || '提交' || dom.title,\n          '按钮',\n          dom.ariaDescription || dom.title\n        )\n      case 'reset':\n        return genARIARet(\n          dom.ariaLabel || dom.value || '重置' || dom.title,\n          '按钮',\n          dom.ariaDescription || dom.title\n        )\n      default:\n        return genARIARet(\n          (labelText || dom.ariaLabel) + (dom.value || dom.placeholder || dom.title),\n          '文本栏',\n          dom.ariaDescription || dom.placeholder || dom.title\n        )\n    }\n  },\n}\n\n// 设置role的读取规则\nconst roleRuleDefault = function(dom, parentARIAType, type) {\n  return genARIARet(\n    dom.ariaLabel || (0,_libs_computeTextFromResult__WEBPACK_IMPORTED_MODULE_1__.default)(scan(dom)) || dom.title,\n    type,\n    dom.ariaDescription || dom.title,\n  )\n}\nconst ARIA_ROLE_RULES = {\n  img(dom, parentARIAType){\n    return genARIARet(\n      dom.ariaLabel || dom.alt || dom.title,\n      '图像',\n      dom.ariaDescription || dom.title\n    )\n  },\n  link(dom, parentARIAType) {\n    return genARIARet(\n      dom.ariaLabel || (0,_libs_computeTextFromResult__WEBPACK_IMPORTED_MODULE_1__.default)(scan(dom, parentARIAType)) || dom.title || dom.getAttribute('summary'),\n      '链接',\n      dom.ariaDescription || dom.title,\n    )\n  },\n  button(dom, parentARIAType) {\n    return roleRuleDefault(dom, parentARIAType, '按钮');\n  },\n  option: roleRuleDefault,\n  banner(dom, parentARIAType) {\n    return genARIARet(\n      dom.ariaLabel || dom.title || (0,_libs_computeTextFromResult__WEBPACK_IMPORTED_MODULE_1__.default)(scan(dom, parentARIAType)),\n      '横幅',\n      ''\n    )\n  },\n  alert(dom, parentARIAType) {\n    return genARIARet(\n      (0,_libs_computeTextFromResult__WEBPACK_IMPORTED_MODULE_1__.default)(scan(dom, parentARIAType)),\n      '',\n      ''\n    )\n  },\n  dialog(dom, parentARIAType) {\n    return genARIARet(\n      dom.ariaLabel || dom.title,\n      '网页对话框',\n      dom.ariaDescription || dom.title,\n    )\n  },\n  textbox(dom, parentARIAType) {\n    return genARIARet(dom.textContent, '文本栏')\n  },\n  text(dom, parentARIAType) {\n    return genARIARet((0,_libs_computeTextFromResult__WEBPACK_IMPORTED_MODULE_1__.default)(scan(dom, parentARIAType)))\n  },\n}\n\n// 结果类型\nconst RESULT_TYPE = {\n  TEXT: 'text', // 文本\n  ROLE: 'role', // 角色\n  REPLACED: 'replaced', // 行内可替换\n  TREE: 'tree', // 带子节点的树\n}\nconst NODE_NAME_FILTER_LIST = ['script', 'style']\n\n// 扫描目标内的所有节点\nfunction scan(wrapEl, parentARIAType) {\n  const rect = wrapEl.getBoundingClientRect()\n  const children = []\n  const wrapElARIAType = BLOCK_ARIA_TYPE[wrapEl.nodeName.toLowerCase()] || parentARIAType || ''\n\n  wrapEl.childNodes.forEach((node) => {\n    const nodeName = node.nodeName.toLowerCase()\n\n    // 隐藏了的不用扫描\n    if (node.ariaHidden !== undefined && node.ariaHidden !== null || (0,_libs_getStyle__WEBPACK_IMPORTED_MODULE_2__.default)(node, 'display') === 'none') return\n\n    // #comment等注释节点不扫描\n    if (/^#/.test(nodeName) && !/^#text/.test(nodeName)) return\n\n    // 黑名单\n    if (NODE_NAME_FILTER_LIST.indexOf(nodeName) > -1) return\n\n    if (nodeName === '#text') {\n      // 文字节点\n      const text = node.textContent.trim()\n      if (text) {\n        // 需要有文字才加进来\n        const wordings = genARIARet(text)\n        if (wrapElARIAType) {\n          wordings.type.unshift(wrapElARIAType)\n        }\n        children.push({\n          type: RESULT_TYPE.TEXT,\n          name: nodeName,\n          wordings: wordings,\n        })\n      }\n    } else {\n      // 其他节点\n      const nodeRect = node.getBoundingClientRect()\n      const role = (node.getAttribute('role') || '').toLowerCase()\n\n      if ((nodeRect.left + nodeRect.right === 0) || (nodeRect.top + nodeRect.bottom === 0)) {\n        // 故意隐藏的节点\n        const text = node.textContent.trim()\n        if (text) {\n          // 需要有文字才加进来\n          const wordings = genARIARet('[' + text + ']')\n          if (wrapElARIAType) {\n            wordings.type.unshift(wrapElARIAType)\n          }\n          children.push({\n            type: RESULT_TYPE.TEXT,\n            name: nodeName,\n            wordings: wordings,\n          })\n        }\n      } else if (ARIA_ROLE_RULES[role]) {\n        // 设置了 role 的元素\n        const wordings = ARIA_ROLE_RULES[role](_libs_ReadOnceProxy__WEBPACK_IMPORTED_MODULE_0__.default.proxy(node), parentARIAType)\n        if (wrapElARIAType) {\n          wordings.type.unshift(wrapElARIAType)\n        }\n        children.push({\n          type: RESULT_TYPE.ROLE,\n          node: node,\n          name: role,\n          rect: nodeRect,\n          wordings: wordings,\n        })\n      } else if (ARIA_TAG_NAME_RULES[nodeName]) {\n        // 可替换元素\n        const wordings = ARIA_TAG_NAME_RULES[nodeName](_libs_ReadOnceProxy__WEBPACK_IMPORTED_MODULE_0__.default.proxy(node), parentARIAType)\n        if (wrapElARIAType) {\n          wordings.type.unshift(wrapElARIAType)\n        }\n        children.push({\n          type: RESULT_TYPE.REPLACED,\n          node: node,\n          name: nodeName,\n          rect: nodeRect,\n          wordings: wordings,\n        })\n      } else {\n        // 递归扫描子节点\n        const child = scan(node, wrapElARIAType)\n        if (child) {\n          children.push(child)\n        }\n      }\n    }\n  })\n\n  // 没有wording，也没有子节点，返回空\n  if (!children.length) return null\n\n  return {\n    type: RESULT_TYPE.TREE,\n    node: wrapEl,\n    name: wrapEl.nodeName,\n    rect,\n    children\n  }\n}\n\n// 根据扫描结果，获得一个带边框的el\nfunction getOutlineEl(result) {\n  if (!result.rect) return\n\n  const scrollTop = (window.pageYOffset || document.documentElement.scrollTop)\n  const scrollLeft = (window.pageXOffset || document.documentElement.scrollLeft)\n\n  const el = document.createElement('DIV')\n  const rect = result.rect\n  const position = (0,_libs_getRenderPosition__WEBPACK_IMPORTED_MODULE_3__.default)(result.node)\n  const isFixed = position === 'fixed'\n\n  el.ariaHidden = true\n  el.classList.add('wah-reading-outline')\n  el.style.position = position\n  el.style.top = (isFixed ? 0 : scrollTop) + rect.top - 1 + 'px'\n  el.style.left = (isFixed ? 0 : scrollLeft) + rect.left - 1 + 'px'\n  el.style.width = rect.width - 2 + 'px'\n  el.style.height = rect.height - 2 + 'px'\n  el._wahNode = result.node\n\n  if (result.wordings) {\n    el.innerText = result.wordings.name.concat(result.wordings.type.concat(result.wordings.desc)).filter(i => i && i).join('，')\n  } else {\n    if (!result.children.filter(child => child.type === RESULT_TYPE.TEXT).length) return\n\n    el.innerText = result.children.map(child => {\n      switch (child.type) {\n        case RESULT_TYPE.TEXT:\n          return child.wordings.name.concat(child.wordings.type.concat(child.wordings.desc)).filter(i => i && i).join('，')\n        default:\n          return '<'+ child.name +'>'\n      }\n    }).join(' ')\n  }\n\n  return el\n}\n\n// 递归画边框\nfunction drawOutline(panelEl, result) {\n  if (!result) return\n\n  const el = getOutlineEl(result)\n  if (el) panelEl.appendChild(el)\n\n  if (result.children && result.children.length) {\n    result.children.forEach((childResult) => {\n      drawOutline(panelEl, childResult)\n    })\n  }\n}\n\n// 画边框\nfunction draw(wrapEl, result) {\n  if (!result) return\n\n  const panelEl = document.createElement('DIV')\n  panelEl.id = 'wah-reading-panel'\n  panelEl.classList.add('wah-reading-panel')\n  panelEl.ariaHidden = true\n\n  drawOutline(panelEl, result)\n  wrapEl.appendChild(panelEl)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  hide() {\n    const wahPanel = document.querySelector('#wah-reading-panel')\n    if (wahPanel) {\n      wahPanel.parentElement.removeChild(wahPanel)\n    }\n    _libs_ReadOnceProxy__WEBPACK_IMPORTED_MODULE_0__.default.clear()\n  },\n  show(wrapEl) {\n    if (!wrapEl) wrapEl = document.body\n\n    const result = scan(wrapEl)\n\n    if (result) {\n      draw(wrapEl, result)\n    }\n  }\n});\n\n\n//# sourceURL=webpack://WAH/./src/wah-reading.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});