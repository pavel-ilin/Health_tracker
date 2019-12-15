import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginAction } from '../actionCreator'

class Welcome extends Component {

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
    <div>
         <h2>Login</h2>
         <form>
            <p>{this.props.errors ? this.props.errors : null}</p>
            <label>Username: </label>
            <input onChange={this.onChange} autoComplete="username" name="username" type="text"/>
            <br />
            <label>Password: </label>
            <input onChange={this.onChange} autoComplete="current-password" name="password" type="password"/>
            <br />
            <button onClick={this.submitClick}> Login</button>
          </form>
        </div>
  )
  }

  }

  const mapStateToProps = state => {
  return {
    errors: state.errors
  }
  }


export default connect(mapStateToProps, {loginAction}) (Welcome)