export const tableKeys = {
  id: 'id',
  product: 'product',
  type: 'type',
  format: 'format',
  paper: 'paper',
};

export const tableHeaders = [
  { key: tableKeys.id, label: 'ID', sortable: true },
  { key: tableKeys.product, label: 'Produkt', sortable: true },
  { key: tableKeys.type, label: 'Typ', sortable: false },
  { key: tableKeys.format, label: 'Format', sortable: false },
  { key: tableKeys.paper, label: 'Papier', sortable: false },
];

const formatDataToProductsTable = ({ products, formats, papers }) => {
  return products.map((product) => {
    const format = formats.find((format) => format.id === product.formatId);
    const paper = papers.find((paper) => paper.id === product.paperId);
    return {
      id: `${product.productId}`,
      product: product.product,
      type: format.typeName,
      format: format.name,
      paper: paper.name,
    };
  });
};

export const getRows = (data) => {
  const products = formatDataToProductsTable(data);
  return products.map((product) => ({
    cols: [
      { key: tableKeys.id, content: product.id },
      { key: tableKeys.product, content: product.product },
      { key: tableKeys.type, content: product.type },
      { key: tableKeys.format, content: product.format },
      { key: tableKeys.paper, content: product.paper },
    ],
    meta: {
      disabled: false,
      id: product.id,
    },
  }));
};
