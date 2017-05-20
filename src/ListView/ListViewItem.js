import React from 'react'
import PropTypes from 'prop-types'
import ListViewItemContents from './ListViewItemContents'

/**
 * ListViewItemContents Component for Patternfly React
 */

const ListViewItem = ({ iconClass, heading, itemText, additionalInfo }) => {
  return (
    <div className="list-group-item">
      <ListViewItemContents
        iconClass={iconClass}
        heading={heading}
        itemText={itemText}
        additionalInfo={additionalInfo}
      />
    </div>
  )
}

ListViewItem.propTypes = {
  /** icon class  */
  iconClass: PropTypes.string,
  /** header node  */
  heading: PropTypes.node.isRequired,
  /** item text node  */
  itemText: PropTypes.node,
  /** additional info node  */
  additionalInfo: PropTypes.node
}

ListViewItem.defaultProps = {
  /** default icon class */
  iconClass: null,
  /** default additional info */
  additionalInfo: ''
}

export default ListViewItem
