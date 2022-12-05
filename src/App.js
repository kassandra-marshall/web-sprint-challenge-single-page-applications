import React from "react";
import { Route, Link } from 'react-router-dom'
import Home from './Home'
import Form from './Form'

const App = () => {
  return (
    <>
    <header>
      <h1>Lambda Eats</h1>
      <Link to="/">Home</Link>
    </header>
    
      

      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/pizza">
        <Form />
      </Route>
    </>
  );
};
export default App;
