'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ListViewItemContents = require('./ListViewItemContents');

var _ListViewItemContents2 = _interopRequireDefault(_ListViewItemContents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * ListViewItemContents Component for Patternfly React
 */

var ListViewItem = function ListViewItem(_ref) {
  var iconClass = _ref.iconClass,
      heading = _ref.heading,
      itemText = _ref.itemText,
      additionalInfo = _ref.additionalInfo;

  return _react2.default.createElement(
    'div',
    { className: 'list-group-item' },
    _react2.default.createElement(_ListViewItemContents2.default, {
      iconClass: iconClass,
      heading: heading,
      itemText: itemText,
      additionalInfo: additionalInfo
    })
  );
};

ListViewItem.propTypes = {
  /** icon class  */
  iconClass: _propTypes2.default.string,
  /** header node  */
  heading: _propTypes2.default.node.isRequired,
  /** item text node  */
  itemText: _propTypes2.default.node,
  /** additional info node  */
  additionalInfo: _propTypes2.default.node
};

ListViewItem.defaultProps = {
  /** default icon class */
  iconClass: null,
  /** default additional info */
  additionalInfo: ''
};

exports.default = ListViewItem;