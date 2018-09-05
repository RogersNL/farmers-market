import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
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
      <Link to="/">Home</Link> | <Link to="/schedule">Schedule</Link> | <Link to="/produce">Produce</Link>
    </div>

  );
}

export default Header;
