

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
        let reversedBloodPressure = resp.blood_pressures.reverse()
        let reversedCholesterol = resp.cholesterols.reverse()
        let reverseMetabolicPanel = resp.metabolic_panels.reverse()
        let reverseVitaminePanel = resp.vitamine_panels.reverse()

        dispatch({
      type: "SET_USER_DATA",
      user: {
        username: resp.username,
        name: resp.name,
        email: resp.email,
        zipcode: resp.zipcode,
        metabolic_panels: reverseMetabolicPanel,
        vitamine_panels: reverseVitaminePanel,
        cholesterols: reversedCholesterol,
        weights: resp.weights,
        blood_pressures: reversedBloodPressure,
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
    // console.log(resp)
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
  return (dispatch) => fetch(`https://data.cityofnewyork.us/resource/8eux-rfe8.json?input_1_zipcode=${zipcode}`)
    .then(r => r.json())
    .then(resp => {
      dispatch({
      type: "BLOOD_PRESSURE_MAP",
      bloodPressureChecks: resp
    })
    })
}

export function cholesterolTestSubmit(testData){
  return (dispatch) => fetch('http://localhost:3000/cholesterols', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      cholesterol: {
        ldl: testData.ldl,
        hdl: testData.hdl,
        triglycerides: testData.triglycerides,
        total_cholesterol: testData.total_cholesterol,
        user_id: testData.userId
      }
  })
  })
  .then(r => r.json())
  .then(resp => {
    dispatch({
    type: "CHOLESTEROL_TEST_SUBMIT",
    cholesterols: [{
      id: resp.id,
      hdl: resp.hdl,
      triglycerides: resp.triglycerides,
      total_cholesterol: resp.total_cholesterol,
      stress_level: resp.stress_level
    }]
  })
})
}


export function metabolicPanelTestSubmit(testData){
  console.log(testData)
  return (dispatch) => fetch('http://localhost:3000/metabolic_panels', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      metabolic_panel: {
        sodium: testData.sodium,
        glucose: testData.glucose,
        calcium: testData.calcium,
        user_id: testData.userId
      }
  })
  })
  .then(r => r.json())
  .then(resp => {
    dispatch({
    type: "METABOLIC_PANEL_TEST_SUBMIT",
    metabolic_panels: [{
      sodium: resp.sodium,
      glucose: resp.glucose,
      calcium: resp.calcium
    }]
  })
})
}

export function vitaminePanelTestSubmit(testData){
  console.log(testData)
  return (dispatch) => fetch('http://localhost:3000/vitamine_panels', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      vitamine_panel: {
        d: testData.d,
        b12: testData.b12,
        a1: testData.a1,
        user_id: testData.userId
      }
  })
  })
  .then(r => r.json())
  .then(resp => {
    dispatch({
    type: "METABOLIC_PANEL_TEST_SUBMIT",
    vitamine_panels: [{
      d: resp.d,
      b12: resp.b12,
      a1: resp.a1
    }]
  })
})
}



const actionCreator = {
  loginAction,
  logoutAction,
  signUpAction,
  setUserData,
  bloodPressureTestSubmit,
  fetchApiAction,
  cholesterolTestSubmit,
  metabolicPanelTestSubmit,
  vitaminePanelTestSubmit
}

export default actionCreator