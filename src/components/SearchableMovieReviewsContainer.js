import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends React.Component {

    constructor() {
        super()
        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }

    // fetchReviews = () => {
    //     fetch(URL)
    //         .then(resp => resp.json())
    //         .then(response => this.setState({ reviews: response.results }))
    // }

    // componentDidMount() {
    //     this.fetchReviews()
    // }

    updateFilter = e => {
        this.setState({ searchTerm: e.target.value })
      }
     
    // filterReviews = () => {
    //     const reviews = this.state.reviews.filter(review =>
    //         review.display_title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    //         )
    //     return reviews   
    // } 

    handleSubmit = (e) => {
        console.log(this.state.searchTerm)
        e.preventDefault()
        fetch(`${URL}` + `${this.state.searchTerm}`)
            .then(resp => resp.json())
            .then(response => this.setState({ reviews: response.results }))
    }

    render() {
        return(
            <div className="searchable-movie-reviews"> 
                <form onSubmit={this.handleSubmit}>
                    <input onKeyUp={(e) => this.updateFilter(e)} ></input>
                    <button type="submit" >Search for Movie</button>
                </form>      
                { this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2> }
                {/* <MovieReviews reviews={this.filterReviews()} />      */}
                <MovieReviews reviews={this.state.reviews} />     
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer







