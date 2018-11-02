import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

require('es6-promise').polyfill();
require('isomorphic-fetch');



const NYT_API_KEY = '5462359398d647fb83dda7f37d46235a';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMoviesReviewsConatiner extends React.Component {
      
    constructor() {
        super()
        this.state = {
            reviews: []
        }
    }

    fetchReviews = () => {
        fetch(URL)
            .then(resp => resp.json())
            .then(response => this.setState({ reviews: response.results }))
    }

    componentDidMount() {
        this.fetchReviews()
    }
    
    render() {
        return(
            <div className="latest-movie-reviews"> 
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
        
}

export default LatestMoviesReviewsConatiner


