import http from "./axios/httpClient";

const tableProduct = "products";

const getProduct = (url: string) => {
  return http.get(url);
};

export { tableProduct, getProduct };
