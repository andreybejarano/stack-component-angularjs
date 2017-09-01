(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TemplateForComponent = exports.TemplateForComponent = {
	bindings: {},
	templateUrl: 'template-for-component.html',
	controller: function () {
		TemplateForComponentController.$inject = ["EventEmitter"];
		function TemplateForComponentController(EventEmitter) {
			'ngInject';

			_classCallCheck(this, TemplateForComponentController);

			this.EventEmitter = EventEmitter;
		}

		_createClass(TemplateForComponentController, [{
			key: '$onInit',
			value: function $onInit() {}
		}, {
			key: '$onChanges',
			value: function $onChanges(changes) {}
		}]);

		return TemplateForComponentController;
	}()
};

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AmTemplateForComponentModule = undefined;

var _templateForComponent = require('./template-for-component.component');

var _templateForComponent2 = require('./template-for-component.template');

var AmTemplateForComponentModule = exports.AmTemplateForComponentModule = angular.module('templateForComponent', [_templateForComponent2.AppTemplates]).value('EventEmitter', function (payload) {
    return { $event: payload };
}).component('templateForComponent', _templateForComponent.TemplateForComponent).name;

},{"./template-for-component.component":1,"./template-for-component.template":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var AppTemplates = exports.AppTemplates = angular.module("amForComponent.template", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put('template-for-component.html', '<div class="container"><H1>TemplateForComponent</H1><div class="row"><input type="text" class="col-lg-3 col-md-6 col-sm-12 col-xs-12"/><input type="text" class="col-lg-3 col-md-6 col-sm-12 col-xs-12"/></div></div>');
}]).name;

},{}]},{},[2]);

//# sourceMappingURL=template-for-component.js.map
