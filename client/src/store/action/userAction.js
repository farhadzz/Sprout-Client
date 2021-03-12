import axios from '../../api/server'
import Swal from 'sweetalert2'

export const fetchUsers = (access_token) => {
  // let access_token = localStorage.getItem("access_token")
  return dispatch => {
    axios.get('/users', {
      headers: {
        access_token
      }
    })
    .then(({ data }) => {
      dispatch({
        type: 'FETCH_USER',
        payload: data
      })
    })
    .catch(err => {
      console.log(err, "Error on Fetch")
    })
  }
}

export const login = (user) => {
  return dispatch => {
    axios.post('/login', user)
    .then(({ data }) => {
      localStorage.setItem('access_token', data.access_token)
      dispatch({
        type: "USER",
        payload: data.name,
        access_token: data.access_token
      })
    })
    .catch(err => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Email/Password is wrong'
      })
      console.log(err, "Error on Login")
    })
  }
}

export const register = (user) => {
  return dispatch => {
    axios.post('/register', user)
    .then(({ data }) => {
      Swal.fire(
        'Good job!',
        'Register Success!',
        'success'
      )
    })
    .catch(err => {
      console.log(err, "Error on Register")
    })
  }
}

export const logout = () => {
  return dispatch => {
    localStorage.clear()
    dispatch({
      type: 'LOGOUT'
    })
  }
}

export const deleteUser = (id) => {
  return dispatch => {
    let access_token = localStorage.getItem('access_token')
    axios.delete(`/users/${id}`, {
      headers: {
        access_token
      }
    })
  }
}