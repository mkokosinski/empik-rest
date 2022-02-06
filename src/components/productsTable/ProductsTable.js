import Table from 'components/common/table/Table';

import { getRows, tableHeaders } from './productTable.helpers';
import { useData } from 'context/dataContext';

const ProductsTable = () => {
  const data = useData();
  const colSizes = [1, 3, 2, 1, 2];
  const rows = getRows(data);
  return (
    <div data-testid='products-table'>
      <Table colSizes={colSizes} rows={rows} headers={tableHeaders} />;
    </div>
  );
};

export default ProductsTable;
