import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../client";

export const useGames = () => {
  return useQuery({
    queryKey: ["games"],
    queryFn: async function () {
      let response = await axiosInstance.get(
        "/games?key=0bbabdb992314fd3beab39914f8cb708&page=1"
      );
      // console.log(response.data.results);
      return response.data.results;
    },
  });
};
