import React, { Component } from 'react';
import MovieReviews from './MovieReviews'
import API from './API'

class SearchableMovieReviewsContainer extends Component {

  state = {
    reviews: [],
    searchTerm: ""
  }

  updateSearch = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  updateList = () => {
    API.searchMovies(this.state.searchTerm)
      .then(resp => this.setState({
        reviews: resp.results
      }))
  }
  
  render() {
    
    return <div className="searchable-movie-reviews">
              <h1>Search Reviews</h1>
              <form onSubmit={this.updateList}>
              <input type="text" placeholder="Search term..." value={this.state.searchTerm} onChange={this.updateSearch}></input>
              </form>
              <MovieReviews reviews={this.state.reviews} />
           </div>
  }

}

export default SearchableMovieReviewsContainer
