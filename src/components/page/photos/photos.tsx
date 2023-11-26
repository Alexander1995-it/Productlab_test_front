import React from "react";
import { useGetPhotosQuery } from "../../../services/photos";
import { Navigate } from "react-router-dom";

export const Photos = () => {
  const { isError, isLoading, data, isSuccess } = useGetPhotosQuery();
  if (isError) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      {data &&
        data.map((el: any) => {
          return (
            <div key={el.id}>
              <img src={el.url} alt="" width="300px" height="300px" />
            </div>
          );
        })}
    </div>
  );
};
