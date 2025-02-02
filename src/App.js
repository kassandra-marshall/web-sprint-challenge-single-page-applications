import React from "react";
import { Route, Link } from 'react-router-dom'
import Home from './Home'
import Form from './Form'
import './App.css'
import pizza from './Pizza.jpg'

const App = () => {
  return (
    <>
    <header className="container">
      <h1>Lambda Eats</h1>
      <Link to="/">Home</Link>
      {/* <img src={pizza}></img> */}
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
