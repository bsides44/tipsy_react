import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import { getProfiles } from '../api/api_index';


class AllProfiles extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            profiles: []
        }
        this.saveProfiles = this.saveProfiles.bind(this)
    }
    componentDidMount(){
        getProfiles(this.saveProfiles)
}

    saveProfiles(err, profiles) {
    console.log(profiles)
        this.setState({
            error: err,
            profiles: profiles
        })
}



render () {
    return (
        <React.Fragment>
            <center>
                <br/>
                <h4> Welcome </h4>
                <div><Link to='/user/1'><button>Your Profile</button></Link><br/></div>
                <div><Link to='/user/1/edit'><button>Edit profile</button></Link><br/></div>
                <br/>
                {this.state.profiles.map((profile, i) => <div key={i}>
                    <h4>{profile.firstname}</h4> 
                    <img src={profile.profilepic} width="200px"/>
                    </div>)}
                <div><Link to='/'><button>Back</button></Link><br/></div>
            </center>
        </React.Fragment>

    )
}
}


export default AllProfiles

