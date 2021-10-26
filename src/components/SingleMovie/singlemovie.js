import React, {Component} from 'react'

class SingleMovie extends Component {

    render(){
        const {title, overview} = this.props.location.state
        return(
            <div>
                <h1 className='page'>Play Movie</h1>
                <h2 className='page'>{title}</h2> 
                <h3 className='page'>Overview:</h3>
                <div className='over'>
                <p>{overview}</p>
                </div>
                
            </div>
        )
    }
}

export default SingleMovie