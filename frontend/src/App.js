import React, { Component } from 'react'
import './App.css';
import { connect } from 'react-redux'

import Welcome from './containers/Welcome'
import Main from './containers/Main'


class App extends Component {


  // componentDidUpdate(){
  //   if (!this.props.token){
  //     localStorage.clear()
  //   }
  // }



  render(){
    console.log(this.props.token)
    console.log(localStorage.token)
    return(
      <div className="App">

      {localStorage.token ? <Main /> : <Welcome /> }

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    token: state.token,
    userId: state.userId
  }
}

export default connect(mapStateToProps) (App)




//
// componentWillUnmount(){
//     localStorage.clear()
//
//     this.setState({
//         loggedInUserId: null,
//         token: null
//     })
// }

// logOutClick = () => {
//   localStorage.clear()
//
//   this.setState({
//     loggedInUserId: null,
//     token: null
//   })
// }