import React from 'react'
import {Link} from 'react-router-dom'
import {getUserToEdit} from '../api/api_index'
import {editUserData} from '../api/api_index'

class EditUser extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            firstname: '',
            lastname:'',
            language:[],
            tagline:'',
            email:'',
            profilepic:'',
            language_id:''
        }
        this.saveProfile = this.saveProfile.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleLanguage = this.handleLanguage.bind(this)
        this.editUser = this.editUser.bind(this)
        this.redirect = this.redirect.bind(this)
    }

    componentDidMount(){
        getUserToEdit(this.props.match.params.id, this.saveProfile)
}

saveProfile(err, databall) {
    console.log({databall})
      this.setState({
        error: err,
        firstname:databall.user.firstname,
        lastname:databall.user.lastname,
        tagline:databall.user.tagline,
        email:databall.user.email,
        profilepic:databall.user.profilepic,
        language_id: databall.user.language_id,
        language: databall.langArray
    })
}


handleChange(e) {
    let key = e.target.name 
    let value = e.target.value 
    this.setState ({[key] : value})
}

handleLanguage(e) {
    let language = this.state.language
    if (language.find(language => language == e.target.value)) language = language.filter(language => language != e.target.value)
    else language.push(e.target.value)
    this.setState({language})
}

editUser(e){
    e.preventDefault()
    let editUserBomb = {
        id: this.props.match.params.id,
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        tagline: this.state.tagline,
        email: this.state.email,
        profilepic: this.state.profilepic,
        language_id: this.state.language_id,
        language: this.state.language
    }
    console.log({editUserBomb})
    editUserData(editUserBomb, this.redirect)
}

redirect(err, thing){
      this.props.history.push('/profiles/' + this.props.match.params.id)
}

render() {
    return <form action="put" id="niceform">
    <center><h4 id="formTitle"> Edit Yo'Self </h4>
    <input onChange={this.handleChange} name="firstname" type="text" placeholder={this.state.firstname}/><br/>
    <input onChange={this.handleChange} name="lastname" type="text" placeholder={this.state.lastname}/><br/>
    <input onChange={this.handleChange} name="tagline" type="text" placeholder={this.state.tagline}/><br/></center><div id="formLang">
        <input onChange={this.handleLanguage} name="language" id="english" value="english" type="checkbox" checked={this.state.language.includes("english")}/><p> English</p><br />
        <input onChange={this.handleLanguage}name="language" id="spanish" value="spanish" type="checkbox" checked={this.state.language.includes("spanish")}/><p> Spanish</p><br />
        <input onChange={this.handleLanguage}name="language" id="te_reo" value="te_reo" type="checkbox" checked={this.state.language.includes("te_reo")}/><p> Te reo Māori</p><br /></div><center>
    <input onChange={this.handleChange} name="email" type="text" placeholder={this.state.email}/><br/>
    <input onChange={this.handleChange} name="profilepic" type="text" placeholder={this.state.profilepic}/><br/>
    <input type="submit" onClick={this.editUser} value="I'm awesome!"/>
    <br/><Link to={'/profiles/' + this.props.match.params.id}><button>Home</button></Link></center>
    </form>
}
}

export default EditUser



