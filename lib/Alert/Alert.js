'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Alert Component for Patternfly React
 */
var Alert = function Alert(_ref) {
  var children = _ref.children,
      onDismiss = _ref.onDismiss,
      type = _ref.type;

  var alertClass = (0, _classnames2.default)({
    alert: true,
    'alert-danger': type === 'danger' || type === 'error',
    'alert-warning': type === 'warning',
    'alert-success': type === 'success',
    'alert-info': type === 'info',
    'alert-dismissable': onDismiss
  });
  var iconClass = (0, _classnames2.default)({
    pficon: true,
    'pficon-error-circle-o': type === 'danger' || type === 'error',
    'pficon-warning-triangle-o': type === 'warning',
    'pficon-ok': type === 'success',
    'pficon-info': type === 'info'
  });

  return _react2.default.createElement(
    'div',
    { className: alertClass },
    onDismiss && _react2.default.createElement(
      'button',
      {
        type: 'button',
        className: 'close',
        'aria-hidden': 'true',
        onClick: onDismiss
      },
      _react2.default.createElement('span', { className: 'pficon pficon-close' })
    ),
    _react2.default.createElement('span', { className: iconClass }),
    children
  );
};
Alert.propTypes = {
  /** callback when alert is dismissed  */
  onDismiss: _propTypes2.default.func,
  /** the type of alert  */
  type: _propTypes2.default.oneOf(['danger', 'error', 'warning', 'success', 'info']).isRequired,
  /** children nodes  */
  children: _propTypes2.default.node
};
Alert.defaultProps = {
  type: 'error'
};

exports.default = Alert;