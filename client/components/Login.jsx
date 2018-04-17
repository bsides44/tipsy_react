import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import { getLibbyProfile } from '../api/api_index';

class Login extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            libby: ""
        }
        this.getLibby = this.getLibby.bind(this)
    }


getLibby() {
    return getLibbyProfile()
    .then(libby => {
        console.log("login page")
        console.log(libby)
        this.setState({libby: libby})
    })
    .catch(err => {
    this.setState({errorMessage: err.message})
    })
}

render () {
    return (
            <React.Fragment>
                <center>
                    <h4> Who are you? </h4>
                    {this.state.libby.name}
                    <img src ={this.state.libby.profilepic} width="200px" />

                    <Link to='/user/new/'><button>Add new user</button></Link><br/>
                    <Link to='/profiles/'><button>Profiles</button></Link>

                </center>
            </React.Fragment>
        )
}
}

export default Login
   
