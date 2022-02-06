const baseUrl = 'https://www.empikfoto.pl/product';
const proxy = 'https://cors-anywhere.herokuapp.com';

export const endponits = {
  products: 'list',
  formats: 'formats',
  papers: 'papers',
};

export const REQ_STATUS = {
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
  IDLE: 'idle',
};

const baseHeaders = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
};

const handleResponse = (response) => {
  console.log({ response });
  return response.json().then((json) => {
    if (!response.ok) {
      return Promise.reject(new Error(response.statusText));
    }
    return Promise.resolve(json);
  });
};

const getJson = (endpoint) => {
  const requestOptions = {
    method: 'GET',
    headers: baseHeaders,
  };
  return fetch(`${proxy}/${baseUrl}/${endpoint}`, requestOptions).then(handleResponse);
};

const api = {
  getJson,
};

export default api;
