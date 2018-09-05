import React from 'react';

function App(){
  return(
    <div className="jumbotron">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Lobster');
        h1 {
          font-family: 'Lobster', cursive;
          text-align: center;
          font-size: 90px;
        }
        h2 {
          text-align: center;
          font-size: 70px;
        }
      `}</style>
      <h1>Avery's Organics</h1>
      <h2>Farmer's Market Schedule</h2>
    </div>

  );
}

export default App;
