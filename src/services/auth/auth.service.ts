import { baseApi } from "../base-api";
import { AuthResponse } from "./auth.types";

export const AuthService = baseApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      getPhotos: builder.query<AuthResponse, void>({
        query: () => `photos`,
      }),
      getComments: builder.query<any, void>({
        query: (params: any) => {
          return {
            url: "photos/comment",
            params,
          };
        },
      }),
      createComment: builder.mutation<any, any>({
        query: (body) => ({
          url: "photos/comment",
          method: "POST",
          body,
        }),
      }),
    };
  },
});

// export const { useGetPhotosQuery, useCreateCommentMutation } = PhotosService;
