import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

const OneProfile = () => {
    return (
        <React.Fragment>
            <center>
                <br/>
                <h4> Yo'Mate! </h4>
                <div><Link to='/profiles/'><button>Back</button></Link></div>
            </center>
        </React.Fragment>
    )
}
export default OneProfile

