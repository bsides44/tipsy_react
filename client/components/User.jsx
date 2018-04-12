import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

const Login = () => {
    return (
        <React.Fragment>
            <center>
                <br/>
                <h4> View Yo'Self </h4>


                <div><Link to='/user/1/edit/'><button>Edit Profile</button></Link></div>

                <div><Link to='/profiles/'><button>Back</button></Link></div>
                
            </center>
        </React.Fragment>
    )
}
export default Login