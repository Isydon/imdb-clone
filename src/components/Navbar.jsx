import React from 'react'
import NavbarItems from './NavbarItems'

export default function 
() {
  return (
    <div className='flex dark:bg-gray-600 bg-amber-100 justify-center gap-8 text-xl font-bold p-3 lg:text-lg '>
       <NavbarItems title="Trending" param="fetchTrending"/> 
       <NavbarItems title="Top Rated"  param="fetchTopRated"/> 
    </div>
  )
}
