import { useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router"
import { login } from "../store/action/userAction"
import { LogoHeaders } from "../components/LogoHeaders"


export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()

  const loginHandler = (e) => {
    e.preventDefault()
    const payload = {
      email,
      password
    }
    dispatch(login(payload))
    history.push('/')
  }

  const goToRegister = (e) => {
    e.preventDefault()
    history.push('/signup')
  }

  return (
    <div>
      <div style={{
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
      <div>
      <LogoHeaders/>
      </div>
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
        <form onSubmit={(e) => loginHandler(e)}>
          <div style={{display: "flex", justifyContent: "center"}} className="flex-column">
            <div className="p-2 mt-2 bd-highlight" style={{textAlign: "center"}}><h3>Sign In</h3></div>
            <div className="p-2 bd-highlight" style={{textAlign: "center", marginBottom: "40px"}}><p>Welcome to Sprout Digital Labs</p></div>             
              <input required type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email or Username" style={{margin: '10px auto', width: 250, height: 40, backgroundColor:"white", border: "1px solid #F69621", boxSizing: "border-box", borderRadius: "8px"}}></input>
              <input required type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" style={{margin: '10px auto', width: 250, height: 40, backgroundColor:"white", border: "1px solid #F69621", boxSizing: "border-box", borderRadius: "8px"}}></input>
              <button className="btn btn-warning" type="submit" style={{ margin:'50px auto', width: 250, height: 35, background: "#F69621", boxShadow: "0px 10px 20px rgba(246, 150, 33, 0.21)", fontSize: "15px", color: "white", textAlign: "center"}}>Sign In</button>              
              <p style={{ margin:'auto', marginTop: "50px", fontSize: "10px", textAlign: "center"}}>New to Sprout ? <span onClick={(e) => goToRegister(e)} style={{ color: "#F69621", cursor: "pointer" }}>Create account</span></p>
            </div>
        </form>
      </div>
    </div>
  )  
}