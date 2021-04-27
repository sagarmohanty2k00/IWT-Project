import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar'
import Body from './components/Body'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import { useEffect, useState } from 'react';
import AddQuiz from './components/sagar/AddQuiz'
import AppearedQuiz from './components/AppearedQuiz';
import './components/style.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)



  // const userdetails = async () => {
  //   const response = await fetch('http://127.0.0.1:1234/isloggedin');
  //   const result = await response.json()
  //   if (result === true) {
  //     setIsLoggedIn(true);
  //   }
  //   else {
  //     setIsLoggedIn(false);
  //   }
  // }

  // useEffect(() => {
  //   userdetails();
  //   // console.log(isLoggedIn)
  // }, []);

  if (isLoggedIn){
    const number = 1;
    return (
      <BrowserRouter>
        <Navbar /> 

        <Switch>
          <Route exact path="/">
            <Dashboard number/>
          </Route>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/body" component={Body}/>
          <Route exact path="/appeared-quiz" component={AppearedQuiz}/>
          <Route exact path="/add-quiz" component={AddQuiz}/>
        </Switch>

      </BrowserRouter>
    );
  };


  return (
    <div className="App">
      <BrowserRouter>

        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/register" component={Register}/>
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
