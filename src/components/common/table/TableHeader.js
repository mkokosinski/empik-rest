import PropTypes from 'prop-types';

import SortableHeaderCell from './sortableHeaderCell/SortableHeaderCell';

import { tableHeaderType } from './tableTypes';

const TableHeader = ({ headers, sortState, handleSort }) => {
  return (
    <thead>
      <tr>
        {headers.map((header, idx) => (
          <th key={idx}>
            <SortableHeaderCell sortState={sortState} header={header} handleSort={handleSort} />
          </th>
        ))}
      </tr>
    </thead>
  );
};

TableHeader.propTypes = {
  headers: PropTypes.arrayOf(tableHeaderType),
  sortState: PropTypes.shape({
    key: PropTypes.string,
    direction: PropTypes.oneOf(['asc', 'desc', '']),
  }),
  handleSelectAll: PropTypes.func,
  handleSort: PropTypes.func,
};

export default TableHeader;
