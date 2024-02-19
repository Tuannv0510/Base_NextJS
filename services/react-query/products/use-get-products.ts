import QueryRequest from "@/services/builder/QueryRequest";
import { ProductApi } from "@/services/axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export default function useGetProducts() {
  const queryClient = useQueryClient();
  const query = new QueryRequest();
  const url = query
    .for(ProductApi.tableName)
    .includes("plans")
    .where("on_client", 1)
    .url();
  const queryKey = [ProductApi.tableName, url];
  const getProducts = async () => {
    try {
      const response = await ProductApi.getProducts(url);
      if (!response) {
        throw new Error("Failed to get User data");
      }
      return response;
    } catch (error) {
      queryClient.removeQueries({ queryKey });
    }
  };
  return useQuery({
    queryKey: queryKey,
    queryFn: getProducts,
  });
}
