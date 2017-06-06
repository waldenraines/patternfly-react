'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * ListViewItemContents Component for Patternfly React
 */

var ListViewItemContents = function ListViewItemContents(_ref) {
  var iconClass = _ref.iconClass,
      heading = _ref.heading,
      itemText = _ref.itemText,
      additionalInfo = _ref.additionalInfo;

  var fullIconClass = (0, _classnames2.default)('list-view-of-icon-sm', 'fa', iconClass);

  return _react2.default.createElement(
    'div',
    { className: 'list-view-pf-main-info' },
    _react2.default.createElement(
      'div',
      { className: 'list-view-pf-left' },
      _react2.default.createElement('span', { className: fullIconClass })
    ),
    _react2.default.createElement(
      'div',
      { className: 'list-view-pf-body' },
      _react2.default.createElement(
        'div',
        { className: 'list-view-pf-description' },
        _react2.default.createElement(
          'div',
          { className: 'list-group-item-heading' },
          heading
        ),
        _react2.default.createElement(
          'div',
          { className: 'list-group-item-text' },
          itemText
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'list-view-pf-additional-info' },
        additionalInfo
      )
    )
  );
};

ListViewItemContents.propTypes = {
  /** icon class  */
  iconClass: _propTypes2.default.string,
  /** header node  */
  heading: _propTypes2.default.node.isRequired,
  /** item text node  */
  itemText: _propTypes2.default.node,
  /** additional info node  */
  additionalInfo: _propTypes2.default.node
};

ListViewItemContents.defaultProps = {
  /** default icon class */
  iconClass: 'fa-question',
  /** default additional info */
  additionalInfo: ''
};

exports.default = ListViewItemContents;