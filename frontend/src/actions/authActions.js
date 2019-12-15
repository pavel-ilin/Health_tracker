import actionCreator from '../actionCreator'

const login = (userData) => {

    return (dispatch) => fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          username: userData.username,
          password: userData.password
        })
      })
      .then(r => r.json())
      .then(resp => {
        dispatch(actionCreator.loginAction(resp))
      })
  }



 const logout = () => {
    return (dispatch) => dispatch(actionCreator.logoutAction())
}


export default authActions