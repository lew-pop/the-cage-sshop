import { apiSlice } from "./apiSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // User endpoints
    confirmEmail: builder.query({
      query: ({ uidb64, token }) => `users/activate/${uidb64}/${token}/`,
      providesTags: ['User'],
    }),
    registerUser: builder.mutation({
      query: (user) => ({
        url: "users/register/",
        method: "POST",
        body: user,
      })
    }),
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "users/login/",
        method: "POST",
        body: credentials,
      })
    }),
    getUserDetails: builder.query({
      query: (id) => `users/${id}/`,
      providesTags: (result, error, id) => [{ type: 'User', id }],
    }),
    updateUserProfile: builder.mutation({
      query: (user) => ({
        url: 'users/profile/update/',
        method: 'PUT',
        body: user,
      }),
      invalidatesTags: (result, error, user) => [{ type: 'User', id: user._id }],
    }),
    listUsers: builder.query({
      query: () => 'users/',
      providesTags: ['User'],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `users/delete/${id}/`,
        method: 'DELETE',
      }),
      invalidatesTags: ['User'],
    }),
    updateUser: builder.mutation({
      query: (user) => ({
        url: `users/update/${user._id}/`,
        method: 'PUT',
        body: user,
      }),
      invalidatesTags: (result, error, user) => [{ type: 'User', id: user._id }],
    }),
  }),
});

export const {
  useConfirmEmailQuery,
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetUserDetailsQuery,
  useUpdateUserProfileMutation,
  useListUsersQuery,
  useDeleteUserMutation,
  useUpdateUserMutation,
} = userApi;
