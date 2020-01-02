import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import '../index.css';


class Profile extends Component {

  state = {
        username: '',
        password: '',
        name: '',
        email: '',
        zipcode: '',
        errors: [],
        initRender: false
    }

    onChange = event => {
     this.setState({
       [event.target.name]: event.target.value
     })
    }

    onLoad = () => {
      if (this.props.userId) {
        this.setState({
          initRender: true,
          username: this.props.username,
          password: '',
          name: this.props.name,
          email: this.props.email,
          zipcode: this.props.zipcode,
          errors: []
        })
      }
    }

    submitClick = event => {
      event.preventDefault()
      // this.props.editUserAction(this.state)
    }

  render(){
    console.log(this.props)
    return(

      <div>
            <ul className='results_inline'>
              <li><Link to='/main'>Back to main page</Link></li>
              <h2>Edit your profile</h2>
            </ul>

           <form className='input_form'>
              {!this.state.initRender ? this.onLoad() : null}
              <p>{this.props.errors ? this.props.errors : null}</p>
              <label>Username: </label>
              <input onChange={this.onChange} autoComplete="username" name="username" type="text" value={this.state.username}/>
              <br />
              <label>Password: </label>
              <input onChange={this.onChange} autoComplete="password" name="password" type="password" />
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
  return {
    userId: state.userId,
    username: state.username,
    name: state.name,
    email: state.email,
    zipcode: state.zipcode,
  }
}

export default withRouter(connect(mapStateToProps) (Profile))

