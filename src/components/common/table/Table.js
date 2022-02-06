import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import TableHeader from './TableHeader';
import TableRow from './TableRow';

import { tableHeaderType, tableRowType } from './tableTypes';
import './table.scss';

const Table = ({ colSizes, headers, pageSize, rows }) => {
  const [visibleData, setVisibleData] = useState([]);
  const [sortState, setSortState] = useState({ key: '', direction: '' });

  const handleSort = ({ key, direction }) => {
    setSortState({ key, direction });
  };

  useEffect(() => {
    const sortedRows = [...rows].sort((a, b) => {
      const { direction, key } = sortState;
      const itemA = a.cols.find((a) => a.key === key);
      const itemB = b.cols.find((a) => a.key === key);
      if (direction === 'asc') {
        return itemA.content.localeCompare(itemB.content);
      }
      if (direction === 'desc') {
        return itemB.content.localeCompare(itemA.content);
      }
      return 0;
    });

    setVisibleData(sortedRows);
  }, [rows, sortState]);

  return (
    <>
      <div className='table'>
        <table cellPadding='0' cellSpacing='0'>
          <colgroup>
            {colSizes.map((size, idx) => (
              <col key={idx} style={{ width: size + '%' }} />
            ))}
          </colgroup>

          <TableHeader headers={headers} sortState={sortState} handleSort={handleSort} />
          <tbody>
            {visibleData.length ? (
              visibleData.map((row, index) => <TableRow key={index} row={row} />)
            ) : (
              <tr>
                <td colSpan={headers.length}>NO RESULTS</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

Table.defaultProps = {
  colSizes: [],
  headers: [],
  rows: [],
};

Table.propTypes = {
  colSizes: PropTypes.arrayOf(PropTypes.number),
  headers: PropTypes.arrayOf(tableHeaderType),
  rows: PropTypes.arrayOf(tableRowType),
};

export default Table;
