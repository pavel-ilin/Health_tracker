import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginAction } from '../actionCreator'
import { withRouter } from 'react-router-dom'

class Login extends Component {

  state = {
        username: "",
        password: "",
        errors: []
    }

  onChange = event => {
   this.setState({
     [event.target.name]: event.target.value
   })
  }

  submitClick = event => {
    event.preventDefault()
    this.props.loginAction(this.state)
  }


  render(){
    return(
      <div className='App'>
          {this.props.token ?  <Redirect push to='/main' />  : null }

         <h2>Login</h2>
         <form className='input_form'>
            <p>{this.props.errors ? this.props.errors : null}</p>
            <label>Username: </label>
            <input onChange={this.onChange} autoComplete="username" name="username" type="text"/>
            <br />
            <label>Password: </label>
            <input onChange={this.onChange} autoComplete="current-password" name="password" type="password"/>
            <br />
            <button onClick={this.submitClick}>Login</button>
          </form>

        </div>

  )
  }

  }

  const mapStateToProps = state => {
    return {
      token: state.token,
      errors: state.errors
    }
  }


  export default withRouter(connect(mapStateToProps, {loginAction}) (Login))
