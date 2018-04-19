import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import { getProfiles } from '../api/api_index';


class OneProfile extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            userProfile: {},
        }
        this.saveProfile = this.saveProfile.bind(this)
    }
    componentDidMount(){
        getProfiles(this.props.match.params.id, this.props.match.query, this.saveProfile)
}

    saveProfile(err, databall) {
    console.log("databall", databall)
        this.setState({
            error: err,
            userProfile: databall.userProfile
        })
}



render () {
    return (
        <React.Fragment>
            <h3> TIPSY</h3>
            <center>
                <br/>
                <h4> Yo'Mate </h4>
                <h3>{firstname} {lastname}</h3> 
                <h3>{tagline}</h3> 
                <h3>{email}</h3> 
                <img src={profilepic} width = "400px" />
                <br />
                <br />

                <div><Link to={'/user/' + id + '/edit/'}><button>Edit Profile</button></Link></div>

                <div><Link to={'/profiles/' + id}><button>Back</button></Link></div>
                
            </center>
        </React.Fragment>
    )
}
export default OneProfile


