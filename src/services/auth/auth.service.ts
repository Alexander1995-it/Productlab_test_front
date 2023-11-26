import { baseApi } from "../base-api";
import { AuthResponse } from "./auth.types";

export const AuthService = baseApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      getComments: builder.query<any, void>({
        query: (params: any) => {
          return {
            url: "images/image1",
            params,
          };
        },
      }),
      getAuth: builder.mutation<any, any>({
        query: (body) => ({
          url: "login",
          method: "POST",
          body,
        }),
      }),
      getAuthMe: builder.query<any, void>({
        query: () => {
          console.log("me");
          return {
            url: "auth/me",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          };
        },
      }),
    };
  },
});

export const { useGetAuthMutation, useGetAuthMeQuery, useGetCommentsQuery } =
  AuthService;
