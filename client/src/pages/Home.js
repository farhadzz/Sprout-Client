import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router";
import { LogoHeaders } from "../components/LogoHeaders";
import TableBody from "../components/TableBody";
import { fetchUsers, logout } from '../store/action/userAction'

export default function Home() {
  const { users, user, isLoading } = useSelector(state => state)
  const dispatch = useDispatch()
  const history = useHistory()
  const access_token = localStorage.getItem('access_token')

  useEffect(() => {
    if(access_token) {
      dispatch(fetchUsers(access_token))
    }
  },[access_token, dispatch, users])

  const signOut = () => {
    dispatch(logout())
    history.push('/signin')
  }

  if(!isLoading) {
    return <h1>Please Wait</h1>
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
        }}>)
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
        <div style={{display: "flex", justifyContent: "center"}} className="flex-column">
          <h2 style={{textAlign: "center", marginTop: "40px", color:"#4D4F5B"}}>Great, { user }! Here's your registered name</h2>
          <div style={{overflowY: "auto", height:300, marginTop: "20px"}}>
          <table className="table table-borderless">
            <thead>
              <tr>
                <td></td>
                <td style={{ color:"#4D4F5B" }}>Name</td>
                <td style={{ color:"#4D4F5B" }}>Phone Number</td>
                <td style={{ color:"#4D4F5B" }}>Email</td>
                <td></td>
              </tr>
            </thead>
            <tbody className="overflow-auto" style={{maxHeight:"50px"}}>
              {
                users?.map(el => {
                  return <TableBody key={el._id} data={el}/>
                })
              }
            </tbody>
          </table>
          </div>
          <button onClick={() => signOut()} className="btn btn-warning" type="submit" style={{ margin:'auto', marginTop: '40px', width: 250, height: 35, background: "#F69621", boxShadow: "0px 10px 20px rgba(246, 150, 33, 0.21)", fontSize: "15px", color: "white", textAlign: "center"}}>Sign Out</button>
        </div>
      </div>
    </>
  )
}