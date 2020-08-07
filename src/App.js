import React from 'react';
import './App.css';
import HomePage  from './components/homepage/HomePage';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import ShopPage from './components/shop/ShopPage';
import Header from './components/header/Header';
import SignInAndSignUp from './components/sign-in-and-sign-up/SignInAndSingUp';

function App() {
  return (
    <div className="App">
    <Router>
     <Header />
       <Switch>
       <Route exact path ="/" component={HomePage} />
       <Route exact path = "/shop" component={ShopPage} />
       <Route exact path = "/signin" component={SignInAndSignUp} />
     </Switch>
    </Router>
    
    </div>
  );
}

export default App;
