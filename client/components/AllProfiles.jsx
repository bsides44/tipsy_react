import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

const AllProfiles = () => {
    return (
        <React.Fragment>
            <center>
                <br/>
                <h4> Welcome </h4>
                <div><Link to='/user/:id'><button>Your Profile</button></Link><br/></div>
                {/* <div><Link to='/user/:id/edit'><button>Edit profile</button></Link><br/></div>
                <div><Link to='/profiles/view/'><button>View Profile</button></Link><br/></div> */}
                
            </center>
        </React.Fragment>
    )
}
export default AllProfiles

