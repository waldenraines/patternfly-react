import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

/**
 * ListViewItemContents Component for Patternfly React
 */

const ListViewItemContents = ({
  iconClass,
  heading,
  itemText,
  additionalInfo
}) => {
  var fullIconClass = cx('list-view-of-icon-sm', 'fa', iconClass)

  return (
    <div className="list-view-pf-main-info">
      <div className="list-view-pf-left">
        <span className={fullIconClass} />
      </div>

      <div className="list-view-pf-body">
        <div className="list-view-pf-description">
          <div className="list-group-item-heading">
            {heading}
          </div>
          <div className="list-group-item-text">
            {itemText}
          </div>
        </div>
        <div className="list-view-pf-additional-info">
          {additionalInfo}
        </div>
      </div>
    </div>
  )
}

ListViewItemContents.propTypes = {
  /** icon class  */
  iconClass: PropTypes.string,
  /** header node  */
  heading: PropTypes.node.isRequired,
  /** item text node  */
  itemText: PropTypes.node,
  /** additional info node  */
  additionalInfo: PropTypes.node
}

ListViewItemContents.defaultProps = {
  /** default icon class */
  iconClass: 'fa-question',
  /** default additional info */
  additionalInfo: ''
}

export default ListViewItemContents
