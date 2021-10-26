import React, {Component} from 'react';
import '../../App.css';

class SingleMovie extends Component {

    render(){
        const {title, overview} = this.props.location.state
        return(
            <div className='singlePage'> 
                <h2 >{title}</h2> 
                <h3 >Overview:</h3>
                <p>{overview}</p>
                
            </div>
        )
    }
}

export default SingleMovie