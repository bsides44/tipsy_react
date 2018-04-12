import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

const OneProfile = () => {
    return (
        <React.Fragment>
            <center>
                <br/>
                <h4> This person </h4>
                <Link to='/profiles/'><button>Back</button></Link>
            </center>
        </React.Fragment>
    )
}
export default OneProfile

