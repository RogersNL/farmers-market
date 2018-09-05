import React from 'react';
import Schedule from './Schedule';
import ProduceList from './ProduceList';
import Header from './Header';
function App(){
  return(
    <div className="container">
      <Header/>
      <Schedule/>
      <ProduceList/>
    </div>

  );
}

export default App;
