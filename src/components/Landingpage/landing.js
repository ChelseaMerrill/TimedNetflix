import React, {Component} from 'react';
import MovieCard from '../MovieCard/moviecard';

import '../../App.css';


class Homepage extends Component {
    constructor(){
        super()
        this.state = { 
            movies: [],
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=7e21b72b8f689d3251fd5259f0c5b1b7`)
            .then(data => data.json())
            .then(response => response) 
            .then(data => this.setState({movies: data.results}))
    }


    render(){
        return(
            <div className='landingPage'>
                <div className='moviesDisplay'>
                    {this.state.movies.map(movie =>  <MovieCard key={movie.id} movie={movie}/>)}
                </div>
            </div>
        )
    }
}
export default Homepage