import { useContext, useEffect} from 'react';
import './App.css';
import Login from './components/USER/Login';
import Dashboard from './components/DASHBOARD/Dashboard';
import Register from './components/USER/Register';
import {UserContext} from './context-api/User'

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function Goto_Dashboard({user}){

    return (
      <>
      {user.isLogin?
        <Dashboard />
      :
        <Login/>
      }
      </>
    );
}

function App() {

  useEffect(()=>{
      console.log(user);
  },[])
  const [user,setUser] = useContext(UserContext);
  // console.log(user);
  return (
    <div className="app">
      <Router basename={window.location.pathname || ''}>
        <Routes>
          <Route exact path="" element={<Goto_Dashboard user={user}/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/register" element={<Register/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
