import React from "react";
import { useGetPhotosQuery } from "../../../services/photos";

export const Photos = () => {
  const { data } = useGetPhotosQuery();
  console.log(data);
  return (
    <div>
      {data && <img width="500px" height="500px" src={data[0].url} alt="" />}
      Photos
    </div>
  );
};
