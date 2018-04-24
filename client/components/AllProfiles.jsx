import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import { getProfiles } from '../api/api_index';


class AllProfiles extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            userProfile: {},
            allProfiles: [],
            languages: [],
            filteredProfiles: []
        }
        this.saveProfiles = this.saveProfiles.bind(this)
        this.filterProfiles = this.filterProfiles.bind(this)
    }
    componentDidMount(){
        console.log(this.props)
        getProfiles(this.props.match.params.id, this.saveProfiles)
}

    saveProfiles(err, databall) {
        this.setState({
            error: err,
            userProfile: databall.userProfile,
            allProfiles: databall.allProfiles,
            languages: databall.langArray
        })
        this.filterProfiles()
}


//working for one language but not more
filterProfiles() {
    let hablo = this.state.allProfiles.filter(profile => {
        let keysArray = Object.keys(profile)
        let langKeys = keysArray.filter(key => {
            if(key === 'id'){
                return false
            } else if (profile[key]) {
                return key
                }
            })
                if (langKeys.includes(this.state.languages[0])) {
                    return langKeys
                }
                if (langKeys.includes(this.state.languages[1])) {
                    return langKeys
                } 
                if (langKeys.includes(this.state.languages[2])) {
                    return langKeys
                }
                else return false
                })
                this.setState ({
                    filteredProfiles: hablo
                })
}

render () { 
    return (
        <React.Fragment>
            <center>
                <br/>
                <h4> Welcome {this.state.userProfile.firstname}!</h4>
                <div><Link to={'/user/' + this.state.userProfile.id}><button>Your Profile</button></Link><br/></div>
                <div><Link to={'/user/'+this.state.userProfile.id +'/edit'}><button>Edit profile</button></Link><br/></div>
                <br/>

                {this.state.filteredProfiles.map((profile, i) => <div key={i}>
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

