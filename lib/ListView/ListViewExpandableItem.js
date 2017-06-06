'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ListViewItemContents = require('./ListViewItemContents');

var _ListViewItemContents2 = _interopRequireDefault(_ListViewItemContents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * ListViewExpandableItem Component for Patternfly React
 */
var ListViewExpandableItem = function (_React$Component) {
  _inherits(ListViewExpandableItem, _React$Component);

  function ListViewExpandableItem(props) {
    _classCallCheck(this, ListViewExpandableItem);

    var _this = _possibleConstructorReturn(this, (ListViewExpandableItem.__proto__ || Object.getPrototypeOf(ListViewExpandableItem)).call(this, props));

    _this.state = {
      open: props.expanded || false
    };

    _this.toggleExpanded = _this.toggleExpanded.bind(_this);
    return _this;
  }

  _createClass(ListViewExpandableItem, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps, oldProps) {
      if (newProps.expanded !== oldProps.expanded) {
        this.setState({ open: newProps.expanded });
      }
    }
  }, {
    key: 'toggleExpanded',
    value: function toggleExpanded(e) {
      this.setState({
        open: !this.state.open
      });

      if (this.props.onToggleExpanded) {
        this.props.onToggleExpanded(e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var expandIconClass = (0, _classnames2.default)('fa', 'fa-angle-right', this.state.open ? 'fa-angle-down' : '');

      var listItemClass = (0, _classnames2.default)('list-group-item', this.state.open ? 'list-view-pf-expand-active' : '');

      var listItemContainerClass = (0, _classnames2.default)('list-group-item-container container-fluid', this.state.open ? '' : 'hidden');

      return _react2.default.createElement(
        'div',
        { onClick: this.toggleExpanded, className: listItemClass },
        _react2.default.createElement(
          'div',
          { className: 'list-group-item-header' },
          _react2.default.createElement(
            'div',
            { className: 'list-view-pf-expand' },
            _react2.default.createElement('span', { className: expandIconClass })
          ),
          _react2.default.createElement(_ListViewItemContents2.default, {
            iconClass: this.props.iconClass,
            heading: this.props.heading,
            itemText: this.props.itemText,
            additionalInfo: this.props.additionalInfo
          })
        ),
        _react2.default.createElement(
          'div',
          { className: listItemContainerClass },
          _react2.default.createElement(
            'div',
            { className: 'close', onClick: this.toggleExpanded },
            _react2.default.createElement('span', { className: 'pficon pficon-close' })
          ),
          this.props.expansion
        )
      );
    }
  }]);

  return ListViewExpandableItem;
}(_react2.default.Component);

ListViewExpandableItem.propTypes = {
  /** icon class  */
  iconClass: _propTypes2.default.string,
  /** header node  */
  heading: _propTypes2.default.node.isRequired,
  /** item text node  */
  itemText: _propTypes2.default.node,
  /** additional info node  */
  additionalInfo: _propTypes2.default.node,
  /** expansion node */
  expansion: _propTypes2.default.node,
  /** is the item is expanded */
  expanded: _propTypes2.default.bool,
  /** callback for when expanded is toggled */
  onToggleExpanded: _propTypes2.default.func
};

exports.default = ListViewExpandableItem;