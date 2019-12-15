const initialState = {
  token: null,
  userId: null,
  errors: null
}

const reducer = (oldState = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
      ...oldState,
        token: action.user.token,
        userId: action.user.userId,
        errors: action.user.errors
      }
    case 'LOGOUT':
    return {
      ...oldState,
        token: null,
        userId: null,
        errors: null
      }
    default :
      return oldState // what's old is new again
      }
}

export default reducer

// if (action.type === "LOGIN") {
//   return {
//     ...oldState,
//     token: action.user.token,
//     userId: action.user.userId,
//     errors: action.user.errors
//   }
// }