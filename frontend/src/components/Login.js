import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginAction } from '../actionCreator'
import { withRouter } from 'react-router-dom'

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
          {this.props.token ?  <Redirect to='/main' />  : null }

         <h2>Login</h2>
         <form>
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


export default connect(mapStateToProps, {loginAction})(Welcome)