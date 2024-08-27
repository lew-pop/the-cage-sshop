import { cageApi } from "./cageApi";

export const orderApi = cageApi.injectEndpoints({
  endpoints: (builder) => ({
     // Order endpoints
     createOrder: builder.mutation({
      query: (order) => ({
        url: 'orders/add/',
        method: 'POST',
        body: order,
      }),
      invalidatesTags: ['Order'],
    }),
    listOrderDetails: builder.query({
      query: (id) => `orders/${id}/`,
      providesTags: (result, error, id) => [{ type: 'Order', id }],
    }),
    payOrder: builder.mutation({
      query: ({ id, paymentResult }) => ({
        url: `orders/${id}/pay/`,
        method: 'PUT',
        body: paymentResult,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Order', id }],
    }),
    deliverOrder: builder.mutation({
      query: (id) => ({
        url: `orders/${id}/deliver/`,
        method: 'PUT',
        body: {},
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Order', id }],
    }),
    listMyOrders: builder.query({
      query: () => 'orders/myorders/',
      providesTags: ['Order'],
    }),
    listOrders: builder.query({
      query: () => 'orders/',
      providesTags: ['Order'],
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useListOrderDetailsQuery,
  usePayOrderMutation,
  useDeliverOrderMutation,
  useListMyOrdersQuery,
  useListOrdersQuery,
} = orderApi;