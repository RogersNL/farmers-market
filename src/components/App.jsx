import React from 'react';
import Schedule from './Schedule';
import ProduceList from './ProduceList';
import Header from './Header';
import Home from './Home';
import background from '../assets/images/soyfields.jpg';
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
      <style global jsx>{`
        body {
          background-image: url(${background});
          background-repeat: no-repeat;
          background-size: cover;
        }
      `}</style>
    </div>

  );
}

export default App;
