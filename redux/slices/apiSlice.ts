import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { APIEndpoints } from "../../data";
import { CurrentInstitue, Education,} from "../../types/user";

var token: string | null;
const getUserToken = async () => {
  token = await localStorage.getItem("heiloUserToken");
  console.log(token);
};
getUserToken();

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.apiUrl,
    prepareHeaders: (headers) => {
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUserInfo: builder.query({
      query: () => APIEndpoints.getUserInfo,
    }),
    updateEducation:builder.mutation<Education,{}>({
      query: (payload) => ({
        url: `${APIEndpoints.studentInfo}/update`,
        method: 'PATCH',
        body: JSON.stringify(payload),
        headers: {
          'Content-type': 'application/json;',
        },
      }),
    }),

  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserInfoQuery,useUpdateEducationMutation } = userApi;
