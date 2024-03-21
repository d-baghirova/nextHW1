import React from 'react'
import Link from 'next/link'


export default function EventsPage (){
  return (
    <div>
        <h1>Events</h1>
        <ul>
            <Link href={`/events/march/10/2024`}><li>Event 2024</li></Link>
            <Link href={`/events/march/10/2023`}><li>Event 2023</li></Link>
            <Link href={`/events/march/10/2022`}><li>Event 2022</li></Link>
        </ul>
    </div>
  )
} 