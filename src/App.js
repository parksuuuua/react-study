import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


//render : componentWillMount() -> render() -> componentDidMount()
//update : componentReceiveProps() -> shouldComponentUpdate() -> componentWillMount() -> render() -> componentDidMount()


class App extends Component {


  state = {
<<<<<<< HEAD
    greeting: 'hello!',
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
      }
    ]
=======
   
>>>>>>> origin/master
  }

  componentDidMount(){
    console.log('did mount')

    setTimeout(() => {
      
      console.log("hihihi")

      this.setState({
        movies: [
<<<<<<< HEAD
          ...this.state.movies,
          {
            id: 3,
            title: "toystory2",
            poster: "https://vignette.wikia.nocookie.net/disney/images/8/80/Toy-story2-disneyscreencaps.com-3068.jpg/revision/latest/scale-to-width-down/640?cb=20140924011418"
=======
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
>>>>>>> origin/master
          }
        ]
      }) 

<<<<<<< HEAD
    }, 5000);
=======
    }, 3000);
  }

  _renderMovies = () => {
    console.log('_renderMovies')
    const movies = this.state.movies.map((movie) => {
      return <Movie title={movie.title} poster={movie.poster} key={movie.id} />
    })
    return movies
>>>>>>> origin/master
  }

  render() {
    console.log('render')
    return (
      <div className="App">
<<<<<<< HEAD
        {this.state.movies.map((movie) => {
          return <Movie title={movie.title} poster={movie.poster} key={movie.id} />
        })}
=======
        {/* 데이터가 있나 없나 확인하고, 있으면 그 값을 그리라는 함수 호출, 없으면 Loading 표시 */}
        {this.state.movies ? this._renderMovies() : 'Loading..'}
>>>>>>> origin/master
      </div>
    );
  }
}

export default App;



<<<<<<< HEAD
// 수정A : key라는 index는 각 dataset에서 고유로 매겨야 하는 값이므로 아래와 같이 작성하지 않아야 한다. 
/* <div className="App">
        {movies.map((movie,index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div> */


=======
>>>>>>> origin/master
