

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
        errors: [],
        username: null,
        name: null,
        email: null,
        zipcode: null,
        metabolic_panels: [],
        vitamine_panels: [],
        cholesterols: [],
        weights: [],
        blood_pressures: [],
        userDataLoadingComplete: false
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




export function setUserData () {
  return (dispatch) => fetch(`http://localhost:3000/users/${localStorage.userId}`)
  .then(r => r.json())
  .then(resp => {
        let reversedArray = resp.blood_pressures.reverse()
        dispatch({
      type: "SET_USER_DATA",
      user: {
        username: resp.username,
        name: resp.name,
        email: resp.email,
        zipcode: resp.zipcode,
        metabolic_panels: resp.metabolic_panels,
        vitamine_panels: resp.vitamine_panels,
        cholesterols: resp.cholesterols,
        weights: resp.weights,
        blood_pressures: reversedArray,
        userDataLoadingComplete: true
      }
    }
  )
  })
}

export function bloodPressureTestSubmit (testData) {

  return (dispatch) => fetch('http://localhost:3000/blood_pressures', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      blood_pressure: {
        systolic: testData.systolic,
        diastolic: testData.diastolic,
        puls: testData.puls,
        stress_level: testData.stress_level,
        user_id: testData.userId
      }
  })
  })
  .then(r => r.json())
  .then(resp => {
    console.log(resp)
      dispatch({
      type: "BLOOD_PRESSURE_TEST_SUBMIT",
      blood_pressures: [{
        id: resp.id,
        systolic: resp.systolic,
        diastolic: resp.diastolic,
        puls: resp.puls,
        stress_level: resp.stress_level
      }]
    })
  })
}


export function fetchApiAction (zipcode) {
  console.log(zipcode)

  return (dispatch) => fetch(`https://data.cityofnewyork.us/resource/8eux-rfe8.json?input_1_zipcode=${zipcode}`)
    .then(r => r.json())
    .then(resp => {
      console.log(resp)
    })

}



const actionCreator = {
  loginAction,
  logoutAction,
  signUpAction,
  setUserData,
  bloodPressureTestSubmit,
  fetchApiAction
}

export default actionCreator