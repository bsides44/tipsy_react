import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

const Login = () => {
    return (
        <React.Fragment>
            <center>
                <br/>
                <h4> Hello User! </h4>


                <Link to='/user/edit/'><button>Edit Profile</button></Link>
                
            </center>
        </React.Fragment>
    )
}
export default Login