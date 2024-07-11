import React from 'react'
import MenuItem from './MenuItem'
import {AiFillHome} from 'react-icons/ai';
import {BsFillInfoCircleFill} from 'react-icons/bs'

export default function Header() {
  return (
    <div className='justif'>
        <div className='flex gap-4'>
            <MenuItem title="home" address="/" Icon={AiFillHome}/>
          
            <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill}/>
        </div>
        <div className=''>

        </div>
        <span>IMDB</span>
        <span>clone</span>
    </div>
  )
}
