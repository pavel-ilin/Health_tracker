const initialState = {
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
  bloodPressureChecks: [],
  userDataLoadingComplete: false
}

const reducer = (oldState = initialState, action) => {
  // console.log(action)
  switch (action.type) {
    case "LOGIN":
      return {
      ...oldState,
        token: action.user.token,
        userId: action.user.userId,
        errors: action.user.errors,

      }
    case 'LOGOUT':
    return {
      ...oldState,
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
    case 'SIGNUP':
    return {
      ...oldState,
        token: action.user.token,
        userId: action.user.userId,
        errors: action.user.errors
    }
    case 'EDIT_USER_DATA':
    return {
      ...oldState,
        token: action.user.token,
        userId: action.user.userId,
        errors: action.user.errors
    }
    case 'SET_USER_DATA':
    return {
      ...oldState,
      token: localStorage.token,
      userId: localStorage.userId,
      errors: action.user.errors,
      username: action.user.username,
      name: action.user.name,
      email: action.user.email,
      zipcode: action.user.zipcode,
      metabolic_panels: action.user.metabolic_panels,
      vitamine_panels: action.user.vitamine_panels,
      cholesterols: action.user.cholesterols,
      weights: action.user.weights,
      blood_pressures: action.user.blood_pressures,
      userDataLoadingComplete: action.user.userDataLoadingComplete
    }
    case 'BLOOD_PRESSURE_TEST_SUBMIT':
    return {
      ...oldState,
      blood_pressures: [...action.blood_pressures, ...oldState.blood_pressures]
    }
    case 'BLOOD_PRESSURE_MAP':
    return {
      ...oldState,
      bloodPressureChecks: action.bloodPressureChecks
    }
    case 'CHOLESTEROL_TEST_SUBMIT':
    return {
      ...oldState,
      cholesterols: [...action.cholesterols, ...oldState.cholesterols]
    }
    case 'METABOLIC_PANEL_TEST_SUBMIT':
    return {
      ...oldState,
      metabolic_panels: [...action.metabolic_panels, ...oldState.metabolic_panels]
    }
    case 'VITAMINE_PANEL_TEST_SUBMIT':
    return {
      ...oldState,
      vitamine_panels: [...action.vitamine_panels, ...oldState.vitamine_panels]
    }
    default:
      return oldState // what's old is new again
  }
}


export default reducer

