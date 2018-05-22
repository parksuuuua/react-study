// import React, { Component } from 'react';
// functional component만 있으므로 위를 아래와 같이 수정 
import React from 'react';
import './Movie.css';
import propTypes from 'prop-types';



//오버로딩 : 함수명이 같으나 파라미터가 다른경우
//오버라이딩 : 상속관계에서 부모 메소드를 자식 메소드에서 재정의

// class Movie extends Component{
//     render(){
//         return(
//             <div>
//                 <MoviePoster poster={this.props.poster}/>
//                 <h1>{this.props.title}</h1>
//             </div>
//         )
//     }
// }

//  위에 작성했던 class component를 functional component로 변경.

function Movie({title,poster}){
    return(
        <div>
            <MoviePoster poster={poster}/>
            <h1>{title}</h1>
        </div>
    )
}

Movie.propTypes = {
    title: propTypes.string.isRequired,
    poster: propTypes.string.isRequired
}

// class MoviePoster extends Component{
//     render(){
//         return(
//             <img src={this.props.poster} alt="movie poster" />
//         )
//     }
// }


//  위에 작성했던 class component를 functional component로 변경.

function MoviePoster({poster}){
    return(
        <img src={poster} alt="movie poster" />
    )
}

MoviePoster.propTypes = {
    poster: propTypes.string.isRequired
}

export default Movie 