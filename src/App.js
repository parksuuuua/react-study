import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


const moviesTitles = [
  "내 아내의 모든것",
  "About time",
]

const movieImages = [
  "https://akns-images.eonline.com/eol_images/Entire_Site/2017524/rs_1024x565-170624152702-1024-toy-story-062417.jpg?fit=inside|900:auto&output-quality=90",
  "https://pixar-planet.fr/wp-content/uploads/2016/10/affiche-toy-story-2-05.jpg"
]

const movies = [
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


//render : componentWillMount() -> render() -> componentDidMount()
//update : componentReceiveProps() -> shouldComponentUpdate() -> componentWillMount() -> render() -> componentDidMount()


class App extends Component {

UNSAFE_componentWillMount(){
  console.log('unsafe will mount')
}
componentWillMount(){
  console.log('will mount')
}

  state = {
    greeting: 'hello!'
  }

  componentDidMount(){
    console.log('did mount')
    setTimeout(() => {
      this.setState({
        greeting: 'hello again!'
      })
    }, 5000);
  }

  render() {
    console.log('render')
    return (
      // 수정A 참고
      <div className="App">
        {this.state.greeting}
        {movies.map((movie) => {
          return <Movie title={movie.title} poster={movie.poster} key={movie.id} />
        })}
      </div>
    );
  }
}

export default App;



// 수정A : key라는 index는 각 dataset에서 고유로 매겨야 하는 값이므로 아래와 같이 작성하지 않아야 한다. 
{/* <div className="App">
        {movies.map((movie,index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div> */}


