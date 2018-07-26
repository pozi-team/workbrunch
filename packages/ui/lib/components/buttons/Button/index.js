'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['center center'], ['center center']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ = require('../..');

var _utils = require('../../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// type Props = {
//   label: string,
//   loading?: boolean,
// }
function Button(props) {
  var label = props.label,
      loading = props.loading;

  if (loading) return _react2.default.createElement(_.Progress.Loading, null);
  return _react2.default.createElement(
    StyledButton,
    null,
    label
  );
}

var StyledButton = _styledComponents2.default.button.withConfig({
  displayName: 'Button__StyledButton'
})(['', ' min-width:100px;height:40px;padding:0 20px;border-radius:9999px;color:white;font-size:0.75rem;font-weight:700;text-align:center;cursor:pointer;'], (0, _utils.flexbox)(_templateObject));

exports.default = Button;