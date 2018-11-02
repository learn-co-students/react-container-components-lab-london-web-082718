// Code MovieReviews Here
import React from 'react'


const displayReview = (review, idx) => {
    return (
        <div className="review" id={review.headline} key={idx} >
            <h1>{review.headline}</h1>
            {/* <img src={review.multimedia.src} /> */}
            <p>{review.summary_short}</p>
        </div> 
    )
}

const MovieReviews = (props) =>
    
    <div className="review-list">
        {props.reviews.map((review, idx) => displayReview(review, idx))}
    </div>


MovieReviews.defaultProps = {
    reviews: []
  };


export default MovieReviews


// Without displayReview{}
// const MovieReviews = (props) =>
//     <div className="review-list">
//         {props.reviews.map(review => {
//             return (
//                 <div classname="review" id={review.headline} >
//                     <h1>{review.headline}</h1>
//                     <img src={review.multimedia.src} />
//                     <p>{review.summary_short}</p>
//                 </div> 
//             )
//         })}
//     </div>



  