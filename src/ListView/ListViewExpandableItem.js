import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import ListViewItemContents from './ListViewItemContents'

/**
 * ListViewExpandableItem Component for Patternfly React
 */
class ListViewExpandableItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      open: props.expanded || false
    }

    this.toggleExpanded = this.toggleExpanded.bind(this)
  }

  componentWillReceiveProps(newProps, oldProps) {
    if (newProps.expanded !== oldProps.expanded) {
      this.setState({ open: newProps.expanded })
    }
  }

  toggleExpanded(e) {
    this.setState({
      open: !this.state.open
    })

    if (this.props.onToggleExpanded) {
      this.props.onToggleExpanded(e)
    }
  }

  render() {
    const expandIconClass = cx(
      'fa',
      'fa-angle-right',
      this.state.open ? 'fa-angle-down' : ''
    )

    const listItemClass = cx(
      'list-group-item',
      this.state.open ? 'list-view-pf-expand-active' : ''
    )

    const listItemContainerClass = cx(
      'list-group-item-container container-fluid',
      this.state.open ? '' : 'hidden'
    )

    return (
      <div onClick={this.toggleExpanded} className={listItemClass}>
        <div className="list-group-item-header">
          <div className="list-view-pf-expand">
            <span className={expandIconClass} />
          </div>

          <ListViewItemContents
            iconClass={this.props.iconClass}
            heading={this.props.heading}
            itemText={this.props.itemText}
            additionalInfo={this.props.additionalInfo}
          />
        </div>
        <div className={listItemContainerClass}>
          <div className="close" onClick={this.toggleExpanded}>
            <span className="pficon pficon-close" />
          </div>
          {this.props.expansion}
        </div>
      </div>
    )
  }
}

ListViewExpandableItem.propTypes = {
  /** icon class  */
  iconClass: PropTypes.string,
  /** header node  */
  heading: PropTypes.node.isRequired,
  /** item text node  */
  itemText: PropTypes.node,
  /** additional info node  */
  additionalInfo: PropTypes.node,
  /** expansion node */
  expansion: PropTypes.node,
  /** is the item is expanded */
  expanded: PropTypes.bool,
  /** callback for when expanded is toggled */
  onToggleExpanded: PropTypes.func
}

export default ListViewExpandableItem
