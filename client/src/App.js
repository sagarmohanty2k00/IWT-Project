import './App.css';
import Navbar from './components/Navbar'
import Body from './components/Body'
// import {  }

function App() {

  let isLoggedin = false;
  if (isLoggedin){
    return (
      <div className="App">
        <Navbar />
        <Body name="true" />
      </div>
    );
  };


  return (
    <div className="App">
      <Navbar />
      <Body name="false" />
    </div>
  );
}

export default App;
