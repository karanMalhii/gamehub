import React from 'react'
import { useParams } from 'react-router-dom'
import { useGame } from '../api/hooks/useGame'
import { Spinner } from "flowbite-react";


export default function GameView() {
   const {slug} = useParams()
   const {data,isLoading} = useGame(slug)
   console.log(data);
  return (
    <>
     {isLoading ? <Spinner size="lg" /> : 
    <><div>Name of the game is {data?.name}</div>
    <div>Description of the game is {data?.description_raw}</div>
    <div>

        <img src={data?.background_image}/>

    </div>
    </>
}      
    </>
    
  )
}
