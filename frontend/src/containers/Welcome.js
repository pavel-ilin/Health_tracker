import React, { Component } from 'react'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import {Redirect} from 'react-router-dom'
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
  console.log(this.state.signUpClick, "hello world")
  return(
    <>
         {this.state.signUpClick

           ?

          <div>
          <SignUp />
          <button onClick={this.onClick}>Login</button>
          </div>

          :
          <Redirect to='/login' />

        }


    </>
  )
}

}

// <div>
// <Login />
// <button onClick={this.onClick}>Signup</button>
// </div>

export default Welcome