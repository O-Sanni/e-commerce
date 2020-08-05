import React from 'react';
import './App.css';
import HomePage  from './components/homepage/HomePage';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import ShopPage from './components/shop/ShopPage';

function App() {
  return (
    <div className="App">
    <Router>
       <Switch>
       <Route exact path ="/" component={HomePage} />
       <Route exact path = "/shop" component={ShopPage} />
     </Switch>
    </Router>
    
    </div>
  );
}

export default App;
