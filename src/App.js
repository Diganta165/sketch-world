import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createContext, useState } from 'react';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Admin from './components/Admin/Admin';
import Deals from './components/Deals/Deals';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import 'bootstrap/dist/css/bootstrap.css';
import Checkout from './components/Checkout/Checkout';

export const UserContext = createContext();

function App() {
  const [loggedInUser , setLoggedInUser] = useState({});
  
  return (
    <div className="Container">
      <UserContext.Provider value ={[loggedInUser,setLoggedInUser]}>
        
        
      <Router>
        <Header/>
        <Switch>
          <Route path='/home' >
            <Home />
          </Route>
          <PrivateRoute path='/orders' >
            <Orders />
          </PrivateRoute>
          <PrivateRoute path='/admin' >
            <Admin />
          </PrivateRoute>
          <Route path='/deals' >
            <Deals />
          </Route>
          <Route path='/login' >
            <Login />
          </Route>
          <PrivateRoute path='/orders' >
            <Orders/>
          </PrivateRoute>
          <PrivateRoute path='/checkout/:id' >
            <Checkout/>
          </PrivateRoute>
          
          <Route path='/' exact>
            <Home />
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
