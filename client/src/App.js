import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import WelcomeSearch from "./pages/WelcomeSearch";
import SavedArticles from "./pages/SavedArticles";
import Navbar from "./components/Navbar";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <div>
        <Route exact path="/" component={WelcomeSearch} />
        <Route exact path="/saved" component={SavedArticles} />
      </div>
    </div>
  </Router>
);


export default App;
