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
    setTimeout(() => {
      this.setState({
        movies: [
          {
            id: 1,
            title: "내 아내의 모든것",
            poster: "https://akns-images.eonline.com/eol_images/Entire_Site/2017524/rs_1024x565-170624152702-1024-toy-story-062417.jpg?fit=inside|900:auto&output-quality=90"
          },
          {
            id: 2,
            title: "About time",
            poster: "https://pixar-planet.fr/wp-content/uploads/2016/10/affiche-toy-story-2-05.jpg"
          },
          {
            id: 3,
            title: "toystory",
            poster: "https://vignette.wikia.nocookie.net/disney/images/8/80/Toy-story2-disneyscreencaps.com-3068.jpg/revision/latest?cb=20140924011418"
          }
        ]
      }) 

    }, 3000);
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



