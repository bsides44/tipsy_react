import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import { getProfileByQuery } from '../api/api_index'
import { checkForMatch } from '../api/api_index';


class OneProfile extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            id: this.props.match.params.id,
            query: this.props.location.search,
            userProfile: {},
        }
        this.saveProfile = this.saveProfile.bind(this)
        this.runMatch = this.runMatch.bind(this)
        this.redirect = this.redirect.bind(this)
    }
    componentDidMount(){
        getProfileByQuery(this.props.location.search, this.saveProfile)
}
// view the profile
    saveProfile(err, userProfile) {
        this.setState({
            error: err,
            userProfile: userProfile
        })
}

//check for match
 runMatch(e){
       e.preventDefault()
    const body = {
        query: this.state.query,
        id: this.state.id
    }
     checkForMatch(body, this.redirect)
 }

 redirect(err, body){
     console.log("body ", body)
   if (body = 200) {
        alert("IT'S A MATCH!")
   }
    this.props.history.push('/profiles/' + this.state.id) 
}


render () {
    return (
        <React.Fragment>
            <h3> TIPSY</h3>
            <center>
                <br/>
                <h4> Yo'Mate </h4>
                <h5>{this.state.userProfile.firstname} {this.state.userProfile.lastname}</h5> 
                <h5>{this.state.userProfile.tagline}</h5> 
                <h5>{this.state.userProfile.email}</h5> 
                <img src={this.state.userProfile.profilepic} width = "300px" />
                <br />
                <br />

                <form action="post" >
                <input type='submit' onClick={this.runMatch} value="MATCH" />
                </form>

                <div><Link to={'/profiles/' + this.state.id}><button>Back</button></Link></div>
                
            </center>
        </React.Fragment>
    )
}
}
export default OneProfile

// action={'/profiles/' + id + '/view?' + userProfile.id} 
