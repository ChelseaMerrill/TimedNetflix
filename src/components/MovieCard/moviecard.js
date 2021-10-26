import {Link} from 'react-router-dom';
import '../../App.css';

export default function MovieCard(props){
    return ( 
        <div key={props.movie.id} className='singleMovie'> 
            <img src={`https://image.tmdb.org/t/p/w400${props.movie.backdrop_path}`}></img>
            <div className='underImage'>
                <h5>{props.movie.title}</h5>
                <Link to={{pathname:`singleMovie/${props.movie.id}`, state: props.movie}}><button>View Movie</button></Link>
            </div>
        </div>)
}

