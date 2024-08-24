import { api } from "./api";

export const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // Product endpoints
    listProducts: builder.query({
      query: () =>  `/products/`,
      providesTags: ["Product"],
    }),
    listProductsByCategory: builder.query({
      query: (category) => `/products/category/${category}/`,
      providesTags: ["Product"],
    }),
    listProductsByTag: builder.query({
      query: (id) => `/products/tag/${id}/`,
      providesTags: ["Product"],
    }),
    listTopProducts: builder.query({
      query: () => "/products/top/",
      providesTags: ["Product"],
    }),
     getProduct: builder.query({
      query: (id) => `/products/${id}/`, // Replace with your actual API endpoint
      providesTags: (result, error, id) => [{ type: 'Product', id }],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/delete/${id}/`,
        method: 'DELETE',
      }),
      invalidatesTags: ["Product"],
    }),
    createProduct: builder.mutation({
      query: () => ({
        url: `/products/create/`,
        method: 'POST',
        body: {},
      }),
      invalidatesTags: ["Product"],
    }),
    updateProduct: builder.mutation({
      query: (product) => ({
        url: `/products/update/${product.id}/`,
        method: 'PUT',
        body: product,
      }),
      invalidatesTags: (result, error, product) => [{ type: 'Product', id: product.id }],
    }),
    createProductReview: builder.mutation({
      query: ({ productId, review }) => ({
        url: `/products/${productId}/reviews/`,
        method: 'POST',
        body: review,
      }),
      invalidatesTags: (result, error, { productId }) => [{ type: 'Product', id: productId }],
    }),
  }),
});

export const {
  useListProductsQuery,
  useListProductsByCategoryQuery,
  useListProductsByTagQuery,
  useListTopProductsQuery,
  useGetProductQuery,
  useDeleteProductMutation,
  useCreateProductMutation,
  useUpdateProductMutation,
  useCreateProductReviewMutation,
} = productApi;



