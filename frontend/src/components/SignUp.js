import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { signUptAction } from '../actionCreator'


class SignUp extends Component {

  state = {
        username: '',
        password: '',
        name: '',
        email: '',
        zipcode: '',
        errors: []
    }

    onChange = event => {
     this.setState({
       [event.target.name]: event.target.value
     })
    }

    submitClick = event => {
      console.log(this.state)
      event.preventDefault()
      // this.props.loginAction(this.state)
    }


  render(){
    return(
      <div>
           <h2>Signup</h2>
           <form>
              <p>{this.props.errors ? this.props.errors : null}</p>
              <label>Username: </label>
              <input onChange={this.onChange} autoComplete="username" name="username" type="text"/>
              <br />
              <label>Password: </label>
              <input onChange={this.onChange} autoComplete="current-password" name="password" type="password"/>
              <br />
              <label>Name: </label>
              <input onChange={this.onChange} autoComplete="name" name="name" type="text"/>
              <br />
              <label>Email: </label>
              <input onChange={this.onChange} autoComplete="email" name="email" type="email"/>
              <br />
              <label>Zipcode: </label>
              <input onChange={this.onChange} autoComplete="zipcode" name="zipcode" type="number"/>
              <br />
              <button onClick={this.submitClick}>Signup</button>
            </form>
          </div>
    )
  }
}


// export default connect(undefined, {signUptAction}) (SignUp)
export default SignUp