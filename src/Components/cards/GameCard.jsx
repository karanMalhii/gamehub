import React from "react";

export default function GameCard({ digitalCard }) {
  console.log(digitalCard);
  return (
    <div class="">
    <div class="bg-gray-700 w-fit rounded-xl">
        <div class="w-fit">
            <img src={digitalCard.background_image} alt=""
                class="rounded-t-xl w-72 h-48" />
        </div>
        <div class="p-4">
            <div class="flex justify-between">
                <div class="flex gap-">
                    <div>🎃</div>
                    <div>😍</div>
                    <div>😎</div>
                    <div>🎎</div>
                </div>
                <div class="">
                    <div>🎡</div>
                </div>
            </div>
            <div class="py-2">
                <div class="text-white font-bold text-xl break-normal w-48">{digitalCard.name}</div>
             
            </div>
            <div>🎯</div>
        </div>
    </div>
</div>
  );
}
