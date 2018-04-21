import React from 'react'
import {Link} from 'react-router-dom'
import {getUser} from '../api/api_index'

class EditUser extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            userProfile: {},
            languages: []
        }
        this.saveProfile = this.saveProfile.bind(this)
    }

    componentDidMount(){
        getUser(this.props.match.params.id, this.saveProfile)
}

saveProfile(err, databall) {
    this.setState({
        error: err,
        userProfile: databall.user,
        languages: databall.languages
    })
}

// handleChange(e) {
//     let key = e.target.name 
//     let value = e.target.value 
//     console.log({key, value})
//     this.setState ({[key] : value})
// }

// handleLanguage(e) {
//     let language = this.state.language
//     console.log(e.target.value)
//     if (language.find(language => language == e.target.value)) language = language.filter(language => language != e.target.value)
//     else language.push(e.target.value)
//     console.log(language)
//     this.setState({language})
// }

render(){
    return <form onSubmit={this.handleSubmit}>
    <h4 id="formTitle"> Edit Yo'Self </h4>
    <input onChange={this.handleChange} name="firstname" type="text" value={this.state.userProfile.firstname}/><br/>
    <input onChange={this.handleChange} name="lastname" type="text" value={this.state.userProfile.lastname}/><br/>
    <input onChange={this.handleChange} name="tagline" type="text" value={this.state.userProfile.tagline}/><br/>
        <input onChange={this.handleLanguage} name="language" id="english" value="english" type="checkbox" checked={this.state.languages.english}/> English<br />
        <input onChange={this.handleLanguage}name="language" id="spanish" value="spanish" type="checkbox" checked={this.state.languages.spanish}/> Spanish<br />
        <input onChange={this.handleLanguage}name="language" id="te_reo" value="te_reo" type="checkbox" checked={this.state.languages.te_reo}/> Te reo Māori<br />
    <input onChange={this.handleChange} name="email" type="text" value={this.state.userProfile.email}/><br/>
    <input onChange={this.handleChange} name="profilepic" type="text" value={this.state.userProfile.profilepic}/><br/>
    <input type="submit" value="Let's go!"/>
    <br/><Link to={'/profiles/' + this.state.userProfile.id}><button>Home</button></Link>
</form>
}
}

export default EditUser



