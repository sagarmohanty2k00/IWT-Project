import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar'
import Body from './components/Body'
import Dashboard from './components/Dashboard'
import LoginRegister from './components/LoginRegister'
import Profile from './components/Profile'
import { useEffect, useState } from 'react';
import AppearedQuiz from './components/AppearedQuiz';

function App() {
  const [isLoggedin, setIsLoggedIn] = useState(false)
  useEffect(() => {
    const logindetails = 'sagar'
    if(logindetails === ''){
      setIsLoggedIn(false);
    }
    else{
      setIsLoggedIn(true);
    }
  }, []);
  if (isLoggedin){
    return (
      <BrowserRouter>
        <Navbar /> 

        <Switch>
          {/* <Route exact path="/" component={Body()}/> */}
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/profile/<name:sagar>" component={Profile}/>
          <Route exact path="/appeared-quiz" component={AppearedQuiz}/>
        </Switch>

      </BrowserRouter>
    );
  };


  return (
    <div className="App">
      <LoginRegister />
    </div>
  );
}

export default App;
