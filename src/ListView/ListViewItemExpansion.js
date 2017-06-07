import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

/**
 * ListViewItemExpansion Component for Patternfly React
 */

const ListViewItemExpansion = ({ expanded, onToggleExpanded, expansion }) => {
  const listItemContainerClass = cx(
    'list-group-item-container container-fluid',
    expanded ? '' : 'hidden'
  )

  return (
    <div className={listItemContainerClass}>
      <div className="close" onClick={onToggleExpanded}>
        <span className="pficon pficon-close" />
      </div>
      {expansion}
    </div>
  )
}

ListViewItemExpansion.propTypes = {
  /** expanded boolean to track whether expanded */
  expanded: PropTypes.bool.isRequired,
  /** onToggleExpanded function  */
  onToggleExpanded: PropTypes.func.isRequired,
  /** the expansion node */
  expansion: PropTypes.node.isRequired
}

export default ListViewItemExpansion
