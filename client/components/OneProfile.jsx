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
            language1: '',
            language2: '',
            language3: ''
        }
        this.saveProfile = this.saveProfile.bind(this)
        this.runMatch = this.runMatch.bind(this)
        this.redirect = this.redirect.bind(this)
    }
    componentDidMount(){
        getProfileByQuery(this.props.location.search, this.saveProfile)
}
// view the profile
    saveProfile(err, databall) {
        this.setState({
            error: err,
            userProfile: databall.user,
            language1: databall.langArray.includes("english"),
            language2: databall.langArray.includes("spanish"),
            language3: databall.langArray.includes("te_reo")
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
   if (body == "true") {
        alert("IT'S A MATCH! \n\nYou can chat now") 
        this.props.history.push('/profiles/' + this.state.id + '/chat' + this.state.query)
   }
    else this.props.history.push('/profiles/' + this.state.id) 
}

render () { 
    return (
        <React.Fragment>
            <center>
                <br/>
                <h4> Yo'Mate </h4>
                <h4>{this.state.userProfile.firstname} {this.state.userProfile.lastname}</h4> 
                <h5>"{this.state.userProfile.tagline}"</h5> 
                <h4>I speak:</h4>
                    <h5 className={this.state.language1? "visible":"hidden"}>English</h5>
                    <h5 className={this.state.language2? "visible":"hidden"}>Spanish</h5>
                    <h5 className={this.state.language3? "visible":"hidden"}>Te reo Māori</h5> 
                <img src={this.state.userProfile.profilepic} width = "300px" />
                <br />
                <br />
                <form action="post" >
                <input type='submit' onClick={this.runMatch} value="MATCH" />
                </form>

                <div><Link to={'/profiles/' + this.state.id}><button>Home</button></Link></div>
                
            </center>
        </React.Fragment>
    )
}
}
export default OneProfile
