import api, { endponits } from './api';

const get = () => {
  return api.getJson(endponits.products);
};

const productApi = { get };

export default productApi;
