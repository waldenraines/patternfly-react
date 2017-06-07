import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import ListViewActions from './ListViewActions'
import ListViewSelect from './ListViewSelect'
import ListViewItemMainInfo from './ListViewItemMainInfo'
import ListViewItemExpansion from './ListViewItemExpansion'

/**
 * ListViewItem Component for Patternfly React
 */
class ListViewItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      expanded: props.expanded || false,
      active: false
    }

    this.toggleExpanded = this.toggleExpanded.bind(this)
    this.toggleSelected = this.toggleSelected.bind(this)
  }

  componentWillReceiveProps(newProps, oldProps) {
    if (newProps.expanded !== oldProps.expanded) {
      this.setState({ open: newProps.expanded })
    }
  }

  toggleExpanded(e) {
    this.setState({
      expanded: !this.state.expanded
    })

    if (this.props.onToggleExpanded) {
      this.props.onToggleExpanded(e)
    }
  }

  toggleSelected(e) {
    this.setState({
      active: !this.state.active
    })

    if (this.props.onItemSelected) {
      this.props.onItemSelected(e)
    }

    e.stopPropagation()
  }

  render() {
    const listItemClass = cx(
      'list-group-item',
      this.props.additionalListClass,
      this.state.expanded ? 'list-view-pf-expand-active' : '',
      this.state.active ? 'active' : ''
    )

    const renderExpansionControl = () => {
      const expandIconClass = cx(
        'fa',
        'fa-angle-right',
        this.state.expanded ? 'fa-angle-down' : ''
      )

      return (
        <div className="list-view-pf-expand">
          <span className={expandIconClass} />
        </div>
      )
    }

    return (
      <div
        onClick={this.props.expansion && this.toggleExpanded}
        className={listItemClass}
      >
        <div className="list-group-item-header">
          {this.props.expansion && renderExpansionControl()}

          {this.props.actions &&
            <ListViewActions actions={this.props.actions} />}

          {this.props.onItemSelected &&
            <ListViewSelect onItemSelected={this.toggleSelected} />}

          <ListViewItemMainInfo
            iconClass={this.props.iconClass}
            heading={this.props.heading}
            itemText={this.props.itemText}
            additionalInfo={this.props.additionalInfo}
          />
        </div>

        {this.props.expansion &&
          <ListViewItemExpansion
            onToggleExpanded={this.toggleExpanded}
            expanded={this.state.expanded}
            expansion={this.props.expansion}
          />}
      </div>
    )
  }
}

ListViewItem.propTypes = {
  /** additional list class  */
  additionalListClass: PropTypes.string,
  /** icon class  */
  iconClass: PropTypes.string,
  /** header node  */
  heading: PropTypes.node.isRequired,
  /** item text node  */
  itemText: PropTypes.node,
  /** additional info node  */
  additionalInfo: PropTypes.arrayOf(PropTypes.node),
  /** actions node  */
  actions: PropTypes.node,
  /** callback for when item is selected */
  onItemSelected: PropTypes.func,
  /** expansion node */
  expansion: PropTypes.node,
  /** is the item is expanded */
  expanded: PropTypes.bool,
  /** callback for when expanded is toggled */
  onToggleExpanded: PropTypes.func
}

ListViewItem.defaultProps = {
  /** default additional list class */
  additionalListClass: '',
  /** default icon class */
  iconClass: null,
  /** default additional info */
  additionalInfo: [],
  /** default actions info */
  actions: null,
  /** default onItemSelected callback */
  onItemSelected: null,
  /** default onToggleExpanded callback */
  onToggleExpanded: null
}

export default ListViewItem
