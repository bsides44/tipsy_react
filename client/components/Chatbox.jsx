import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Chatroom from './Chatroom'

const Chatbox = () => {
  return (
    <React.Fragment>
        <h2>Chatroom</h2>
      <Chatroom />
    </React.Fragment>
  )
}

export default Chatbox

