import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import '../assets/index.css';

import { editUserAction, resetUpdateState } from '../actionCreator'


class Profile extends Component {

  state = {
        username: '',
        password: '',
        name: '',
        email: '',
        zipcode: '',
        errors: [],
        initRender: false,
        updateRender: false
    }

    onChange = event => {
     this.setState({
       [event.target.name]: event.target.value
     })
     if (this.props.userDataUpdateComplete) {
       this.props.resetUpdateState()
     }

    }



    onLoad = () => {
      if (this.props.userDataLoadingComplete) {
        this.setState({
          username: this.props.username,
          name: this.props.name,
          email: this.props.email,
          zipcode: this.props.zipcode,
          errors: this.props.errors,
          initRender: this.props.userDataLoadingComplete
        })
      }
    }

    onUpdate = () => {
      if (this.props.userDataUpdateComplete) {
        this.setState({
          username: this.props.username,
          name: this.props.name,
          email: this.props.email,
          zipcode: this.props.zipcode,
          errors: this.props.errors,
          updateRender: this.props.userDataUpdateComplete
        })
      }
    }

    submitClick = event => {
      event.preventDefault()
      this.props.editUserAction(this.state)
      this.setState({
        updateRender: false,
        password: ''
      })
    }

  render(){
    return(
      <div>
            <ul className='results_inline'>
              <li><Link to='/main'>Back to main page</Link></li>
              <h2>Edit your profile</h2>
            </ul>
           <form className='input_form'>
              {!this.state.initRender ? this.onLoad() : null}
              {!this.state.updateRender ? this.onUpdate() : null}

              <p>{this.props.errors ? this.props.errors : null}</p>
              <label>Username: </label>
              <input onChange={this.onChange} autoComplete="username" name="username" type="text" value={this.state.username}/>
              <br />
              <label>Password: </label>
              <input onChange={this.onChange} autoComplete="password" name="password" type="password" value={this.state.password}/>
              <br />
              <label>Name: </label>
              <input onChange={this.onChange} autoComplete="name" name="name" type="text" value={this.state.name}/>
              <br />
              <label>Email: </label>
              <input onChange={this.onChange} autoComplete="email" name="email" type="email" value={this.state.email}/>
              <br />
              <label>Zipcode: </label>
              <input onChange={this.onChange} autoComplete="zipcode" name="zipcode" type="number" value={this.state.zipcode}/>
              <br />
              <button onClick={this.submitClick}><Link to='/profile'>Save</Link></button>
            </form>
          </div>
    )
  }
}


const mapStateToProps = state => {
  console.log(state)
  return {
    userId: state.userId,
    username: state.username,
    name: state.name,
    email: state.email,
    zipcode: state.zipcode,
    errors: state.errors,
    userDataLoadingComplete: state.userDataLoadingComplete,
    userDataUpdateComplete: state.userDataUpdateComplete
  }
}

export default withRouter(connect(mapStateToProps, { editUserAction, resetUpdateState }) (Profile))