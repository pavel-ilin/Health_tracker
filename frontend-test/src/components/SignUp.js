import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signUpAction } from '../actionCreator'
import { Link } from 'react-router-dom'


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
      event.preventDefault()
      this.props.signUpAction(this.state)
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
              <button onClick={this.submitClick}><Link to='/welcome'>Signup</Link></button>
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

export default connect(mapStateToProps, {signUpAction}) (SignUp)
