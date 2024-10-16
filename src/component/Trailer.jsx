import React from 'react'
import { useParams } from 'react-router-dom'

function Trailer(movies) {
    const params=useParams();
    const movie=movies.filter((el)=>el.name===params.name);
    return (
    <div>
      <h1>{movie.name}</h1>
      <img alt='test' src={movie.posterurl}/>
      <p>{movie.description}</p>
    </div>
  )
}

export default Trailer
