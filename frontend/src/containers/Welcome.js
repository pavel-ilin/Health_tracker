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
          <button onClick={this.onClick}>Sign-in</button>
          </div>

          :

          <div>
          <Login />
          <button onClick={this.onClick}>SignUp</button>
          </div>

        }

    </>
  )
}

}



export default Welcome