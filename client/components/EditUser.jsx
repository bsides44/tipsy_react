import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

const EditUser = () => {
    return (
        <React.Fragment>
            <center>
                <br/>
                <h4> Edit Yo'Self </h4>
                <Link to='/profiles'><button>Home</button></Link>
                
            </center>
        </React.Fragment>
    )
}
export default EditUser