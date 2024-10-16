import React from 'react'
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

function Moviecard({el}) {
  return (
    <Link to={`/Trailer/${el.name}`} style={{textDecoration:"none", color:"black"}}>
    <div class="card">
       {/* <div class="imgBx">  */}
        <img src={el.posterurl} style={{height:"100%", width:"100%"}}/>
       {/* </div>  */}
      <div class="content">
        <div class="contentBx">
          <h3>{el.description}<br/><span>{el.name}</span></h3>
          <StarRatings
          rating={el.rating}
          starRatedColor="blue"
          edit={false}
          numberOfStars={5}
        />
        </div>
      </div>
    </div>
    </Link>
  )
}

export default Moviecard
