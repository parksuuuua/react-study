import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


//render : componentWillMount() -> render() -> componentDidMount()
//update : componentReceiveProps() -> shouldComponentUpdate() -> componentWillMount() -> render() -> componentDidMount()


class App extends Component {


  state = {
  
  }

  componentDidMount(){
    console.log('didmount')
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie) => {
      console.log(movie)
      return <Movie title={movie.title} poster={movie.large_cover_image} key={movie.id} />
    })
    return movies
  }

   _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
    console.log(movies)
  }

  _callApi = () => {
    // API 불러오기!
    return fetch('https://yts.gy/api/v2/list_movies.json?sort_by=download_count')
    .then(apple => apple.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  render() {
    console.log('render')
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading..'}
      </div>
    );
  }
}

export default App;



