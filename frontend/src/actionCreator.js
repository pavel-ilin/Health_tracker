

export function loginAction (userData) {
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

      localStorage.setItem('token', resp.token)
      localStorage.setItem('userId', resp.user_id)

      dispatch({
        type: "LOGIN",
        user: {
          token: resp.token,
          userId: resp.user_id,
          errors: resp.errors
        }
      })
    })
}



export function logoutAction (event) {
  localStorage.clear();
  console.log(localStorage)
  return (dispatch) => dispatch(
    {
      type: "LOGOUT",
      user: {
        token: null,
        userId: null,
        errors: null
      }
    }
  )
}

const actionCreator = {
  loginAction,
  logoutAction
}

export default actionCreator


