import React from 'react';
import {Route, Switch} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Search from "./component/search/search"

import Index from "./page/index/index"

function App() {
  return (
    <div className="App">
      <Search/>
      <Switch>
        <Route path="/" component={Index} />
      </Switch>
    </div>
  );
}

export default App;
