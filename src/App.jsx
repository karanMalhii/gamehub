import React from "react";
import Navigation from "./Components/Navigation";
import { Spinner } from "flowbite-react";
import GameCard from "./Components/cards/GameCard";
import { useGames } from "./api/hooks/useGames";

export default function App() {
  const {data, isLoading} = useGames();
  return (
    <div>
      <Navigation />
      {isLoading && <Spinner size="lg" />}
      <div className=" grid grid-cols-3 w-fit gap-8 mx-auto justify-around mt-6">
        {data?.map((item, index) => {
          return <GameCard key={index} digitalCard={item} />;
        })}
      </div>
    </div>
  );
}
