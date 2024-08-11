import Link from 'next/link'
import React from 'react'

export default function NavbarItems({title, param}) {
  return (
    <div>
       <Link href={'/?genre=${param}'}>{title}</Link>
    </div>
  )
}
