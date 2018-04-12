import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

const Login = () => {
    return (
        <React.Fragment>
            <center>
                <h4> Who are you? </h4>


                <Link to='/user/new/'><button>Add new user</button></Link><br/>
                <Link to='/profiles/'><button>Profiles</button></Link>

            </center>
        </React.Fragment>
    )
}
export default Login
   
