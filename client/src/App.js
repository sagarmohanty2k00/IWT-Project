import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar'
import Body from './components/Body'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import { useEffect, useState } from 'react';
import AppearedQuiz from './components/AppearedQuiz';
import './components/style.css'
import Quiz from './components/Quiz';
import Result from './components/Result';
import Leaderboard from './components/Leaderboard';
import QuizDisclaimer from './components/QuizDisclaimer';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const userdetails = async () => {
    const response = await fetch('http://127.0.0.1:1221/isloggedin');
    const result = await response.json()
    console.log(result+' <- result');
    if (result === 'true') {
      setIsLoggedIn(true);
    }
    else {
      setIsLoggedIn(false);
    }
  }

  // const change = () => {
  //   userdetails()
  //   if(isLoggedIn){
  //     window.location.assign('/dashboard')
  //   }
  //   else {
  //     window.location.assign('/login')
  //   }
  // }

  useEffect(() => {
    userdetails();
    console.log(isLoggedIn)
  }, []);

  var pathname = window.location.pathname;
  if(isLoggedIn && pathname === '/') {
    window.location.assign('/dashboard')
  }
  if(isLoggedIn === false && pathname === '/') {
    window.location.assign('/login')
  }

  if (isLoggedIn){
    const number = 1;
    return (
      <BrowserRouter>
        <Navbar /> 

        <Switch>
          <Route exact path="/dashboard">
            <Dashboard number/>
          </Route>

          <Route exact path="/leaderboard" component={Leaderboard}/>

          <Route exact path="/appeared-quiz">
            <AppearedQuiz number />
          </Route>

          <Route exact path="/appear/:id">
            <QuizDisclaimer />
          </Route>

          <Route exact path="/result/:id">
            <Result name="Sagar" />
          </Route>

          <Route exact path="/appear/:id/:qid" component={Quiz}/>
        </Switch>

      </BrowserRouter>
    );
  };

  if (!isLoggedIn) {
    return (
      <div className="App">
        <BrowserRouter>

          <Switch>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
          </Switch>

        </BrowserRouter>
      </div>
    );
  }
}

export default App;
