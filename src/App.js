import './App.css';
import Header from './Component/Header';
import Home from './Component/Home';
import JoinRoom from './Component/JoinRoom';
// import Chat from './Component/Chat';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

  

function App() {
  return (
    <>
    <Router>
    <Header />
      <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/home" component={Home}></Route>
          <Route path="/joinroom" component={JoinRoom}></Route>
        </Switch>
    </Router>
    </>
  );
}

export default App;
