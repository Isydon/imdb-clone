'use client'
import {MdLightMode, MdDarkMode} from 'react-icons/md'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react';

export default function DarkModeSwitch() {
    const {theme, setTheme, systemTheme} = useTheme();
    const [mounted, setMounted ] = useState(false);
    
    const CurrentTheme = theme === 'system' ? systemTheme: theme;
    useEffect(()=> setMounted(true),[])
   
  return (
    <div>
      
        { mounted && ( CurrentTheme === 'dark' ? <MdLightMode onClick={()=> setTheme('darklight')}
         className='text-2xl cursor-pointer text-amber-500'/>:
         <MdDarkMode onClick={()=> setTheme('dark') } className='text-2xl cursor-pointer text-amber-500'/>)} 
    </div>
  )
}
