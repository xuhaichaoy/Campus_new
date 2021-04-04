import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';


import Index from "./page/index/index"
import Detail from "./page/detail/detail"


console.log(Detail)

function App() {
  return (
    <div className="App">
      
      <Switch>
        <Route path="/index" component={Index} />
        <Route path="/detail/:tid" component={Detail} />
      </Switch>
    </div>
  );
}

export default App;
