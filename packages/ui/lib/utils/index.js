'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hoverButton = exports.flexbox = exports.media = undefined;

var _styledComponents = require('styled-components');

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

var sizes = {
  desktop: 'min-width: 992px',
  mobile: 'max-width: 991px',
  tablet: 'min-width: 768px, max-width: 991px',
  phone: 'max-width: 767px'
};

var media = exports.media = Object.keys(sizes).reduce(function (acc, label) {
  _newArrowCheck(undefined, undefined);

  acc[label] = function () {
    _newArrowCheck(undefined, undefined);

    return (0, _styledComponents.css)(['@media (', '){', '}'], sizes[label], _styledComponents.css.apply(undefined, arguments));
  }.bind(undefined);
  return acc;
}.bind(undefined), {});

var flexbox = exports.flexbox = function (val) {
  _newArrowCheck(undefined, undefined);

  if (!Array.isArray(val)) return null;
  var v = val[0].split(' ');
  return (0, _styledComponents.css)(['display:flex;justify-content:', ';align-items ', ';'], v[0], v[1]);
}.bind(undefined);

var hoverButton = exports.hoverButton = function (colour, percentage) {
  _newArrowCheck(undefined, undefined);

  return '\n  transition: background-color 200ms ease-in-out;\n  &:hover {\n    background-color :tint(' + String(colour) + ', ' + String(percentage) + ');\n  }\n';
}.bind(undefined);