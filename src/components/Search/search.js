import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'


class Search extends Component {
    constructor(props){
        super(props)
        this.state = { 
            movies: [],
            input:'',
            redirect: null,
        }
    }

    handleInput = e =>{
        this.setState({input: e.target.value})
    }

    runResults= e => {
        this.setState({redirect: `/search/${this.state.input}`})
    }

    render(){
        if (this.state.redirect) {
            this.setState({redirect:null})
            return <Redirect to={this.state.redirect} />
          }
        return <div>
           <input placeholder='Search' value={this.state.input} onChange={this.handleInput}></input>
           <button onClick={this.runResults}>Go</button> 
        </div>
    }
}



export default Search