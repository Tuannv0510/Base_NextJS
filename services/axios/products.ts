import { MktResponse, Product } from "./types";
import http from "./httpClient";

export const ProductApi = {
  tableName: "products",
  getProducts: async (url: string): Promise<MktResponse<Product>> =>
    await http.get(url),
};
