'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['center center'], ['center center']);

exports.default = Loading;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _utils = require('../../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function Loading(props) {
  return _react2.default.createElement(
    Container,
    props,
    _react2.default.createElement(Loader, props)
  );
}

var Container = _styledComponents2.default.div.withConfig({
  displayName: 'Loading__Container'
})(['flex:1;width:100%;', ''], (0, _utils.flexbox)(_templateObject));

var loader = (0, _styledComponents.keyframes)(['from{transform:rotate(0deg);}to{transform:rotate(360deg);}']);

var Loader = _styledComponents2.default.div.withConfig({
  displayName: 'Loading__Loader'
})(['border:2px solid rgba(0,0,0,0.2);border-bottom-color:rgba(255,255,255,0.8);transform:translateZ(0);animation:', ' 500ms infinite linear;width:25px;height:25px;border-radius:50%;'], loader);