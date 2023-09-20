import React, { useEffect }from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login'
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function App() {
  const [{ user }, dispatch] = useStateValue();

  // useEffect >>>>>>> POWERFUL
  //Piece of code which runs based on a given condition

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        // the user is logged in...

        dispatch({
          type: "SET_USER",
          user: authUser,
        })
      } else {
        // the user is logged out...
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      // Any cleanup operations go in here...
      unsubscribe();
    }
  }, [])

  console.log("USER IS >>> ", user);

  return (
    <div className="app">
    <Router>
        <Routes>
         <Route path="/" element={
          <>
          <Header />
          <Home />
          </>
        } />
          <Route path="/checkout" element={
          <>
          <Header />
          <Checkout />
          </>
          } 
          />
          <Route path="/LoginPage" element={
          <Login /> }
          />
        </Routes>
      
    </Router>
    </div>
  );
}

{
  /* We NEED React-Router */
}

{
  /* localhost.com/ */
}

{
  /* localhost.com/checkout */
}

{
  /* localhost.com/login */ 
}

export default App;
