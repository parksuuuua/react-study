import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


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
  }

  componentDidMount(){
    console.log('did mount')

    setTimeout(() => {
      
      console.log("hihihi")

      this.setState({
        movies: [
          ...this.state.movies,
          {
            id: 3,
            title: "toystory2",
            poster: "https://vignette.wikia.nocookie.net/disney/images/8/80/Toy-story2-disneyscreencaps.com-3068.jpg/revision/latest/scale-to-width-down/640?cb=20140924011418"
          }
        ]
      }) 

    }, 5000);
  }

  render() {
    console.log('render')
    return (
      // 수정A 참고
      <div className="App">
        {this.state.movies.map((movie) => {
          return <Movie title={movie.title} poster={movie.poster} key={movie.id} />
        })}
      </div>
    );
  }
}

export default App;



// 수정A : key라는 index는 각 dataset에서 고유로 매겨야 하는 값이므로 아래와 같이 작성하지 않아야 한다. 
/* <div className="App">
        {movies.map((movie,index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div> */


