import 'isomorphic-fetch';

class API {

  static init() {
    this.NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
  }
  static latestMovies() {
    return fetch('https://api.nytimes.com/svc/movies/v2/reviews/all.json?api_key=' + this.NYT_API_KEY)
      .then(resp => resp.json())
  }

  static searchMovies(query) {
    return fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${query}&api_key=` + this.NYT_API_KEY)
      .then(resp => resp.json())
  }
}

API.init()

export default API
