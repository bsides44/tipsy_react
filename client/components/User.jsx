import React from 'react'
import {Link} from 'react-router-dom'
import {getUser} from '../api/api_index';


class User extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            userProfile: {},
            language1: '',
            language2: '',
            language3: ''
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
        language1: databall.langArray.includes("english"),
        language2: databall.langArray.includes("spanish"),
        language3: databall.langArray.includes("te_reo")
    })
}

render () { console.log("state ", this.state)
    return (
        <React.Fragment>
        <center>
            <h3> TIPSY </h3><br/>
            <h4>{this.state.userProfile.firstname} {this.state.userProfile.lastname}</h4> 
            <h5>"{this.state.userProfile.tagline}"</h5>
            <h4>I speak:</h4>
                <h5 className={this.state.language1? "visible":"hidden"}>English</h5>
                <h5 className={this.state.language2? "visible":"hidden"}>Spanish</h5>
                <h5 className={this.state.language3? "visible":"hidden"}>Te reo Māori</h5> 
            <img src={this.state.userProfile.profilepic} width = "300px" />
            <br/>
            <h6>{this.state.userProfile.email}</h6> 
            <br/>
            <Link to={"/user/" + this.state.userProfile.id + "/edit"}><button>Edit Profile</button></Link>
            <br/>
            <br/>
            <Link to={"/profiles/" + this.state.userProfile.id}><button>Back</button></Link>
            </center>
        </React.Fragment>
    )
}
}

export default User

