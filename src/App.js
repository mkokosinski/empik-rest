import ProductsTable from 'components/productsTable/ProductsTable';

import ErrorPage from 'components/errorPage/ErrorPage';
import PageLoader from 'components/pageLoader/PageLoader';

import { REQ_STATUS } from 'api/api';
import { useData } from './context/dataContext';

import './App.scss';

const App = () => {
  const { status } = useData();

  switch (status) {
    case REQ_STATUS.IDLE:
    case REQ_STATUS.LOADING:
      return <PageLoader />;

    case REQ_STATUS.ERROR:
      return <ErrorPage />;
    default:
      return (
        <div className='App'>
          <ProductsTable />
        </div>
      );
  }
};

export default App;
