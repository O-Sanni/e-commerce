import React from 'react';
import './App.css';
import HomePage  from './components/homepage/HomePage';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import ShopPage from './components/shop/ShopPage';
import Header from './components/header/Header';
import SignInAndSignUp from './components/sign-in-and-sign-up/SignInAndSingUp';
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";

class App extends React.Component {
  constructor(){
    super();

    this.state={
      currentUser: null
    }
  }

  componentDidMount(){
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
          const userRef=await createUserProfileDocument(userAuth);

          userRef.onSnapshot(snapShot=>{
            this.setState({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            });
          })
      }
      this.setState({
        currentUser: userAuth
      })
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
  return (
    <div className="App">
    <Router>
     <Header currentUser={this.state.currentUser}/>
       <Switch>
       <Route exact path ="/" component={HomePage} />
       <Route exact path = "/shop" component={ShopPage} />
       <Route exact path = "/signin" component={SignInAndSignUp} />
     </Switch>
    </Router>
    
    </div>
  );
  }
}

export default App;
