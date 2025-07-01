import { Comment, Product } from "../../types";
import axios from "./axios";

type ProductPayload = Omit<
  Product,
  "id" | "createdAt" | "updatedAt" | "ownerId"
>;
export interface ProductsResponse {
  totalCount: number;
  list: Product[];
}

export interface GetProductsParams {
  orderBy?: "recent" | "favorite";
  page?: number;
  pageSize?: number;
  keyword?: string;
}

export interface GetProductCommentsParams {
  productId: string;
  params: {
    limit: number;
    cursor?: string;
  };
}

export interface ProductCommentsResponse {
  totalCount: number;
  list: Comment[];
}

export async function getProducts({
  orderBy = "recent",
  page = 1,
  pageSize = 10,
  keyword,
}: GetProductsParams = {}): Promise<ProductsResponse> {
  const response = await axios.get<ProductsResponse>("/products", {
    params: {
      orderBy,
      page,
      pageSize,
      keyword,
    },
  });
  return response.data;
}

export async function addProduct(product: ProductPayload): Promise<Product> {
  const response = await axios.post<Product>("/products", product);
  return response.data;
}

export async function getProduct(productId: string): Promise<Product> {
  const response = await axios.get<Product>(`/products/${productId}`);
  return response.data;
}

export async function patchProduct(
  productId: string,
  partialProduct: Partial<ProductPayload>
): Promise<Product> {
  const response = await axios.patch<Product>(
    `/products/${productId}`,
    partialProduct
  );
  return response.data;
}

export async function deleteProduct(productId: string): Promise<void> {
  await axios.delete(`/products/${productId}`);
}

export async function addProductFavorite(productId: string): Promise<Product> {
  const response = await axios.post<Product>(`/products/${productId}/favorite`);
  return response.data;
}

export async function deleteProductFavorite(
  productId: string
): Promise<Product> {
  const response = await axios.delete<Product>(
    `/products/${productId}/favorite`
  );
  return response.data;
}

export async function getProductComments({
  productId,
  params: { limit, cursor },
}: GetProductCommentsParams): Promise<Comment[]> {
  const response = await axios.get<ProductCommentsResponse>(
    `/products/${productId}/comments`,
    {
      params: { limit, cursor },
    }
  );
  return response.data?.list ?? [];
}

export async function addProductComment(
  productId: Product["id"],
  { content }: Pick<Comment, "content">
): Promise<Comment> {
  const response = await axios.post<Comment>(
    `/products/${productId}/comments`,
    { content }
  );
  return response.data;
}
