import logo from '../assets/Logo.png'

export function LogoHeaders() {
  return (
    <img src={logo} alt="logo" style={{
      position: "absolute",
      width: "auto",
      height: "auto", 
      right: "50%",
      top: "5%",
      transform: "translate(50%,-50%)"
    }}/>
  )
}