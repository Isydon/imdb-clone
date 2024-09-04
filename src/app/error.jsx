"use client"

import { useEffect } from "react";

export default function error( {error, reset}) { 
    useEffect(()=> {
        cosole.log(error);
    }, [error]);
  return (
    <div  className='text-center mt-10'>
        <h1>Something wet wrog.Please try again</h1>
        <button className='hover:text-amber-600' onClick={() => reset()}>try again</button>
    </div>
  )
}
