
import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Login from './Login'
import NewUser from './NewUser'
import AllProfiles from './AllProfiles'
// import OneProfile from './OneProfile'
// import User from './User'
// import EditUser from './EditUser'


const App = () => {
  return (
    <React.Fragment>
      <Router>
        <div>
          <Route exact path='/' component={Login}/>
          <Route exact path='/user/new' component= {NewUser} />
          {/* <Route exact path='/user/1' component= {User} />
          <Route exact path='/user/1/edit' component= {EditUser} /> */}
          <Route exact path='/profiles' component= {AllProfiles} />
          {/* <Route exact path='/profiles/view' component= {OneProfile} /> */}
        </div>
      </Router>

    </React.Fragment>
  )
}




export default App

