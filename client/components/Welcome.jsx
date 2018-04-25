import React from 'react'
import {Link} from 'react-router-dom'
 
const Welcome = () => {
    return ( <div>
        <center>
            <div id="welcome">
            <img src='tongue.png' className='slide-in-elliptic-top-fwd' height="200px"/>
            <h2 id='logo'>Lengua Libre</h2>
            <br/>
            <h4 className='animated bounceInLeft' id='welcometag'>Chat For Language Learning!</h4>
            <br/>
            <Link to='/'><button>Login</button></Link>
            </div>
        </center>
        </div>
    )
}

export default Welcome
   