import api, { endponits } from './api';

const get = () => {
  return api.getJson(endponits.papers);
};

const productApi = { get };

export default productApi;
