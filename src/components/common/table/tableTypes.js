import PropTypes from 'prop-types'

export const tableHeaderType = PropTypes.shape({
  label: PropTypes.string,
  key: PropTypes.string,
  sortable: PropTypes.bool,
})

export const tableColumnType = PropTypes.shape({
  key: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.node,
})

export const tableRowType = PropTypes.shape({
  cols: PropTypes.arrayOf(tableColumnType),
  meta: PropTypes.shape({
    disabled: PropTypes.bool,
    id: PropTypes.string,
  }),
})
