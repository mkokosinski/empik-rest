import React from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';

import { tableHeaderType } from '../tableTypes';
import { ReactComponent as Arrow } from 'assets/icons/arrow.svg';
import './sortableHeaderCell.scss';

const SortableHeaderCell = ({ header, sortState, handleSort }) => {
  const isActiveSortColumn = sortState.key === header.key;
  return (
    <div className='sortable-cell'>
      <span className='sortable-cell__label'>{header.label}</span>
      {header.sortable && (
        <span className='sortable-cell__arrows'>
          <Arrow
            className={cs('sortable-cell__arrow', {
              'sortable-cell__arrow--active': isActiveSortColumn && sortState.direction === 'asc',
            })}
            onClick={() => handleSort({ key: header.key, direction: 'asc' })}
          />
          <Arrow
            className={cs('sortable-cell__arrow', {
              'sortable-cell__arrow--active': isActiveSortColumn && sortState.direction === 'desc',
            })}
            onClick={() => handleSort({ key: header.key, direction: 'desc' })}
          />
        </span>
      )}
    </div>
  );
};

SortableHeaderCell.propTypes = {
  header: tableHeaderType,
  sortState: PropTypes.shape({
    key: PropTypes.string,
    direction: PropTypes.oneOf(['asc', 'desc', '']),
  }),
  handleSort: PropTypes.func,
};

export default SortableHeaderCell;
