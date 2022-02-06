import { screen } from '@testing-library/react';
import { renderWithContext } from 'setupTests';
import ProductsTable from './ProductsTable';

describe('ProductsTable component', () => {
  it('should render without crashing', async () => {
    renderWithContext(<ProductsTable />);
    await screen.findByTestId('products-table');
    expect(screen.getByTestId('products-table')).toBeInTheDocument();
  });
});
