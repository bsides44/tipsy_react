import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Login from './Login'
import NewUser from './NewUser'
import AllProfiles from './AllProfiles'
import OneProfile from './OneProfile'
import User from './User'
import EditUser from './EditUser'
import Chatroom from './Chatroom'


const App = () => {
  return (
    <React.Fragment>
      <Router>
        <div>
          <Route exact path='/' component={Login}/>
          <Route exact path='/user/new' component= {NewUser} />
          <Route exact path='/user/:id' component= {User} />
          <Route exact path='/user/:id/edit' component= {EditUser} />
          <Route exact path='/profiles/:id/chat' component= {Chatroom} />
          <Route exact path='/profiles/:id' component= {AllProfiles} />
          <Route exact path='/profiles/:id/view' component= {OneProfile} />
        </div>
      </Router>

    </React.Fragment>
  )
}




export default App

