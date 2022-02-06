import api, { endponits } from './api';

const get = () => {
  return api.getJson(endponits.formats);
};

const productApi = { get };

export default productApi;
