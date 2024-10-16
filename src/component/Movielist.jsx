import React from 'react'
import Moviecard from './Moviecard'

function Movielist({movies}) {
  return (
    <div className='container pt-5'>
      {movies.map((el)=><Moviecard el={el}/>)}
    </div>
  )
}

export default Movielist
