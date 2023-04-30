import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://apartment-booking.onrender.com/",
  }),
  endpoints: (builder) => ({
    // getUser: builder.query({
    //   query: (name) => `pokemon/${name}`,
    // }),

    registerUser: builder.mutation({
      invalidatesTags: ["User"],
      query: (body) => ({
        body,
        method: "POST",
        url: "register",
      }),
    }),

    loginUser: builder.mutation({
      invalidatesTags: ["User"],
      query: (body) => ({
        body,
        method: "POST",
        url: "login",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  // useGetUserQuery,
  useRegisterUserMutation,
  useLoginUserMutation,
} = authApi;
