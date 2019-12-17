

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

      if (resp.errors){
        localStorage.clear()
      }
      else {
        localStorage.token = resp.token
        localStorage.userId = resp.user_id
      }
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

export function signUpAction (userData) {
  return (dispatch) => fetch(`http://localhost:3000/users`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      user:
      { username: userData.username,
      password: userData.password,
      name: userData.name,
      email: userData.email,
      zipcode: userData.zipcode}
    })
  })
  .then(r => r.json())
  .then(resp => {
    dispatch({
      type: "SIGNUP",
      user: {
        username: resp.username,
        name: resp.name,
        email: resp.email,
        zipcode: resp.zipcode
      }
    })
  })
}

export function setUserData (userData) {
  return (dispatch) => dispatch(
    {
      type: "SET_USER_DATA",
      user: {
        userId: userData.id,
        username: userData.username,
        name: userData.name,
        email: userData.email,
        zipcode: userData.zipcode,
        metabolic_panels: userData.metabolic_panels,
        vitamine_panels: userData.vitamine_panels,
        cholesterols: userData.cholesterols,
        weights: userData.weights,
        blood_pressures: userData.blood_pressures
      }
    }
  )
}

const actionCreator = {
  loginAction,
  logoutAction,
  signUpAction,
  setUserData
}

export default actionCreator


