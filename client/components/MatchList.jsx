import React from 'react'
// import {HashRouter as Router, Route} from 'react-router-dom'

const MatchList = () => {
  return (
    <React.Fragment>
            <div className="matches">
                {this.state.matches.map((profile, i) => <div key={i}>
                    <h4>{profile.firstname}</h4> 
                    <img src={profile.profilepic} width="200px"/><br/>
                    <Link to={'/profiles/' + this.state.id + '/view?id=' + profile.id}><button>View Profile</button></Link><br/>
                    <Link to={'/profiles/' + this.state.id + '/chat?id=' + profile.id}><button>Chat</button></Link>
                    </div>)}
            </div>
    </React.Fragment>
  )
}

export default MatchList

