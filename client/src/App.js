import React, {useState, useEffect} from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm"
import CreateAccountForm from "./components/CreateAccountForm"
import Home from "./components/Home"
import Profile from "./components/Profile"
import WelcomePage from "./components/WelcomePage"
import './App.css';


function App() {
 const [currentUser, setCurrentUser] = useState(null)


  useEffect(() => {
    fetch("/me").then((r) => {
      if(r.ok) {
        r.json().then(currentUser => setCurrentUser(currentUser))
      } else {
       r.json().then(r => console.log(r.error))
      }
    })
  }, [])
  console.log(currentUser)
  const onLogin = (loggedInUser) => {
    setCurrentUser(loggedInUser)
  }
  const onLogout = () => {
    setCurrentUser(null)
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <WelcomePage/>
          </Route>
          <Route path="/login">
          {(!currentUser) ? <LoginForm onLogin={setCurrentUser} /> : null}
          </Route>
          <Route path="/signup">
            <CreateAccountForm onLogin={onLogin}/>
          </Route>
          <Route path="/home">
            <Home currentUser={currentUser} onLogout={onLogout}/>
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
