import React, { Component } from 'react'
import Login from '../components/Login'
import SignUp from '../components/SignUp'

class Welcome extends Component {

state = {
  signUpClick: false
}

onClick = event => {
  this.setState({
    signUpClick: !this.state.signUpClick
  })
}

render(){
  return(
    <div>
         {this.state.signUpClick

           ?

          <div>
          <SignUp />
          <button onClick={this.onClick}>Login</button>
          </div>

          :

          <div>
          <Login />
          <button onClick={this.onClick}>Signup</button>
          </div>
        }


    </div>
  )
}

}


export default Welcome