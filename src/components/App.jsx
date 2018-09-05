import React from 'react';
import Schedule from './Schedule';
import ProduceList from './ProduceList';
import Header from './Header';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
function App(){
  return(
    <div className="container">
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/schedule' component={Schedule} />
        <Route path='/produce' component={ProduceList} />
      </Switch>
    </div>

  );
}

export default App;
