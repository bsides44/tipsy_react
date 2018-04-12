import React from 'react'

class NewUser extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            firstname: '',
            lastname:'',
            tagline:'',
            language:'',
            email:'',
            profilepic:''
        }
        
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    } 

    handleSubmit(e) {
    e.preventDefault()

}

handleChange(e) {
    let key = e.target.name 
    let value = e.target.value 
    this.setState ({[key] : value})
}

render(){console.log(this.state)
    return <form onSubmit={this.handleSubmit}>
    <input onChange={this.handleChange} name="firstname" type="text" placeholder="Firstname"/><br/>
    <input onChange={this.handleChange} name="lastname" type="text" placeholder="Lastname"/><br/>
    <input onChange={this.handleChange} name="tagline" type="text" placeholder="Tagline"/><br/>
    <input onChange={this.handleChange} name="email" type="text" placeholder="Email"/><br/>
    <input onChange={this.handleChange} name="profilepic" type="text" placeholder="Profile Pic URL"/><br/>
    <input type="submit" value="Let's go!"/>
</form>
}
}

export default NewUser



