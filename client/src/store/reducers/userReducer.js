const initialState = {
  users: [],
  access_token: '',
  user: '',
  loginStatus: false,
  isLoading: false
}

const userReducer = (state = initialState, actions) => {
  switch(actions.type) {
    case 'LOGIN':
      return { ...state, access_token: actions.payload }
    case 'FETCH_USER':
      return { ...state, users: actions.payload, isLoading: true }
    case 'LOGOUT':
      return { ...state, access_token: '', loginStatus: false }
    case 'USER':
      return { ...state, user: actions.payload, access_token: actions.access_token, loginStatus: true }
    default:
      return state
  } 
}

export default userReducer