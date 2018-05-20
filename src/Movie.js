import React, { Component } from 'react';
import './Movie.css';


//오버로딩 : 함수명이 같으나 파라미터가 다른경우
//오버라이딩 : 상속관계에서 부모 메소드를 자식 메소드에서 재정의

class Movie extends Component{
    render(){
        return(
            <div>
                <MoviePoster poster={this.props.poster}/>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}


class MoviePoster extends Component{
    render(){
        return(
            <img src={this.props.poster} alt="movie poster" />
        )
    }
}

export default Movie 