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
    <>
         {this.state.signUpClick

           ?

          <div>
          <SignUp />
          <br />
          <button onClick={this.onClick}>Returning user?</button>
          </div>

          :

          <div>
          <Login />
          <br />
          <button onClick={this.onClick}>Don't have an account?</button>
          </div>

        }

    </>
  )
}

}



export default Welcome