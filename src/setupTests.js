import { DataContext } from 'context/dataContext';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

const mockContext = {
  products: [],
  formats: [],
  papers: [],
  status: 'idle',
  errorMessage: '',
};

export const renderWithContext = (
  component,
  {
    products = mockContext.products,
    formats = mockContext.formats,
    papers = mockContext.papers,
    status = mockContext.status,
    errorMessage = mockContext.errorMessage,
  } = {}
) => {
  const context = {
    products,
    formats,
    papers,
    status,
    errorMessage,
  };

  return render(<DataContext.Provider value={context}>{component}</DataContext.Provider>);
};
