import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';


import Index from "./page/index/index"
import Detail from "./page/detail/detail"
import CircleDetail from "./page/circledetail/circledetail"
import ManageCircle from "./page/managecircle/managecircle.js"
import AllCircle from "./page/allcircle/allcircle"
import Personal from "./page/personal/personal"


console.log(Detail)

function App() {
  return (
    <div className="App">
      
      <Switch>
        <Route path="/index" component={Index} />
        <Route path="/detail/:tid" component={Detail} />
        <Route path="/circledetail/:value" component={CircleDetail} />
        <Route path="/managecircle" component={ManageCircle} />
        <Route path="/allcircle" component={AllCircle} />
        <Route path="/personal" component={Personal} />
      </Switch>
    </div>
  );
}

export default App;
