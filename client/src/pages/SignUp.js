import { useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router"
import { LogoHeaders } from "../components/LogoHeaders"
import { register } from "../store/action/userAction"
import Swal from 'sweetalert2'

export default function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [name, setName] = useState('')
  const [phone_number, setPhone_number] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()

  const registerHandler = (e) => {
    e.preventDefault()
    if(password !== password2) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Password didn't match"
      })
    } else {
      const payload = {
        email,
        password,
        password2,
        name,
        phone_number
      }
    dispatch(register(payload))
    history.push('/signin')
    }
  }

  const goToLogin = (e) => {
    e.preventDefault()
    history.push('/signin')
  }

  return (
    <>
      <div className="container-fluid" style={{
      width: "100vw",
      height: "100vh",
      left: "0%",
      right: "0%",
      top: "0%",
      bottom: "0%",
      background: "#F69621",
      mixBlendMode: "normal",
      opacity: "0.05",
      border: "1px solid #979797"
      }}>
      </div>
      <LogoHeaders/>
      <div style={{
        position: "absolute",
        width:  900,
        height: 500,
        right: "50%",
        top: "50%",
        transform: "translate(50%,-50%)",
        background: "rgba(255, 255, 255, 0.9)",       
        borderRadius: "8px"
      }}>
        <form onSubmit={(e) => registerHandler(e)}>
          <div style={{display: "flex", justifyContent: "center"}} className="flex-column">
            <div className="p-2 mt-2 bd-highlight" style={{textAlign: "center"}}><h3>Sign Up</h3></div>
            <div className="p-2 bd-highlight" style={{textAlign: "center", marginBottom: "10px"}}>Welcome to Sprout Digital Labs</div>
              <input type="text" required onChange={(e) => setName(e.target.value)} placeholder="Name" style={{margin: '10px auto', width: 250, height: 35, backgroundColor:"white", border: "1px solid #F69621", boxSizing: "border-box", borderRadius: "8px"}}></input>
              <input required onChange={(e) => setPhone_number(e.target.value)} placeholder="Phone Number" style={{margin: '10px auto', width: 250, height: 35, backgroundColor:"white", border: "1px solid #C9C6C0", boxSizing: "border-box", borderRadius: "8px"}}></input>
              <input type="email" required onChange={(e) => setEmail(e.target.value)} placeholder="Email" style={{margin: '10px auto', width: 250, height: 35, backgroundColor:"white", border: "1px solid #C9C6C0", boxSizing: "border-box", borderRadius: "8px"}}></input>
              <input type="password" required onChange={(e) => setPassword(e.target.value)} placeholder="Password" style={{margin: '10px auto', width: 250, height: 35, backgroundColor:"white", border: "1px solid #C9C6C0", boxSizing: "border-box", borderRadius: "8px"}}></input>
              <input type="password" required onChange={(e) => setPassword2(e.target.value)} placeholder="Password Confirmation" style={{margin: '10px auto', width: 250, height: 35, backgroundColor:"white", border: "1px solid #C9C6C0", boxSizing: "border-box", borderRadius: "8px"}}></input>
              <button className="btn btn-warning" type="submit" style={{ margin:'auto', marginTop: '40px', width: 250, height: 35, background: "#F69621", boxShadow: "0px 10px 20px rgba(246, 150, 33, 0.21)", fontSize: "15px", color: "white", textAlign: "center"}}>Sign Up</button>
              <p style={{ margin:'auto', fontSize: "10px", textAlign: "center"}}>Already have an account ? <span onClick={(e) => goToLogin(e)} style={{ color: "#F69621", cursor: "pointer" }}>Log In</span></p>           
            </div>
        </form>
      </div>
    </>
  )
}