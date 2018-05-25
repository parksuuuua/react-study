import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


//render : componentWillMount() -> render() -> componentDidMount()
//update : componentReceiveProps() -> shouldComponentUpdate() -> componentWillMount() -> render() -> componentDidMount()


class App extends Component {


  state = {
   
  }

  componentDidMount(){
    console.log('did mount')
    // API 불러오기!
    console.log(fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count'))
  }

  _renderMovies = () => {
    console.log('_renderMovies')
    const movies = this.state.movies.map((movie) => {
      return <Movie title={movie.title} poster={movie.poster} key={movie.id} />
    })
    return movies
  }

  render() {
    console.log('render')
    return (
      <div className="App">
        {/* 데이터가 있나 없나 확인하고, 있으면 그 값을 그리라는 함수 호출, 없으면 Loading 표시 */}
        {this.state.movies ? this._renderMovies() : 'Loading..'}
      </div>
    );
  }
}

export default App;



