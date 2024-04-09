import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../client";

export const useGame = (slug) => {
  return useQuery({
    queryKey: ["game",slug],
    queryFn: async function () {
      try {
        const response = await axiosInstance.get(`/games/${slug}?key=0bbabdb992314fd3beab39914f8cb708`); 
        console.log("Response:", response); // Log the received data
        return response.data;
      } catch(err) {
        console.error("Error fetching game data:", err);
        throw new Error(err.message);
      }
    },
  });
};