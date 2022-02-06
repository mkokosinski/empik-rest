import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import productApi from '../api/productApi';
import formatApi from '../api/formatApi';
import paperApi from '../api/paperApi';
import { REQ_STATUS } from '../api/api';

const defaultState = {
  products: [],
  formats: [],
  papers: [],
  status: REQ_STATUS.IDLE,
};

const DataContext = createContext({
  ...defaultState,
});

const useData = () => useContext(DataContext);

const DataProvider = ({ children }) => {
  const [products, setProducts] = useState(defaultState.products);
  const [formats, setFormats] = useState(defaultState.formats);
  const [papers, setPapers] = useState(defaultState.papers);
  const [status, setStatus] = useState(defaultState.status);

  const getProducts = useCallback(async () => {
    await productApi.get().then((res) => setProducts(res.products));
  }, []);

  const getFormats = useCallback(async () => {
    await formatApi.get().then((res) => setFormats(res.formats));
  }, []);

  const getPapers = useCallback(async () => {
    await paperApi.get().then((res) => setPapers(res.papers));
  }, []);

  const getData = useCallback(async () => {
    setStatus(REQ_STATUS.LOADING);
    await Promise.all([getProducts(), getFormats(), getPapers()])
      .then(() => {
        setStatus(REQ_STATUS.SUCCESS);
      })
      .catch(() => {
        setStatus(REQ_STATUS.ERROR);
      });
  }, [getProducts, getFormats, getPapers]);

  useEffect(() => {
    getData();
  }, [getData]);

  return <DataContext.Provider value={{ products, formats, papers, status }}>{children}</DataContext.Provider>;
};

export { DataProvider, useData };
