import React, { Component } from 'react';
import MovieReviews from './MovieReviews'
import API from './API'

class LatestMovieReviewsContainer extends Component {

  state = {
    reviews: []
  }

  componentDidMount() {
    API.latestMovies().then( resp =>
      this.setState({reviews: resp.results})
    )
  }

  render() {

    return <div className="latest-movie-reviews">
             <h1>Latest Movie Reviews</h1>
             <MovieReviews reviews={this.state.reviews} />
           </div>
  }

}

export default LatestMovieReviewsContainer

