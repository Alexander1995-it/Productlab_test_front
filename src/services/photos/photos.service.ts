import { baseApi } from "../base-api";
import { PhotosResponse } from "./photos.types";

export const PhotosService = baseApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      getPhotos: builder.query<PhotosResponse, void>({
        query: () => {
          return {
            url: "photos",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          };
        },
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

export const { useGetPhotosQuery, useCreateCommentMutation } = PhotosService;
