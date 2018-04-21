import React from 'react'
import {Link} from 'react-router-dom'
import { newUserData } from '../api/api_index';

class NewUser extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            firstname: '',
            lastname:'',
            tagline:'',
            language:[],
            email:'',
            profilepic:''
        }
        
        this.addUser = this.addUser.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleLanguage = this.handleLanguage.bind(this)
        this.redirect = this.redirect.bind(this)
    } 

addUser(e){
    e.preventDefault()
    newUserData(this.state, this.redirect)
}

redirect(err, userID){
    this.setState({
        "id": userID
    })
    this.props.history.push('/profiles/' + userID)
    
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

render(){
    return <form action="post" id="niceform">
    <h3>TIPSY</h3>
    <h4 id="formTitle">NewYo'Self</h4>
    <input onChange={this.handleChange} name="firstname" type="text" placeholder="First Name"/><br/>
    <input onChange={this.handleChange} name="lastname" type="text" placeholder="Last Name"/><br/>
    <input onChange={this.handleChange} name="tagline" type="text" placeholder="Tagline"/><br/>
        <input onChange={this.handleLanguage} name="language" id="english" value="english" type="checkbox" /> English<br />
        <input onChange={this.handleLanguage}name="language" id="spanish" value="spanish" type="checkbox" /> Spanish<br />
        <input onChange={this.handleLanguage}name="language" id="te_reo" value="te_reo" type="checkbox" /> Te reo Māori<br />
    <input onChange={this.handleChange} name="email" type="text" placeholder="Email"/><br/>
    <input onChange={this.handleChange} name="profilepic" type="text" placeholder="Profile Pic URL"/><br/>
    <input type="submit" onClick={this.addUser} value="Let's go!"/>
    <br/><Link to='/'><button>Back</button></Link>
</form>
}
}

export default NewUser



