import React from "react";
import { Link } from "react-router-dom";

export default function GameCard({ digitalCard }) {
  
  return (
    <div className="">
    <div className="bg-gray-700 w-fit rounded-xl">
        <div className="w-fit">
            <img src={digitalCard.background_image} alt=""
                className="rounded-t-xl w-72 h-48" />
        </div>
        <div className="p-4">
            <div className="flex justify-between">
                <div className="flex gap-">
                    <div>🎃</div>
                    <div>😍</div>
                    <div>😎</div>
                    <div>🎎</div>
                </div>
                <div className="">
                    <div>🎡</div>
                </div>
            </div>
            <div className="py-2">
                <Link to={`/game/${digitalCard.slug}`} className="text-white font-bold text-xl break-normal w-48">{digitalCard.name}</Link>
                          
            </div>
            <div>🎯</div>
        </div>
    </div>
</div>
  );
}
