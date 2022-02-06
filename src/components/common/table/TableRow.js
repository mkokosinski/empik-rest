import { tableRowType } from './tableTypes';

const TableRow = ({ row }) => {
  return (
    <tr aria-disabled={row.meta.disabled}>
      {row.cols.map((col, idx) => (
        <td key={idx} title={col.title}>
          {col.content}
        </td>
      ))}
    </tr>
  );
};

TableRow.propTypes = {
  row: tableRowType,
};

export default TableRow;
