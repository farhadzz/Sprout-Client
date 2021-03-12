import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Switch, Route, useHistory} from 'react-router-dom'
import GuardedRoute from './components/GuardedRoute'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

function App() {
  const [ isAutheticated, setisAutheticated ] = useState(false)
  const { loginStatus } = useSelector(state => state)
  const history = useHistory()
  
  useEffect(() => {
    if(loginStatus) {
      // console.log(loginStatus)
      setisAutheticated(true)
      history.push('/')
    }  
  },[loginStatus])

  return (
    <Switch>
      <Route path="/signin" component={SignIn}/>
      <Route path="/signup" component={SignUp}/>
      <GuardedRoute exact path="/" component={Home} auth={isAutheticated}/>
    </Switch>
  );
}

export default App;
