

export function loginAction (userData) {
  return (dispatch) => fetch('https://health-tracker-i.herokuapp.com/login', {
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
  return (dispatch) => fetch(`https://health-tracker-i.herokuapp.com/users`, {
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

export function editUserAction (userData) {
  return (dispatch) => fetch(`https://health-tracker-i.herokuapp.com/users/${localStorage.userId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.token
  } ,
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
    if (resp.errors) {
      dispatch({
        type: "EDIT_USER_DATA",
        user: {
          errors: resp.errors,
        }
      })
    }
    else {
      dispatch({
        type: "EDIT_USER_DATA",
        user: {
          username: resp.username,
          name: resp.name,
          email: resp.email,
          zipcode: resp.zipcode,
          userDataUpdateComplete: true
        }
      })
    }
  })
}


export function setUserData () {
  return (dispatch) => fetch(`https://health-tracker-i.herokuapp.com/users/${localStorage.userId}`, {
    headers: {
      "Authorization": localStorage.token
    }
  })
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

export function fetchApiAction (zipcode) {
  return (dispatch) => fetch(`https://data.cityofnewyork.us/resource/8eux-rfe8.json?input_1_zipcode=${zipcode}`)
    .then(r => r.json())
    .then(resp => {
      dispatch({
      type: "BLOOD_PRESSURE_MAP",
      bloodPressureChecks: resp,
      bloodPressureChecksReset: true
    })
    })
}

export function fetchOpenDataFlueShots (zipcode) {
  return (dispatch) => fetch(`https://data.cityofnewyork.us/resource/w9ei-idxz.json?zip_code=${zipcode}`)
    .then(r => r.json())
    .then(resp => {
      dispatch({
      type: "FLU_SHOTS_MAP",
      fluShots: resp,
      bloodPressureChecksReset: false
    })
    })
}


export function bloodPressureTestSubmit (testData) {

  return (dispatch) => fetch('https://health-tracker-i.herokuapp.com/blood_pressures', {
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

export function cholesterolTestSubmit(testData){
  return (dispatch) => fetch('https://health-tracker-i.herokuapp.com/cholesterols', {
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
  return (dispatch) => fetch('https://health-tracker-i.herokuapp.com/metabolic_panels', {
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
      id: resp.id,
      sodium: resp.sodium,
      glucose: resp.glucose,
      calcium: resp.calcium
    }]
  })
})
}

export function vitaminePanelTestSubmit(testData){
  return (dispatch) => fetch('https://health-tracker-i.herokuapp.com/vitamine_panels', {
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
    type: "VITAMINE_PANEL_TEST_SUBMIT",
    vitamine_panels: [{
      id: resp.id,
      d: resp.d,
      b12: resp.b12,
      a1: resp.a1
    }]
  })
})
}

export function resetUpdateState () {
  return {
    type: 'RESET_UPDATE',
    userDataUpdateComplete: false
  }
}

const actionCreator = {
  loginAction,
  logoutAction,
  signUpAction,
  setUserData,
  bloodPressureTestSubmit,
  cholesterolTestSubmit,
  metabolicPanelTestSubmit,
  vitaminePanelTestSubmit,
  fetchApiAction,
  resetUpdateState
}

export default actionCreator