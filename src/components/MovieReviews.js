import React from 'react'

const MovieReviews = props => {

  return <ul className='review-list'>
            {props.reviews.map( review =>
              <li className='review'>
                <h2>{review.display_title}</h2>
                <h3>{review.summary_short}</h3>
              </li>
            )}
        </ul>

}

export default MovieReviews
