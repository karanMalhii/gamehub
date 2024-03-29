import React from "react";
import Navigation from "./Components/Navigation";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "flowbite-react";

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
});

export default function App() {
  const { data, isLoading } = useQuery({
    queryKey: ["games"],
    queryFn: async function () {
      const response = await axiosInstance.get(
        "/games?key=0bbabdb992314fd3beab39914f8cb708&page=1"
      );
      console.log(response.data.results);
      return response.data.results;
    },
  });
  return (
    <div>
      <Navigation />
      {isLoading && (<Spinner  size="lg" />)}
      
      {data?.map((item, index) => {
        return <div key={index}>{item.name}</div>;
      })}
    </div>
  );
}
