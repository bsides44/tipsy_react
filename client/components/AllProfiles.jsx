import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import { getProfiles } from '../api/api_index';


class AllProfiles extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            userProfile: {},
            allProfiles: []
        }
        this.saveProfiles = this.saveProfiles.bind(this)
    }
    componentDidMount(){
        getProfiles(this.props.match.params.id, this.saveProfiles)
}

    saveProfiles(err, databall) {
    console.log("databall", databall)
        this.setState({
            error: err,
            userProfile: databall.userProfile,
            allProfiles: databall.allProfiles
        })
}



render () {
    return (
        <React.Fragment>
            <h3> TIPSY</h3>
            <center>
                <br/>
                <h4> Welcome {this.state.userProfile.firstname}!</h4>
                <div><Link to={'/user/' + this.state.userProfile.id}><button>Your Profile</button></Link><br/></div>
                <div><Link to={'/user/'+this.state.userProfile.id +'/edit'}><button>Edit profile</button></Link><br/></div>
                <br/>

                {this.state.allProfiles.map((profile, i) => <div key={i}>
                    <Link to={'/profiles/' + this.state.userProfile.id + '/view?id=' + profile.id}><h4>{profile.firstname}</h4> 
                    <img src={profile.profilepic} width="200px"/></Link>
                    </div>)}
                <div><Link to='/'><button>Back</button></Link><br/></div>
            </center>
        </React.Fragment>

    )
}
}


export default AllProfiles

